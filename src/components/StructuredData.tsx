import { useParams } from 'next/navigation'
import { PERSONAL_INFO, SITE_URL } from '@/lib/constants'

export default function StructuredData() {
    const params = useParams()
    const language = (params?.locale as 'en' | 'fr') || 'fr'

    const content = {
        en: {
            name: PERSONAL_INFO.name.full,
            jobTitle: 'Backend Software Engineer',
            description: 'Experienced Backend Software Engineer specializing in Go, Python, and Rust. Building robust and scalable backend systems.',
            url: SITE_URL,
        },
        fr: {
            name: PERSONAL_INFO.name.full,
            jobTitle: 'Ingénieur Logiciel Backend',
            description: 'Ingénieur logiciel backend expérimenté spécialisé en Go, Python et Rust. Construction de systèmes backend robustes et évolutifs.',
            url: SITE_URL,
        },
    }

    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: content[language].name,
        jobTitle: content[language].jobTitle,
        description: content[language].description,
        url: content[language].url,
        image: `${SITE_URL}/images/profile.jpg`,
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
