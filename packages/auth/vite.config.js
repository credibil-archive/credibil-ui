import path from 'path'

import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    reactRefresh()
  ],
  resolve: {
    // import x from '@/component/x'
    // eslint-disable-next-line no-undef
    alias: { '@': path.resolve(__dirname, './src') }
  },
})