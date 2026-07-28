import { getPostsByLang } from '@/lib/posts'
import HomeClient from './HomeClient'
import type { Language } from '@/types'

type Props = {
  params: Promise<{ locale: Language }>
}

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }]
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  const posts = getPostsByLang(locale)
  return <HomeClient posts={posts} locale={locale} />
}
