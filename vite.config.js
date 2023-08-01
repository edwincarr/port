import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import md from 'vite-plugin-vue-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000},
  assetsInclude: ['**/*.md'],
  plugins: [
    md(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    exclude: ["oh-vue-icons/icons"],
  }
})
