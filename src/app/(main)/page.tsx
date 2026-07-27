import { getPostsByLang } from '@/lib/posts'
import HomeClient from './HomeClient'

export default function Home() {
  const posts = getPostsByLang('en')
  return <HomeClient posts={posts} />
}