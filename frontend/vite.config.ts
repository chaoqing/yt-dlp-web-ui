import react from '@vitejs/plugin-react-swc'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      react(),
      ViteYaml(),
    ],
    root: resolve(__dirname, '.'),
    build: {
      emptyOutDir: true,
      outDir: resolve(__dirname, 'dist'),
    }
  }
})
