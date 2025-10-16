import { useEffect, useRef, useState } from 'react'
import { getGlobalAudio } from '../../audio/globalAudio'

export default function MusicPlayer({ src, title, autoPlay = true }: { src: string; title: string; autoPlay?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume] = useState(0.5)

  useEffect(() => {
    const a = getGlobalAudio(src, volume, autoPlay)
    if (!a) return
    audioRef.current = a

    const onLoaded = () => setDuration(a.duration || 0)
    const onTime = () => setCurrent(a.currentTime || 0)
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)

    a.addEventListener('loadedmetadata', onLoaded)
    a.addEventListener('timeupdate', onTime)
    a.addEventListener('play', onPlay)
    a.addEventListener('pause', onPause)

    // ensure correct source/volume
    a.volume = volume

    // autoplay with user gesture fallback
    if (autoPlay && a.paused) {
      a.play().catch(() => {
        const resume = () => {
          a.play().catch(() => {})
          window.removeEventListener('pointerdown', resume)
        }
        window.addEventListener('pointerdown', resume, { once: true })
      })
    }

    return () => {
      a.removeEventListener('loadedmetadata', onLoaded)
      a.removeEventListener('timeupdate', onTime)
      a.removeEventListener('play', onPlay)
      a.removeEventListener('pause', onPause)
      // DO NOT pause or remove element to keep playback persistent
    }
  }, [src, volume, autoPlay])

  function toggle() {
    const a = audioRef.current
    if (!a) return
    if (a.paused) {
      a.play().catch(() => {})
    } else {
      a.pause()
    }
  }

  function onSeek(e: React.ChangeEvent<HTMLInputElement>) {
    const a = audioRef.current
    if (!a) return
    const t = Number(e.target.value)
    a.currentTime = t
    setCurrent(t)
  }

  const fmt = (s: number) => {
    if (!isFinite(s)) return '0:00'
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60).toString().padStart(2, '0')
    return `${m}:${sec}`
  }

  return (
    <div className="rounded-2xl border border-white/10 p-4 bg-[#0c1014]/70" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(0,201,167,0.10), rgba(192,132,252,0.10))'
    }}>
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 w-full">
          <div className="text-base md:text-lg font-semibold bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent truncate relative">
            {title}
            <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-brand-cyan/60 to-brand-purple/60 blur-[1px]" />
          </div>
          <div className="mt-2 flex items-center gap-2">
            <button aria-label={isPlaying ? 'Pause' : 'Play'} onClick={toggle} className="h-10 w-10 grid place-items-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple text-black font-semibold shadow-[0_0_28px_rgba(0,201,167,0.35)]">
              {isPlaying ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 6h4v12H7zM13 6h4v12h-4z"/></svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>
            <div className="flex-1 flex items-center gap-2 min-w-0 hidden">
              <span className="text-xs text-white/60 tabular-nums">{fmt(current)}</span>
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={current}
                onChange={onSeek}
                className="flex-1 h-1 rounded-full appearance-none bg-white/10"
              />
              <span className="text-xs text-white/60 tabular-nums">{fmt(duration)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
