import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react'

export type Lang = 'vi' | 'en'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('cj-lang') as Lang | null
    return saved ?? 'vi'
  })

  const value = useMemo(() => ({ lang, setLang: (l: Lang) => {
    localStorage.setItem('cj-lang', l)
    setLang(l)
  }}), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

