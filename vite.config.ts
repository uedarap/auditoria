import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { template } from 'cypress/types/lodash'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {transformAssetUrls}
    }), 
    quasar({
      // sassVariables: 'src/quasar-variables.sass'
    }),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: "./src/web-comp.js",
      formats: ["es", "cjs"],
      name: "vue-web-comp",
      fileName: (format) => (format == 'es' ? "index.js" : "index.cjs"),
    },
    sourcemap: true,
    target: "esnext",
    minify: false,
  }
})
