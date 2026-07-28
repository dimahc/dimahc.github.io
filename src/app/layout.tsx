import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Abdoul Hamid — Backend Engineer',
  description:
    'Go & Python backend engineer, 4+ years on distributed data platforms: real-time ingestion, event-driven services, and open source Terraform.',
  keywords: [
    'Backend Engineer',
    'Software Developer',
    'Go',
    'Python',
    'Terraform',
    'Distributed Systems',
  ],
  authors: [{ name: 'Abdoul Hamid COULIBALY' }],
  creator: 'Abdoul Hamid COULIBALY',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://dimahc.dev',
    title: 'Abdoul Hamid — Backend Engineer',
    description:
      'Go & Python backend engineer, 4+ years on distributed data platforms.',
    siteName: 'dimahc.dev',
    images: [
      {
        url: 'https://dimahc.dev/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdoul Hamid COULIBALY - Backend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdoul Hamid — Backend Engineer',
    description:
      'Go & Python backend engineer, 4+ years on distributed data platforms.',
    images: ['https://dimahc.dev/images/profile.jpg'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="dimahc.dev"
          href="https://dimahc.dev/feed.xml"
        />
      </head>
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
