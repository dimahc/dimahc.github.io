import { useNavigation } from '@/context'
import { useTranslation } from '@/hooks'
import { fadeIn, fadeInLeft, fadeInUp, getTransition } from '@/lib/animations'
import { PERSONAL_INFO } from '@/lib/constants'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { memo } from 'react'

function Hero() {
  const { t } = useTranslation()
  const { setActiveSection } = useNavigation()

  return (
    <div className="space-y-6">
      <motion.div
        className="space-y-3"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={getTransition(0)}
      >
        <h1 className="text-4xl md:text-5xl font-light">
          {PERSONAL_INFO.name.first}<br />
          <span className="font-normal">{PERSONAL_INFO.name.last}</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-muted font-medium">{t('hero.title')}</h2>
        <p className="text-base text-muted/80">{t('hero.subtitle')}</p>
      </motion.div>

      <motion.p
        className="text-lg text-muted max-w-2xl"
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={getTransition(0.2)}
      >
        {t('hero.tagline')}
      </motion.p>

      <motion.div
        className="flex items-center gap-6"
        variants={fadeInLeft}
        initial="initial"
        animate="animate"
        transition={getTransition(0.4)}
      >
        <a
          href={PERSONAL_INFO.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-blue-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a
          href={PERSONAL_INFO.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-blue-400 transition-colors"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href={`mailto:${PERSONAL_INFO.email.professional}`}
          className="text-muted hover:text-blue-400 transition-colors"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>
      </motion.div>

      <div className="space-y-4">
        <p className="text-base md:text-lg text-muted max-w-2xl">
          {t('hero.cta')}
        </p>
        <button
          onClick={() => setActiveSection('contact')}
          className="get-in-touch group"
          aria-label={t('hero.getInTouch')}
        >
          <span>{t('hero.getInTouch')}</span>
          <svg
            className="ml-2 w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default memo(Hero)
