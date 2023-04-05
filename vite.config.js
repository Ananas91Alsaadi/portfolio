import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'




// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/',

  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {

    rollupOptions: {
      external: [
        '/portfolio/pic6.png',
        '/portfolio/Picture2.png',
        "/portfolio/pic4.jpeg",
        "/portfolio/pic7.png",
        "/portfolio/pic1.jpg",
        "/portfolio/Picture3.png",
        "/portfolio/pic5.jpg",
      ] // specify the path of the external asset here
    }
  }

});

