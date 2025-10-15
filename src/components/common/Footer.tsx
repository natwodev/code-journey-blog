import { useLanguage } from '../../context/LanguageContext'
import { usePageViewCounter } from '../../hooks/usePageViewCounter'

export default function Footer() {
  const { lang } = useLanguage()
  const { count, loading } = usePageViewCounter('code-journey-blog', 'site')

  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between">
        <p className="text-white/60">© {new Date().getFullYear()} natwo developer</p>
        <div className="flex items-center gap-6 text-white/70">
          <div className="text-sm">
            {lang === 'vi' ? 'Lượt truy cập:' : 'Visits:'} {loading ? '—' : (count ?? '—')}
          </div>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-brand-cyan">GitHub</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-brand-cyan">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
