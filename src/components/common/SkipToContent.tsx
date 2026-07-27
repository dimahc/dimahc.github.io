import { useLanguage } from '@/context'

export default function SkipToContent() {
    const { language } = useLanguage()

    const content = {
        en: 'Skip to main content',
        fr: 'Aller au contenu principal',
    }

    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
            {content[language]}
        </a>
    )
}
