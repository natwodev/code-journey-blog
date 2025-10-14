import { useRef } from 'react'

export function useMouseTilt<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rx = ((y / rect.height) - 0.5) * -6
    const ry = ((x / rect.width) - 0.5) * 6
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`
  }
  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'rotateX(0) rotateY(0)'
  }
  return { ref, onMouseMove, onMouseLeave }
}

