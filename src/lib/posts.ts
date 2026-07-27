import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Language } from '@/types'

const contentDir = path.join(process.cwd(), 'src/content/writing')

export type PostMeta = {
  slug: string
  lang: Language
  title: string
  date: string
  description: string
  tags: string[]
  readTime: string
}

function calcReadTime(content: string, lang: Language): string {
  const words = content.trim().split(/\s+/).length
  const wpm = lang === 'fr' ? 180 : 200
  const minutes = Math.max(1, Math.round(words / wpm))
  return `${minutes} min read`
}

export function getAllPosts(): PostMeta[] {
  const dir = path.join(process.cwd(), 'src/content/writing')
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))

  const posts = files.flatMap((file) => {
    const match = file.match(/^(.+)\.(en|fr)\.mdx$/)
    if (!match) return []
    const slug = match[1]
    const lang = match[2] as Language

    const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
    const { data, content } = matter(raw)
    return {
      slug,
      lang,
      title: data.title ?? slug,
      date: data.date ?? '',
      description: data.description ?? '',
      tags: data.tags ?? [],
      readTime: data.readTime ?? calcReadTime(content, lang),
    } as PostMeta
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostsByLang(lang: Language): PostMeta[] {
  return getAllPosts().filter((p) => p.lang === lang)
}

export function getPost(slug: string, lang: Language): PostMeta | null {
  try {
    const raw = fs.readFileSync(path.join(contentDir, `${slug}.${lang}.mdx`), 'utf-8')
    const { data, content } = matter(raw)
    return {
      slug,
      lang,
      title: data.title ?? slug,
      date: data.date ?? '',
      description: data.description ?? '',
      tags: data.tags ?? [],
      readTime: data.readTime ?? calcReadTime(content, lang),
    } as PostMeta
  } catch {
    return null
  }
}

export function getPostContent(slug: string, lang: Language): { meta: PostMeta; content: string } | null {
  try {
    const raw = fs.readFileSync(path.join(contentDir, `${slug}.${lang}.mdx`), 'utf-8')
    const { data, content } = matter(raw)
    return {
      meta: {
        slug,
        lang,
        title: data.title ?? slug,
        date: data.date ?? '',
        description: data.description ?? '',
        tags: data.tags ?? [],
        readTime: data.readTime ?? calcReadTime(content, lang),
      },
      content,
    }
  } catch {
    return null
  }
}

export function getAllSlugs(): string[] {
  const dir = path.join(process.cwd(), 'src/content/writing')
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))
  const slugs = new Set<string>()
  for (const file of files) {
    const match = file.match(/^(.+)\.(en|fr)\.mdx$/)
    if (match) slugs.add(match[1])
  }
  return Array.from(slugs)
}
