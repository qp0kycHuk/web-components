import { defineConfig } from "vite"
import path from "path"
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
module.exports =  defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "./index.html",
        menu: "./menu.html",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@packages": path.resolve(__dirname, "./packages"),
    },
  },
})
