import { useMemo, useState } from 'react';
import type { ReactNode } from 'react'
import { LanguageContext, type Lang } from './LanguageContextValue'

export function LanguageProvider({ children }: { readonly children: ReactNode }) {
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


