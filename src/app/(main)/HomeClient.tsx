'use client'

import HeroSection from '@/components/home/HeroSection'
import NowSection from '@/components/home/NowSection'
import ContactSection from '@/components/home/ContactSection'
import OpenSourceSection from '@/components/home/OpenSourceSection'
import TimelineSection from '@/components/home/TimelineSection'
import WritingSection from '@/components/home/WritingSection'
import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import StructuredData from '@/components/StructuredData'
import { LanguageProvider } from '@/context'
import type { PostMeta } from '@/lib/posts'

export default function HomeClient({ posts }: { posts: PostMeta[] }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <StructuredData />
        <Nav />
        <main>
          <HeroSection />
          <NowSection />
          <TimelineSection />
          <OpenSourceSection />
          <WritingSection posts={posts} />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
