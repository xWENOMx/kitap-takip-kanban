import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Tailwind Vite eklentisi

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
