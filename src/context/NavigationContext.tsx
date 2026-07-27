'use client'

import { DEFAULT_SECTION } from '@/lib/constants'
import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'

interface NavigationContextType {
    activeSection: string
    setActiveSection: (section: string) => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [activeSection, setActiveSectionState] = useState<string>(DEFAULT_SECTION)

    const setActiveSection = useCallback((section: string) => {
        setActiveSectionState(section)
    }, [])

    return (
        <NavigationContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </NavigationContext.Provider>
    )
}

export function useNavigation() {
    const context = useContext(NavigationContext)
    if (context === undefined) {
        throw new Error('useNavigation must be used within a NavigationProvider')
    }
    return context
}
