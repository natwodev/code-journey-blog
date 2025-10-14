import type { Post } from '../../data/posts'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function BlogPromoCard({ post, index }: { post: Post; index: number }) {
  const Wrapper: any = post.externalUrl ? 'a' : Link
  const wrapperProps = post.externalUrl
    ? { href: post.externalUrl, target: '_blank', rel: 'noreferrer' }
    : { to: `/blog/${post.id}` }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
    >
      <Wrapper {...wrapperProps} className="block relative">
        {/* Media */}
        <div className="aspect-[16/9] w-full overflow-hidden">
          {post.image ? (
            <img src={post.image} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-95" />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-brand-cyan/15 to-brand-purple/15" />
          )}
        </div>
        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-0.5 rounded bg-white/10 border border-white/15 text-white/80 backdrop-blur">{new Date(post.date).toLocaleDateString()}</span>
            {post.externalUrl && (
              <span className="px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan/90 backdrop-blur">External</span>
            )}
            {post.tags.map(t => (
              <span key={t} className="px-2 py-0.5 rounded bg-white/10 border border-white/15 text-white/80 backdrop-blur">{t}</span>
            ))}
          </div>
          <h3 className="mt-2 text-xl md:text-2xl font-semibold">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {post.title}
            </span>
          </h3>
          <p className="mt-1 text-white/80 line-clamp-2">{post.excerpt}</p>
        </div>
        {/* Hover accent */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="absolute inset-0 ring-1 ring-brand-cyan/40 rounded-3xl" />
          <div className="absolute -inset-x-10 -bottom-10 h-40 blur-2xl bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20" />
        </div>
      </Wrapper>
    </motion.div>
  )
}
