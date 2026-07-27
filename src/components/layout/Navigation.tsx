import { useNavigation } from '@/context'
import { useTranslation } from '@/hooks'
import { NAVIGATION_SECTIONS } from '@/lib/constants'
import { memo, type KeyboardEvent } from 'react'

function Navigation() {
  const { activeSection, setActiveSection } = useNavigation()
  const { t } = useTranslation()

  const handleKeyPress = (e: KeyboardEvent<HTMLButtonElement>, sectionId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveSection(sectionId)
    }
  }

  return (
    <nav className="space-y-4 mb-16" aria-label="Main navigation">
      {NAVIGATION_SECTIONS.map((section) => (
        <div key={section.id}>
          <button
            onClick={() => setActiveSection(section.id)}
            className={`nav-link uppercase ${activeSection === section.id ? 'text-foreground' : 'text-muted'}`}
            onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => handleKeyPress(e, section.id)}
            aria-label={t('navigation.ariaNavigateTo', { section: t(`navigation.${section.id}`) })}
            aria-current={activeSection === section.id ? 'page' : undefined}
          >
            {t(`navigation.${section.id}`)}
          </button>
        </div>
      ))}
    </nav>
  )
}

export default memo(Navigation)
