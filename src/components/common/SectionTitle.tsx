'use client'

import { useNavigation } from '@/context'
import { useTranslation } from '@/hooks'
import { memo } from 'react'

function SectionTitle() {
    const { t } = useTranslation()
    const { activeSection } = useNavigation()

    const title = t(`navigation.${activeSection}`)

    return (
        <div className="sticky top-0 py-6 z-10 border-b border-border mb-8" style={{ backgroundColor: 'rgb(var(--color-background))' }}>
            <h2 className="text-3xl md:text-4xl font-light">{title}</h2>
        </div>
    )
}

export default memo(SectionTitle)
