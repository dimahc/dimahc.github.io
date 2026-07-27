'use client'

import LanguageToggle from '@/components/common/LanguageToggle'
import SectionTitle from '@/components/common/SectionTitle'
import SkipToContent from '@/components/common/SkipToContent'
import ThemeToggle from '@/components/common/ThemeToggle'
import Contact from '@/components/Contact'
import About from '@/components/home/About'
import Experience from '@/components/home/Experience'
import Hero from '@/components/home/Hero'
import Projects from '@/components/home/Projects'
import Footer from '@/components/layout/Footer'
import MobileNav from '@/components/layout/MobileNav'
import Navigation from '@/components/layout/Navigation'
import Resume from '@/components/Resume'
import StructuredData from '@/components/StructuredData'
import ExportButton from '@/components/ui/ExportButton'
import { LanguageProvider, NavigationProvider, useNavigation } from '@/context'
import { useReducedMotion } from '@/hooks'

function HomeContent() {
  const prefersReducedMotion = useReducedMotion()
  const { activeSection } = useNavigation()

  const animationClass = prefersReducedMotion
    ? ''
    : 'animate-in fade-in slide-in-from-bottom-4 duration-500'

  return (
    <div className="min-h-screen p-8 md:p-16">
      <StructuredData />
      <SkipToContent />
      <div className="fixed top-8 right-8 flex items-center gap-2 md:gap-4 z-50">
        <ExportButton />
        <LanguageToggle />
        <ThemeToggle />
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="lg:fixed lg:top-16 lg:max-w-lg lg:h-[calc(100vh-8rem)] lg:flex lg:flex-col lg:justify-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="hidden lg:block">
                <Navigation />
              </div>
              <Hero />
            </div>
          </div>
          <div id="main-content" className="lg:col-start-2">
            <div className="space-y-8">
              <div>
                <SectionTitle />
                <div className="pt-8 transition-opacity duration-300 ease-in-out">
                  <div className="space-y-16">
                    {activeSection === 'about' && (
                      <div className={animationClass}>
                        <About />
                      </div>
                    )}
                    {activeSection === 'experience' && (
                      <div className={animationClass}>
                        <Experience />
                      </div>
                    )}
                    {activeSection === 'projects' && (
                      <div className={animationClass}>
                        <Projects />
                      </div>
                    )}
                    {activeSection === 'resume' && (
                      <div className={animationClass}>
                        <Resume />
                      </div>
                    )}
                    {activeSection === 'contact' && (
                      <div className={animationClass}>
                        <Contact />
                      </div>
                    )}
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <HomeContent />
      </NavigationProvider>
    </LanguageProvider>
  )
}
