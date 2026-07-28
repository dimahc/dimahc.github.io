'use client'

import HeroSection from '@/components/home/HeroSection'
import NowSection from '@/components/home/NowSection'
import AboutSection from '@/components/home/AboutSection'
import ContactSection from '@/components/home/ContactSection'
import OpenSourceSection from '@/components/home/OpenSourceSection'
import TimelineSection from '@/components/home/TimelineSection'
import ProjectsPreviewSection from '@/components/home/ProjectsPreviewSection'
import WritingSection from '@/components/home/WritingSection'
import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import StructuredData from '@/components/StructuredData'
import type { PostMeta } from '@/lib/posts'

export default function HomeClient({ posts, locale }: { posts: PostMeta[]; locale: 'en' | 'fr' }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StructuredData />
      <Nav />
      <main>
        <HeroSection />
        <NowSection />
        <AboutSection />
        <TimelineSection />
        <OpenSourceSection />
        <ProjectsPreviewSection />
        <WritingSection posts={posts} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
