import { useParams, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { posts } from '../data/posts'
import type { Post as PostType } from '../data/posts'

export default function Post() {
  const { id } = useParams()
  const [copiedToast, setCopiedToast] = useState(false)
  const post: PostType | undefined = posts.find(p => p.id === id)

  if (!post) return <Navigate to="/blog" replace />
  // Always render internal detail; external posts will also show excerpt/content here

  const textForReading = `${post.title}\n${post.excerpt}\n${post.content ?? ''}`
  const words = textForReading.trim().split(/\s+/).filter(Boolean)
  const readingTimeMinutes = Math.max(1, Math.ceil(words.length / 220))

  const handleShare = async () => {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
      setCopiedToast(true)
      window.setTimeout(() => setCopiedToast(false), 2200)
    } catch {
      // silently ignore if copy fails
    }
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <div className="text-sm text-white/70 flex items-center gap-2">
        <Link to="/blog" className="text-brand-cyan/90 hover:underline">Blog</Link>
        <span>/</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>

      <h1 className="mt-3 text-3xl md:text-5xl font-semibold bg-gradient-to-r from-white to-white/85 bg-clip-text text-transparent">
        {post.title}
      </h1>

      {/* Meta row */}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/75">
        <span className="px-2 py-0.5 rounded bg-white/8 border border-white/10">{readingTimeMinutes} phút đọc</span>
        <button onClick={handleShare} className="ml-auto text-brand-cyan/90 hover:underline">Chia sẻ</button>
      </div>

      {post.image && (
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
          <img src={post.image} alt={post.title} className="w-full object-cover max-h-[420px]" />
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/80">
        {post.tags.map(t => (
          <span key={t} className="px-2 py-0.5 rounded-full bg-white/8 border border-white/15">{t}</span>
        ))}
      </div>

      <div className="prose prose-invert mt-8 max-w-none">
        {/* Fallback to excerpt if content missing for now */}
        {(post.content || post.excerpt).split('\n\n').map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>

      {/* Toast */}
      {copiedToast && (
        <div className="fixed top-4 right-4 z-50">
          <div className="rounded-lg bg-white/10 border border-white/15 backdrop-blur px-4 py-2 text-sm text-white shadow-lg animate-fade-in">
            Đã sao chép liên kết bài viết
          </div>
        </div>
      )}
    </article>
  )
}


