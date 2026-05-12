"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HoloCard from "@/components/ui/HoloCard";

export default function CatalogoPage() {
  const { lang } = useLanguage();
  
  const t = lang === "es" ? {
    title: "Catálogo de Medicamentos",
    sub: "Base de datos centralizada de suministros de laboratorio.",
    comingSoon: "Próximamente: Integración con lab-data-service."
  } : {
    title: "Drug Catalog",
    sub: "Centralized laboratory supply database.",
    comingSoon: "Coming soon: lab-data-service integration."
  };

  return (
    <div style={{ width: "100%", minHeight: "100%", position: "relative" }}>
      <Navigation />
      
      <main style={{ padding: "100px 56px", flex: 1 }}>
        <div style={{ marginBottom: 60 }}>
           <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--cya)", letterSpacing: 2, marginBottom: 14 }}>// data_manifest</div>
           <h1 style={{ fontFamily: "var(--font-display)", fontSize: 64, fontWeight: 700, letterSpacing: -2, margin: 0 }}>{t.title}</h1>
           <p style={{ color: "var(--dim)", marginTop: 12, fontSize: 18 }}>{t.sub}</p>
        </div>

        <HoloCard padding={60}>
           <div style={{ textAlign: "center", padding: "100px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>📦</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, marginBottom: 12 }}>{t.comingSoon}</h2>
              <p style={{ color: "var(--dim)", fontFamily: "var(--font-mono)" }}>[ SYSTEM_ID: LAB-DATA-SYNC ]</p>
           </div>
        </HoloCard>
      </main>

      <Footer />
    </div>
  );
}
