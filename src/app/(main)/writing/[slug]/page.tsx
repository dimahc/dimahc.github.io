import { getPostContent, getAllSlugs, getPost } from '@/lib/posts'
import { LanguageProvider } from '@/context'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PostContent from '@/components/writing/PostContent'
import ReadingProgress from '@/components/writing/ReadingProgress'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug, 'en')
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} — Writing`,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://dimahc.dev/writing/${slug}`,
      images: [{
        url: `https://dimahc.dev/og/${slug}.svg`,
        width: 1200,
        height: 630,
        alt: post.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`https://dimahc.dev/og/${slug}.svg`],
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const en = getPostContent(slug, 'en')
  const fr = getPostContent(slug, 'fr')

  if (!en && !fr) {
    notFound()
  }

  const postEn = en ?? fr!
  const postFr = fr ?? en!

  return (
    <LanguageProvider>
      <ReadingProgress />
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <div className="max-w-[920px] mx-auto px-8 py-16">
          <a
            href="/writing"
            className="font-[family-name:var(--font-jetbrains-mono)] text-[13px] text-faint hover:text-muted transition-colors inline-flex items-center gap-1.5 mb-10"
          >
            ← Back to posts
          </a>

          <PostContent en={postEn} fr={postFr} />
        </div>

        <Footer />
      </div>
    </LanguageProvider>
  )
}
