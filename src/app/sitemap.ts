import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/posts'
import { SITE_URL } from '@/lib/constants'

export const dynamic = 'force-static'

const LOCALES = ['fr', 'en'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs()

  const entries: MetadataRoute.Sitemap = []

  for (const locale of LOCALES) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    })
    entries.push({
      url: `${SITE_URL}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
    entries.push({
      url: `${SITE_URL}/${locale}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  }

  for (const slug of slugs) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  }

  return entries
}
