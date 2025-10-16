export default function SocialLinks({ showEmailAsText = false, variant = 'chips', set = 'default' }: { showEmailAsText?: boolean; variant?: 'chips' | 'round'; set?: 'default' | 'about' }) {
  const contactEmail = import.meta.env?.VITE_CONTACT_EMAIL ?? 'nhuynhnamht2023@gmail.com'
  const sizeCls = variant === 'round' ? 'w-12 h-12 rounded-full bg-black grid place-items-center text-white' : 'inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition text-white/85 hover:text-white'

  const defaultLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nguy%E1%BB%85n-hu%E1%BB%B3nh-nam-b8b87938a/', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6.94 6.5A2.44 2.44 0 1 1 4.5 4.06 2.44 2.44 0 0 1 6.94 6.5ZM5 8.75h3.88V20H5Zm6.25 0h3.72v1.53h.05a4.08 4.08 0 0 1 3.67-2.02c3.93 0 4.65 2.59 4.65 5.96V20h-3.88v-4.7c0-1.12 0-2.55-1.56-2.55s-1.8 1.22-1.8 2.47V20H11.2Z"/></svg>
    ) },
    { name: 'Instagram', url: 'https://www.instagram.com/_natwo_/', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/></svg>
    ) },
    { name: 'Facebook', url: 'https://www.facebook.com/natwo.2', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.07C22 6.5 17.52 2 11.93 2 6.35 2 2 6.5 2 12.07c0 5.02 3.66 9.19 8.44 10v-7.07H7.9v-2.93h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.93h-2.32V22c4.78-.81 8.44-4.98 8.44-9.93Z"/></svg>
    ) },
  ]

  const aboutLinks = [
    { name: 'Zalo', url: 'https://zalo.me/0972160259', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 3h16a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H9.8L5.4 21.4A1 1 0 0 1 4 20.7V4a1 1 0 0 1 1-1Zm3.8 6.2h3.1l-3.4 4.6h3.7v1.5H7.2l3.4-4.6H7.8V9.2Zm6.5 0c1.4 0 2.3.9 2.3 2 0 1.2-.9 2-2.3 2h-1v1.2h-1.6V9.2h2.6Zm-.1 2.9c.6 0 1-.3 1-.9s-.4-.9-1-.9h-.9v1.8h.9Z"/></svg>
    ) },
    { name: 'Facebook', url: 'https://www.facebook.com/natwo.2', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.07C22 6.5 17.52 2 11.93 2 6.35 2 2 6.5 2 12.07c0 5.02 3.66 9.19 8.44 10v-7.07H7.9v-2.93h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.93h-2.32V22c4.78-.81 8.44-4.98 8.44-9.93Z"/></svg>
    ) },
  ]

  const links = set === 'about' ? aboutLinks : defaultLinks

  return (
    <div className={variant === 'round' ? 'flex items-center gap-4' : 'flex flex-wrap items-center gap-3'}>
      {showEmailAsText && set !== 'about' && (
        <div className="inline-flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white/85">
          <span className="text-brand-cyan">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"/></svg>
          </span>
          <span>{contactEmail}</span>
        </div>
      )}
      {links.map(l => (
        <a key={l.name} href={l.url} target={l.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={sizeCls}>
          <span className="text-brand-cyan">{l.icon}</span>
          {variant !== 'round' && <span>{l.name}</span>}
        </a>
      ))}
    </div>
  )
}
