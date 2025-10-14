import { useLanguage } from '../../context/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  const other = lang === 'vi' ? 'en' : 'vi'
  return (
    <button
      aria-label="Toggle language"
      onClick={() => setLang(other)}
      className="px-3 py-1 rounded-lg neon-border bg-white/5 hover:bg-white/10 text-sm"
    >
      {lang.toUpperCase()}
    </button>
  )
}

