import SocialLinks from '../components/contact/SocialLinks'
import FullPageGradient from '../components/home/FullPageGradient'
import { useTypingEffect } from '../hooks/useTypingEffect'

export default function Contact() {
  const contactEmail = import.meta.env?.VITE_CONTACT_EMAIL ?? 'nhuynhnamht2023@gmail.com'
  const phone = '+84 169 8214 199'
  const title = useTypingEffect('CONTACT', 60)

  return (
    <div className="min-h-screen relative">
      <FullPageGradient />
      <section className="max-w-6xl mx-auto px-6 pt-14 pb-16">
        <h1 className="text-5xl md:text-7xl font-poppins font-semibold tracking-wide mb-10">{title || ' '}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Name, email, phone, social icons */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="text-2xl text-brand-cyan mb-4">HUYNH NAM</div>

            <div className="flex items-center gap-3 mb-3 text-lg">
              <span className="text-brand-cyan">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"/></svg>
              </span>
              <span>{contactEmail}</span>
            </div>

            <div className="flex items-center gap-3 mb-6 text-lg">
              <span className="text-brand-cyan">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.1.36 2.28.55 3.5.55a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 1a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1c0 1.22.19 2.4.55 3.5a1 1 0 0 1-.24 1.01l-2.2 2.2Z"/></svg>
              </span>
              <span>{phone}</span>
            </div>

            <SocialLinks set="about" />
          </div>

          {/* Right: Form */}
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input className="w-full rounded-lg bg-black/30 border border-white/15 px-4 py-3 focus:outline-none focus:border-brand-cyan/60" placeholder="Name *" required />
            <input type="email" className="w-full rounded-lg bg-black/30 border border-white/15 px-4 py-3 focus:outline-none focus:border-brand-cyan/60" placeholder="Email *" required />
            <input className="w-full rounded-lg bg-black/30 border border-white/15 px-4 py-3 focus:outline-none focus:border-brand-cyan/60" placeholder="Subject" />
            <textarea rows={6} className="w-full rounded-lg bg-black/30 border border-white/15 px-4 py-3 focus:outline-none focus:border-brand-cyan/60" placeholder="Message" />
            <button className="px-5 py-3 rounded-xl bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 hover:bg-brand-cyan/30 transition">Send</button>
          </form>
        </div>
      </section>
    </div>
  )
}
