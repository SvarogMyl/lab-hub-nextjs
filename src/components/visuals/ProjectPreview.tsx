"use client";

import React from "react";

interface ProjectPreviewProps {
  kind: string;
  accent?: string;
  accent2?: string;
}

export default function ProjectPreview({ 
  kind, 
  accent = "#22d3ee", 
  accent2 = "#a5b4fc" 
}: ProjectPreviewProps) {
  if (kind.includes("audio")) {
    return (
      <svg viewBox="0 0 320 140" style={{ width: "100%", height: "100%" }}>
        <defs>
          <linearGradient id="wv" x1="0" x2="1"><stop offset="0" stopColor={accent2} /><stop offset="1" stopColor={accent} /></linearGradient>
        </defs>
        {Array.from({ length: 60 }).map((_, i) => {
          const h = Math.abs(Math.sin(i * 0.45) * Math.cos(i * 0.2)) * 50 + 6;
          return (
            <rect key={i} x={i * 5 + 8} y={70 - h / 2} width="3" height={h} fill="url(#wv)" rx="1" />
          );
        })}
        <text x="12" y="18" fill={accent} fontSize="9" fontFamily="var(--font-mono)" opacity="0.7">TRACK_03  · 124 BPM · LATENT-Δ</text>
      </svg>
    );
  }
  
  if (kind.includes("llm") || kind.includes("tooling")) {
    return (
      <svg viewBox="0 0 320 140" style={{ width: "100%", height: "100%" }}>
        {[
          [40, 40], [120, 30], [120, 100], [200, 60], [200, 110], [280, 70],
        ].map(([x, y], i) => (
          <g key={i}>
            <rect x={x - 22} y={y - 10} width="44" height="20" rx="4" fill={`${accent}22`} stroke={accent} strokeWidth="1" />
            <text x={x} y={y + 4} textAnchor="middle" fill={accent} fontSize="9" fontFamily="var(--font-mono)">node.{i}</text>
          </g>
        ))}
      </svg>
    );
  }

  // Generic fallback
  return (
    <svg viewBox="0 0 320 140" style={{ width: "100%", height: "100%" }}>
       <text x="12" y="18" fill={accent} fontSize="9" fontFamily="var(--font-mono)" opacity="0.7">RESEARCH · {kind.toUpperCase()}</text>
       <path d="M10 70 Q 80 10 160 70 T 310 70" fill="none" stroke={accent} strokeWidth="2" opacity="0.3" />
    </svg>
  );
}
