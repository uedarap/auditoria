import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      customElement: true,
      template: { transformAssetUrls }
    }), 
    quasar({
      // sassVariables: 'quasar/dist/quasar.sass'
    }),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // 'quasar': './node_modules/quasar/dist/quasar.esm-browser.prod.js',
      // 'quasar': path.resolve(__dirname, 'node_modules/quasar'),
      // 'quasar/css': './node_modules/quasar/dist/quasar.prod.css',
    }
  },
  build: {
    lib: {
      entry: "./src/main.ce.ts",
      // formats: ["es", "cjs"],
      name: "pagina-auditoria",
      // fileName: (format) => (format == 'es' ? "index.js" : "index.cjs"),
      fileName: 'pagina-auditoria',
    },
    rollupOptions: {
      output: {
        globals: {
          'quasar': 'quasar'
        }
      }
    }
  },
  define: {
    'process.env': process.env
  },
})
