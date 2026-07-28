import { projectsContent } from '@/content/projects'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ProjectTerminal from '@/components/projects/ProjectTerminal'
import { ExternalLink } from 'lucide-react'
import type { Language } from '@/types'

type Props = {
  params: Promise<{ locale: Language }>
}

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }]
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params
  const content = projectsContent[locale]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="max-w-[920px] mx-auto px-8 py-16">
        <div className="flex items-baseline gap-3.5 mb-3">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] text-faint uppercase tracking-wider">
            /projects
          </span>
          <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold text-2xl">
            {content.title}
          </h1>
        </div>

        <p className="text-muted text-[14.5px] mb-16 max-w-[58ch] leading-relaxed">
          {content.subtitle}
        </p>

        <div className="flex flex-col gap-12">
          {content.projects.map((project) => (
            <section key={project.name}>
              <div className="bg-surface border border-border rounded-[10px] p-6 md:p-8">
                <div
                  className="border-l-[3px] pl-6"
                  style={{ borderColor: project.languageColor }}
                >
                  <div className="md:flex md:gap-8 md:items-start">
                    {/* Main content column */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="w-[10px] h-[10px] rounded-full inline-block"
                          style={{ backgroundColor: project.languageColor }}
                        />
                        <span className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] text-faint">
                          {project.language}
                        </span>
                      </div>

                      <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[22px] leading-tight mb-2">
                        {project.name}
                      </h2>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-[family-name:var(--font-jetbrains-mono)] text-[13px] text-faint hover:text-accent transition-colors mb-5"
                        >
                          {project.githubUrl.replace('https://github.com/', '')}
                          <ExternalLink size={12} />
                        </a>
                      )}

                      <p className="text-muted text-[14.5px] leading-relaxed mb-6">
                        {project.longDescription}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {project.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="font-[family-name:var(--font-jetbrains-mono)] text-[13px] text-muted flex items-start gap-2.5"
                          >
                            <span className="text-faint shrink-0 mt-[1px]">→</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] text-faint">
                        {project.topics.join(' · ')}
                      </div>
                    </div>

                    {/* Terminal column — fixed width on desktop, full width on mobile */}
                    {project.screenshot && (
                      <div className="md:w-[300px] md:shrink-0 mt-6 md:mt-0">
                        <ProjectTerminal
                          file={project.screenshot.file}
                          content={project.screenshot.content}
                          languageColor={project.languageColor}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
