"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTENT } from "@/constants/content";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HoloButton from "@/components/ui/HoloButton";
import HoloCard from "@/components/ui/HoloCard";
import RobotViz from "@/components/visuals/RobotViz";
import LiveTick from "@/components/visuals/LiveTick";
import ProjectPreview from "@/components/visuals/ProjectPreview";
import TimelineSpark from "@/components/visuals/TimelineSpark";

export default function Home() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <div style={{ width: "100%", minHeight: "100%", position: "relative" }}>
      <Navigation />

      {/* ===== HERO ===== */}
      <section id="hero" className="section-pad hero-grid" style={{ 
        position: "relative", zIndex: 3, paddingTop: 60, paddingBottom: 60,
        display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 48, 
        alignItems: "center", minHeight: 700 
      }}>
        <div className="hero-content" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ 
            display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 14px", 
            background: "rgba(255,255,255,0.03)", border: "1px solid var(--surface-border)", 
            borderRadius: 99, marginBottom: 24, fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: 2, color: "var(--cya)" 
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cya)", boxShadow: "0 0 10px var(--cya)", animation: "blink 1.5s infinite" }}></span>
            {c.hero.kicker}
          </div>
          <h1 className="hero-title" style={{ 
            fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 84px)", fontWeight: 800, 
            lineHeight: 0.95, letterSpacing: -3, margin: 0 
          }}>
            {c.hero.title.split("\n").map((line, i) => (
              <React.Fragment key={i}>{line}<br/></React.Fragment>
            ))}
          </h1>
          <p style={{ 
            color: "var(--dim)", fontSize: 18, lineHeight: 1.6, 
            maxWidth: 560, marginTop: 28, textWrap: "pretty" 
          }}>{c.hero.sub}</p>
          <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
            <a href="#ecosystem" style={{ textDecoration: "none" }}>
              <HoloButton variant="primary">{c.hero.ctaA} →</HoloButton>
            </a>
            <a href="#roadmap" style={{ textDecoration: "none" }}>
              <HoloButton variant="ghost">{c.hero.ctaB}</HoloButton>
            </a>
          </div>
          {/* Trust strip */}
          <div style={{ marginTop: 56, display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dim)", letterSpacing: 1.5 }}>
              {lang === "es" ? "EN PRODUCCIÓN EN" : "POWERING SHIPPING WORK AT"}
            </div>
            {["polymath", "vector·sys", "edge-detect", "modal", "labhub"].map(t => (
              <span key={t} style={{ 
                fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 600, 
                color: "var(--text)", opacity: 0.55 
              }}>{t}</span>
            ))}
          </div>
        </div>
        
        {/* Hero glass panel — live console preview */}
        <HoloCard borderGrad={`linear-gradient(135deg, rgba(165, 180, 252, 0.3), transparent 30%, transparent 70%, rgba(34, 211, 238, 0.3))`} padding={0}>
          <div style={{ height: 560, position: "relative", overflow: "hidden" }}>
            <div style={{ 
              padding: "16px 22px", display: "flex", alignItems: "center", 
              justifyContent: "space-between", borderBottom: `1px solid var(--surface-border)`, 
              fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dim)", letterSpacing: 1 
            }}>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cya)", boxShadow: `0 0 8px var(--cya)` }} />
                <span style={{ color: "var(--text)" }}>lab.run(wireframe)</span>
              </span>
              <span>p50 <LiveTick base={7.4} drift={1} format={(v) => v.toFixed(1) + "ms"} period={1500} /> · <LiveTick base={284} drift={4} format={(v) => v.toFixed(0)} period={1500} /> tok/s</span>
            </div>
            <div style={{ height: 460, position: "relative" }}>
              <RobotViz mode="wireframe" />
              {/* Corner overlay */}
              <div style={{ position: "absolute", top: 14, left: 14, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--dim)", lineHeight: 1.6 }}>
                <div style={{ color: "var(--cya)" }}>● MODEL · v4-tiny</div>
                <div>params 1.07M · int8</div>
                <div>target wasm32-simd</div>
              </div>
            </div>
            <div style={{ 
              padding: "12px 22px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", 
              gap: 14, borderTop: `1px solid var(--surface-border)`, fontFamily: "var(--font-mono)", fontSize: 11 
            }}>
              {c.lab.meters.map((m: { k: string; v: string; n: string }) => (
                <div key={m.k}>
                  <div style={{ color: "var(--dim)", letterSpacing: 1, fontSize: 9, textTransform: "uppercase" }}>{m.k}</div>
                  <div style={{ color: "var(--lav)", fontWeight: 700, fontSize: 13, marginTop: 2 }}>{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </HoloCard>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section-pad" style={{ position: "relative", zIndex: 3, paddingTop: 100, paddingBottom: 100 }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div className="hero-content">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--vio)", letterSpacing: 2, marginBottom: 14 }}>{c.about.tag}</div>
            <h2 className="section-title" style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 700, letterSpacing: -2, lineHeight: 1, margin: 0 }}>{c.about.title}</h2>
            <p style={{ color: "var(--dim)", fontSize: 16, lineHeight: 1.6, marginTop: 24, textWrap: "pretty" }}>{c.about.body}</p>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 48 }}>
              {c.about.stats.map(s => (
                <div key={s.k}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 42, fontWeight: 700, color: "var(--text)" }}>{s.k}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--dim)", textTransform: "uppercase", letterSpacing: 1 }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual" style={{ height: 400, position: "relative" }}>
            <RobotViz mode="neural" />
          </div>
        </div>
      </section>

      {/* ===== PROJECTS (ECOSYSTEM) ===== */}
      <section id="ecosystem" className="section-pad" style={{ position: "relative", zIndex: 3, paddingTop: 20, paddingBottom: 100 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--cya)", letterSpacing: 2, marginBottom: 14 }}>{c.projects.tag}</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 700, letterSpacing: -2, margin: 0 }}>{c.projects.title}</h2>
            <p style={{ color: "var(--dim)", marginTop: 8 }}>{c.projects.sub}</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))", gap: 18 }}>
          {c.projects.items.map((p, i) => (
            <HoloCard key={p.id} padding={0}>
              <div style={{ padding: 22, display: "flex", flexDirection: "column", minHeight: 450 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dim)", letterSpacing: 1 }}>{p.id} · {p.year}</span>
                  <span style={{ padding: "3px 10px", borderRadius: 99, background: `rgba(34, 211, 238, 0.1)`, color: "var(--cya)", fontSize: 10, fontWeight: 700, fontFamily: "var(--font-mono)", letterSpacing: 1 }}>{p.tag}</span>
                </div>
                <div style={{ 
                  marginTop: 16, height: 160, borderRadius: 14, position: "relative", overflow: "hidden",
                  background: `rgba(255, 255, 255, 0.03)`, border: `1px solid var(--surface-border)`,
                }}>
                  <ProjectPreview kind={p.kind} />
                </div>
                <h3 style={{ marginTop: 20, marginBottom: 6, fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 700, letterSpacing: -0.8 }}>{p.name}</h3>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--dim)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>{p.kind}</div>
                <p style={{ color: "var(--dim)", fontSize: 13.5, lineHeight: 1.55, margin: 0, flex: 1, textWrap: "pretty" }}>{p.desc}</p>
                
                <div style={{ marginTop: 18, paddingTop: 14, borderTop: `1px solid var(--surface-border)`, display: "flex", gap: 12, alignItems: "center" }}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--lav)", fontSize: 12, textDecoration: "none", fontWeight: 500 }}>GitHub</a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ color: "var(--cya)", fontSize: 12, textDecoration: "none", fontWeight: 500 }}>Live Demo</a>
                  )}
                  {p.docs && (
                    <a href={p.docs} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)", fontSize: 12, textDecoration: "none", fontWeight: 500 }}>API Docs</a>
                  )}
                </div>
              </div>
            </HoloCard>
          ))}
        </div>
      </section>

      {/* ===== STACK (INFRASTRUCTURE) ===== */}
      <section id="infrastructure" className="section-pad" style={{ position: "relative", zIndex: 3, paddingTop: 60, paddingBottom: 60 }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--cya)", letterSpacing: 2, marginBottom: 14 }}>{c.stack.tag}</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 700, letterSpacing: -2, margin: 0 }}>{c.stack.title}</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
          {c.stack.groups.map((g, gi) => (
            <HoloCard key={g.label} padding={22}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "var(--lav)", marginBottom: 4 }}>0{gi + 1}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dim)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14 }}>{g.label}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {g.items.map(i => (
                  <span key={i} style={{
                    padding: "5px 10px", borderRadius: 99, fontFamily: "var(--font-mono)", fontSize: 12,
                    background: `rgba(165, 180, 252, 0.1)`, color: "var(--text)", border: `1px solid rgba(165, 180, 252, 0.2)`,
                  }}>{i}</span>
                ))}
              </div>
            </HoloCard>
          ))}
        </div>
      </section>

      {/* ===== TIMELINE (ROADMAP) ===== */}
      <section id="roadmap" className="section-pad" style={{ position: "relative", zIndex: 3, paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--cya)", letterSpacing: 2, marginBottom: 14 }}>{c.timeline.tag}</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 700, letterSpacing: -2, margin: 0 }}>{c.timeline.title}</h2>
        </div>
        <div style={{ borderRadius: 24, overflow: "hidden", border: "1px solid var(--surface-border)", background: "rgba(15, 17, 25, 0.4)", backdropFilter: "blur(20px)" }}>
          {c.timeline.items.map((it, i) => (
            <div key={i} className="roadmap-item" style={{
              padding: "26px 32px", display: "grid", gridTemplateColumns: "100px 140px 1fr 1.2fr 60px", gap: 24,
              alignItems: "center", borderTop: i ? `1px solid var(--surface-border)` : "none",
            }}>
              <div className="roadmap-year" style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, background: "var(--grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{it.year}</div>
              <div style={{ borderRadius: 10, padding: 6, background: `rgba(8, 9, 15, 0.5)`, border: `1px solid var(--surface-border)` }}>
                <TimelineSpark kind={String(i)} accent="#22d3ee" accent2="#a5b4fc" />
              </div>
              <div>
                <div style={{ fontSize: 19, fontWeight: 600 }}>{it.title}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--dim)", marginTop: 4 }}>{it.org}</div>
              </div>
              <div style={{ color: "var(--dim)", fontSize: 14, lineHeight: 1.5 }}>{it.body}</div>
              <div className="roadmap-arrow" style={{ textAlign: "right", color: "var(--lav)", fontFamily: "var(--font-mono)", fontSize: 16 }}>→</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== AI LAB (focal, multi-panel console) ===== */}
      <section className="section-pad" style={{ position: "relative", zIndex: 3, paddingTop: 60, paddingBottom: 100 }}>
        <div style={{
          padding: 1, borderRadius: 32,
          background: `linear-gradient(135deg, rgba(165, 180, 252, 0.4), rgba(124, 58, 237, 0.4), rgba(34, 211, 238, 0.4))`,
        }}>
          <div style={{
            borderRadius: 31, background: `rgba(15, 17, 25, 0.95)`, backdropFilter: "blur(30px)",
            padding: 48, position: "relative", overflow: "hidden",
          }}>
            <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 48, alignItems: "stretch", position: "relative" }}>
              <div className="hero-content" style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--cya)", letterSpacing: 2, marginBottom: 16 }}>// infrastructure_watch</div>
                <h2 className="section-title" style={{ fontFamily: "var(--font-display)", fontSize: 64, fontWeight: 700, letterSpacing: -2.5, lineHeight: 1, margin: 0 }}>System Monitor</h2>
                <p style={{ color: "var(--dim)", fontSize: 16, lineHeight: 1.6, marginTop: 20, maxWidth: 480, textWrap: "pretty" }}>
                  A live control room for our distributed microservices. Monitor latency, throughput, and health status in real-time.
                </p>
                <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                  {[
                    { k: "AVG LATENCY", v: "42ms" },
                    { k: "UPTIME", v: "99.98%" },
                    { k: "THROUGHPUT", v: "1.2k/s" },
                    { k: "ACTIVE NODES", v: "14" },
                  ].map(m => (
                    <div key={m.k} style={{ padding: "14px 16px", borderRadius: 14, background: `rgba(8, 9, 15, 0.6)`, border: `1px solid var(--surface-border)` }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--dim)", letterSpacing: 1.5, textTransform: "uppercase" }}>{m.k}</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 700, marginTop: 4, color: "var(--lav)" }}>{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lab Console */}
              <div className="hero-visual" style={{
                position: "relative", borderRadius: 20, minHeight: 400,
                background: `radial-gradient(ellipse at center, rgba(8, 9, 15, 0.8), rgba(15, 17, 25, 0.9))`,
                border: `1px solid var(--surface-border)`, overflow: "hidden",
              }}>
                <RobotViz mode="neural" />
                <div style={{ position: "absolute", bottom: 20, left: 20, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ok)", zIndex: 10 }}>
                   ● ALL SYSTEMS NOMINAL
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section-pad" style={{ position: "relative", zIndex: 3, paddingTop: 140, paddingBottom: 140, textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--cya)", letterSpacing: 2, marginBottom: 18 }}>// open_channel</div>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(60px, 10vw, 120px)", 
          letterSpacing: -5, lineHeight: 0.92, margin: 0,
          whiteSpace: "pre-line", background: "var(--grad)", WebkitBackgroundClip: "text", 
          backgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>{lang === 'es' ? "Construyamos\njuntos." : "Let's build\ntogether."}</h2>
        <div style={{ marginTop: 36 }}>
          <HoloButton variant="primary" style={{ padding: "20px 36px", fontSize: 15 }}>
            {lang === 'es' ? "Contactar al Lab" : "Contact the Lab"} →
          </HoloButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
