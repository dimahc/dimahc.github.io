'use client'

import { useParams } from 'next/navigation'
import type { PostMeta } from '@/lib/posts'

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function PostList({ posts }: { posts: PostMeta[] }) {
  const params = useParams()
  const locale = (params?.locale as string) || 'fr'
  const filtered = posts.filter((p) => p.lang === locale)

  if (filtered.length === 0) {
    return <p className="text-muted">No posts yet.</p>
  }

  return (
    <div className="space-y-6">
      {filtered.map((post) => (
        <article
          key={`${post.slug}-${post.lang}`}
          className="border border-border rounded-[10px] p-6 bg-surface hover:border-line-soft hover:shadow-sm transition-all"
        >
          <div className="flex items-center gap-3 mb-2">
            <time className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] text-faint">
              {formatDate(post.date)}
            </time>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] text-faint">·</span>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] text-faint">
              {post.readTime}
            </span>
          </div>

          <a href={`/${locale}/blog/${post.slug}`} className="group">
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[17px] mb-2 group-hover:text-accent transition-colors">
              {post.title}
            </h2>
          </a>

          <p className="text-muted text-[14px] mb-4 leading-[1.6]">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] px-2.5 py-0.5 border border-border rounded-full text-faint bg-sunken/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}
