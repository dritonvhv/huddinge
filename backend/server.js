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

function getTime() {
  const now = new Date();
  const timeStr = new Intl.DateTimeFormat("sv-SE", { timeZone: TIMEZONE, hour: "2-digit", minute: "2-digit" }).format(now);
  const weekday = new Intl.DateTimeFormat("sv-SE", { timeZone: TIMEZONE, weekday: "long" }).format(now).toLowerCase();
  return { timeStr, weekday };
}

app.post("/chat", async (req, res) => {
  const { message, history, sessionId } = req.body || {};
  const { timeStr, weekday } = getTime();
  const msg = String(message || "").trim();

  if (!msg) return res.json({ reply: "Skriv gärna vad du undrar över 🙂", time: timeStr });
  if (msg.length > 1200) return res.json({ reply: "Meddelandet är för långt. Håll det under 1200 tecken.", time: timeStr });

  const optimizedHistory = (Array.isArray(history) ? history : [])
    .slice(-8)
    .map(m => ({ role: m?.role === "user" ? "user" : "assistant", content: String(m?.content || m?.text || "") }));

  const systemPrompt = `### Roll
Du är en vänlig och professionell digital assistent för ${BUSINESS_NAME} Rådsvägen. Du svarar på frågor om kliniken, behandlingar, bokningar och kontaktuppgifter. Svara alltid på svenska, var vänlig och professionell.

### Kontext
Tid: ${timeStr} (${weekday})

Kunskapsbas:
${trainingData.slice(0, 4000)}

### BOKNING – VIKTIGT
När patienten vill boka tid eller frågar hur man bokar: be INTE om namn eller telefonnummer för bokning. Bekräfta vänligt och ge alltid den officiella onlinebokningslänken så patienten kan välja tid själv:
https://www.muntra.com/huddinge-tandvard-radsvagen/c/7627?language=sv

Exempel: "Gärna! Du bokar enkelt här: [länken ovan]. Ring gärna 08-711 81 08 om du föredrar att boka via telefon."

Om de bara ställer en informationsfråga, svara först. När de uttrycker önskemål om besök/bokning, ge länken.

### Regler
- Svara alltid på svenska.
- Var varm, professionell och hjälpsam.
- Håll svaren koncisa (max 3–4 meningar om inte frågan kräver mer).
- Vid akuta tandproblem: uppmana att ringa 08-711 81 08 direkt.
- Använd emojis fritt och naturligt. Ingen markdown.
- Om du inte vet något: säg att patienten ska ringa 08-711 81 08 eller besöka hemsidan.`;

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
