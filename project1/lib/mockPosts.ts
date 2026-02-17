import { Post } from '../types/post'

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Первый пост',
    slug: 'pervyi-post',
    content: 'Содержание первого поста',
    published: true,
    createdAt: '2026-02-17'
  },
  {
    id: '2',
    title: 'Второй пост',
    slug: 'vtoroi-post',
    content: 'Содержание второго поста',
    published: true,
    createdAt: '2026-02-16'
  }
]
