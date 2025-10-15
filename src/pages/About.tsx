import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import avatarImg from '../assets/avata.jpg'
import { projects } from '../data/projects'
import { certifications } from '../data/skills'

export default function About() {
  const { t } = useTranslation()
  
  const info = {
    name: 'Nguyen Huynh Nam',
    role: t('about.role'),
    location: t('about.location'),
  }

  const highlights = [
    { label: t('about.highlights.experience'), value: '1+' },
    { label: t('about.highlights.projects'), value: '4+' },
    { label: t('about.highlights.posts'), value: '4+' },
  ]

  

  

  return (
    <div className="min-h-screen">
      {/* Hero banner (Fade-in + glow) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 -top-16 h-40 blur-2xl bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20" />
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-10 relative">
          <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-poppins font-semibold">
            <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">{t('about.title')}</span>
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
              {/* Liên hệ: Zalo, Facebook, Email */}
              <div className="mt-5 flex items-center gap-4 flex-wrap">
                <a href="https://zalo.me/0972160259" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition text-white/85 hover:text-white text-base">
                  <span className="text-brand-cyan">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 3h16a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H9.8L5.4 21.4A1 1 0 0 1 4 20.7V4a1 1 0 0 1 1-1Zm3.8 6.2h3.1l-3.4 4.6h3.7v1.5H7.2l3.4-4.6H7.8V9.2Zm6.5 0c1.4 0 2.3.9 2.3 2 0 1.2-.9 2-2.3 2h-1v1.2h-1.6V9.2h2.6Zm-.1 2.9c.6 0 1-.3 1-.9s-.4-.9-1-.9h-.9v1.8h.9Z"/></svg>
                  </span>
                  <span>Zalo</span>
                </a>
                <a href="https://www.facebook.com/natwo.2" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition text-white/85 hover:text-white text-base">
                  <span className="text-brand-cyan">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.07C22 6.5 17.52 2 11.93 2 6.35 2 2 6.5 2 12.07c0 5.02 3.66 9.19 8.44 10v-7.07H7.9v-2.93h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.93h-2.32V22c4.78-.81 8.44-4.98 8.44-9.93Z"/></svg>
                  </span>
                  <span>Facebook</span>
                </a>
                <a href={`mailto:${import.meta.env?.VITE_CONTACT_EMAIL ?? 'nhuynhnamht2023@gmail.com'}`} className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition text-white/85 hover:text-white text-base">
                  <span className="text-brand-cyan">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"/></svg>
                  </span>
                  <span>Email</span>
                </a>
              </div>
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
