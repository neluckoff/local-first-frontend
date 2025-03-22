import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default defineConfig({
  plugins: [
      vue({
        template: { transformAssetUrls },
      }),
      quasar(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  scss: {
    additionalData: `
            @import "@/app/styles/variables.scss";
          	@import "@/app/styles/app.scss";
          `,
  },
})
