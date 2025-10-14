import { useEffect, useState } from 'react'

export function useTypingEffect(text: string, speedMs = 40) {
  const [output, setOutput] = useState('')
  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setOutput(text.slice(0, ++i))
      if (i >= text.length) clearInterval(id)
    }, speedMs)
    return () => clearInterval(id)
  }, [text, speedMs])
  return output
}

