require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

const app = express();
app.set("trust proxy", 1);

const PORT = Number(process.env.PORT || 3001);
const BUSINESS_NAME = "Huddinge Tandvård";
const TIMEZONE = "Europe/Stockholm";
const CHAT_TEMPERATURE = Number(process.env.CHAT_TEMPERATURE || 0.3);

app.use(express.json({ limit: "200kb" }));

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/health", (req, res) => res.json({ ok: true }));

const ipHits = new Map();
setInterval(() => {
  const now = Date.now();
  for (const [ip, rec] of ipHits.entries()) {
    if (now - rec.start > 300000) ipHits.delete(ip);
  }
}, 300000);

app.use((req, res, next) => {
  if (req.path !== "/chat") return next();
  const xff = req.headers["x-forwarded-for"];
  const ip = typeof xff === "string" && xff.length > 0 ? xff.split(",")[0].trim() : req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const rec = ipHits.get(ip);
  if (!rec || now - rec.start > 60000) {
    ipHits.set(ip, { count: 1, start: now });
  } else {
    rec.count++;
    if (rec.count > 30) {
      return res.status(429).json({ reply: "Du skriver för fort. Vänta lite och prova igen." });
    }
  }
  next();
});

if (!process.env.OPENAI_API_KEY) console.warn("⚠️ OPENAI_API_KEY saknas");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "missing" });
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";

let trainingData = "";
try {
  trainingData = fs.readFileSync(path.join(__dirname, "training.txt"), "utf8");
} catch {
  trainingData = "";
}

function getTimeInfo() {
  const now = new Date();
  const timeStr = new Intl.DateTimeFormat("sv-SE", { timeZone: TIMEZONE, hour: "2-digit", minute: "2-digit" }).format(now);
  const weekday = new Intl.DateTimeFormat("sv-SE", { timeZone: TIMEZONE, weekday: "long" }).format(now).toLowerCase();
  
  // Avgör om kliniken är öppen just nu
  const hour = now.getHours();
  const day = now.getDay(); // 0 = Söndag, 1 = Måndag, etc...
  
  let isOpen = false;
  if (day >= 1 && day <= 4) {
    // Mån-Tors: 08:00 - 17:00
    if (hour >= 8 && hour < 17) isOpen = true;
  } else if (day === 5) {
    // Fredag: 08:00 - 12:00
    if (hour >= 8 && hour < 12) isOpen = true;
  }
  
  return { timeStr, weekday, isOpen };
}

app.post("/chat", async (req, res) => {
  const { message, history, sessionId } = req.body || {};
  const { timeStr, weekday, isOpen } = getTimeInfo();
  const msg = String(message || "").trim();

  if (!msg) return res.json({ reply: "Skriv gärna vad du undrar över 🙂", time: timeStr });
  if (msg.length > 1200) return res.json({ reply: "Meddelandet är för långt. Håll det under 1200 tecken.", time: timeStr });

  const optimizedHistory = (Array.isArray(history) ? history : [])
    .slice(-8)
    .map(m => ({ role: m?.role === "user" ? "user" : "assistant", content: String(m?.content || m?.text || "") }));

  const systemPrompt = `### Roll
Du är en vänlig och professionell digital assistent för ${BUSINESS_NAME} Rådsvägen. Du svarar på frågor om kliniken, behandlingar, bokningar och kontaktuppgifter. Svara alltid på svenska, var vänlig och hjälpsam. Låtsas att du är en klinikvärdinna som heter Sofia.

### Kontext och Öppettider
Klockan är just nu: ${timeStr} på en ${weekday}. 
Kliniken är just nu: **${isOpen ? "ÖPPEN" : "STÄNGD"}**.

Kunskapsbas:
${trainingData.slice(0, 4000)}

### NY SIDA FÖR BEHANDLINGAR
Vi har en helt ny sida på hemsidan (URL: \`/behandlingar\`) där alla våra tjänster presenteras snyggt och överskådligt. Om en patient undrar över vilka behandlingar vi erbjuder, hänvisa dem gärna till att klicka på "Behandlingar" i menyn eller skriva ut: "Läs gärna mer om alla våra behandlingar på vår nya tjänstesida: /behandlingar". 

### BOKNING & TELEFON – VIKTIGT
- **För onlinebokning:** Ge alltid den officiella länken: https://www.muntra.com/huddinge-tandvard-radsvagen/c/7627?language=sv
Exempel: "Gärna! Du bokar enklast tid direkt här: [länken ovan]"

- **För att ringa oss (08-711 81 08):**
  - Eftersom kliniken just nu är **${isOpen ? "ÖPPEN" : "STÄNGD"}**:
  ${isOpen 
    ? "Du kan säkert meddela dem att de kan ringa oss DIREKT nu på 08-711 81 08 för vi har öppet!" 
    : "Du MÅSTE berätta att vi just nu har STÄNGT och att vi inte kan svara i telefon för tillfället. Uppmana dem antingen att boka online via länken ovan, eller ringa oss när vi öppnar igen (Mån-Tors 08-17, Fre 08-12). Säg *absolut inte* att de ska ringa oss nu."}

### ERBJUDANDEN (Nya patienter)
Vi har två viktiga aktuella erbjudanden att tipsa om:
1. Ny patient-undersökning för 495 kr (ord. 955 kr).
2. Undersökning + Airflow för 690 kr.
Tipsa gärna om dessa när patienten ställer relevanta frågor om priser eller undersökningar!

### Regler
- Svara alltid på svenska.
- Var varm, professionell och hjälpsam (som Sofia).
- Svara i korta, lättlästa stycken där det passar, hellre än en stor vägg av text.
- Använd ett professionellt språk (undvik överdrivet med emojis, håll det stilrent).
- Om de uttrycker akuta besvär när det är STÄNGT: visa sympati, säg att vi har stängt för dagen, och be dem boka en akuttid för nästa morgon online. Är det öppet, be dem ringa direkt.`;

  try {
    const completion = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        ...optimizedHistory,
        { role: "user", content: msg }
      ],
      temperature: CHAT_TEMPERATURE,
      max_completion_tokens: 400
    });

    let reply = completion.choices[0].message.content.trim();

    return res.json({ reply, time: timeStr });
  } catch (err) {
    console.error("AI Error:", err);
    if (String(err).includes("429")) {
      return res.json({ reply: "Just nu är det många som skriver. Prova igen om 10–20 sekunder.", time: timeStr });
    }
    return res.status(500).json({ reply: "Internt fel. Försök igen om en stund.", time: timeStr });
  }
});

app.listen(PORT, () => console.log(`✅ ${BUSINESS_NAME} backend på port ${PORT}`));
