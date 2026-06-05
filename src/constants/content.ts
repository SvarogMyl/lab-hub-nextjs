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
        { id: "01", name: "Svarog Web", kind: "next.js · cloudflare", year: "2026", desc: "Commercial portal for the Svarog EcoSystem. Landing, Google OAuth login and SSO to news-admin.", tag: "LIVE", github: "https://github.com/SvarogMyl/svarog-web", live: "https://svasoft.cl" },
        { id: "02", name: "Lab Hub (Next.js)", kind: "next.js · cloudflare", year: "2026", desc: "Modern central portal with i18n, TypeScript and Holo design system.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-hub-nextjs", live: "https://hub.svasoft.cl" },
        { id: "03", name: "Store (Spring Boot)", kind: "next.js · spring boot", year: "2026", desc: "Full-stack product catalog. Next.js consuming Spring Boot REST API. Item CRUD with pagination and JWT.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-frontend-nextjs", live: "https://store.svasoft.cl" },
        { id: "04", name: "Lab Hub (React)", kind: "react · vite", year: "2026", desc: "Legacy version of the central portal in plain React.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-hub-react", live: "https://lab-hub-react.pages.dev" },
        { id: "05", name: "Backend Core (Node.js)", kind: "node.js · prisma", year: "2026", desc: "Central API unifying data and projects across the ecosystem.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-core-node", live: "https://api.svasoft.cl" },
        { id: "06", name: "Lab Spring Postgres", kind: "java · spring boot", year: "2026", desc: "Robust Java backend with Spring Boot and PostgreSQL.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-spring-postgres", live: "https://spring.svasoft.cl", docs: "https://spring.svasoft.cl/swagger-ui/index.html" },
        { id: "07", name: "Auth Service", kind: "go · gin", year: "2026", desc: "Central IdP for the ecosystem. Register, login and JWT validation.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-auth-service", live: "https://auth.svasoft.cl" },
        { id: "08", name: "News Service", kind: "node.js · prisma · r2", year: "2026", desc: "Multi-tenant SaaS API for news management with Cloudflare R2 storage.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-news-service", live: "https://news.svasoft.cl" },
        { id: "09", name: "Mail Service", kind: "python · fastapi · rabbitmq", year: "2026", desc: "Email microservice with FastAPI, RabbitMQ and Brevo.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-mail-service", live: "https://mail.svasoft.cl" },
        { id: "10", name: "Monitor Service", kind: "node.js · express", year: "2026", desc: "Ecosystem keep-alive. Pings all services every 5 minutes.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-monitor-service", live: "https://monitor.svasoft.cl" },
        { id: "11", name: "Data Service", kind: "python · pandas", year: "2026", desc: "Automated Excel to JSON conversion pipeline.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-data-service" },
        { id: "12", name: "Holo Template", kind: "react · css · oss", year: "2026", desc: "Reusable CSS/React design system for the ecosystem. Open source.", tag: "OSS", github: "https://github.com/SvarogMyl/lab-template-holo" },
      ],
    },
    stack: {
      tag: "// tech_manifest",
      title: "The Stack",
      groups: [
        { label: "cloud providers", items: ["Oracle Cloud", "Cloudflare", "Docker", "GitHub Actions"] },
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
        { year: "Q1 2026", title: "Foundation", org: "Spring Boot · PostgreSQL", body: "Base structure and initial deployment. Migration to Oracle Cloud completed Q2." },
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
        { id: "01", name: "Svarog Web", kind: "next.js · cloudflare", year: "2026", desc: "Portal comercial del Svarog EcoSystem. Landing, login con Google OAuth y SSO hacia news-admin.", tag: "LIVE", github: "https://github.com/SvarogMyl/svarog-web", live: "https://svasoft.cl" },
        { id: "02", name: "Lab Hub (Next.js)", kind: "next.js · cloudflare", year: "2026", desc: "Portal central moderno con i18n, TypeScript y diseño Holo.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-hub-nextjs", live: "https://hub.svasoft.cl" },
        { id: "03", name: "Store (Spring Boot)", kind: "next.js · spring boot", year: "2026", desc: "Catálogo de productos full-stack — Next.js consume la API REST de Spring Boot. CRUD con paginación y JWT.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-frontend-nextjs", live: "https://store.svasoft.cl" },
        { id: "04", name: "Lab Hub (React)", kind: "react · vite", year: "2026", desc: "Versión legacy del portal central en React puro.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-hub-react", live: "https://lab-hub-react.pages.dev" },
        { id: "05", name: "Backend Core (Node.js)", kind: "node.js · prisma", year: "2026", desc: "API central que unifica datos y proyectos del ecosistema.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-core-node", live: "https://api.svasoft.cl" },
        { id: "06", name: "Lab Spring Postgres", kind: "java · spring boot", year: "2026", desc: "Backend robusto en Java con Spring Boot y PostgreSQL.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-spring-postgres", live: "https://spring.svasoft.cl", docs: "https://spring.svasoft.cl/swagger-ui/index.html" },
        { id: "07", name: "Auth Service", kind: "go · gin", year: "2026", desc: "IdP central del ecosistema. Registro, login y validación JWT.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-auth-service", live: "https://auth.svasoft.cl" },
        { id: "08", name: "News Service", kind: "node.js · prisma · r2", year: "2026", desc: "API SaaS multi-tenant para gestión de noticias con storage en Cloudflare R2.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-news-service", live: "https://news.svasoft.cl" },
        { id: "09", name: "Mail Service", kind: "python · fastapi · rabbitmq", year: "2026", desc: "Microservicio de emails con FastAPI, RabbitMQ y Brevo.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-mail-service", live: "https://mail.svasoft.cl" },
        { id: "10", name: "Monitor Service", kind: "node.js · express", year: "2026", desc: "Keep-alive del ecosistema. Pings cada 5 minutos a todos los servicios.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-monitor-service", live: "https://monitor.svasoft.cl" },
        { id: "11", name: "Data Service", kind: "python · pandas", year: "2026", desc: "Pipeline automatizado de conversión Excel a JSON.", tag: "LIVE", github: "https://github.com/SvarogMyl/lab-data-service" },
        { id: "12", name: "Holo Template", kind: "react · css · oss", year: "2026", desc: "Design system CSS/React reutilizable del ecosistema. Open source.", tag: "OSS", github: "https://github.com/SvarogMyl/lab-template-holo" },
      ],
    },
    stack: {
      tag: "// manifiesto_tech",
      title: "El Stack",
      groups: [
        { label: "cloud providers", items: ["Oracle Cloud", "Cloudflare", "Docker", "GitHub Actions"] },
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
