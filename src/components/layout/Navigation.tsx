"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTENT } from "@/constants/content";

export default function Navigation() {
  const { lang, setLang } = useLanguage();
  const c = CONTENT[lang];
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === "es" ? "en" : "es");

  return (
    <header style={{ 
      position: "fixed", top: 12, left: 0, right: 0, zIndex: 100,
      display: "flex", justifyContent: "center", padding: "0 12px",
      pointerEvents: "none", width: "100%"
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 8, pointerEvents: "auto",
        width: "100%", maxWidth: 600, // Constrain on desktop, but full width on mobile
        background: scrolled ? "rgba(8, 9, 15, 0.4)" : "transparent",
        borderRadius: 99, padding: scrolled ? "4px 8px" : "0",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease"
      }}>
        {/* Desktop Logo */}
        <div 
          className="nav-logo"
          style={{ 
            background: "rgba(15, 17, 25, 0.7)", backdropFilter: "blur(20px)",
            border: "1px solid var(--surface-border)", borderRadius: 99,
            padding: "0 20px", height: 40, display: "flex", alignItems: "center",
            fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13,
            letterSpacing: 2, color: "var(--text)", flexShrink: 0
          }}
        >
          LAB<span style={{ color: "var(--cya)", marginLeft: 4 }}>HUB</span>
        </div>

        {/* Scrollable Nav Pill */}
        <nav 
          className="nav-pill no-scrollbar"
          style={{
            display: "flex", gap: 0, padding: 2, position: "relative",
            background: "rgba(15, 17, 25, 0.8)", border: "1px solid var(--surface-border)", 
            borderRadius: 99, backdropFilter: "blur(24px)",
            overflowX: "auto", whiteSpace: "nowrap", WebkitOverflowScrolling: "touch",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            flex: 1, minWidth: 0
          }}
        >
          {c.nav.map((n, i) => (
            <a 
              key={n.id} 
              href={`#${n.id}`}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              style={{
                padding: "8px 14px", borderRadius: 99, textDecoration: "none",
                color: hoverIdx === i ? "var(--bg)" : "var(--text)",
                background: hoverIdx === i ? "var(--grad)" : "transparent",
                fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, 
                cursor: "pointer", transition: "color .25s, background .25s",
                display: "inline-block", flexShrink: 0
              }}
            >{n.label}</a>
          ))}
        </nav>

        {/* Lang Toggle */}
        <button 
          onClick={toggleLang}
          style={{
            width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
            border: "1px solid var(--surface-border)", background: "rgba(15, 17, 25, 0.8)",
            color: "var(--text)", fontFamily: "var(--font-mono)", fontSize: 10,
            cursor: "pointer", backdropFilter: "blur(24px)", display: "flex",
            alignItems: "center", justifyContent: "center", fontWeight: 700,
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
          }}
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>
    </header>
  );
}
