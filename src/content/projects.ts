export interface GalleryProject {
  name: string
  description: string
  longDescription: string
  githubUrl?: string
  language: string
  languageColor: string
  topics: string[]
  highlights: string[]
  screenshot: {
    file: string
    content: string
  }
}

interface ProjectsContent {
  title: string
  subtitle: string
  projects: GalleryProject[]
}

export const projectsContent: Record<string, ProjectsContent> = {
  en: {
    title: "Projects",
    subtitle: "A selection of things I've built and contributed to — from Go libraries to homelab infrastructure.",
    projects: [

      {
        name: "go-env",
        description: "A Go library for type-safe environment variable management",
        longDescription:
          "A lightweight library that simplifies environment variable handling in Go applications. Supports automatic type coercion, default values, required fields validation, and structured loading — turning raw string env vars into typed, validated application configuration.",
        githubUrl: "https://github.com/dimahc/go-env",
        language: "Go",
        languageColor: "#00ADD8",
        topics: ["go", "library", "environment-variables", "configuration"],
        highlights: [
          "Struct-tag based configuration mapping",
          "Automatic type coercion for int, bool, duration, and custom types",
          "Nested struct support with prefix-based key resolution",
          "Zero external dependencies",
        ],
        screenshot: {
          file: "config.go",
          content: `type Config struct {\n    Port    int    \`env:"PORT" default:"8080"\`\n    DBHost  string \`env:"DB_HOST" required:"true"\`\n    Debug   bool   \`env:"DEBUG"\`\n    Timeout time.Duration \`env:"TIMEOUT"\`\n}\n\ncfg, err := env.Load[Config]()`,
        },
      },
      {
        name: "home-server-template",
        description: "Declarative homelab infrastructure with IaC",
        longDescription:
          "A personal homelab configuration template using Infrastructure as Code principles. Defines services, networking, storage, and monitoring declaratively — treating the home server environment with the same rigor as production infrastructure. A sandbox for experimenting with container orchestration, service meshes, and observability stacks.",
        githubUrl: "https://github.com/dimahc/home-server-template",
        language: "Jinja",
        languageColor: "#A52A22",
        topics: ["homelab", "infrastructure", "docker", "observability"],
        highlights: [
          "Full service stack defined as composable templates",
          "Automated backups with rotation and off-site sync",
          "Monitoring stack with metrics, logs, and alerts",
          "Network segmentation with reverse proxy and VPN",
        ],
        screenshot: {
          file: "~$ docker compose ps",
          content: `NAME                STATUS      PORTS\ntraefik             healthy     80,443\nprometheus          healthy     9090\ngrafana             healthy     3000\npostgres            healthy     5432\nalertmanager        healthy     9093`,
        },
      },

    ],
  },
  fr: {
    title: "Projets",
    subtitle: "Une sélection de projets que j'ai construits et auxquels j'ai contribué — des bibliothèques Go à l'infrastructure de homelab.",
    projects: [

      {
        name: "go-env",
        description: "Une bibliothèque Go pour la gestion typée des variables d'environnement",
        longDescription:
          "Une bibliothèque légère qui simplifie la gestion des variables d'environnement dans les applications Go. Supporte la coercition automatique de types, les valeurs par défaut, la validation des champs obligatoires et le chargement structuré — transformant des variables d'environnement brutes en configuration applicative typée et validée.",
        githubUrl: "https://github.com/dimahc/go-env",
        language: "Go",
        languageColor: "#00ADD8",
        topics: ["go", "bibliothèque", "variables-d-environnement", "configuration"],
        highlights: [
          "Mapping de configuration basé sur les struct tags",
          "Coercition automatique pour int, bool, duration et types personnalisés",
          "Support des structs imbriqués avec résolution par préfixe",
          "Zéro dépendance externe",
        ],
        screenshot: {
          file: "config.go",
          content: `type Config struct {\n    Port    int    \`env:"PORT" default:"8080"\`\n    DBHost  string \`env:"DB_HOST" required:"true"\`\n    Debug   bool   \`env:"DEBUG"\`\n    Timeout time.Duration \`env:"TIMEOUT"\`\n}\n\ncfg, err := env.Load[Config]()`,
        },
      },
      {
        name: "home-server-template",
        description: "Infrastructure de homelab déclarative avec IaC",
        longDescription:
          "Un template de configuration de homelab personnel utilisant les principes d'Infrastructure as Code. Définit les services, le réseau, le stockage et la surveillance de manière déclarative — traitant l'environnement du serveur personnel avec la même rigueur que l'infrastructure de production. Un bac à sable pour expérimenter avec l'orchestration de conteneurs, les service meshes et les stacks d'observabilité.",
        githubUrl: "https://github.com/dimahc/home-server-template",
        language: "Jinja",
        languageColor: "#A52A22",
        topics: ["homelab", "infrastructure", "docker", "observabilité"],
        highlights: [
          "Stack de services complet défini en templates composables",
          "Sauvegardes automatisées avec rotation et synchronisation externe",
          "Stack de monitoring avec métriques, logs et alertes",
          "Segmentation réseau avec proxy inverse et VPN",
        ],
        screenshot: {
          file: "~$ docker compose ps",
          content: `NAME                STATUS      PORTS\ntraefik             healthy     80,443\nprometheus          healthy     9090\ngrafana             healthy     3000\npostgres            healthy     5432\nalertmanager        healthy     9093`,
        },
      },

    ],
  },
}
