import { getPostsByLang } from '@/lib/posts'
import HomeClient from './[locale]/HomeClient'

export default function RootPage() {
  const posts = getPostsByLang('fr')

  return <HomeClient posts={posts} locale="fr" />
}
