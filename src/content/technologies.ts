export interface TechEntry {
  name: string;
  portfolioCategory: string;
  level: number;
}

export const technologies: TechEntry[] = [
  // ── Languages ──────────────────────────────────────────────────────────────
  {
    name: "Go",
    portfolioCategory: "Languages",
    level: 4,
  },
  {
    name: "Python",
    portfolioCategory: "Languages",
    level: 3,
  },
  {
    name: "Ruby",
    portfolioCategory: "Languages",
    level: 2,
  },
  {
    name: "TypeScript",
    portfolioCategory: "Languages",
    level: 2,
  },
  {
    name: "SQL",
    portfolioCategory: "Languages",
    level: 3,
  },
  {
    name: "Bash",
    portfolioCategory: "Languages",
    level: 2,
  },
  {
    name: "JavaScript",
    portfolioCategory: "Languages",
    level: 2,
  },
  {
    name: "HTML",
    portfolioCategory: "Languages",
    level: 1,
  },
  {
    name: "CSS",
    portfolioCategory: "Languages",
    level: 1,
  },

  // ── Backend Frameworks ─────────────────────────────────────────────────────
  {
    name: "Gin",
    portfolioCategory: "Backend Frameworks",
    level: 3,
  },
  {
    name: "Django",
    portfolioCategory: "Backend Frameworks",
    level: 2,
  },
  {
    name: "FastAPI",
    portfolioCategory: "Backend Frameworks",
    level: 2,
  },
  {
    name: "Flask",
    portfolioCategory: "Backend Frameworks",
    level: 1,
  },
  {
    name: "Spring Boot",
    portfolioCategory: "Backend Frameworks",
    level: 1,
  },
  {
    name: "Laravel",
    portfolioCategory: "Backend Frameworks",
    level: 2,
  },
  {
    name: "Ruby on Rails",
    portfolioCategory: "Backend Frameworks",
    level: 2,
  },

  // ── API Protocols ──────────────────────────────────────────────────────────
  {
    name: "gRPC",
    portfolioCategory: "API Protocols",
    level: 3,
  },
  {
    name: "REST",
    portfolioCategory: "API Protocols",
    level: 4,
  },
  {
    name: "GraphQL",
    portfolioCategory: "API Protocols",
    level: 2,
  },
  {
    name: "WebSocket",
    portfolioCategory: "API Protocols",
    level: 2,
  },

  // ── Databases ──────────────────────────────────────────────────────────────
  {
    name: "PostgreSQL",
    portfolioCategory: "Databases",
    level: 3,
  },
  {
    name: "MySQL",
    portfolioCategory: "Databases",
    level: 3,
  },
  {
    name: "SQL Server",
    portfolioCategory: "Databases",
    level: 2,
  },
  {
    name: "MongoDB",
    portfolioCategory: "Databases",
    level: 1,
  },
  {
    name: "Apache Druid",
    portfolioCategory: "Databases",
    level: 2,
  },
  {
    name: "Redis",
    portfolioCategory: "Databases",
    level: 2,
  },

  // ── Messaging & Streaming ──────────────────────────────────────────────────
  {
    name: "Kafka",
    portfolioCategory: "Messaging & Streaming",
    level: 2,
  },
  {
    name: "RabbitMQ",
    portfolioCategory: "Messaging & Streaming",
    level: 3,
  },
  {
    name: "NATS",
    portfolioCategory: "Messaging & Streaming",
    level: 2,
  },

  // ── Cloud & Infrastructure ─────────────────────────────────────────────────
  {
    name: "AWS",
    portfolioCategory: "Cloud & Infrastructure",
    level: 2,
  },
  {
    name: "GCP",
    portfolioCategory: "Cloud & Infrastructure",
    level: 2,
  },
  {
    name: "Azure",
    portfolioCategory: "Cloud & Infrastructure",
    level: 2,
  },
  {
    name: "OVH",
    portfolioCategory: "Cloud & Infrastructure",
    level: 2,
  },
  {
    name: "MinIO",
    portfolioCategory: "Cloud & Infrastructure",
    level: 2,
  },
  {
    name: "Docker",
    portfolioCategory: "Cloud & Infrastructure",
    level: 3,
  },
  {
    name: "Kubernetes",
    portfolioCategory: "Cloud & Infrastructure",
    level: 3,
  },
  {
    name: "Terraform",
    portfolioCategory: "Cloud & Infrastructure",
    level: 2,
  },
  {
    name: "Helm",
    portfolioCategory: "Cloud & Infrastructure",
    level: 2,
  },

  // ── DevOps & CI/CD ─────────────────────────────────────────────────────────
  {
    name: "GitHub Actions",
    portfolioCategory: "DevOps & CI/CD",
    level: 3,
  },
  {
    name: "GitLab CI",
    portfolioCategory: "DevOps & CI/CD",
    level: 2,
  },
  {
    name: "Git",
    portfolioCategory: "DevOps & CI/CD",
    level: 3,
  },

  // ── Data & Analytics ───────────────────────────────────────────────────────
  {
    name: "Pandas",
    portfolioCategory: "Data & Analytics",
    level: 3,
  },
  {
    name: "NumPy",
    portfolioCategory: "Data & Analytics",
    level: 3,
  },
  {
    name: "Polars",
    portfolioCategory: "Data & Analytics",
    level: 2,
  },
  {
    name: "DuckDB",
    portfolioCategory: "Data & Analytics",
    level: 2,
  },
  {
    name: "KNIME",
    portfolioCategory: "Data & Analytics",
    level: 2,
  },
  {
    name: "Tableau",
    portfolioCategory: "Data & Analytics",
    level: 2,
  },

  // ── Monitoring ─────────────────────────────────────────────────────────────
  {
    name: "Prometheus",
    portfolioCategory: "Monitoring",
    level: 3,
  },
  {
    name: "Grafana",
    portfolioCategory: "Monitoring",
    level: 3,
  },
  {
    name: "OpenTelemetry",
    portfolioCategory: "Monitoring",
    level: 2,
  },

  // ── Previously Used ────────────────────────────────────────────────────────
  {
    name: "Java",
    portfolioCategory: "Previously Used",
    level: 2,
  },
];

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
