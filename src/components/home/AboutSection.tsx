'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
})

export default function AboutSection() {
  const { t, tArray } = useTranslation()

  const paragraphs = tArray('about.paragraphs')

  return (
    <section id="about" className="py-16 border-t border-line-soft">
      <div className="max-w-[920px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-surface border border-border rounded-[10px] p-7"
        >
          <div className="flex items-baseline gap-3.5 mb-8">
            <span className="font-mono text-[12px] text-faint uppercase tracking-wider">00 — about</span>
            <h2 className={`${spaceGrotesk.className} font-bold text-2xl`}>{t('about.title')}</h2>
          </div>

          <p className="text-[16.5px] text-foreground leading-relaxed mb-8 max-w-[65ch]">
            {t('about.summary')}
          </p>

          <div className="space-y-5">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted text-[14.5px] leading-[1.7] max-w-[68ch]">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
