import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContextValue'

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
