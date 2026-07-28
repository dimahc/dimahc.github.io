import { getPostContent, getAllSlugs, getPost } from '@/lib/posts'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PostContent from '@/components/writing/PostContent'
import ReadingProgress from '@/components/writing/ReadingProgress'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { Language } from '@/types'
import { SITE_URL } from '@/lib/constants'
export function generateStaticParams() {
  const slugs = getAllSlugs()
  const locales = ['fr', 'en'] as const
  const params: { slug: string; locale: Language }[] = []
  for (const slug of slugs) {
    for (const locale of locales) {
      params.push({ slug, locale })
    }
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: Language }> }): Promise<Metadata> {
  const { slug, locale } = await params
  const post = getPost(slug, locale as 'en' | 'fr')
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} — Blog`,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/${locale}/blog/${slug}`,
      images: [{
        url: `${SITE_URL}/og/${slug}.svg`,
        width: 1200,
        height: 630,
        alt: post.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${SITE_URL}/og/${slug}.svg`],
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string; locale: Language }> }) {
  const { slug, locale } = await params

  const post = getPostContent(slug, locale as 'en' | 'fr')

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
            href={`/${locale}/blog`}
            className="font-[family-name:var(--font-jetbrains-mono)] text-[13px] text-faint hover:text-muted transition-colors inline-flex items-center gap-1.5 mb-10"
          >
            ← Back to posts
          </a>

          <PostContent post={post} locale={locale as 'en' | 'fr'} />
        </div>
        <Footer />
      </div>
    </>
  )
}
