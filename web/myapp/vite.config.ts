import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    process: {
      env: {
        "MOCK_URL": "http://localhost:8200",
        "DEVELOPMENT_URL": "http://localhost:5219/api",
      }
    }
  }
})
