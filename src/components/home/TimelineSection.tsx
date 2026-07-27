'use client'

import { motion } from 'framer-motion'
import { experienceContent } from '@/content/experience'
import { useTranslation } from '@/hooks'

function getInitials(company: string): string {
  const cleaned = company.replace(/\(.*?\)/g, '').trim()
  const words = cleaned.split(/\s+/).filter(w => w.length > 0)
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

export default function TimelineSection() {
  const { t, language } = useTranslation()
  const jobs = experienceContent[language].jobs

  const displayedJobs = jobs.slice(0, 3)
  const markers = ['now', 'before', 'earlier']

  return (
    <section id="experience">
      <div className="max-w-[920px] mx-auto px-8 py-16 border-t border-line-soft">
        <div className="flex items-baseline gap-3.5 mb-8">
          <span className="font-mono text-[12px] text-faint uppercase tracking-wider">
            {t('experience.tag')}
          </span>
          <h2 className="font-bold text-2xl">{t('experience.title')}</h2>
        </div>

        <div className="relative border-l border-border">
          {displayedJobs.map((job, index) => {
            const initials = getInitials(job.company)
            const skills = job.skills.slice(0, 5)

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                viewport={{ once: true, margin: '-60px' }}
                className="relative pl-[26px] pb-[34px] last:pb-0"
              >
                <div
                  className={`absolute left-0 top-[6px] w-[10px] h-[10px] -translate-x-1/2 rounded-full border-2 ${
                    index === 0
                      ? 'border-accent bg-accent'
                      : 'border-secondary bg-secondary'
                  }`}
                />

                <div className="font-mono text-[11px] text-faint uppercase tracking-wider mb-2">
                  {t(`experience.${markers[index] || 'earlier'}`)}
                </div>

                <div
                  className={`bg-surface border ${
                    index === 0 ? 'border-accent' : 'border-border'
                  } rounded-[10px] p-6 flex flex-col gap-3`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono font-bold text-[11px] tracking-wider px-2.5 py-1 rounded-md ${
                        index === 0
                          ? 'text-accent bg-accent-fill border border-accent-soft'
                          : 'text-secondary border border-line-soft'
                      }`}
                    >
                      {initials}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-bold text-base leading-tight">{job.title}</span>
                      <span className="text-muted text-sm">
                        {job.company} — {job.location}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-[12px] text-faint">
                    {job.period}
                  </span>

                  <p className="text-muted text-[14.5px] leading-relaxed max-w-[62ch]">
                    {job.description}
                  </p>

                  {skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {skills.map(skill => (
                        <span
                          key={skill}
                          className="font-mono text-[11px] text-faint border border-line-soft rounded-full px-2.5 py-0.5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
