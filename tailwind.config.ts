import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00C9A7',
          purple: '#C084FC',
          dark: '#0E0E10'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui'],
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['Roboto Mono', 'ui-monospace', 'SFMono-Regular']
      }
    }
  },
  plugins: []
} satisfies Config

