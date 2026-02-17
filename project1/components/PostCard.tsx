import { Post } from '../types/post'

interface Props {
  post: Post
}

export default function PostCard({ post }: Props) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p className="text-sm text-gray-600">{post.content}</p>
      <p className="text-xs text-gray-500">{post.createdAt}</p>
    </div>
  )
}
