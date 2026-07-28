import { SITE_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Abdoul Hamid — Backend Engineer',
    description:
      'Go & Python backend engineer, 4+ years on distributed data platforms: real-time ingestion, event-driven services, and open source Terraform.',
    openGraph: {
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      url: `${SITE_URL}/${locale}`,
    },
    twitter: {
      title: 'Abdoul Hamid — Backend Engineer',
      description:
        'Go & Python backend engineer, 4+ years on distributed data platforms.',
    },
  }
}

export default function LocaleLayout({ children }: Props) {
  return <>{children}</>
}
