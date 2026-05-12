"use client";

import React, { useState } from "react";

interface HoloCardProps {
  children: React.ReactNode;
  borderGrad?: string;
  padding?: string | number;
  style?: React.CSSProperties;
  onMouseMove?: (e: React.MouseEvent) => void;
  interactive?: boolean;
}

export default function HoloCard({
  children,
  borderGrad,
  padding = 22,
  style = {},
  onMouseMove,
  interactive = true,
}: HoloCardProps) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => interactive && setHov(true)}
      onMouseLeave={() => interactive && setHov(false)}
      onMouseMove={onMouseMove}
      style={{
        padding: 1,
        borderRadius: 22,
        background: borderGrad || `linear-gradient(135deg, rgba(165, 180, 252, 0.2), transparent 50%, rgba(34, 211, 238, 0.2))`,
        transition: "transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .3s",
        transform: interactive && hov ? "translateY(-4px)" : "translateY(0)",
        boxShadow: interactive && hov ? `0 24px 60px rgba(0,0,0,.5), 0 0 0 1px rgba(165, 180, 252, 0.2)` : "none",
        ...style,
      }}
    >
      <div
        style={{
          borderRadius: 21,
          background: "rgba(15, 17, 25, 0.85)",
          backdropFilter: "blur(20px)",
          padding,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </div>
  );
}
