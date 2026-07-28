'use client'
import { useParams } from 'next/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
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

export default function WritingSection({ posts }: { posts: PostMeta[] }) {
  const params = useParams()
  const locale = (params?.locale as 'en' | 'fr') || 'fr'
  const { t } = useTranslation()

  return (
    <section id="blog">
      <div className="max-w-[920px] mx-auto px-8 py-16 border-t border-line-soft">
        <div className="flex items-baseline gap-3.5 mb-8">
          <span className="font-mono text-[12px] text-faint uppercase tracking-wider">{t('writing.tag')}</span>
          <h2 className="font-bold text-2xl">{t('writing.title')}</h2>
          {posts && posts.length > 0 && (
            <span className="font-mono text-[12px] text-faint">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </span>
          )}
          <a
            href="/feed.xml"
            className="font-mono text-[12px] text-accent hover:text-accent/80 transition-colors ml-auto"
          >
            RSS
          </a>
        </div>

        {!posts || posts.length === 0 ? (
          <div className="border border-border rounded-[10px] p-7 text-center bg-surface">
            <p className="text-muted text-[14.5px] mb-5 max-w-[48ch] mx-auto leading-[1.7]">
              {t('writing.emptyTitle')}
            </p>
            <p className="text-muted text-[14.5px] max-w-[48ch] mx-auto leading-[1.7]">
              {t('writing.emptyDesc')}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true, margin: '-60px' }}
              >
                <article className="bg-surface border border-border rounded-[10px] p-6">
                  <a href={`/${locale}/blog/${post.slug}`} className="group">
                    <h3 className="font-bold text-[17px] mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                  </a>

                  <p className="text-muted text-[14.5px] mb-4 leading-[1.7]">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <time className="font-mono text-[12px] text-faint">
                      {formatDate(post.date)}
                    </time>
                    <span className="font-mono text-[12px] text-faint">·</span>
                    <span className="font-mono text-[12px] text-faint">
                      {post.readTime}
                    </span>
                  </div>

                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] px-2.5 py-0.5 border border-border rounded-full text-faint"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={`/${locale}/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 font-medium transition-colors text-[14.5px]"
                  >
                    Read article →
                  </a>
                </article>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
