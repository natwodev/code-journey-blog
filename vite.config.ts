import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to the subpath you deploy under, e.g., '/blog/'
  base: '/blog/',
})
