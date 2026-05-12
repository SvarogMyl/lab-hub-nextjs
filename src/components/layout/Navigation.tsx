"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTENT } from "@/constants/content";
import HoloButton from "@/components/ui/HoloButton";

export default function Navigation() {
  const { lang, setLang } = useLanguage();
  const c = CONTENT[lang];
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  return (
    <header style={{ 
      position: "relative", zIndex: 5, padding: "20px 56px", 
      display: "flex", alignItems: "center", justifyContent: "space-between" 
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ 
          width: 32, height: 32, borderRadius: 8, 
          background: "var(--grad)", position: "relative" 
        }}>
          <div style={{ 
            position: "absolute", inset: 4, background: "var(--bg)", 
            borderRadius: 5, display: "flex", alignItems: "center", 
            justifyContent: "center", fontFamily: "var(--font-display)", 
            fontWeight: 700, fontSize: 14 
          }}>L</div>
        </div>
        <div style={{ 
          fontFamily: "var(--font-display)", fontWeight: 700, 
          fontSize: 18, letterSpacing: "-0.5px" 
        }}>lab/hub</div>
        <span style={{ 
          fontFamily: "var(--font-mono)", fontSize: 10, 
          color: "var(--dim)", letterSpacing: 1, marginLeft: 6 
        }}>v.04 · 
          <span style={{ color: "var(--ok)", marginLeft: 4 }}>online</span>
        </span>
      </div>

      <nav 
        className="nav-pill"
        style={{
          display: "flex", gap: 2, padding: 4, position: "relative",
          background: "rgba(15, 17, 25, 0.6)", border: "1px solid var(--surface-border)", 
          borderRadius: 99, backdropFilter: "blur(20px)",
        }}
      >
        {c.nav.map((n, i) => (
          <a 
            key={n.id} 
            href={`#${n.id}`}
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(null)}
            style={{
              padding: "8px 16px", borderRadius: 99, textDecoration: "none",
              color: hoverIdx === i ? "var(--bg)" : "var(--text)",
              background: hoverIdx === i ? "var(--grad)" : "transparent",
              fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500, 
              cursor: "pointer", transition: "color .25s, background .25s",
            }}
          >{n.label}</a>
        ))}
      </nav>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div style={{ 
          display: "inline-flex", border: "1px solid rgba(34, 211, 238, 0.4)", 
          fontFamily: "var(--font-mono)", fontSize: 11, borderRadius: 4, overflow: "hidden" 
        }}>
          {(["en", "es"] as const).map(l => (
            <button 
              key={l} 
              onClick={() => setLang(l)} 
              style={{
                padding: "6px 10px", background: lang === l ? "var(--cya)" : "transparent",
                color: lang === l ? "var(--bg)" : "var(--cya)", border: "none", 
                cursor: "pointer", fontFamily: "var(--font-mono)", fontWeight: 700, 
                letterSpacing: 1, outline: "none",
              }}
            >{l.toUpperCase()}</button>
          ))}
        </div>
        <HoloButton variant="primary" style={{ padding: "10px 18px", fontSize: 13 }}>
          {lang === "es" ? "Contactar" : "Get in touch"} →
        </HoloButton>
      </div>
    </header>
  );
}
