'use client'

import { useEffect, useState, useRef } from 'react'

type TocItem = {
  id: string
  text: string
  level: number
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function parseHeadings(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const items: TocItem[] = []
  let match
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = slugify(text)
    items.push({ id, text, level })
  }
  return items
}

export default function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)
  const headings = parseHeadings(content)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (headings.length === 0) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )

    for (const { id } of headings) {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    }

    return () => observerRef.current?.disconnect()
  }, [headings])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (headings.length === 0) return null

  return (
    <>
      {/* Mobile collapsible — visible below lg */}
      <nav className="lg:hidden mb-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 w-full font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase tracking-wider text-faint hover:text-muted transition-colors"
        >
          <svg
            className={`w-3 h-3 transition-transform duration-150 ${isOpen ? 'rotate-90' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
          Table of Contents
        </button>
        {isOpen && (
          <ul className="mt-4 space-y-1.5">
            {headings.map(({ id, text, level }) => (
              <li key={id} className={level === 3 ? 'pl-4' : ''}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`block text-[13px] py-0.5 transition-colors duration-150 ${
                    activeId === id
                      ? 'text-accent'
                      : 'text-faint hover:text-muted'
                  }`}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Desktop — fixed right panel */}
      <aside className="hidden lg:block fixed right-8 top-24 z-20 w-[200px] max-h-[calc(100vh-8rem)] overflow-y-auto">
        <div className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase tracking-wider text-faint mb-4">
          On this page
        </div>
        <ul className="space-y-0.5">
          {headings.map(({ id, text, level }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`block text-[13px] py-1 pl-3 border-l-2 transition-all duration-150 ${
                  activeId === id
                    ? 'text-accent border-accent'
                    : 'text-faint border-line-soft hover:text-muted hover:border-muted'
                } ${level === 3 ? 'pl-6' : ''}`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
