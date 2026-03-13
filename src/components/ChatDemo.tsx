import React, { useEffect, useMemo, useRef, useState } from "react";

type Role = "user" | "model";

type UiMessage = {
  role: Role;
  text: string;
  time?: string;
};

type BackendHistoryMsg = {
  role: "user" | "model";
  content: string;
};

const API_BASE = import.meta.env.VITE_API_URL || "";

const CHAT_URL = API_BASE ? `${API_BASE}/chat` : "/api/chat";

function hhmmNow() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

export const ChatDemo: React.FC<{ initialOpenGreeting?: string; onClose?: () => void }> = ({
  initialOpenGreeting,
  onClose,
}) => {
  const [messages, setMessages] = useState<UiMessage[]>([
    {
      role: "model",
      text:
        initialOpenGreeting ??
        "Hej! 👋 Jag är Huddinge Tandvårds digitala assistent. Jag kan hjälpa dig med frågor om våra behandlingar, priser eller bokningar. Vad undrar du över?",
      time: hhmmNow(),
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const sessionId = useMemo(() => {
    const key = "huddinge_tandvard_session_id";
    const existing = window.localStorage.getItem(key);
    if (existing) return existing;
    const sid = `sid_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    window.localStorage.setItem(key, sid);
    return sid;
  }, []);

  const backendHistory = useMemo<BackendHistoryMsg[]>(() => {
    const trimmed = messages.slice(-12);
    return trimmed.map((m) => ({
      role: m.role,
      content: m.text,
    }));
  }, [messages]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setLoading(true);

    setMessages((prev) => [
      ...prev,
      { role: "user", text, time: hhmmNow() },
    ]);

    try {
      const res = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: backendHistory,
          sessionId,
        }),
      });

      const data = await res.json().catch(() => ({} as Record<string, string>));

      const replyText =
        (data?.reply as string) ||
        (data?.error as string) ||
        "Jag fick inget svar från servern.";

      const time = (data?.time as string) || hhmmNow();

      setMessages((prev) => [
        ...prev,
        { role: "model", text: replyText, time },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Chatten är offline just nu. Ring oss gärna på 08-711 81 08 eller boka via vår hemsida.",
          time: hhmmNow(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    void send();
  }

  return (
    <div className="chat-demo-root h-full w-full min-w-0 flex flex-col overflow-hidden bg-beige-50 border border-beige-200 shadow-2xl rounded-none">
      <div className="chat-header bg-beige-100 px-4 py-3 md:px-5 md:py-4 border-b border-beige-200 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-full border-2 border-gold-500 flex items-center justify-center shrink-0">
            <span className="text-gold-500 font-serif text-lg font-bold">H</span>
          </div>
          <div>
            <p className="text-slate-800 font-bold text-sm">Huddinge Tandvård</p>
            <p className="text-gold-600 text-[10px] uppercase tracking-widest font-bold">AI-Assistent</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:bg-beige-200 hover:text-slate-800 transition-colors"
            aria-label="Stäng"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        )}
      </div>

      <div
        ref={scrollRef}
        className="chat-body flex-1 min-h-0 px-3 py-4 md:px-5 md:py-5 overflow-y-auto overflow-x-hidden flex flex-col gap-4 overscroll-contain bg-beige-50"
      >
        {messages.map((m, i) => {
          const isUser = m.role === "user";
          return (
            <div
              key={i}
              className={[
                "chat-bubble max-w-[90%] md:max-w-[75%] px-4 py-3 rounded-[16px] text-[13px] md:text-[14px] leading-relaxed relative break-words",
                isUser
                  ? "self-end bg-gold-600 text-white"
                  : "self-start bg-white text-slate-700 border border-beige-200 shadow-sm",
              ].join(" ")}
            >
              {m.text}
              <span className="flex items-center justify-end gap-1 mt-1 text-[10px] opacity-70">
                {m.time && (
                  <>
                    <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {m.time}
                  </>
                )}
              </span>
            </div>
          );
        })}

        {loading && (
          <div className="chat-bubble max-w-[90%] md:max-w-[75%] self-start px-4 py-3 rounded-[16px] text-[13px] md:text-[14px] bg-white border border-beige-200 shadow-sm flex items-center gap-1">
            <span className="typing-dot" />
            <span className="typing-dot typing-dot-2" />
            <span className="typing-dot typing-dot-3" />
          </div>
        )}
      </div>

      <div
        className="chat-footer sticky bottom-0 px-3 py-3 md:px-4 md:py-4 bg-beige-100 border-t border-beige-200 shrink-0 w-full min-w-0"
        style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <form onSubmit={onSubmit} className="w-full min-w-0">
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-beige-200 shadow-sm w-full min-w-0">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Skriv din fråga här..."
              className="flex-1 min-w-0 w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-[13px] md:text-sm px-2"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void send();
                }
              }}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-8 h-8 min-w-[32px] shrink-0 rounded-full bg-gold-600 text-white grid place-items-center disabled:opacity-50 hover:bg-gold-500 transition-colors"
              aria-label="Skicka"
              title="Skicka"
            >
              ➤
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .chat-demo-root { max-width: 100%; overflow-x: hidden; }
        .chat-bubble { word-wrap: break-word; overflow-wrap: break-word; word-break: break-word; }
        .chat-body { -webkit-overflow-scrolling: touch; }
        @keyframes typing-bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
        .typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #a67f1e;
          animation: typing-bounce 1.4s ease-in-out infinite;
        }
        .typing-dot-2 { animation-delay: 0.2s; }
        .typing-dot-3 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
};
