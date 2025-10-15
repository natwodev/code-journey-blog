import { useEffect } from 'react'

export default function DisableContextMenu() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      e.preventDefault()
    }
    const keyHandler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      const isCmdOrCtrl = e.ctrlKey || e.metaKey
      const devToolsCombos = (
        // F12
        e.key === 'F12' ||
        // Ctrl/Cmd+Shift+I/J/C
        (isCmdOrCtrl && e.shiftKey && (key === 'i' || key === 'j' || key === 'c')) ||
        // Ctrl/Cmd+U (view source)
        (isCmdOrCtrl && key === 'u')
      )
      if (devToolsCombos) {
        e.preventDefault()
        e.stopPropagation()
      }
    }
    document.addEventListener('contextmenu', handler)
    document.addEventListener('keydown', keyHandler)
    return () => {
      document.removeEventListener('contextmenu', handler)
      document.removeEventListener('keydown', keyHandler)
    }
  }, [])

  return null
}


