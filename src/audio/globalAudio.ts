let cached: HTMLAudioElement | null = null

export function getGlobalAudio(src: string, initialVolume = 0.5, autoPlay = true) {
  if (typeof window === 'undefined') return null
  if (!cached) {
    cached = new Audio()
    cached.preload = 'metadata'
    cached.volume = initialVolume
    cached.crossOrigin = 'anonymous'
    // Keep it alive even if React remounts
    cached.setAttribute('data-global-audio', 'true')
    // Attach to DOM (hidden) so mobile browsers allow playback controls
    cached.style.display = 'none'
    document.body.appendChild(cached)
  }
  if (src && cached.src !== new URL(src, window.location.origin).toString()) {
    const wasPlaying = !cached.paused
    cached.src = src
    if (autoPlay || wasPlaying) {
      cached.play().catch(() => {})
    }
  } else if (autoPlay && cached.paused) {
    cached.play().catch(() => {})
  }
  return cached
}

