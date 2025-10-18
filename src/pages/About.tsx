import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { IoEye } from 'react-icons/io5'
import avatarImg from '../assets/avata.jpg'
import certificateImg from '../assets/chungchi/chungchihutech.png'
import jsEssentials1Img from '../assets/chungchi/JavaScript_Essentials_1_certificate_nhuynhnamht2023-gmail-com_8862c400-1589-460b-a817-2bfa8e009f8d.jpg'
import jsEssentials2Img from '../assets/chungchi/JavaScript_Essentials_2_certificate_nhuynhnamht2023-gmail-com_aac329b9-352b-4923-b4b8-44d3659e416b.jpg'
import networkingBasicsImg from '../assets/chungchi/Networking_Basics_certificate_nhuynhnamht2023-gmail-com_1d0dffa0-7ffa-4e3a-9f46-749cb9f2afc9.jpg'
import { projects } from '../data/projects'
import { useTypingEffect } from '../hooks/useTypingEffect'
import SkillBadge from '../components/common/SkillBadge'
import CertificateModal from '../components/common/CertificateModal'
import HomeTimeline from '../components/home/HomeTimeline'

export default function About() {
  const { t } = useTranslation()
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<{
    imageSrc: string
    title: string
    issuer: string
    dateIssued: string
    certificateId: string
  } | null>(null)
  
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

  const certificateData = [
    {
      id: 'hutech',
      imageSrc: certificateImg,
      title: 'HUTECH - ITCoder',
      issuer: 'HUTECH University',
      dateIssued: '2024',
      certificateId: 'HUTECH-2024'
    },
    {
      id: 'js-essentials-1',
      imageSrc: jsEssentials1Img,
      title: 'JavaScript Essentials 1',
      issuer: 'Cisco Networking Academy',
      dateIssued: '2025',
      certificateId: 'JS-ESS-1-8862c400'
    },
    {
      id: 'js-essentials-2',
      imageSrc: jsEssentials2Img,
      title: 'JavaScript Essentials 2',
      issuer: 'Cisco Networking Academy',
      dateIssued: '2025',
      certificateId: 'JS-ESS-2-aac329b9'
    },
    {
      id: 'networking-basics',
      imageSrc: networkingBasicsImg,
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      dateIssued: '2025',
      certificateId: 'NET-BAS-1d0dffa0'
    }
  ]

  const handleCertificateClick = (cert: typeof certificateData[0]) => {
    setSelectedCertificate(cert)
    setIsCertificateModalOpen(true)
  }

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
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="absolute inset-x-0 -top-20 h-40 blur-2xl bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20" />
          <div className="relative p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-[auto,1fr] md:grid-rows-[auto,1fr] gap-4 md:gap-4 items-start">
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
              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto justify-items-center items-stretch">
                {highlights.map(h => {
                  const card = (
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-3 sm:p-4 text-center transition hover:bg-white/10 hover:border-brand-cyan/40 h-full">
                      <div className="text-xl sm:text-2xl font-semibold text-brand-cyan">{h.value}</div>
                      <div className="text-xs text-white/70 break-words">{h.label}</div>
                    </div>
                  )
                  if (h.label === t('about.highlights.projects')) {
                    return (
                      <Link to="/projects" key={h.label} aria-label={t('about.gotoProjects', { defaultValue: 'Go to Projects' })} className="h-full w-full">
                        {card}
                      </Link>
                    )
                  } else if (h.label === t('about.highlights.posts')) {
                    return (
                      <Link to="/blog" key={h.label} aria-label={t('about.gotoBlog', { defaultValue: 'Go to Blog' })} className="h-full w-full">
                        {card}
                      </Link>
                    )
                  } else {
                    return (
                      <div key={h.label} className="h-full w-full">
                        {card}
                      </div>
                    )
                  }
                })}
              </div>
              
              {/* Inline skills & certifications */}
              <div className="mt-6">
                <div className="text-white/80 font-semibold">{t('about.skills')}</div>
                <div className="mt-2 flex flex-wrap gap-2 max-w-full overflow-hidden">
                  {Array.from(new Set(projects.flatMap(p => p.tech))).map(tech => (
                    <SkillBadge key={tech} name={tech} />
                  ))}
                </div>
                <div className="mt-4 text-white/80 font-semibold">{t('about.certifications')}</div>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {certificateData.map(cert => (
                    <div key={cert.id} className="rounded-xl bg-white/5 border border-white/10 px-3 py-3 flex items-center justify-between group hover:bg-white/10 hover:border-brand-cyan/40 transition-all duration-300 min-w-0">
                      <div className="flex-1 min-w-0 pr-2">
                        <div className="text-sm font-medium text-white break-words">{cert.title}</div>
                        <div className="text-xs text-brand-cyan/90 break-words">{cert.issuer}</div>
                        <div className="text-xs text-white/60 break-words">{cert.dateIssued}</div>
                      </div>
                      <button
                        onClick={() => handleCertificateClick(cert)}
                        className="flex-shrink-0 p-2 rounded-lg bg-brand-cyan/20 hover:bg-brand-cyan/30 border border-brand-cyan/30 hover:border-brand-cyan/50 transition-all duration-300 group-hover:scale-110"
                        aria-label={`Xem ${cert.title}`}
                      >
                        <IoEye className="w-4 h-4 text-brand-cyan" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Learning journey moved from Home */}
      <HomeTimeline />

      {/* Media timeline (zig-zag with center dots) */}
      {/* removed per request */}
      
      {/* Certificate Modal */}
      {selectedCertificate && (
        <CertificateModal
          isOpen={isCertificateModalOpen}
          onClose={() => {
            setIsCertificateModalOpen(false)
            setSelectedCertificate(null)
          }}
          imageSrc={selectedCertificate.imageSrc}
          title={selectedCertificate.title}
          issuer={selectedCertificate.issuer}
          dateIssued={selectedCertificate.dateIssued}
          certificateId={selectedCertificate.certificateId}
        />
      )}
    </div>
  )
}
