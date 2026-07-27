'use client'

import { DEFAULT_LANGUAGE } from '@/lib/constants'
import type { Language } from '@/types'
import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'

interface LanguageContextType {
    language: Language
    setLanguage: (language: Language) => void
    toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang)
    }, [])

    const toggleLanguage = useCallback(() => {
        setLanguageState(prev => prev === 'en' ? 'fr' : 'en')
    }, [])

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
