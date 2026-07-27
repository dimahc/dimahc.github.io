'use client'

import { useLanguage } from '@/context'
import { useTranslation } from '@/hooks'
import { Languages } from 'lucide-react'

export default function LanguageToggle() {
  const { t, language } = useTranslation()
  const { toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1.5 px-2 py-1.5 text-xs font-medium hover:bg-foreground/5 rounded-md transition-colors border border-border"
      aria-label={t('language.switchTo')}
      title={t('language.switchTo')}
    >
      <Languages size={14} className="text-muted" />
      {language.toUpperCase()}
    </button>
  )
}
