import { mockPosts } from '.'
import PostCard from '../components/PostCard'

export default function Home() {
  return (
    <div className="grid gap-4">
      {mockPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
