import { useEffect, useState } from 'react'

type CounterState = {
  count: number | null
  loading: boolean
  error: string | null
}

/**
 * Tracks and displays page views using CountAPI (no backend needed).
 * Increments only once per browser session to avoid overcounting reloads.
 */
type Options = {
  /**
   * Control how increments happen.
   * - 'always': increment on every load (simplest to see changes)
   * - 'oncePerSession': increment only once per browser session
   */
  increment?: 'always' | 'oncePerSession'
}

export function usePageViewCounter(namespace: string, key: string, options: Options = { increment: 'always' }) {
  const [state, setState] = useState<CounterState>({ count: null, loading: true, error: null })

  useEffect(() => {
    let aborted = false
    const sessionKey = `pv:${namespace}:${key}`

    async function run() {
      try {
        const useOncePerSession = options.increment === 'oncePerSession'
        const hasCounted = useOncePerSession && sessionStorage.getItem(sessionKey) === '1'
        const endpoint = hasCounted || options.increment === 'always'
          ? `https://api.countapi.xyz/hit/${encodeURIComponent(namespace)}/${encodeURIComponent(key)}`
          : `https://api.countapi.xyz/get/${encodeURIComponent(namespace)}/${encodeURIComponent(key)}`

        const res = await fetch(endpoint, { cache: 'no-store' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = (await res.json()) as { value?: number; count?: number }
        const value = typeof data.value === 'number' ? data.value : data.count ?? null

        if (!aborted) {
          if (options.increment === 'oncePerSession' && !hasCounted) sessionStorage.setItem(sessionKey, '1')
          setState({ count: value, loading: false, error: null })
        }
      } catch (e: unknown) {
        if (!aborted) {
          const message = e instanceof Error ? e.message : 'Unknown error'
          setState({ count: null, loading: false, error: message })
        }
      }
    }

    run()
    return () => {
      aborted = true
    }
  }, [namespace, key, options.increment])

  return state
}


