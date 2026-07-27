/**
 * Single source of truth for all technologies.
 *
 * portfolioCategory — group shown in the portfolio Technologies section
 * resumeCategory    — group shown in the resume Technical Skills section
 *                     (null = not shown on resume)
 * level             — mastery 1–4 (shown as dots in portfolio)
 */

export type ResumeCategory =
  | "Languages"
  | "Cloud & DevOps"
  | "Data & Messaging"
  | "Observability"
  | null;

export interface TechEntry {
  name: string;
  portfolioCategory: string;
  resumeCategory: ResumeCategory;
  level: number;
}

export const technologies: TechEntry[] = [
  // ── Languages ──────────────────────────────────────────────────────────────
  {
    name: "Go",
    portfolioCategory: "Languages",
    resumeCategory: "Languages",
    level: 4,
  },
  {
    name: "Python",
    portfolioCategory: "Languages",
    resumeCategory: "Languages",
    level: 3,
  },
  {
    name: "Ruby",
    portfolioCategory: "Languages",
    resumeCategory: "Languages",
    level: 2,
  },
  {
    name: "TypeScript",
    portfolioCategory: "Languages",
    resumeCategory: "Languages",
    level: 2,
  },
  {
    name: "SQL",
    portfolioCategory: "Languages",
    resumeCategory: "Languages",
    level: 3,
  },
  {
    name: "Bash",
    portfolioCategory: "Languages",
    resumeCategory: "Languages",
    level: 2,
  },
  {
    name: "JavaScript",
    portfolioCategory: "Languages",
    resumeCategory: null,
    level: 2,
  },
  {
    name: "HTML",
    portfolioCategory: "Languages",
    resumeCategory: null,
    level: 1,
  },
  {
    name: "CSS",
    portfolioCategory: "Languages",
    resumeCategory: null,
    level: 1,
  },

  // ── Backend Frameworks ─────────────────────────────────────────────────────
  {
    name: "Gin",
    portfolioCategory: "Backend Frameworks",
    resumeCategory: null,
    level: 3,
  },
  {
    name: "Django",
    portfolioCategory: "Backend Frameworks",
    resumeCategory: null,
    level: 2,
  },
  {
    name: "FastAPI",
    portfolioCategory: "Backend Frameworks",
    resumeCategory: null,
    level: 2,
  },
  {
    name: "Flask",
    portfolioCategory: "Backend Frameworks",
    resumeCategory: null,
    level: 1,
  },
  {
    name: "Spring Boot",
    portfolioCategory: "Backend Frameworks",
    resumeCategory: null,
    level: 1,
  },
  {
    name: "Laravel",
    portfolioCategory: "Backend Frameworks",
    resumeCategory: null,
    level: 2,
  },
  {
    name: "Ruby on Rails",
    portfolioCategory: "Backend Frameworks",
    resumeCategory: null,
    level: 2,
  },

  // ── API Protocols ──────────────────────────────────────────────────────────
  {
    name: "gRPC",
    portfolioCategory: "API Protocols",
    resumeCategory: null,
    level: 3,
  },
  {
    name: "REST",
    portfolioCategory: "API Protocols",
    resumeCategory: null,
    level: 4,
  },
  {
    name: "GraphQL",
    portfolioCategory: "API Protocols",
    resumeCategory: null,
    level: 2,
  },
  {
    name: "WebSocket",
    portfolioCategory: "API Protocols",
    resumeCategory: null,
    level: 2,
  },

  // ── Databases ──────────────────────────────────────────────────────────────
  {
    name: "PostgreSQL",
    portfolioCategory: "Databases",
    resumeCategory: "Data & Messaging",
    level: 3,
  },
  {
    name: "MySQL",
    portfolioCategory: "Databases",
    resumeCategory: "Data & Messaging",
    level: 3,
  },
  {
    name: "SQL Server",
    portfolioCategory: "Databases",
    resumeCategory: null,
    level: 2,
  },
  {
    name: "MongoDB",
    portfolioCategory: "Databases",
    resumeCategory: null,
    level: 1,
  },
  {
    name: "Apache Druid",
    portfolioCategory: "Databases",
    resumeCategory: "Data & Messaging",
    level: 2,
  },
  {
    name: "Redis",
    portfolioCategory: "Databases",
    resumeCategory: null,
    level: 2,
  },

  // ── Messaging & Streaming ──────────────────────────────────────────────────
  {
    name: "Kafka",
    portfolioCategory: "Messaging & Streaming",
    resumeCategory: "Data & Messaging",
    level: 2,
  },
  {
    name: "RabbitMQ",
    portfolioCategory: "Messaging & Streaming",
    resumeCategory: "Data & Messaging",
    level: 3,
  },
  {
    name: "NATS",
    portfolioCategory: "Messaging & Streaming",
    resumeCategory: "Data & Messaging",
    level: 2,
  },

  // ── Cloud & Infrastructure ─────────────────────────────────────────────────
  {
    name: "AWS",
    portfolioCategory: "Cloud & Infrastructure",
    resumeCategory: "Cloud & DevOps",
    level: 2,
  },
  {
    name: "GCP",
    portfolioCategory: "Cloud & Infrastructure",
    resumeCategory: null,
    level: 2,
  },
  {
    name: "Azure",
    portfolioCategory: "Cloud & Infrastructure",
    resumeCategory: "Cloud & DevOps",
    level: 2,
  },
  {
    name: "OVH",
    portfolioCategory: "Cloud & Infrastructure",
    resumeCategory: null,
    level: 2,
  },
  {
    name: "MinIO",
    portfolioCategory: "Cloud & Infrastructure",
    resumeCategory: null,
    level: 2,
  },
  {
    name: "Docker",
    portfolioCategory: "Cloud & Infrastructure",
    resumeCategory: "Cloud & DevOps",
    level: 3,
  },
  {
    name: "Kubernetes",
    portfolioCategory: "Cloud & Infrastructure",
    resumeCategory: "Cloud & DevOps",
    level: 3,
  },
  {
    name: "Terraform",
    portfolioCategory: "Cloud & Infrastructure",
    resumeCategory: "Cloud & DevOps",
    level: 2,
  },
  {
    name: "Helm",
    portfolioCategory: "Cloud & Infrastructure",
    resumeCategory: "Cloud & DevOps",
    level: 2,
  },

  // ── DevOps & CI/CD ─────────────────────────────────────────────────────────
  {
    name: "GitHub Actions",
    portfolioCategory: "DevOps & CI/CD",
    resumeCategory: null,
    level: 3,
  },
  {
    name: "GitLab CI",
    portfolioCategory: "DevOps & CI/CD",
    resumeCategory: "Cloud & DevOps",
    level: 2,
  },
  {
    name: "Git",
    portfolioCategory: "DevOps & CI/CD",
    resumeCategory: null,
    level: 3,
  },

  // ── Data & Analytics ───────────────────────────────────────────────────────
  {
    name: "Pandas",
    portfolioCategory: "Data & Analytics",
    resumeCategory: null,
    level: 3,
  },
  {
    name: "NumPy",
    portfolioCategory: "Data & Analytics",
    resumeCategory: null,
    level: 3,
  },
  {
    name: "Polars",
    portfolioCategory: "Data & Analytics",
    resumeCategory: null,
    level: 2,
  },
  {
    name: "DuckDB",
    portfolioCategory: "Data & Analytics",
    resumeCategory: null,
    level: 2,
  },
  {
    name: "KNIME",
    portfolioCategory: "Data & Analytics",
    resumeCategory: null,
    level: 2,
  },
  {
    name: "Tableau",
    portfolioCategory: "Data & Analytics",
    resumeCategory: null,
    level: 2,
  },

  // ── Monitoring ─────────────────────────────────────────────────────────────
  {
    name: "Prometheus",
    portfolioCategory: "Monitoring",
    resumeCategory: "Observability",
    level: 3,
  },
  {
    name: "Grafana",
    portfolioCategory: "Monitoring",
    resumeCategory: "Observability",
    level: 3,
  },
  {
    name: "OpenTelemetry",
    portfolioCategory: "Monitoring",
    resumeCategory: "Observability",
    level: 2,
  },

  // ── Previously Used ────────────────────────────────────────────────────────
  {
    name: "Java",
    portfolioCategory: "Previously Used",
    resumeCategory: null,
    level: 2,
  },
];

/**
 * Returns technologies grouped by resumeCategory, maintaining LaTeX resume order.
 * Used by resumeData.ts to generate the Technical Skills section.
 */
export function getTechsByResumeCategory(): Record<
  Exclude<ResumeCategory, null>,
  string[]
> {
  const groups: Record<string, string[]> = {
    Languages: [],
    "Cloud & DevOps": [],
    "Data & Messaging": [],
    Observability: [],
  };
  for (const tech of technologies) {
    if (tech.resumeCategory) {
      groups[tech.resumeCategory].push(tech.name);
    }
  }
  return groups as Record<Exclude<ResumeCategory, null>, string[]>;
}

/**
 * Returns technologies grouped by portfolioCategory for the portfolio display.
 * Preserves insertion order.
 */
export function getTechsByPortfolioCategory(): Record<string, TechEntry[]> {
  const groups: Record<string, TechEntry[]> = {};
  for (const tech of technologies) {
    if (!groups[tech.portfolioCategory]) {
      groups[tech.portfolioCategory] = [];
    }
    groups[tech.portfolioCategory].push(tech);
  }
  return groups;
}
