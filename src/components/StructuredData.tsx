import { useLanguage } from '@/context'
import { PERSONAL_INFO } from '@/lib/constants'

export default function StructuredData() {
    const { language } = useLanguage()

    const content = {
        en: {
            name: PERSONAL_INFO.name.full,
            jobTitle: 'Backend Software Engineer',
            description: 'Experienced Backend Software Engineer specializing in Go, Python, and Rust. Building robust and scalable backend systems.',
            url: 'https://dimahc.dev',
        },
        fr: {
            name: PERSONAL_INFO.name.full,
            jobTitle: 'Ingénieur Logiciel Backend',
            description: 'Ingénieur logiciel backend expérimenté spécialisé en Go, Python et Rust. Construction de systèmes backend robustes et évolutifs.',
            url: 'https://dimahc.dev',
        },
    }

    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: content[language].name,
        jobTitle: content[language].jobTitle,
        description: content[language].description,
        url: content[language].url,
        image: 'https://dimahc.dev/images/profile.jpg',
        sameAs: [
            PERSONAL_INFO.social.github,
            PERSONAL_INFO.social.linkedin,
        ],
        knowsAbout: [
            'Go',
            'Python',
            'Rust',
            'Backend Development',
            'Software Architecture',
            'Distributed Systems',
            'Database Design',
            'API Development',
        ],
    }

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: `${content[language].name} - Portfolio`,
        url: content[language].url,
        description: content[language].description,
        author: {
            '@type': 'Person',
            name: content[language].name,
        },
        inLanguage: language === 'en' ? 'en-US' : 'fr-FR',
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    )
}
