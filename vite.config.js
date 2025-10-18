import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/portfolio-2/', // <-- only needed if deploying to GitHub Pages
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
