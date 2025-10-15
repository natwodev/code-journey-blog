import { useEffect } from 'react'
import { getGlobalAudio } from '../../audio/globalAudio'

export default function AutoplayAudio({ src = '/audio/theme.mp3', volume = 0.4, loop = true }: { src?: string; volume?: number; loop?: boolean }) {
  useEffect(() => {
    const a = getGlobalAudio(src, volume, true)
    if (!a) return
    a.loop = loop

    if (a.paused) {
      a.play().catch(() => {
        const resume = () => {
          a.play().catch(() => {})
          window.removeEventListener('pointerdown', resume)
          window.removeEventListener('keydown', resume)
          window.removeEventListener('touchstart', resume)
        }
        window.addEventListener('pointerdown', resume, { once: true })
        window.addEventListener('keydown', resume, { once: true })
        window.addEventListener('touchstart', resume, { once: true })
      })
    }
  }, [src, volume, loop])

  return null
}


