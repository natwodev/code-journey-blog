import { posts } from '../data/posts'
import BlogPromoCard from '../components/blog/BlogPromoCard'
import { motion, AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'
import BlogFilter from '../components/blog/BlogFilter'

export default function Blog() {
  const tags = useMemo(() => Array.from(new Set(posts.flatMap(p => p.tags))), [])
  const [active, setActive] = useState('All')
  const visible = useMemo(() => active === 'All' ? posts : posts.filter(p => p.tags.includes(active)), [active])

  return (
    <div className="min-h-screen">
      {/* Hero banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 -top-16 h-40 blur-2xl bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20" />
        <div className="max-w-6xl mx-auto px-6 py-16 relative">
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-poppins font-semibold">
            <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">Blog</span> — Truyền cảm hứng lập trình
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-3 text-white/75 max-w-3xl">
            Khám phá những bài viết chọn lọc về Java, JavaScript và thực hành dự án. Hình ảnh truyền thông giúp bạn định hình nội dung nhanh hơn.
          </motion.p>
          <div className="mt-6">
            <BlogFilter tags={tags} active={active} onChange={setActive} />
          </div>
        </div>
      </section>

      {/* Media grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div key={p.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.4 }}>
                <BlogPromoCard post={p} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
