import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Space_Grotesk } from 'next/font/google'
import '../globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abdoul Hamid COULIBALY - Software Engineer',
  description: 'Backend Software Engineer Portfolio',
  keywords: ['Backend Engineer', 'Software Developer', 'Go', 'Python', 'Rust'],
  authors: [{ name: 'Abdoul Hamid COULIBALY' }],
  creator: 'Abdoul Hamid COULIBALY',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dimahc.dev',
    title: 'Abdoul Hamid COULIBALY - Backend Software Engineer',
    description: 'Experienced Backend Software Engineer specializing in Go, Python, and Rust. Building robust and scalable backend systems.',
    siteName: 'Abdoul Hamid COULIBALY Portfolio',
    images: [
      {
        url: 'https://dimahc.dev/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdoul Hamid COULIBALY - Backend Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdoul Hamid COULIBALY - Backend Software Engineer',
    description: 'Experienced Backend Software Engineer specializing in Go, Python, and Rust.',
    images: ['https://dimahc.dev/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: './icon.svg',
        type: 'image/svg+xml',
        sizes: 'any'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="./icon.svg" type="image/svg+xml" />
      </head>
      <body className={`${spaceGrotesk.className} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
