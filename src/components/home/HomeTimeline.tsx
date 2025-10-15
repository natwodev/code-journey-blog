import { motion } from 'framer-motion'
import { timeline } from '../../data/skills'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function HomeTimeline() {
  const { t } = useTranslation()
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold"
      >
        {t('home.timeline')}
      </motion.h2>

      <div className="mt-8 sm:mt-14 relative">
        {/* Vertical timeline line */}
        <motion.div
          className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-brand-cyan/70 to-brand-purple/70 transform -translate-x-1/2"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />

        <div className="space-y-8 sm:space-y-12">
          {timeline.map((item, idx) => {
            const delay = idx * 0.1
            const isEven = idx % 2 === 0
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay }}
                className={`relative flex justify-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-6 w-4 h-4 rounded-full bg-brand-cyan border-2 border-white/20 transform -translate-x-1/2 z-10" />
                
                {/* Connector line to dot */}
                <div className="absolute left-1/2 top-0 w-[2px] h-6 bg-gradient-to-b from-brand-cyan/70 to-brand-purple/70 transform -translate-x-1/2" />

                <div className={`w-full max-w-md md:max-w-lg ${isEven ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <TimelineStepCard
                    active={activeId === item.id}
                    onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                    year={item.year}
                    title={item.title}
                    desc={item.desc}
                    ctaHref={`/timeline/${item.year}`}
                  />
                </div>
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
  readonly active: boolean
  readonly onClick: () => void
  readonly year: string
  readonly title: string
  readonly desc: string
  readonly ctaHref: string
}) {
  const { t } = useTranslation()
  
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      animate={{ scale: active ? 1.06 : 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="group relative w-full text-left rounded-2xl p-4 sm:p-6 bg-white/6 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="mt-1 shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-cyan/30 to-brand-purple/30 border border-white/10 grid place-items-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5"><path d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-brand-cyan/90 text-xs sm:text-sm">{t('common.milestone')}: {year}</div>
          <div className="mt-1 text-lg sm:text-2xl font-semibold">{title}</div>
          <p className="mt-2 text-white/80 leading-relaxed text-sm sm:text-[15px]">{desc}</p>
          <ul className="mt-3 text-white/70 text-xs sm:text-sm list-disc pl-4 sm:pl-5 space-y-1">
            <li>Tổng quan kiến thức trọng tâm theo giai đoạn</li>
            <li>Điểm nhấn: bài tập, mini project, note kinh nghiệm</li>
          </ul>
          <Link to={ctaHref} className="mt-4 inline-block px-3 py-2 sm:px-4 rounded-lg border border-white/15 hover:bg-white/5 transition text-sm">{t('common.viewDetails')}</Link>
        </div>
      </div>

      {/* hover ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-brand-cyan/0 group-hover:ring-2 group-hover:ring-brand-cyan/60 transition" />
    </motion.button>
  )
}
