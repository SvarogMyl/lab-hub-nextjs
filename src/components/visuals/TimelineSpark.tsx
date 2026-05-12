"use client";

import React from "react";

interface TimelineSparkProps {
  kind: string;
  accent: string;
  accent2: string;
}

export default function TimelineSpark({ kind, accent, accent2 }: TimelineSparkProps) {
  return (
    <svg viewBox="0 0 120 60" style={{ width: 120, height: 60 }}>
      <defs>
        <linearGradient id={`tl-${kind}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={accent} stopOpacity="0.4" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      {kind === "0" && (
        <>
          <polyline points={Array.from({ length: 16 }, (_, i) => `${i * 8},${30 + Math.cos(i * 0.5) * 14 + (i > 12 ? -6 : 0)}`).join(" ")} fill="none" stroke={accent} strokeWidth="1.4" />
          <text x="6" y="14" fill={accent} fontSize="8" fontFamily="var(--font-mono)">founding</text>
        </>
      )}
      {kind === "1" && (
        <>
          {[10, 22, 14, 28, 20, 32, 26, 38].map((h, i) => (
            <rect key={i} x={i * 14 + 6} y={50 - h} width="10" height={h} fill={accent} opacity={0.4 + i * 0.06} rx="1" />
          ))}
          <text x="6" y="14" fill={accent} fontSize="8" fontFamily="var(--font-mono)">shipped/qtr</text>
        </>
      )}
      {kind === "2" && (
        <>
          <circle cx="30" cy="30" r="14" fill="none" stroke={accent} strokeWidth="1.2" />
          <circle cx="60" cy="30" r="14" fill="none" stroke={accent2} strokeWidth="1.2" />
          <circle cx="90" cy="30" r="14" fill="none" stroke={accent} strokeWidth="1.2" />
          <text x="6" y="14" fill={accent} fontSize="8" fontFamily="var(--font-mono)">realtime · ws</text>
        </>
      )}
      {kind === "3" && (
        <>
          <path d={`M 10 50 Q 30 20 60 30 T 110 15`} fill={`url(#tl-${kind})`} stroke={accent} strokeWidth="1.2" />
          <text x="6" y="14" fill={accent} fontSize="8" fontFamily="var(--font-mono)">oss · stars</text>
        </>
      )}
      {kind === "4" && (
        <>
          <text x="60" y="38" textAnchor="middle" fill={accent} fontSize="18" fontFamily="var(--font-display)" fontWeight="700">B.Sc.</text>
          <text x="6" y="14" fill={accent} fontSize="8" fontFamily="var(--font-mono)">thesis · ml</text>
        </>
      )}
    </svg>
  );
}
