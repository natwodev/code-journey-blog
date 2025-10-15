import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import HeroBackground from '../../three/HeroBackground'
import { useLanguage } from '../../hooks/useLanguage'
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
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 -mt-10 [transform:translate3d(calc(var(--parx,0)*6px),calc(var(--pary,0)*6px),0)] transition-transform"
    >
      <HeroBackground />

{/* Nút âm thanh */}
<div className="absolute top-12 right-4 z-10">
  <AudioToggle
    src={new URL('../../audio/thienlyoi.mp3', import.meta.url).href}
    size="sm"
    showLabel={false}
  />
</div>


      {/* Tiêu đề chính */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-poppins font-semibold tracking-tight"
      >
        {t('Kiến thức lập trình & dự án cá nhân', 'Programming knowledge & personal projects')}
      </motion.h1>

      {/* Dòng mô tả nhỏ bên dưới tiêu đề */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-[4px] text-lg text-white/70 font-light"
      >
        {t('Mình là Nguyễn Huỳnh Nam — .Net Developer.', "I'm Nguyen Huynh Nam — .Net Developer.")}
      </motion.p>

      {/* Nút liên kết */}
      <div className="mt-8">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex gap-3"
        >
          <Link
            to="/about"
            className="px-6 py-3 rounded-xl neon-border bg-white/5 hover:bg-white/10 transition inline-block"
          >
            {t('Xem thông tin', 'View Info')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
