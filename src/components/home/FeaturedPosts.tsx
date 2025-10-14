import { posts } from '../../data/posts'
import BlogCard from '../blog/BlogCard'
import { motion } from 'framer-motion'

export default function FeaturedPosts() {
  const featured = posts.slice(0, 2)
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl font-poppins font-semibold">Bài viết nổi bật</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {featured.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
            <BlogCard post={p} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
