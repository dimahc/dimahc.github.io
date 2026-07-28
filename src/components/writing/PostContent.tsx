'use client'

import { useState, useCallback, useEffect } from 'react'
import { useTheme } from 'next-themes'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import TableOfContents from '@/components/writing/TableOfContents'
import MermaidDiagram from '@/components/writing/MermaidDiagram'
import { highlightCode } from '@/lib/highlighter'
import type { PostMeta } from '@/lib/posts'
import { SITE_URL } from '@/lib/constants'

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function CodeBlock({ code, lang, theme }: { code: string; lang: string; theme: 'github-dark' | 'github-light' }) {
  const [html, setHtml] = useState<string | null>(null)

  useEffect(() => {
    highlightCode(code, lang, theme).then(setHtml)
  }, [code, lang, theme])

  if (!html) {
    return (
      <div className="relative group my-7">
        <pre className="bg-sunken border border-border rounded-[10px] p-[22px_24px] overflow-x-auto text-muted pt-12">
          <code className="font-[family-name:var(--font-jetbrains-mono)] text-[13px] leading-[1.8]">{code}</code>
        </pre>
        {lang && (
          <div className="absolute top-3 left-3 font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-wider text-faint pointer-events-none select-none">
            {lang}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative group my-7">
      <div
        className="bg-sunken border border-border rounded-[10px] overflow-x-auto text-muted [&_pre]:p-[22px_24px] [&_pre]:!bg-transparent [&_pre]:!m-0 [&_code]:!font-[family-name:var(--font-jetbrains-mono)] [&_code]:text-[13px] [&_code]:leading-[1.8]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {lang && (
        <div className="absolute top-3 left-3 font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-wider text-faint pointer-events-none select-none">
          {lang}
        </div>
      )}
      <CopyButton code={code} />
    </div>
  )
}

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // fallback
    }
  }, [code])

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 font-[family-name:var(--font-jetbrains-mono)] text-[11px] px-2 py-1 rounded-md border border-border bg-surface text-faint opacity-0 group-hover:opacity-100 transition-opacity duration-150 hover:text-accent hover:border-accent"
      aria-label="Copy code"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

type PostData = {
  meta: PostMeta
  content: string
}

export default function PostContent({
  post,
  locale,
}: {
  post: PostData
  locale: 'en' | 'fr'
}) {
  const { resolvedTheme } = useTheme()
  const currentTheme = resolvedTheme === 'light' ? 'github-light' : 'github-dark'
  const { meta, content } = post

  const MarkdownComponents = {
    h2: ({ children, ...props }: any) => {
      const text = typeof children === 'string' ? children : ''
      const id = slugify(text)
      return (
        <h2 id={id || undefined} className="group font-[family-name:var(--font-space-grotesk)] font-bold text-[20px] mt-10 mb-4 pb-3 border-b border-line-soft text-foreground relative" {...props}>
          {id && (
            <a href={`#${id}`} className="absolute -left-6 top-1/2 -translate-y-1/2 text-faint opacity-0 group-hover:opacity-100 transition-opacity duration-150 no-underline hover:text-accent pr-2">
              #
            </a>
          )}
          {children}
        </h2>
      )
    },
    h3: ({ children, ...props }: any) => {
      const text = typeof children === 'string' ? children : ''
      const id = slugify(text)
      return (
        <h3 id={id || undefined} className="group font-[family-name:var(--font-space-grotesk)] font-bold text-[17px] mt-8 mb-3 text-foreground relative" {...props}>
          {id && (
            <a href={`#${id}`} className="absolute -left-6 top-1/2 -translate-y-1/2 text-faint opacity-0 group-hover:opacity-100 transition-opacity duration-150 no-underline hover:text-accent pr-2">
              #
            </a>
          )}
          {children}
        </h3>
      )
    },
    p: ({ children, ...props }: any) => (
      <p className="text-muted mb-[22px] leading-[1.75]" {...props}>
        {children}
      </p>
    ),
    a: ({ href, children, ...props }: any) => {
      const isExternal = href?.startsWith('http')
      return (
        <a
          href={href}
          className="text-accent hover:text-accent/80 transition-colors duration-150"
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...props}
        >
          {children}
        </a>
      )
    },
    code: ({ children, className, ...props }: any) => {
      const isInline = !className
      if (isInline) {
        return (
          <code className="font-[family-name:var(--font-jetbrains-mono)] text-[13px] bg-sunken px-[5px] py-[2px] rounded-[4px] text-muted" {...props}>
            {children}
          </code>
        )
      }
      return (
        <code className="font-[family-name:var(--font-jetbrains-mono)] text-[13px] leading-[1.8]" {...props}>
          {children}
        </code>
      )
    },
    pre: ({ children, ...props }: any) => {
      const codeEl = children?.props?.children ?? ''
      const codeClassName = children?.props?.className || ''
      const match = /language-(\w+)/.exec(codeClassName)

      if (match) {
        const codeStr = String(codeEl).replace(/\n$/, '')
        const lang = match[1]
        if (lang === 'mermaid') {
          return <MermaidDiagram chart={codeStr} />
        }
        return <CodeBlock code={codeStr} lang={lang} theme={currentTheme} />
      }

      return (
        <pre className="bg-sunken border border-border rounded-[10px] p-[22px_24px] overflow-x-auto my-7 text-muted" {...props}>
          {children}
        </pre>
      )
    },
    ul: ({ children, ...props }: any) => (
      <ul className="text-muted mb-[22px] pl-6 list-disc space-y-1.5" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: any) => (
      <ol className="text-muted mb-[22px] pl-6 list-decimal space-y-1.5" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: any) => (
      <li className="leading-[1.75]" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }: any) => (
      <blockquote className="border-l-2 border-accent pl-5 my-7 text-muted italic" {...props}>
        {children}
      </blockquote>
    ),
    hr: (props: any) => (
      <hr className="border-line-soft my-10" {...props} />
    ),
    strong: ({ children, ...props }: any) => (
      <strong className="font-semibold text-foreground" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }: any) => (
      <em className="italic" {...props}>
        {children}
      </em>
    ),
  }

  const shareUrl = `${SITE_URL}/${locale}/blog/${meta.slug}`
  const shareText = encodeURIComponent(meta.title)

  return (
    <article>
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <time className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] text-faint">
            {formatDate(meta.date)}
          </time>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] text-faint">·</span>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] text-faint">
            {meta.readTime}
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[28px] md:text-[32px] leading-[1.2] mb-4">
          {meta.title}
        </h1>

        <p className="text-muted text-[16px] leading-[1.7] max-w-[65ch]">
          {meta.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] px-2.5 py-0.5 border border-border rounded-full text-faint bg-sunken/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <TableOfContents content={content} />
      <ReactMarkdown components={MarkdownComponents} remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>

      <div className="border-t border-line-soft mt-14 pt-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[13px] font-medium text-accent">
                AH
              </span>
            </div>
            <div>
              <div className="text-sm font-medium">Abdoul Hamid</div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-faint">
                {locale === 'fr' ? 'Ingénieur Backend' : 'Backend Engineer'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-faint uppercase tracking-wider">
              {locale === 'fr' ? 'Partager' : 'Share'}
            </span>
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank" rel="noopener noreferrer"
              className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] text-muted hover:text-accent transition-colors"
            >
              X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank" rel="noopener noreferrer"
              className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] text-muted hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
