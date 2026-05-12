"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LiveTick from "@/components/visuals/LiveTick";

export default function Footer() {
  const { lang } = useLanguage();
  const [deployMin, setDeployMin] = useState(7);
  
  useEffect(() => {
    const t = setInterval(() => setDeployMin(v => v + 1), 60000);
    return () => clearInterval(t);
  }, []);

  const t = lang === "es" ? {
    status: "Sistemas",
    rights: "Construido con obsesión en Madrid · MMXXVI",
    operational: "operativo",
    lastDeploy: "Último deploy"
  } : {
    status: "Systems",
    rights: "Built with obsession in Madrid · MMXXVI",
    operational: "operational",
    lastDeploy: "Last deploy"
  };

  return (
    <footer style={{
      position: "relative", zIndex: 3, marginTop: "auto",
      padding: "60px 56px 30px", borderTop: "1px solid var(--surface-border)",
      background: "linear-gradient(180deg, transparent, rgba(15, 17, 25, 0.5))",
      backdropFilter: "blur(20px)",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--grad)", position: "relative" }}>
               <div style={{ position: "absolute", inset: 4, background: "var(--bg)", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16 }}>L</div>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22 }}>lab/hub</div>
          </div>
          <div style={{ marginTop: 22, display: "flex", gap: 10, alignItems: "center", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dim)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--ok)", boxShadow: `0 0 10px var(--ok)`, animation: "glow-pulse 2s ease-in-out infinite" }} />
            <span>{t.status}: <span style={{ color: "var(--ok)" }}>{t.operational}</span></span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>{t.lastDeploy} <span style={{ color: "var(--text)" }}>{deployMin}m</span></span>
          </div>
        </div>
      </div>

      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(60px, 15vw, 220px)", 
        letterSpacing: "-0.04em", lineHeight: 0.85, background: "var(--grad)", 
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        opacity: 0.2, textAlign: "center", margin: "40px 0 -20px", userSelect: "none"
      }}>lab/hub</div>

      <div style={{ 
        display: "flex", justifyContent: "space-between", paddingTop: 24, 
        borderTop: "1px solid var(--surface-border)", fontFamily: "var(--font-mono)", 
        fontSize: 11, color: "var(--dim)", letterSpacing: 1 
      }}>
        <span>© 2026 · {t.rights}</span>
        <span style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span>lat 40.4168 · lon -3.7038</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span><LiveTick base={42} drift={2} format={(v) => v.toFixed(0) + "fps"} period={2000} /></span>
        </span>
      </div>
    </footer>
  );
}
