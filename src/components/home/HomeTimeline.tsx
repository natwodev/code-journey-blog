import { motion } from 'framer-motion'
import { timeline } from '../../data/skills'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function HomeTimeline() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-poppins font-semibold"
      >
        Hành trình học tập
      </motion.h2>

      <div className="mt-14 relative">
        {/* baseline for mobile */}
        <motion.div
          className="md:hidden absolute left-4 top-0 w-[2px] bg-gradient-to-b from-brand-cyan/70 to-brand-purple/70"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />

        <div className="space-y-10">
          {timeline.map((item, idx) => {
            const step = Math.min(idx * 56, 560) // px shift per step (desktop)
            const delay = idx * 0.06
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24, x: -24 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay }}
                className="relative"
                style={{ marginLeft: step }}
              >
                {/* connectors on desktop: horizontal step from previous */}
                {idx > 0 && (
                  <div className="hidden md:block absolute -top-6 -left-14 h-[2px] w-14 bg-gradient-to-r from-brand-cyan/70 to-brand-purple/70" />
                )}

                <TimelineStepCard
                  active={activeId === item.id}
                  onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                  year={item.year}
                  title={item.title}
                  desc={item.desc}
                  ctaHref={idx % 2 === 0 ? '/about' : '/projects'}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TimelineStepCard({
  active,
  onClick,
  year,
  title,
  desc,
  ctaHref,
}: {
  active: boolean
  onClick: () => void
  year: string
  title: string
  desc: string
  ctaHref: string
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      animate={{ scale: active ? 1.06 : 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="group relative w-full text-left rounded-2xl p-6 bg-white/6 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition md:max-w-2xl"
    >
      {/* dot for mobile left */}
      <div className="md:hidden absolute left-2 top-3 w-3 h-3 rounded-full bg-brand-cyan" />

      <div className="flex items-start gap-4">
        <div className="mt-1 shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan/30 to-brand-purple/30 border border-white/10 grid place-items-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
        <div>
          <div className="text-brand-cyan/90 text-sm">Mốc: {year}</div>
          <div className="mt-1 text-2xl font-semibold">{title}</div>
          <p className="mt-2 text-white/80 leading-relaxed text-[15px]">{desc}</p>
          <ul className="mt-3 text-white/70 text-sm list-disc pl-5 space-y-1">
            <li>Tổng quan kiến thức trọng tâm theo giai đoạn</li>
            <li>Điểm nhấn: bài tập, mini project, note kinh nghiệm</li>
          </ul>
          <Link to={ctaHref} className="mt-4 inline-block px-4 py-2 rounded-lg border border-white/15 hover:bg-white/5 transition">Xem chi tiết</Link>
        </div>
      </div>

      {/* hover ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-brand-cyan/0 group-hover:ring-2 group-hover:ring-brand-cyan/60 transition" />
    </motion.button>
  )
}
