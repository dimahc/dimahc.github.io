'use client'

import { useNavigation } from '@/context'
import { useTranslation } from '@/hooks'
import { NAVIGATION_SECTIONS } from '@/lib/constants'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { activeSection, setActiveSection } = useNavigation()
  const { t } = useTranslation()

  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
        className="relative z-50 p-2 hover:bg-foreground/5 rounded-md transition-colors border border-border"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100]"
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
          <div className="relative h-full flex flex-col items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(false)
              }}
              className="absolute top-8 right-8 p-2 hover:bg-foreground/5 rounded-md transition-colors border border-border"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
            <nav
              className="flex flex-col items-center space-y-8"
              onClick={(e) => e.stopPropagation()}
            >
              {NAVIGATION_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleClick(section.id)}
                  className={`text-2xl transition-colors hover:text-foreground ${activeSection === section.id ? 'text-foreground' : 'text-muted'
                    }`}
                >
                  {t(`navigation.${section.id}`)}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
