'use client'
import { getTechsByPortfolioCategory } from '@/content/technologies'
import { motion } from 'framer-motion'
import { Cloud, Database, Globe, Terminal } from 'lucide-react'
import { DiJava } from 'react-icons/di'
import { FaAws } from 'react-icons/fa'
import {
  SiApachedruid, SiApachekafka, SiCss, SiDjango,
  SiDocker,
  SiDuckdb,
  SiFastapi,
  SiFlask,
  SiGin,
  SiGit,
  SiGithubactions,
  SiGitlab, SiGnubash, SiGo, SiGooglecloud, SiGrafana, SiGraphql,
  SiHelm,
  SiHtml5,
  SiJavascript,
  SiKnime,
  SiKubernetes,
  SiLaravel,
  SiMinio,
  SiMongodb,
  SiMysql, SiNatsdotio, SiNumpy,
  SiOpentelemetry,
  SiPandas,
  SiPolars,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiRabbitmq,
  SiRedis, SiRuby, SiSocketdotio, SiSpring,
  SiTerraform,
  SiTypescript
} from 'react-icons/si'
import GrpcIcon from '../ui/icons/GrpcIcon'

// Maps tech names (from technologies.ts) to their React icon components.
// Icons are kept here to avoid importing React components in the data layer.
const iconMap: Record<string, React.ComponentType<{ size?: number | string; className?: string }>> = {
  'Go': SiGo,
  'Python': SiPython,
  'Ruby': SiRuby,
  'TypeScript': SiTypescript,
  'SQL': Database,
  'Bash': SiGnubash,
  'JavaScript': SiJavascript,
  'HTML': SiHtml5,
  'CSS': SiCss,
  'Gin': SiGin,
  'Django': SiDjango,
  'FastAPI': SiFastapi,
  'Flask': SiFlask,
  'Spring Boot': SiSpring,
  'Laravel': SiLaravel,
  'Ruby on Rails': SiRuby,
  'gRPC': GrpcIcon,
  'REST': Globe,
  'GraphQL': SiGraphql,
  'WebSocket': SiSocketdotio,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'SQL Server': Database,
  'MongoDB': SiMongodb,
  'Apache Druid': SiApachedruid,
  'Redis': SiRedis,
  'Kafka': SiApachekafka,
  'RabbitMQ': SiRabbitmq,
  'NATS': SiNatsdotio,
  'AWS': FaAws,
  'GCP': SiGooglecloud,
  'Azure': Cloud,
  'OVH': Cloud,
  'MinIO': SiMinio,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Terraform': SiTerraform,
  'Helm': SiHelm,
  'GitHub Actions': SiGithubactions,
  'GitLab CI': SiGitlab,
  'Git': SiGit,
  'Pandas': SiPandas,
  'NumPy': SiNumpy,
  'Polars': SiPolars,
  'DuckDB': SiDuckdb,
  'KNIME': SiKnime,
  'Prometheus': SiPrometheus,
  'Grafana': SiGrafana,
  'OpenTelemetry': SiOpentelemetry,
  'Java': DiJava as React.ComponentType<{ size?: number | string; className?: string }>,
}

// Build grouped tech stack once at module load
const portfolioGroups = getTechsByPortfolioCategory()
const techStack = Object.fromEntries(
  Object.entries(portfolioGroups).map(([category, entries]) => [
    category,
    entries.map(entry => ({
      icon: iconMap[entry.name] ?? Terminal,
      name: entry.name,
      level: entry.level,
    })),
  ])
)

export default function Technologies() {
  return (
    <div className="space-y-16">
      {Object.entries(techStack).map(([category, techs], index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Minimalist Category Header */}
          <div className="mb-8">
            <motion.h3
              className="text-sm font-semibold uppercase tracking-wider text-muted mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {category}
            </motion.h3>
            <motion.div
              className="h-px bg-gradient-to-r from-border via-border/50 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
            />
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {techs.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1 + i * 0.05,
                  duration: 0.3
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-border hover:bg-background/80 transition-all duration-300 shadow-sm hover:shadow-md">
                  {/* Content */}
                  <div className="flex flex-col items-center justify-center gap-3 h-full min-h-[100px]">
                    {/* Icon with subtle hover effect */}
                    <div className="relative">
                      <tech.icon className={tech.name === 'gRPC' ? 'w-24 h-24 text-foreground/70 group-hover:text-foreground transition-colors duration-300' : 'w-12 h-12 text-foreground/70 group-hover:text-foreground transition-colors duration-300'} />
                      {/* Subtle glow on hover */}
                      <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-current" />
                    </div>

                    {/* Tech name - always visible, hidden for gRPC */}
                    {tech.name !== 'gRPC' && (
                      <span className="text-xs font-medium text-foreground/60 group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
                        {tech.name}
                      </span>
                    )}

                    {/* Mastery Level Dots */}
                    <div className="flex gap-1.5 mt-2">
                      {[1, 2, 3, 4].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${dot <= tech.level
                            ? 'bg-blue-500 group-hover:bg-blue-400 shadow-sm'
                            : 'bg-gray-300 dark:bg-gray-700 group-hover:bg-gray-400 dark:group-hover:bg-gray-600'
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Subtle top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
