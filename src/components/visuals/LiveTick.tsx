"use client";

import React, { useState, useEffect } from "react";

interface LiveTickProps {
  base: number;
  drift?: number;
  format?: (v: number) => string;
  period?: number;
}

export default function LiveTick({ 
  base, 
  drift = 0.5, 
  format = (v) => v.toFixed(1), 
  period = 1200 
}: LiveTickProps) {
  const [v, setV] = useState(base);
  
  useEffect(() => {
    const t = setInterval(() => {
      setV(prev => Math.max(0, prev + (Math.random() - 0.5) * drift));
    }, period);
    return () => clearInterval(t);
  }, [drift, period]);

  return <>{format(v)}</>;
}
