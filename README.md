# 🧊 Lab Hub: Modular Engineering Portal

A high-performance, centralized dashboard for the **Laboratory Microservice Ecosystem**. This portal acts as the single source of truth for service health, project trajectory, and technical manifest, built on top of the **Holo Design System**.

---

## 🤖 AI Onboarding Guide
> [!IMPORTANT]
> **To any AI agent reading this repo**: This is a Next.js 16 (App Router) project using TypeScript. It implements a custom design system called "Holo".

### Core Architectural Patterns:
- **Design System**: Located in `src/app/globals.css` (tokens) and `src/components/ui/`. It uses Vanilla CSS for performance.
- **Content Strategy**: Multi-language (EN/ES) support is handled by `src/context/LanguageContext.tsx` and centralized in `src/constants/content.ts`.
- **Visuals**: Research-focused components (SVG animations) are in `src/components/visuals/`.

### How to extend this repo:
1. **Update Projects**: Modify `CONTENT.projects.items` in `src/constants/content.ts`.
2. **Add Sections**: Create a new component and add an entry with a corresponding `id` in the `nav` constant.
3. **Theming**: Use the CSS variables defined in `globals.css` (e.g., `var(--cya)`, `var(--lav)`).

---

## 🎨 Holo Design System
This project is built using the **[Holo Template](https://github.com/SvarogMyl/lab-template-holo)**.

### Key Design Tokens:
- **Typography**: 
  - `Syne`: Headlines & Display.
  - `Space Grotesk`: Body & Description.
  - `JetBrains Mono`: UI, Meters, and Code.
- **Glassmorphism**: Achieved via `HoloCard` component using `backdrop-filter: blur(20px)` and semi-transparent gradient borders.

---

## 🧩 Featured Sections

### 1. 🛰️ Ecosystem Monitor
Real-time visualization of the laboratory's active services. Features external links to GitHub, Live Demos, and Swagger documentation.

### 2. 🧠 AI Lab (Telemetry)
A sophisticated control room section using `RobotViz` to demonstrate system metrics, latency probes, and neural inference simulations.

### 3. 📈 Trajectory Roadmap
A visual timeline tracing the project from foundation (Q1 2026) to future ambitions (Blockchain, Rust, Intelligent Agents).

---

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **State/i18n**: React Context API
- **Visuals**: Framer Motion (conceptually) + Vanilla CSS Keyframes + SVG
- **Infrastructure**: Cloudflare Edge Runtime
- **Deployment**: [Cloudflare Pages](docs/deploy-cloudflare.md) (Primary) / Vercel (Backup)

---

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Development Server**:
   ```bash
   npm run dev
   ```

3. **Production Build**:
   ```bash
   npm run build
   ```

---
Built with obsession by **Svarog** at the **Lab Hub**.
