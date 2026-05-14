export const CONTENT = {
  en: {
    nav: [
      { label: "Home", id: "hero" },
      { label: "Ecosystem", id: "ecosystem" },
      { label: "Infrastructure", id: "infrastructure" },
      { label: "Roadmap", id: "roadmap" },
      { label: "Contact", id: "contact" }
    ],
    hero: {
      kicker: "v.04 // LAB HUB",
      title: "Modular Engineering\nLaboratory",
      sub: "Dynamic visualization of the microservice ecosystem and automated pipelines. Built with high performance and modularity in mind.",
      ctaA: "Explore Projects",
      ctaB: "View Roadmap",
    },
    about: {
      tag: "// core_mission",
      title: "Building the future\nof lab systems.",
      body: "Our laboratory focuses on creating high-availability microservices and intelligent agents. From high-performance Java backends to lightning-fast Go services, we are building a distributed ecosystem that scales effortlessly.",
      stats: [
        { k: "07", v: "active repos" },
        { k: "04", v: "languages" },
        { k: "100%", v: "automated" },
        { k: "∞", v: "potential" },
      ],
    },
    projects: {
      tag: "// current_ecosystem",
      title: "Ecosystem Projects",
      sub: "Active services and pipelines in production.",
      items: [
        { 
          id: "01", name: "Lab Hub (Next.js)", kind: "next.js · cloudflare", year: "2026", 
          desc: "Drug catalog and item management dashboard with premium aesthetics and optimized UX.", 
          tag: "LIVE",
          github: "https://github.com/SvarogMyl/lab-hub-nextjs",
          live: "https://lab-hub-nextjs.yannickvalderasm.workers.dev/"
        },
        { 
          id: "02", name: "Backend Core", kind: "java · spring", year: "2026", 
          desc: "Main service handling item management and catalog. Connected to Supabase and PostgreSQL.", 
          tag: "LIVE",
          github: "https://github.com/SvarogMyl/lab-spring-postgres",
          live: "https://lab-spring-postgres.onrender.com/health",
          docs: "https://lab-spring-postgres.onrender.com/swagger-ui/index.html"
        },
        { 
          id: "03", name: "Lab Monitor", kind: "node.js · express", year: "2026", 
          desc: "Ecosystem watchdog. Performs periodic health-checks and keeps services awake.", 
          tag: "LIVE",
          github: "https://github.com/SvarogMyl/lab-monitor-service",
          live: "https://lab-monitor-service.onrender.com/"
        },
        { 
          id: "04", name: "Holo Template", kind: "next.js · oss", year: "2026", 
          desc: "Reusable template based on the Holo Design System. Built-in multi-language, glassmorphism, and research components.", 
          tag: "OSS",
          github: "https://github.com/SvarogMyl/lab-template-holo"
        },
        { 
          id: "05", name: "Lab Hub (React)", kind: "react · vite", year: "2026", 
          desc: "The legacy version of the portal. Useful for feature parity checks and historical reference.", 
          tag: "LEGACY",
          github: "https://github.com/SvarogMyl/lab-hub-react",
          live: "https://lab-hub-react.vercel.app/"
        },
        { 
          id: "06", name: "Data Service", kind: "python · pandas", year: "2026", 
          desc: "Automated pipeline syncing data from Master Excel to JSON for the catalog.", 
          tag: "LIVE",
          github: "https://github.com/SvarogMyl/lab-data-service"
        },
        { 
          id: "07", name: "Auth Service", kind: "go · gin", year: "2026", 
          desc: "High-availability microservice for identity and permission management.", 
          tag: "PENDING"
        },
      ],
    },
    stack: {
      tag: "// tech_manifest",
      title: "The Stack",
      groups: [
        { label: "cloud providers", items: ["Cloudflare", "Render", "Vercel", "Supabase", "AWS"] },
        { label: "core languages", items: ["Java 21", "Node.js 20", "Go 1.22", "Python 3.10", "TypeScript"] },
        { label: "storage", items: ["PostgreSQL", "Redis", "DuckDB"] },
        { label: "devops", items: ["Docker", "GitHub Actions", "Terraform"] },
      ],
    },
    lab: {
      tag: "// ai_lab",
      title: "The AI Lab",
      sub: "A live, slightly-haunted control room. The model below isn't a stock photo — it's a 6-layer attention probe running in your browser.",
      bullets: [
        "On-device inference, no round-trips.",
        "Streaming tokens with millisecond timing telemetry.",
        "Replayable agent transcripts, fully diff-able.",
        "Tools-first: every action is a typed function call.",
      ],
      meters: [
        { k: "latency", v: "07.4ms", n: "p50 token" },
        { k: "tokens/s", v: "284", n: "single GPU" },
        { k: "ctx", v: "131k", n: "rolling" },
        { k: "uptime", v: "99.97", n: "30 day" },
      ],
    },
    timeline: {
      tag: "// evolution",
      title: "Roadmap",
      items: [
        { year: "Q1 2026", title: "Foundation", org: "Spring Boot · Supabase", body: "Base structure and initial deployment on Render." },
        { year: "Q2 2026", title: "Observability", org: "Node.js · Express", body: "Implementation of the Monitor Service and real-time health dashboard." },
        { year: "NOW", title: "Performance & Hub", org: "Go · Next.js", body: "Migration of critical services to Go and creation of the Centralized Hub." },
        { year: "Q4 2026", title: "Intelligent Ecosystem", org: "LLM · Agents", body: "Integration of smart agents for predictive analysis and semantic search." },
        { year: "2027", title: "Global Scale", org: "Blockchain · Rust", body: "Multi-region deployment and medicinal traceability with Blockchain." },
      ],
    },
    bot: {
      title: "Svarog AI",
      sub: "Online - Ready to assist",
      greeting: "Hello, I am the Svarog AI Assistant. How can I help you navigate the Lab?",
      placeholder: "Ask something...",
      send: "Send",
      suggestions: ["What is Svarog?", "What stack is this?"],
      answers: {
        "What is Svarog?": "Svarog is an advanced AI coding assistant.",
        "What stack is this?": "This is built with Next.js, TypeScript, and the Holo Design System."
      }
    }
  },
  es: {
    nav: [
      { label: "Inicio", id: "hero" },
      { label: "Ecosistema", id: "ecosystem" },
      { label: "Infraestructura", id: "infrastructure" },
      { label: "Roadmap", id: "roadmap" },
      { label: "Contacto", id: "contact" }
    ],
    hero: {
      kicker: "v.04 // LAB HUB",
      title: "Laboratorio de\nIngeniería Modular",
      sub: "Visualización dinámica del ecosistema de microservicios y pipelines automatizados. Construido con el rendimiento y la modularidad como prioridad.",
      ctaA: "Explorar Proyectos",
      ctaB: "Ver Roadmap",
    },
    about: {
      tag: "// misión_core",
      title: "Construyendo el futuro\nde sistemas de lab.",
      body: "Nuestro laboratorio se enfoca en crear microservicios de alta disponibilidad y agentes inteligentes. Desde backends en Java de alto rendimiento hasta servicios en Go ultrarrápidos, estamos construyendo un ecosistema distribuido que escala sin esfuerzo.",
      stats: [
        { k: "07", v: "repos activos" },
        { k: "04", v: "lenguajes" },
        { k: "100%", v: "automatizado" },
        { k: "∞", v: "potencial" },
      ],
    },
    projects: {
      tag: "// ecosistema_actual",
      title: "Proyectos del Lab",
      sub: "Servicios activos y pipelines en producción.",
      items: [
        { 
          id: "01", name: "Lab Hub (Next.js)", kind: "next.js · cloudflare", year: "2026", 
          desc: "Catálogo de medicamentos y dashboard de gestión de ítems con estética premium y UX optimizada.", 
          tag: "LIVE",
          github: "https://github.com/SvarogMyl/lab-hub-nextjs",
          live: "https://lab-hub-nextjs.yannickvalderasm.workers.dev/"
        },
        { 
          id: "02", name: "Backend Core", kind: "java · spring", year: "2026", 
          desc: "Servicio principal encargado de la gestión de ítems y catálogo. Conectado a Supabase y PostgreSQL.", 
          tag: "LIVE",
          github: "https://github.com/SvarogMyl/lab-spring-postgres",
          live: "https://lab-spring-postgres.onrender.com/health",
          docs: "https://lab-spring-postgres.onrender.com/swagger-ui/index.html"
        },
        { 
          id: "03", name: "Lab Monitor", kind: "node.js · express", year: "2026", 
          desc: "Vigilante del ecosistema. Realiza health-checks periódicos y mantiene los servicios despiertos.", 
          tag: "LIVE",
          github: "https://github.com/SvarogMyl/lab-monitor-service",
          live: "https://lab-monitor-service.onrender.com/"
        },
        { 
          id: "04", name: "Holo Template", kind: "next.js · oss", year: "2026", 
          desc: "Plantilla reutilizable basada en el Holo Design System. Con i18n, glassmorphism y componentes de investigación.", 
          tag: "OSS",
          github: "https://github.com/SvarogMyl/lab-template-holo"
        },
        { 
          id: "05", name: "Lab Hub (React)", kind: "react · vite", year: "2026", 
          desc: "Versión legacy del portal. Útil para verificar paridad de funciones y referencia histórica.", 
          tag: "LEGACY",
          github: "https://github.com/SvarogMyl/lab-hub-react",
          live: "https://lab-hub-react.vercel.app/"
        },
        { 
          id: "06", name: "Data Service", kind: "python · pandas", year: "2026", 
          desc: "Pipeline automatizado que sincroniza datos desde Excel Maestro a JSON para el catálogo.", 
          tag: "LIVE",
          github: "https://github.com/SvarogMyl/lab-data-service"
        },
        { 
          id: "07", name: "Auth Service", kind: "go · gin", year: "2026", 
          desc: "Próximamente: Microservicio de alta disponibilidad para gestión de identidad y permisos.", 
          tag: "PENDING"
        },
      ],
    },
    stack: {
      tag: "// manifiesto_tech",
      title: "El Stack",
      groups: [
        { label: "cloud providers", items: ["Cloudflare", "Render", "Vercel", "Supabase", "AWS"] },
        { label: "lenguajes core", items: ["Java 21", "Node.js 20", "Go 1.22", "Python 3.10", "TypeScript"] },
        { label: "almacenamiento", items: ["PostgreSQL", "Redis", "DuckDB"] },
        { label: "devops", items: ["Docker", "GitHub Actions", "Terraform"] },
      ],
    },
    lab: {
      tag: "// ai_lab",
      title: "El Laboratorio IA",
      sub: "Una sala de control en vivo, ligeramente embrujada. El modelo de abajo no es stock — es una sonda de atención de 6 capas corriendo en tu navegador.",
      bullets: [
        "Inferencia local, sin round-trips.",
        "Streaming de tokens con telemetría al milisegundo.",
        "Transcripciones de agente reproducibles y diff-ables.",
        "Tools-first: cada acción es una llamada tipada.",
      ],
      meters: [
        { k: "latencia", v: "07.4ms", n: "p50 token" },
        { k: "tokens/s", v: "284", n: "GPU única" },
        { k: "ctx", v: "131k", n: "rolling" },
        { k: "uptime", v: "99.97", n: "30 días" },
      ],
    },
    timeline: {
      tag: "// evolución",
      title: "Roadmap",
      items: [
        { year: "Q1 2026", title: "Foundation", org: "Spring Boot · Supabase", body: "Estructura base y despliegue inicial en Render." },
        { year: "Q2 2026", title: "Observability", org: "Node.js · Express", body: "Implementación del Monitor Service y Dashboard de salud en tiempo real." },
        { year: "NOW", title: "Performance & Hub", org: "Go · Next.js", body: "Migración de servicios críticos a Go y creación del Portal Centralizado (Lab Hub)." },
        { year: "Q4 2026", title: "Intelligent Ecosystem", org: "LLM · Agentes", body: "Integración de agentes inteligentes para análisis predictivo y búsqueda semántica." },
        { year: "2027", title: "Global Scale", org: "Blockchain · Rust", body: "Despliegue multi-región y trazabilidad inmutable de medicamentos con Blockchain." },
      ],
    },
    bot: {
      title: "Svarog AI",
      sub: "En línea - Listo para ayudar",
      greeting: "Hola, soy el Asistente AI Svarog. ¿Cómo puedo ayudarte a navegar el Lab?",
      placeholder: "Escribe algo...",
      send: "Enviar",
      suggestions: ["¿Qué es Svarog?", "¿Qué stack es este?"],
      answers: {
        "¿Qué es Svarog?": "Svarog es un asistente avanzado de código IA.",
        "¿Qué stack es este?": "Está construido con Next.js, TypeScript y el Holo Design System."
      }
    }
  },
};
