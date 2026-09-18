import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project at /profile/; keep dev at the root
  base: command === 'build' ? '/profile/' : '/',
  plugins: [react()],
}))
