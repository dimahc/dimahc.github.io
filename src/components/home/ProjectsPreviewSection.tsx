'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { useParams } from 'next/navigation'
import { projectsContent } from '@/content/projects'
import { ArrowRight } from 'lucide-react'

export default function ProjectsPreviewSection() {
  const { t } = useTranslation()
  const params = useParams()
  const locale = (params?.locale as 'en' | 'fr') || 'fr'
  const projects = projectsContent[locale].projects.slice(0, 2)

  return (
    <section id="projects" className="py-16 border-t border-line-soft">
      <div className="max-w-[920px] mx-auto px-8">
        <div className="flex items-baseline gap-3.5 mb-8">
          <span className="font-mono text-[12px] text-faint uppercase tracking-wider">{t('projects.tag')}</span>
          <h2 className="font-bold text-2xl">{t('projects.title')}</h2>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <div
                className="border-l-[3px] pl-5"
                style={{ borderColor: project.languageColor }}
              >
                {/* Language + name row */}
                <div className="flex items-center gap-2.5 mb-2">
                  <span
                    className="w-[8px] h-[8px] rounded-full inline-block shrink-0"
                    style={{ backgroundColor: project.languageColor }}
                  />
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-faint">
                    {project.language}
                  </span>
                  <h3 className="font-bold text-[16px]">
                    {project.name}
                  </h3>
                </div>

                <p className="text-muted text-[14px] leading-relaxed ml-[18px]">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 font-medium transition-colors text-[14.5px]"
          >
            {t('projects.viewAll')} <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
