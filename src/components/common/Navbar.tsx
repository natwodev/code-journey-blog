import { Link, NavLink } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../../context/LanguageContext'

export default function Navbar() {
  const { lang } = useLanguage()
  const t = (vi: string, en: string) => (lang === 'vi' ? vi : en)
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg hover:bg-white/10 transition ${isActive ? 'text-brand-cyan' : 'text-white/80'}`

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-poppins text-lg">natwodev</Link>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={navClass} end>{t('Trang chủ', 'Home')}</NavLink>
          <NavLink to="/blog" className={navClass}>{t('Blog', 'Blog')}</NavLink>
          <NavLink to="/projects" className={navClass}>{t('Dự án', 'Projects')}</NavLink>
          <NavLink to="/about" className={navClass}>{t('Giới thiệu', 'About')}</NavLink>
          <NavLink to="/contact" className={navClass}>{t('Liên hệ', 'Contact')}</NavLink>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  )
}
