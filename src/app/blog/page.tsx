import { getAllPosts } from '@/lib/posts'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PostList from '@/components/writing/PostList'
import type { Language } from '@/types'

export default function BlogRootPage() {
  const locale: Language = 'fr'
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="max-w-[920px] mx-auto px-8 py-16">
        <div className="flex items-baseline gap-3.5 mb-12">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] text-faint uppercase tracking-wider">
            /blog
          </span>
          <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold text-2xl">
            Blog
          </h1>
        </div>
        <PostList posts={posts} />
      </main>
      <Footer />
    </div>
  )
}
