import { javaResources, jsResources } from '../../data/resources'
import { motion } from 'framer-motion'

export default function ResourceLinks() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl font-poppins font-semibold">Tài liệu & Bài viết hay</motion.h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-brand-cyan">Java</h3>
          <ul className="mt-3 space-y-3">
            {javaResources.map((r, i) => (
              <motion.li key={r.url} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}>
                <a href={r.url} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-white/85 hover:text-white">
                  <span className="inline-block px-2 py-0.5 text-xs rounded bg-brand-cyan/10 border border-brand-cyan/30">{r.source ?? 'Link'}</span>
                  <span className="underline decoration-transparent group-hover:decoration-brand-cyan transition-[text-decoration-color] duration-300">{r.title}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-brand-cyan">JavaScript</h3>
          <ul className="mt-3 space-y-3">
            {jsResources.map((r, i) => (
              <motion.li key={r.url} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}>
                <a href={r.url} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-white/85 hover:text-white">
                  <span className="inline-block px-2 py-0.5 text-xs rounded bg-brand-cyan/10 border border-brand-cyan/30">{r.source ?? 'Link'}</span>
                  <span className="underline decoration-transparent group-hover:decoration-brand-cyan transition-[text-decoration-color] duration-300">{r.title}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

