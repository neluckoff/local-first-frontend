import { fileURLToPath, URL } from 'node:url';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

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
});
