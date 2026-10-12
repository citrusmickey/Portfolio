import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 專案頁面路徑：https://citrusmickey.github.io/Portfolio/
  base: '/Portfolio/',
})
