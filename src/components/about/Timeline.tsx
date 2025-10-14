import { motion } from 'framer-motion'
import { timeline } from '../../data/skills'

export default function Timeline() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl font-poppins font-semibold">Hành trình học tập</motion.h3>
      <div className="mt-8 relative">
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-cyan/60 to-brand-purple/60" />
        <div className="space-y-8">
          {timeline.map((item, idx) => (
            <motion.div key={item.id} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="relative pl-10">
              <div className="absolute left-2 top-1.5 w-4 h-4 rounded-full bg-brand-cyan shadow-[0_0_20px_rgba(0,201,167,0.6)]" />
              <div className="rounded-xl p-4 bg-white/5 border border-white/10">
                <div className="text-brand-cyan/90 text-sm">{item.year}</div>
                <div className="mt-1 text-lg font-semibold">{item.title}</div>
                <p className="mt-1 text-white/75">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

