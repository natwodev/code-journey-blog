import { useEffect, useMemo, useState } from 'react'
import { getGlobalAudio } from '../../audio/globalAudio'

export default function AudioToggle({ src, size = 'md', showLabel = true }: { readonly src: string; readonly size?: 'sm' | 'md'; readonly showLabel?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const classes = useMemo(() => {
    if (!showLabel) {
      return size === 'sm' ? 'h-10 w-10' : 'h-11 w-11'
    }
    return size === 'sm' ? 'h-10 px-4 text-sm' : 'h-11 px-5'
  }, [size, showLabel])

  useEffect(() => {
    const a = getGlobalAudio(src, 0.4, false)
    if (!a) return

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    a.addEventListener('play', onPlay)
    a.addEventListener('pause', onPause)
    setIsPlaying(!a.paused)

    return () => {
      a.removeEventListener('play', onPlay)
      a.removeEventListener('pause', onPause)
    }
  }, [src])

  function toggle() {
    const a = getGlobalAudio(src, 0.4, false)
    if (!a) return
    if (a.paused) {
      a.play().catch(() => {})
    } else {
      a.pause()
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={`rounded-xl neon-border bg-white/5 hover:bg-white/10 transition inline-flex items-center justify-center gap-2 ${classes}`}
      aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
    >
      {isPlaying ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 6h4v12H7zM13 6h4v12h-4z"/></svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/></svg>
      )}
      {showLabel && (
        <span className="text-sm md:text-base">{isPlaying ? 'Tắt nhạc' : 'Phát nhạc'}</span>
      )}
    </button>
  )
}


