'use client'

import { useTranslation } from '@/hooks/useTranslation'
import LanguageToggle from '@/components/common/LanguageToggle'
import ThemeToggle from '@/components/common/ThemeToggle'

const navItems = ['now', 'experience', 'oss', 'writing', 'contact'] as const

export default function Nav() {
  const { t } = useTranslation()

  return (
    <nav className="sticky top-0 z-20 bg-background/85 backdrop-blur-sm border-b border-line-soft">
      <div className="max-w-[920px] mx-auto px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <a href="/" className="font-bold text-[17px] tracking-tight hover:text-accent transition-colors shrink-0">
            dimahc<span className="text-accent">.dev</span>
          </a>
          <div className="hidden sm:flex gap-7 text-sm text-muted">
            {navItems.map((id) => (
              <a
                key={id}
                href={id === 'writing' ? '/writing' : `/#${id}`}
                className="transition-colors duration-150 hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 focus-visible:rounded-sm"
              >
                {t(`nav.${id}`)}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  )
}
