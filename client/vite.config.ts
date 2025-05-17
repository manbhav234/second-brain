import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'), // or wherever your base folder is
    },
  },
    server: {
    proxy: {
      '/api/v1' : {target: 'http://localhost:3000'}
    }
  },
})