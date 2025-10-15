import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import HeroBackground from '../../three/HeroBackground'
import { useLanguage } from '../../context/LanguageContext'
import AudioToggle from '../common/AudioToggle'

export default function HeroSection() {
  const { lang } = useLanguage()
  const t = (vi: string, en: string) => (lang === 'vi' ? vi : en)
  const ref = useRef<HTMLDivElement | null>(null)
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.setProperty('--parx', String(px))
    el.style.setProperty('--pary', String(py))
  }
  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--parx', '0')
    el.style.setProperty('--pary', '0')
  }
  return (
    <section ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className="relative flex flex-col items-center justify-center min-h-screen pt-16 text-center px-6 [transform:translate3d(calc(var(--parx,0)*6px),calc(var(--pary,0)*6px),0)] transition-transform">
      <HeroBackground />
      <div className="absolute top-4 right-4 z-10">
        <AudioToggle src={new URL('../../audio/thienlyoi.mp3', import.meta.url).href} size="sm" showLabel={false} />
      </div>
      <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-poppins font-semibold tracking-tight">
        {/* <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">Code Journey</span> — {t('Hành trình lập trình mạng', 'The networking coding journey')} */}
      </motion.h1>
      <div className="mt-8">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex gap-3"
        >
          <Link to="/about" className="px-6 py-3 rounded-xl neon-border bg-white/5 hover:bg-white/10 transition inline-block">
            {t('Xem thông tin', 'View Info')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
