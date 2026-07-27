'use client'

import { useLanguage } from '@/context'
import { Download } from 'lucide-react'

const PDF_FILES = {
  en: 'CV_Backend_Eng_Abdoul_Hamid_Coulibaly_EN.pdf',
  fr: 'CV_Backend_Eng_Abdoul_Hamid_Coulibaly_FR.pdf',
} as const

const DOWNLOAD_LABELS = {
  en: 'Download PDF',
  fr: 'Télécharger le PDF',
} as const

const LOADING_LABELS = {
  en: 'Loading PDF…',
  fr: 'Chargement du PDF…',
} as const

const FALLBACK_LABELS = {
  en: 'Your browser cannot display the PDF. You can download it using the button above.',
  fr: 'Votre navigateur ne peut pas afficher le PDF. Vous pouvez le télécharger via le bouton ci-dessus.',
} as const

export default function Resume() {
  const { language } = useLanguage()
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const pdfUrl = `${basePath}/static/resume/${language}/${PDF_FILES[language]}`

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <a
          href={pdfUrl}
          download={PDF_FILES[language]}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 text-sm font-medium shadow-sm hover:shadow-md"
        >
          <Download className="w-4 h-4" />
          <span>{DOWNLOAD_LABELS[language]}</span>
        </a>
      </div>

      <div className="w-full rounded-xl overflow-hidden border border-border shadow-md bg-muted/30">
        <object
          data={pdfUrl}
          type="application/pdf"
          className="w-full"
          style={{ height: 'calc(100vh - 12rem)' }}
          aria-label={LOADING_LABELS[language]}
        >
          <p className="p-6 text-sm text-muted-foreground text-center">
            {FALLBACK_LABELS[language]}{' '}
            <a href={pdfUrl} download={PDF_FILES[language]} className="underline text-foreground">
              {DOWNLOAD_LABELS[language]}
            </a>
          </p>
        </object>
      </div>
    </div>
  )
}
