# 📖 OpenSpec: lab-hub-nextjs

## 🎯 Objetivo
Este proyecto sirve como el Portal Central (Hub) del ecosistema de laboratorio. Muestra en tiempo real la infraestructura activa, el roadmap, y un catálogo dinámico de los microservicios y proyectos vivos, consumiendo datos directamente de la API Core.

## 🛠️ Stack Tecnológico
- **Framework**: Next.js (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: CSS Modules / Inline Styles con variables CSS
- **Componentes Visuales**: SVGs interactivos, simuladores de telemetría (LiveTick).
- **Diseño**: "Holo Design System" (Glassmorphism, Dark Theme, Cyperpunk aesthetics).

## 📡 Integración de Datos
- **Fuente de Verdad**: El ecosistema depende del backend `lab-core-node` (`GET /projects`).
- **Respaldo (Fallback)**: Los componentes mantienen un conjunto de datos hardcodeados (`src/constants/content.ts`) para garantizar que la interfaz no colapse si el servicio remoto de Render experimenta un "Cold Start" o latencia inicial.

## 🧱 Componentes Clave
1. `RobotViz`: Gráficos técnicos con múltiples modos (Wireframe, Neural).
2. `LiveTick`: Falsifica/muestra latencias variables (telemetría) para un aspecto técnico "en vivo".
3. `HoloCard` / `HoloButton`: Bloques base del sistema de diseño, con bordes y gradientes translúcidos.

## 🌐 Variables de Entorno
- `NEXT_PUBLIC_CORE_API_URL`: Apunta a la instancia viva de la API (ej: `https://lab-core-node.onrender.com`).
