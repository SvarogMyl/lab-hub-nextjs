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

- `NEXT_PUBLIC_CORE_API_URL`: Apunta a la instancia viva de la API.
  > [!IMPORTANT]
  > Las variables `NEXT_PUBLIC_` en Next.js se inyectan en el cliente durante el **Build Time**. Si se cambian en el panel de Cloudflare, se requiere un redeploy manual del proyecto para que los cambios surtan efecto en el navegador.

## 🧠 Hallazgos y Soluciones
1. **Variables de Entorno en Cloudflare**: 
   - *Hallazgo*: Cambiar una variable en el panel no afecta al sitio vivo de inmediato. 
   - *Solución*: Implementar un fallback en el código (`apiUrl || 'https://...'`) y disparar un redeploy manual después de configurar la variable.
2. **Resiliencia a Errores de API**: 
   - *Hallazgo*: El navegador puede devolver errores 500 temporales durante despliegues de backend.
   - *Solución*: Uso de bloques `try-catch` en `useEffect` que regresan automáticamente a la data estática de `content.ts` si la red falla.

---

## 🔮 Mejoras Pendientes (Future Lab)
1. **Paginación y Filtros**: Implementar búsqueda dinámica desde el backend para el catálogo de proyectos.
2. **Auth Flow Completo**: Conectar el `Chatbot` con la API de login para permitir la administración de proyectos desde el propio portal.
3. **Automatización**: Configurar `wrangler` con un token de API para permitir despliegues desde terminal/CI.
