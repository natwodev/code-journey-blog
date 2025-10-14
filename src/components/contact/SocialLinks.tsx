export default function SocialLinks() {
  const links = [
    { name: 'GitHub', url: 'https://github.com/', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.13-4.56-5 0-1.11.39-2.02 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.28 9.28 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.56 1.41.21 2.45.11 2.71.64.72 1.03 1.63 1.03 2.74 0 3.88-2.34 4.73-4.57 4.98.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"/></svg>
    ) },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6.94 6.5A2.44 2.44 0 1 1 4.5 4.06 2.44 2.44 0 0 1 6.94 6.5ZM5 8.75h3.88V20H5Zm6.25 0h3.72v1.53h.05a4.08 4.08 0 0 1 3.67-2.02c3.93 0 4.65 2.59 4.65 5.96V20h-3.88v-4.7c0-1.12 0-2.55-1.56-2.55s-1.8 1.22-1.8 2.47V20H11.2Z"/></svg>
    ) },
    { name: 'Email', url: 'mailto:your@email.com', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"/></svg>
    ) },
  ]

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map(l => (
        <a key={l.name} href={l.url} target={l.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition text-white/85 hover:text-white">
          <span className="text-brand-cyan">{l.icon}</span>
          <span>{l.name}</span>
        </a>
      ))}
    </div>
  )
}
