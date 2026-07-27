'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
})

const techStack = ['Go', 'Terraform', 'HCL', 'OpenAPI']

export default function NowSection() {
  const { t } = useTranslation()

  return (
    <section id="now" className="py-16 border-t border-line-soft">
      <div className="max-w-[920px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-surface border border-border rounded-[10px] p-7 border-l-[3px] border-l-accent"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-accent font-mono text-[11px] uppercase tracking-wider">
                <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-dot" />
                {t('mission.status')}
              </span>
              <span className="text-faint font-mono text-[11px] select-none">&#183;</span>
              <span className="font-mono text-[11px] text-faint">{t('mission.title')}</span>
            </div>
            <span className="font-mono text-[12px] text-faint uppercase tracking-wider">
              {t('mission.tag')}
            </span>
          </div>

          <h3 className={`${spaceGrotesk.className} text-xl font-bold mb-1`}>
            Software Engineer
          </h3>
          <p className="text-muted text-sm mb-5 leading-relaxed">
            {t('mission.role')}
          </p>

          <div className="space-y-1.5 mb-5">
            <div className="flex items-center gap-2 font-mono text-[12.5px]">
              <span className="text-faint">Location</span>
              <span className="w-[4px] h-[4px] rounded-full bg-accent shrink-0" />
              <span>{t('contact.locationText')}</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[12.5px]">
              <span className="text-faint">Focus</span>
              <span className="w-[4px] h-[4px] rounded-full bg-accent shrink-0" />
              <span>Cloud Avenue Terraform Provider</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono leading-none border border-accent-soft bg-accent-fill text-accent rounded-full px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-muted text-sm max-w-[64ch] leading-relaxed">
            {t('mission.description')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
