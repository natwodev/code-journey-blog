import { createContext } from 'react'

export type Lang = 'vi' | 'en'

export interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)
