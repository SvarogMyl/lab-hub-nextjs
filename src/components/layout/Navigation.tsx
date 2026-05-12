"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTENT } from "@/constants/content";

export default function Navigation() {
  const { lang, setLang } = useLanguage();
  const c = CONTENT[lang];
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  const toggleLang = () => setLang(lang === "es" ? "en" : "es");

  return (
    <header style={{ 
      position: "fixed", top: 24, left: 0, right: 0, zIndex: 100,
      display: "flex", justifyContent: "center", padding: "0 var(--side-pad)",
      pointerEvents: "none"
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 8, pointerEvents: "auto",
        maxWidth: "100%", overflow: "hidden"
      }}>
        {/* Desktop Logo */}
        <div 
          className="nav-logo"
          style={{ 
            background: "rgba(15, 17, 25, 0.7)", backdropFilter: "blur(20px)",
            border: "1px solid var(--surface-border)", borderRadius: 99,
            padding: "0 20px", height: 44, display: "flex", alignItems: "center",
            fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14,
            letterSpacing: 2, color: "var(--text)", flexShrink: 0
          }}
        >
          LAB<span style={{ color: "var(--cya)", marginLeft: 4 }}>HUB</span>
        </div>

        {/* Scrollable Nav Pill */}
        <nav 
          className="nav-pill"
          style={{
            display: "flex", gap: 2, padding: 4, position: "relative",
            background: "rgba(15, 17, 25, 0.7)", border: "1px solid var(--surface-border)", 
            borderRadius: 99, backdropFilter: "blur(20px)",
            overflowX: "auto", whiteSpace: "nowrap", scrollbarWidth: "none",
            msOverflowStyle: "none", WebkitOverflowScrolling: "touch"
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
                fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, 
                cursor: "pointer", transition: "color .25s, background .25s",
                display: "inline-block"
              }}
            >{n.label}</a>
          ))}
        </nav>

        {/* Lang Toggle */}
        <button 
          onClick={toggleLang}
          style={{
            width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
            border: "1px solid var(--surface-border)", background: "rgba(15, 17, 25, 0.7)",
            color: "var(--text)", fontFamily: "var(--font-mono)", fontSize: 10,
            cursor: "pointer", backdropFilter: "blur(20px)", display: "flex",
            alignItems: "center", justifyContent: "center", fontWeight: 700
          }}
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>
    </header>
  );
}
