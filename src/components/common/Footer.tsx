export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between">
        <p className="text-white/60">© {new Date().getFullYear()} natwo developer</p>
        <div className="flex gap-4 text-white/70">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-brand-cyan">GitHub</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-brand-cyan">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
