import { motion } from 'framer-motion'
import SocialLinks from '../components/contact/SocialLinks'
import { useTypingEffect } from '../hooks/useTypingEffect'
import avatarImg from '../assets/avata.jpg'
import { projects } from '../data/projects'
import { certifications } from '../data/skills'

export default function About() {
  const info = {
    name: 'Nguyễn Huỳnh Nam',
    role: 'Developer',
    location: 'TP. Hồ Chí Minh, Việt Nam',
  }

  const highlights = [
    { label: 'Năm kinh nghiệm', value: '1+' },
    { label: 'Dự án', value: '4+' },
    { label: 'Bài viết', value: '4+' },
  ]

  const media = [
    { id: 'm1', src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop', alt: 'Coding setup 1', title: 'Bắt đầu hành trình', desc: 'Không gian làm việc đầu tiên với chiếc laptop thân quen.' },
    { id: 'm2', src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop', alt: 'Code and coffee', title: 'Đam mê và kỷ luật', desc: 'Những buổi sáng với cà phê và thử nghiệm ý tưởng mới.' },
    { id: 'm3', src: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&auto=format&fit=crop', alt: 'Team discussion', title: 'Học hỏi cộng đồng', desc: 'Trao đổi với đội nhóm, chia sẻ kinh nghiệm và kiến thức.' },
    { id: 'm4', src: 'https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?q=80&w=1200&auto=format&fit=crop', alt: 'Modern workspace', title: 'Không gian tối ưu', desc: 'Thiết lập môi trường làm việc tập trung và sáng tạo.' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero banner (Fade-in + glow) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 -top-16 h-40 blur-2xl bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20" />
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-10 relative">
          <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-poppins font-semibold">
            <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">About me</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-3 text-white/75 max-w-3xl">
            {info.name} • {info.role} • {info.location}. Mình yêu lập trình mạng, UI hiện đại và chia sẻ kiến thức.
          </motion.p>
          <motion.div aria-hidden initial={{ x: '-120%' }} animate={{ x: '120%' }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }} className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/5 to-transparent" />
        </div>
      </section>

      {/* Skills derived from projects + Certifications */}
      {/* removed per request: folded into promo card */}

      {/* Personal promo card */}
      <section className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="absolute inset-x-0 -top-20 h-40 blur-2xl bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20" />
          <div className="relative p-6 md:p-8 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6 items-start">
            <img src={avatarImg} alt="Avatar" className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover border border-white/10" />
            <div>
              <div className="text-2xl md:text-3xl font-semibold">{info.name}</div>
              <div className="text-brand-cyan/90">{info.role}</div>
              <div className="mt-5 grid grid-cols-3 gap-3 max-w-md">
                {highlights.map(h => (
                  <div key={h.label} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                    <div className="text-2xl font-semibold text-brand-cyan">{h.value}</div>
                    <div className="text-xs text-white/70">{h.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 flex-wrap">
                <SocialLinks />
              </div>
              {/* Inline skills & certifications */}
              <div className="mt-6">
                <div className="text-white/80 font-semibold">Kỹ năng</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {Array.from(new Set(projects.flatMap(p => p.tech))).map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">{tech}</span>
                  ))}
                </div>
                <div className="mt-4 text-white/80 font-semibold">Chứng chỉ</div>
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

      {/* Four-year journey (scripted effects per year) */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-2xl md:text-3xl font-poppins font-semibold">
            Hành Trình 4 Năm Đại Học
          </motion.h3>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-2 text-white/80 max-w-3xl">
            “Mỗi hành trình đều bắt đầu từ một bước nhỏ. Đây là câu chuyện của tôi – 4 năm đại học, 4 mùa trưởng thành.”
          </motion.p>
          <motion.div aria-hidden initial={{ x: '-120%' }} whileInView={{ x: '120%' }} viewport={{ once: true }} transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 3 }} className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/5 to-transparent" />
        </div>

        <div className="mt-10 space-y-10">
          {/* Year 1: Slide-up + float icons */}
          <JourneyBlock
            side="left"
            title="Năm 1 – Khám phá & Thích nghi"
            mood="Ngây thơ, tò mò, bỡ ngỡ"
            themeClass="from-cyan-400/20"
            text="Năm nhất – Tôi bắt đầu hành trình tìm hiểu thế giới và chính mình. Mọi thứ đều mới, đôi khi khó, nhưng đầy hứng khởi."
            emojis={['✏️','📘','☕']}
            slideUp
            imageSrc="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop"
            imageAlt="Năm nhất – lớp học đầu tiên"
          />
          {/* Year 2: Slide-left + parallax */}
          <JourneyBlock
            side="right"
            title="Năm 2 – Định hướng & Khám phá bản thân"
            mood="Tò mò, trưởng thành dần, tự tin"
            themeClass="from-blue-500/20"
            text="Năm hai – Tôi bắt đầu khám phá điều mình yêu thích. Học không chỉ để biết, mà để hiểu vì sao mình học."
            parallax
            imageSrc="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
            imageAlt="Năm hai – thư viện và ghi chú"
          />
          {/* Year 3: Zoom-in + typewriter */}
          <JourneyBlock
            side="left"
            title="Năm 3 – Thử thách & Trưởng thành"
            mood="Căng thẳng, đam mê, thực tế"
            themeClass="from-rose-500/20"
            text="Năm ba – Tôi va chạm với thực tế, nhận ra trưởng thành không đến từ điểm số, mà từ những đêm không ngủ và sự kiên trì đến cùng."
            typewriter
            zoomIn
            imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
            imageAlt="Năm ba – thuyết trình và dự án"
          />
          {/* Year 4: Blur → clear + glow sweep */}
          <JourneyBlock
            side="right"
            title="Năm 4 – Tỏa sáng & Kết thúc hành trình"
            mood="Tự hào, xúc động, hy vọng"
            themeClass="from-amber-400/25"
            text="Năm tư – Tôi không chỉ tốt nghiệp đại học, tôi tốt nghiệp chính phiên bản cũ của mình."
            focusIn
            glowSweep
            imageSrc="https://images.unsplash.com/photo-1523580846011-27b7c819f2f4?q=80&w=1200&auto=format&fit=crop"
            imageAlt="Năm tư – lễ tốt nghiệp"
          />
        </div>

        {/* Finale: Fade center + moving light */}
        <FinaleBlock />
      </section>

      {/* Media timeline (zig-zag with center dots) */}
      <MediaTimeline media={media} />
    </div>
  )
}

function MediaTimeline({ media }: { readonly media: readonly { id: string; src: string; alt: string; title: string; desc: string }[] }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl font-poppins font-semibold">Khoảnh khắc & không gian làm việc</motion.h2>
      <div className="mt-10 relative">
        <motion.div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-[3px] bg-gradient-to-b from-brand-cyan/60 to-brand-purple/60" initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.9, ease: 'easeOut' }} />
        <div className="space-y-14">
          {media.map((m, idx) => {
            const side = idx % 2 === 0 ? 'left' : 'right'
            const dotColor = side === 'left' ? 'bg-brand-cyan' : 'bg-brand-purple'
            return (
              <div key={m.id} className="relative">
                <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-8 w-5 h-5 rounded-full ${dotColor} shadow-[0_0_24px_rgba(0,201,167,0.7)]`} />
                {side === 'left' ? (
                  <div className="hidden md:block absolute left-1/2 top-10 h-[2px] w-12 -translate-x-full bg-gradient-to-l from-brand-cyan/70 to-transparent" />
                ) : (
                  <div className="hidden md:block absolute left-1/2 top-10 h-[2px] w-12 bg-gradient-to-r from-brand-purple/70 to-transparent" />
                )}
                <motion.div initial={{ opacity: 0, y: 18, x: side === 'left' ? -40 : 40 }} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6, delay: idx * 0.05 }} className="md:grid md:grid-cols-2 md:gap-10 items-start">
                  <div className="hidden md:block">
                    {side === 'left' && (
                      <MediaTimelineCard side="left" m={m} />
                    )}
                  </div>
                  <div className="hidden md:block">
                    {side === 'right' && (
                      <MediaTimelineCard side="right" m={m} />
                    )}
                    <div className="md:hidden group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                      <img src={m.src} alt={m.alt} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-95" />
                      <div className="p-4">
                        <div className="text-lg font-semibold">{m.title}</div>
                        <p className="text-white/75 text-sm mt-1">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MediaTimelineCard({ side, m }: { readonly side: 'left' | 'right'; readonly m: { src: string; alt: string; title: string; desc: string } }) {
  const align = side === 'left' ? 'ml-auto' : 'mr-auto'
  const dotSideClass = side === 'left' ? 'right' : 'left'
  const dotColor = side === 'left' ? 'bg-brand-cyan' : 'bg-brand-purple'
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} className={`relative ${align} md:max-w-xl rounded-2xl border border-white/10 bg-white/5 overflow-hidden group`}>
      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }} className={`hidden md:block absolute -${dotSideClass}-[10px] top-3 w-4 h-4 rounded-full ${dotColor} shadow-[0_0_22px_rgba(0,201,167,0.7)]`} />
      <img src={m.src} alt={m.alt} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-95" />
      <div className="p-5">
        <div className="text-lg font-semibold">{m.title}</div>
        <p className="text-white/75 text-sm mt-1">{m.desc}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute inset-0 ring-1 ring-brand-cyan/40 rounded-2xl" />
        <div className="absolute -inset-x-10 -bottom-10 h-40 blur-2xl bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20" />
      </div>
    </motion.div>
  )
}

function JourneyBlock({ side, title, mood, text, themeClass, typewriter, parallax, focusIn, glowSweep, zoomIn, slideUp, emojis, imageSrc, imageAlt }: { readonly side: 'left' | 'right'; readonly title: string; readonly mood: string; readonly text: string; readonly themeClass: string; readonly typewriter?: boolean; readonly parallax?: boolean; readonly focusIn?: boolean; readonly glowSweep?: boolean; readonly zoomIn?: boolean; readonly slideUp?: boolean; readonly emojis?: readonly string[]; readonly imageSrc?: string; readonly imageAlt?: string }) {
  const align = side === 'left' ? 'md:justify-start' : 'md:justify-end'
  const slideX = slideUp ? 0 : side === 'left' ? -40 : 40
  const slideY = slideUp ? 24 : 0
  const typedText = useTypingEffect(typewriter ? text : '', 18)
  const displayedText = typewriter ? typedText : text
  const cardInitial = focusIn ? { opacity: 0.6, filter: 'blur(6px)', scale: 0.98 } : zoomIn ? { scale: 0.96, opacity: 0.9 } : {}
  const cardWhile = focusIn ? { opacity: 1, filter: 'blur(0px)', scale: 1 } : zoomIn ? { scale: 1.02, opacity: 1 } : {}

  return (
    <motion.div initial={{ opacity: 0, y: slideY, x: slideX }} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }} className={`grid grid-cols-1 md:grid-cols-2 items-center ${align} relative`}>
      {side === 'left' && (
        <div className="order-1">
          <h4 className="text-xl md:text-2xl font-semibold">{title}</h4>
          <div className="text-white/70 text-sm mt-1">{mood}</div>
          <p className="text-white/80 mt-2 max-w-xl">{displayedText}</p>
          {emojis && (
            <div className="relative h-6 mt-2">
              {emojis.map((e, i) => (
                <motion.span key={i} className="absolute left-0 text-white/80" initial={{ y: 0 }} animate={{ y: [0, -6, 0] }} transition={{ duration: 2 + i * 0.3, repeat: Infinity }} style={{ left: `${i * 22}px` }}>{e}</motion.span>
              ))}
            </div>
          )}
        </div>
      )}
      <motion.div className={`relative rounded-2xl border border-white/10 bg-white/5 p-0 overflow-hidden ${side === 'left' ? 'order-2' : 'order-1'}`} initial={cardInitial} whileInView={cardWhile} transition={{ duration: 0.9 }}>
        {imageSrc && (
          <img src={imageSrc} alt={imageAlt || title} className="h-48 w-full object-cover" />
        )}
        <div className="p-6 relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${themeClass} to-transparent opacity-30 pointer-events-none`} />
          {side === 'right' && (
            <div className="mb-3">
              <h4 className="text-xl md:text-2xl font-semibold">{title}</h4>
              <div className="text-white/70 text-sm mt-1">{mood}</div>
              <motion.p className="text-white/80 max-w-xl" animate={parallax ? { y: [0, -6, 0] } : {}} transition={parallax ? { duration: 3.2, repeat: Infinity } : {}}>{displayedText}</motion.p>
            </div>
          )}
          {glowSweep && (
            <motion.div aria-hidden initial={{ x: '-120%' }} whileInView={{ x: '120%' }} viewport={{ once: true }} transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 3 }} className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/5 to-transparent" />
          )}
        </div>
      </motion.div>
      {side === 'left' && <div className="hidden md:block" />}
    </motion.div>
  )
}

function FinaleBlock() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }} className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
      <div className="text-xl md:text-2xl font-semibold">Kết thúc — Tự hào & Thương hiệu cá nhân</div>
      <p className="text-white/80 mt-2">Mỗi chặng đường đều để lại dấu ấn. Hành trình mới đang chờ phía trước.</p>
      <motion.div aria-hidden initial={{ x: '-120%' }} whileInView={{ x: '120%' }} viewport={{ once: true }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.5 }} className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/8 to-transparent" />
    </motion.div>
  )
}
