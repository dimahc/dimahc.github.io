'use client'

import { useParams, usePathname } from 'next/navigation'
import { useTranslation } from '@/hooks'
import { Languages } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCallback } from 'react'

export default function LanguageToggle() {
  const params = useParams()
  const locale = (params?.locale as string) || 'fr'
  const pathname = usePathname()
  const { t } = useTranslation()

  const toggleLanguage = useCallback(() => {
    const targetLocale = locale === 'en' ? 'fr' : 'en'
    const newPathname = pathname.replace(/^\/(en|fr)/, `/${targetLocale}`)
    window.location.href = newPathname
  }, [locale, pathname])

  return (
    <motion.button
      onClick={toggleLanguage}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="inline-flex items-center gap-1.5 px-2 py-1.5 text-xs font-medium hover:bg-foreground/5 rounded-md transition-colors border border-border"
      aria-label={t('language.switchTo')}
      title={t('language.switchTo')}
    >
      <motion.span
        key={locale}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Languages size={14} className="text-muted" />
      </motion.span>
      {locale.toUpperCase()}
    </motion.button>
  )
}
