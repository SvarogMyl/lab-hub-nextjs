"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTENT } from "@/constants/content";

export default function Chatbot() {
  const { lang } = useLanguage();
  const t = CONTENT[lang].bot;
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ from: "bot", text: t.greeting }]);
  const [val, setVal] = useState("");

  useEffect(() => {
    setMsgs([{ from: "bot", text: t.greeting }]);
  }, [lang, t.greeting]);

  const send = (q?: string) => {
    const trimmed = (q || val).trim();
    if (!trimmed) return;
    
    setMsgs(m => [...m, { from: "user", text: trimmed }]);
    setVal("");
    
    setTimeout(() => {
      const answer = t.answers[trimmed as keyof typeof t.answers] || (lang === "es"
        ? "Mock: Solo respondo a las sugerencias de arriba por ahora."
        : "Mock: I only respond to the suggestions above for now.");
      setMsgs(m => [...m, { from: "bot", text: answer }]);
    }, 450);
  };

  return (
    <>
      {!open && (
        <button 
          onClick={() => setOpen(true)} 
          style={{
            position: "fixed", right: 0, top: "50%", transform: "translateY(-50%)",
            padding: "20px 10px", writingMode: "vertical-rl", letterSpacing: 4, fontWeight: 700,
            background: "var(--grad)", color: "var(--bg)",
            border: "none", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: 11,
            zIndex: 100, borderRadius: "12px 0 0 12px", boxShadow: "-10px 0 30px rgba(0,0,0,0.5)"
          }}
        >
          ASK · LAB ▸
        </button>
      )}
      
      {open && (
        <div style={{
          position: "fixed", right: 0, top: 0, bottom: 0, width: "clamp(320px, 30vw, 420px)",
          background: "rgba(15, 17, 25, 0.95)", borderLeft: "1px solid var(--surface-border)",
          display: "flex", flexDirection: "column", zIndex: 101,
          backdropFilter: "blur(20px)", boxShadow: "-20px 0 60px rgba(0,0,0,0.8)"
        }}>
          {/* Header */}
          <div style={{ 
            display: "flex", alignItems: "center", justifyContent: "space-between", 
            padding: "20px", borderBottom: "1px solid var(--surface-border)" 
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--cya)", boxShadow: "0 0 10px var(--cya)" }} />
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700 }}>{t.title}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--dim)", marginTop: 2 }}>{t.sub}</div>
              </div>
            </div>
            <button 
              onClick={() => setOpen(false)} 
              style={{ background: "transparent", border: "none", color: "var(--dim)", cursor: "pointer", fontSize: 24 }}
            >×</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "20px", display: "flex", flexDirection: "column", gap: 16 }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "85%", padding: "12px 16px", borderRadius: 12,
                  background: m.from === "bot" ? "rgba(165, 180, 252, 0.1)" : "rgba(124, 58, 237, 0.2)",
                  border: `1px solid ${m.from === "bot" ? "rgba(165, 180, 252, 0.3)" : "rgba(124, 58, 237, 0.3)"}`,
                  color: "var(--text)", fontSize: 14, lineHeight: 1.5
                }}>
                  {m.from === "bot" && <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--cya)", letterSpacing: 1, marginBottom: 6 }}>LAB::ASSIST</div>}
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          <div style={{ padding: "0 20px 10px", display: "flex", flexWrap: "wrap", gap: 6 }}>
            {t.suggestions.map(s => (
              <button 
                key={s} 
                onClick={() => send(s)} 
                style={{
                  background: "transparent", color: "var(--text)", border: "1px solid var(--surface-border)",
                  padding: "6px 12px", borderRadius: 99, fontFamily: "var(--font-mono)", fontSize: 11, cursor: "pointer"
                }}
              >{s}</button>
            ))}
          </div>

          {/* Input */}
          <form 
            onSubmit={(e) => { e.preventDefault(); send(); }} 
            style={{ display: "flex", borderTop: "1px solid var(--surface-border)", padding: "10px" }}
          >
            <input 
              value={val} 
              onChange={(e) => setVal(e.target.value)} 
              placeholder={t.placeholder} 
              style={{ 
                flex: 1, background: "transparent", border: "none", color: "var(--text)", 
                padding: "12px 16px", fontFamily: "var(--font-body)", fontSize: 14, outline: "none" 
              }} 
            />
            <button 
              type="submit" 
              style={{ 
                background: "var(--grad)", color: "var(--bg)", border: "none", 
                padding: "0 20px", borderRadius: 8, fontWeight: 700, cursor: "pointer" 
              }}
            >↵</button>
          </form>
        </div>
      )}
    </>
  );
}
