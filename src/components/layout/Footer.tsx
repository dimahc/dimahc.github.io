'use client'
import { Mail, Github, Linkedin, FileText } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function Footer() {
  const { t, language } = useTranslation()
  
  const resumeHref = language === 'fr' 
    ? '/static/resume/fr/CV_Backend_Eng_Abdoul_Hamid_Coulibaly_FR.pdf'
    : '/static/resume/en/CV_Backend_Eng_Abdoul_Hamid_Coulibaly_EN.pdf'
  
  return (
    <footer>
      <div className="max-w-[920px] mx-auto px-8 py-14 md:py-16">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <div>
            <div className="font-semibold text-base mb-1">{t('footer.cta')}</div>
            <a href="/" className="font-mono text-[12px] text-faint hover:text-accent transition-colors">dimahc.dev</a>
          </div>
          <div className="flex gap-[22px] text-sm">
            <a href="mailto:hello@dimahc.dev" className="text-muted hover:text-accent transition-colors inline-flex items-center gap-1.5">
              <Mail size={14} className="shrink-0" />{t('footer.email')}
            </a>
            <a href="https://github.com/dimahc" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors inline-flex items-center gap-1.5">
              <Github size={14} className="shrink-0" />{t('footer.github')}
            </a>
            <a href="https://www.linkedin.com/in/abdoul-hamid-coulibaly/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors inline-flex items-center gap-1.5">
              <Linkedin size={14} className="shrink-0" />{t('footer.linkedin')}
            </a>
            <a href={resumeHref} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors inline-flex items-center gap-1.5">
              <FileText size={14} className="shrink-0" />{t('footer.resume')}
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-faint text-xs">
          &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}