import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button aria-label="Toggle theme" onClick={toggleTheme} className="px-3 py-1 rounded-lg neon-border bg-white/5 hover:bg-white/10 text-sm">
      {theme === 'dark' ? 'Dark' : 'Light'}
    </button>
  )
}

