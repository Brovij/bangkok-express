import { defineConfig } from "vite";

export default defineConfig({
    base: '/bangkok-express/',
    build: {
      rollupOptions: {
        input: {
          main: './index.html',
          notFound: './404.html',
        },
      },
    },
})