import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // แนะนำให้ลบบรรทัด css.postcss เพราะ Vite จะโหลด config อัตโนมัติ
  // หากยังอยากระบุเอง ให้ใช้เป็น .cjs เท่านั้น
  /*
  css: {
    postcss: './postcss.config.cjs',
  },
  import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
})*/
})