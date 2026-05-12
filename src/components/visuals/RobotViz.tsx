"use client";

import React, { useState, useEffect, useMemo } from "react";

interface RobotVizProps {
  mode?: "wireframe" | "neural" | "ascii";
  accent?: string;
  accent2?: string;
}

export function WireframeRobot({ accent = "#22d3ee", accent2 = "#7c3aed" }) {
  return (
    <div style={{
      position: "relative", width: "100%", height: "100%",
      display: "flex", alignItems: "center", justifyContent: "center",
      perspective: 900,
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", width: 360, height: 360, borderRadius: "50%",
        border: `1px solid ${accent}33`,
        animation: "slow-rotate 24s linear infinite",
        transform: "rotateX(72deg)",
        boxShadow: `0 0 60px ${accent}22 inset`,
      }} />
      <div style={{
        position: "absolute", width: 460, height: 460, borderRadius: "50%",
        border: `1px dashed ${accent2}44`,
        animation: "slow-rotate-rev 38s linear infinite",
        transform: "rotateX(68deg) rotateZ(40deg)",
      }} />
      
      <svg viewBox="0 0 300 360" width="300" style={{ position: "relative", animation: "float-y 6s ease-in-out infinite", filter: `drop-shadow(0 0 24px ${accent}88)` }}>
        <defs>
          <linearGradient id="wf-grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={accent} />
            <stop offset="1" stopColor={accent2} />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#wf-grad)" strokeWidth="1.2">
          <path d="M90 60 L210 60 L230 90 L230 150 L210 180 L90 180 L70 150 L70 90 Z" />
          <circle cx="115" cy="120" r="10" fill={accent} stroke="none" />
          <circle cx="185" cy="120" r="10" fill={accent} stroke="none" />
          <line x1="150" y1="30" x2="150" y2="60" />
          <circle cx="150" cy="22" r="6" fill={accent2} stroke="none" />
          <path d="M60 215 L240 215 L260 260 L260 320 L40 320 L40 260 Z" />
        </g>
      </svg>
      
      <style jsx global>{`
        @keyframes float-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slow-rotate-rev {
          from { transform: rotateX(68deg) rotateZ(360deg); }
          to { transform: rotateX(68deg) rotateZ(0deg); }
        }
      `}</style>
    </div>
  );
}

export function NeuralNetwork({ accent = "#22d3ee", accent2 = "#7c3aed" }) {
  const layers = [5, 7, 7, 5, 3];
  const W = 600, H = 460;
  const colW = W / (layers.length + 1);

  const nodes = useMemo(() => {
    const all: { x: number; y: number; li: number; ni: number }[] = [];
    layers.forEach((count, li) => {
      const x = colW * (li + 1);
      const colH = H - 60;
      const gap = colH / (count + 1);
      for (let i = 0; i < count; i++) {
        all.push({ x, y: 30 + gap * (i + 1), li, ni: i });
      }
    });
    return all;
  }, [colW, H]);

  const edges = useMemo(() => {
    const e: { x1: number; y1: number; x2: number; y2: number; k: number }[] = [];
    for (let li = 0; li < layers.length - 1; li++) {
      const a = nodes.filter(n => n.li === li);
      const b = nodes.filter(n => n.li === li + 1);
      a.forEach(na => b.forEach(nb => e.push({ x1: na.x, y1: na.y, x2: nb.x, y2: nb.y, k: Math.random() })));
    }
    return e;
  }, [nodes]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 720, filter: `drop-shadow(0 0 30px ${accent}55)` }}>
        {edges.map((e, i) => (
          <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
            stroke={e.k > 0.6 ? accent : `${accent}22`} strokeWidth={e.k > 0.85 ? 1.2 : 0.5} opacity={0.6} />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="4" fill={n.li === 0 || n.li === layers.length - 1 ? accent2 : accent} />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function AsciiRobot({ accent = "#34d399" }) {
  const frames = [
    `    ╔══[ ◉  ◉ ]══╗\n    ║    ▽▽▽    ║\n    ╚══════════╝\n      │ ▓▓▓▓ │\n   ┌──┴──────┴──┐\n   │  ░▒▓██▓▒░  │\n   │   [PWR]    │\n   └────────────┘\n      │      │\n      ╧      ╧`,
    `    ╔══[ ●  ● ]══╗\n    ║    ▽▼▽    ║\n    ╚══════════╝\n      │ ▒▒▒▒ │\n   ┌──┴──────┴──┐\n   │  ▒▓██▓▒▓░  │\n   │   [RUN]    │\n   └────────────┘\n      │      │\n      ╧      ╧`,
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(v => 1 - v), 600);
    return () => clearInterval(t);
  }, []);
  return (
    <pre style={{
      fontFamily: "var(--font-mono)", fontSize: 18, lineHeight: 1.25,
      color: accent, textShadow: `0 0 12px ${accent}`, margin: 0,
    }}>{frames[i]}</pre>
  );
}

export default function RobotViz({ mode = "wireframe", accent, accent2 }: RobotVizProps) {
  if (mode === "neural") return <NeuralNetwork accent={accent} accent2={accent2} />;
  if (mode === "ascii") return <AsciiRobot accent={accent} />;
  return <WireframeRobot accent={accent} accent2={accent2} />;
}
