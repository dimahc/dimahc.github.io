import { getPostContent, getAllSlugs } from '@/lib/posts'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PostContent from '@/components/writing/PostContent'
import ReadingProgress from '@/components/writing/ReadingProgress'
import { notFound } from 'next/navigation'
import type { Language } from '@/types'

export function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostRootPage({ params }: Props) {
  const { slug } = await params
  const locale: Language = 'fr'

  const post = getPostContent(slug, locale)

  if (!post) {
    notFound()
  }

  return (
    <>
      <ReadingProgress />
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <div className="max-w-[920px] mx-auto px-8 py-16">
          <a
            href="/blog"
            className="font-[family-name:var(--font-jetbrains-mono)] text-[13px] text-faint hover:text-muted transition-colors inline-flex items-center gap-1.5 mb-10"
          >
            ← Retour aux articles
          </a>

          <PostContent post={post} locale={locale} />
        </div>
        <Footer />
      </div>
    </>
  )
}
