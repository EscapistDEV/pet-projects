import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Knowledge Blog',
  description: 'Pet Project 1'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-xl font-bold">Knowledge Blog</h1>
        </header>
        <main className="p-4">{children}</main>
        <footer className="bg-gray-200 text-gray-700 p-4 text-center">
          © 2026 Knowledge Blog
        </footer>
      </body>
    </html>
  )
}
