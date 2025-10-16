import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import avatarImg from '../assets/avata.jpg'
import { projects } from '../data/projects'
import { certifications } from '../data/skills'
import { useTypingEffect } from '../hooks/useTypingEffect'

export default function About() {
  const { t } = useTranslation()
  
  const info = {
    name: 'Huynh Nam Nguyen ',
    role: t('about.role'),
    location: t('about.location'),
  }

  const highlights = [
    { label: t('about.highlights.experience'), value: '1+' },
    { label: t('about.highlights.projects'), value: '4+' },
    { label: t('about.highlights.posts'), value: '4+' },
  ]

  const typedTitle = useTypingEffect(t('about.title'), 40)

  return (
    <div className="min-h-screen">
      {/* Hero banner (Fade-in + glow) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 -top-16 h-40 blur-2xl bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20" />
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-10 relative">
          <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-7xl font-poppins font-semibold">
            <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">{typedTitle || ' '}</span>
          </motion.h1>
          <motion.div aria-hidden initial={{ x: '-120%' }} animate={{ x: '120%' }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }} className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/5 to-transparent" />
        </div>
      </section>

      {/* Skills derived from projects + Certifications */}
      {/* removed per request: folded into promo card */}

      {/* Personal promo card */}
      <section className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="absolute inset-x-0 -top-20 h-40 blur-2xl bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20" />
          <div className="relative p-6 md:p-8 grid grid-cols-1 md:grid-cols-[auto,1fr] md:grid-rows-[auto,1fr] gap-4 md:gap-4 items-start">
            {/* Row 1, Col 1: Avatar */}
            <div className="flex justify-center md:justify-start">
              <img src={avatarImg} alt="Avatar" className="w-[180px] h-[180px] md:w-[338px] md:h-[338px] rounded-2xl object-cover border border-white/10" />
            </div>

            {/* Row 1, Col 2: Name + Role */}
            <div className="md:ml-4">
              <div className="text-3xl md:text-4xl font-semibold">{info.name}</div>
              <div className="text-lg md:text-xl text-brand-cyan/90 mt-1">{info.role}</div>
              {/* Contact buttons removed as requested */}
              <p className="mt-5 text-white/80 max-w-2xl text-base md:text-lg leading-relaxed">
                {t('about.description')}
              </p>
              <div className="mt-3 text-base md:text-lg text-white/60">
                {info.location} • {t('about.availability')}
              </div>
              
              
            </div>

            {/* Row 2 (spans both columns): Rest of info */}
            <div className="md:col-span-2">
              <div className="mt-5 grid grid-cols-3 gap-3 max-w-md mx-auto justify-items-center items-stretch">
                {highlights.map(h => {
                  const card = (
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center transition hover:bg-white/10 hover:border-brand-cyan/40 h-full">
                      <div className="text-2xl font-semibold text-brand-cyan">{h.value}</div>
                      <div className="text-xs text-white/70">{h.label}</div>
                    </div>
                  )
                  return h.label === 'Dự án' ? (
                    <Link to="/projects" key={h.label} aria-label="Đi tới trang Dự án" className="h-full w-full">{card}</Link>
                  ) : (
                    <div key={h.label} className="h-full w-full">{card}</div>
                  )
                })}
              </div>
              
              {/* Inline skills & certifications */}
              <div className="mt-6">
                <div className="text-white/80 font-semibold">{t('about.skills')}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {Array.from(new Set(projects.flatMap(p => p.tech))).map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">{tech}</span>
                  ))}
                </div>
                <div className="mt-4 text-white/80 font-semibold">{t('about.certifications')}</div>
                <div className="mt-2 grid sm:grid-cols-2 gap-2">
                  {certifications.map(c => (
                    <div key={c.name} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 flex items-center justify-between">
                      <span>{c.name}</span>
                      <span className="text-brand-cyan/90 text-sm">{c.issuer}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Four-year journey removed as requested */}

      {/* Media timeline (zig-zag with center dots) */}
      {/* removed per request */}
    </div>
  )
}
