import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Lab Hub | Research & Development",
  description: "Advanced laboratory portal and microservice ecosystem.",
};

import { LanguageProvider } from "@/context/LanguageContext";

import Chatbot from "@/components/chat/Chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen flex flex-col relative bg-[#08090f] text-[#eaeaf2] overflow-x-hidden`}>
        {/* Ambient gradient blobs */}
        <div style={{ position: "fixed", top: -200, left: "20%", width: 700, height: 700, borderRadius: "50%", background: `radial-gradient(circle, rgba(165, 180, 252, 0.35), transparent 65%)`, filter: "blur(80px)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "fixed", top: "40vh", right: -200, width: 800, height: 800, borderRadius: "50%", background: `radial-gradient(circle, rgba(34, 211, 238, 0.2), transparent 65%)`, filter: "blur(80px)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "fixed", bottom: -200, left: -200, width: 800, height: 800, borderRadius: "50%", background: `radial-gradient(circle, rgba(240, 171, 252, 0.2), transparent 65%)`, filter: "blur(80px)", pointerEvents: "none", zIndex: 0 }} />

        {/* Very subtle grid */}
        <div style={{ 
          position: "fixed", inset: 0, opacity: 0.15, pointerEvents: "none", zIndex: 1,
          backgroundImage: `linear-gradient(rgba(234, 234, 242, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(234, 234, 242, 0.05) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

        <LanguageProvider>
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
          <Chatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}
