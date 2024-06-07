import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://dibrovgleb.github.io/DibrovGleb-prof-task/",
  plugins: [react()],
})
