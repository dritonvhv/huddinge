import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChatDemo } from "./ChatDemo";

export const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowGreeting(false), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (isOpen) setShowGreeting(false);
  }, [isOpen]);

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);
    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      const isMobile = window.matchMedia("(max-width: 639px)").matches;
      if (isMobile) {
        const prevBody = { overflow: document.body.style.overflow };
        const prevHtml = { overflow: document.documentElement.style.overflow };
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = prevBody.overflow;
          document.documentElement.style.overflow = prevHtml.overflow;
        };
      }
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={[
          "chat-overlay fixed z-[9999] flex flex-col overflow-hidden rounded-none",
          "inset-0 sm:inset-auto",
          "sm:left-auto sm:right-[30px] sm:top-[16px] sm:bottom-[max(16px,env(safe-area-inset-bottom,16px))] sm:w-[420px] sm:max-w-[420px]",
          "transition-opacity duration-[180ms] ease-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <ChatDemo onClose={() => setIsOpen(false)} />
      </div>

      {!isOpen && (
        <div className="fixed right-4 sm:right-[30px] z-[999999] flex flex-col items-end gap-2" style={{ bottom: "max(16px, env(safe-area-inset-bottom, 16px))" }}>
          <AnimatePresence>
            {showGreeting && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.3 },
                  y: { duration: 0.3 },
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.5, repeat: 1, repeatDelay: 0.2 }
                }}
                exit={{ opacity: 0, y: 4, scale: 0.95 }}
                className="px-4 py-2.5 rounded-2xl bg-white border border-beige-200 shadow-lg text-sm font-medium text-slate-800 whitespace-nowrap"
              >
                Hej, jag kan hjälpa dig! 👋
              </motion.div>
            )}
          </AnimatePresence>
          <button
            className="w-14 h-14 rounded-full bg-black border-2 border-gold-500/30 flex items-center justify-center cursor-pointer overflow-visible transition-transform hover:scale-110 chatPulse"
            onClick={() => setIsOpen(true)}
            aria-label="Öppna chatt"
            title="Chat"
          >
            <svg className="w-7 h-7 fill-gold-500" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </button>
        </div>
      )}

      <style>{`
        .chat-overlay {
          height: 100dvh;
          min-height: 100%;
        }
        @media (min-width: 640px) {
          .chat-overlay {
            height: calc(100dvh - 32px) !important;
            min-height: 500px;
          }
        }
        @keyframes floaty {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(197, 160, 40, 0.45), 0 0 20px rgba(197, 160, 40, 0.25);
          }
          70% {
            box-shadow: 0 0 0 18px rgba(197, 160, 40, 0), 0 0 35px rgba(197, 160, 40, 0.25);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(197, 160, 40, 0), 0 0 20px rgba(197, 160, 40, 0.25);
          }
        }
        .chatPulse {
          animation: pulseGlow 2.4s ease-out infinite;
        }
      `}</style>
    </>
  );
};
