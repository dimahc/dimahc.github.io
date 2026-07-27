'use client'

import { useNavigation } from '@/context'
import { useTranslation } from '@/hooks'
import { FileText } from 'lucide-react'
import { useCallback } from 'react'

export default function ExportButton() {
  const { t } = useTranslation()
  const { setActiveSection } = useNavigation()

  const handleExport = useCallback(() => {
    // Navigate to resume section
    setActiveSection('resume')
  }, [setActiveSection])

  return (
    <button
      onClick={handleExport}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 text-sm font-medium shadow-sm hover:shadow-md"
      aria-label={t('export.tooltip')}
      title={t('export.tooltip')}
    >
      <FileText className="w-4 h-4" />
      <span className="hidden md:inline">{t('export.label')}</span>
    </button>
  )
}
