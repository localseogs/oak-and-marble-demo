// @ts-check
import { defineConfig } from 'astro/config';

// Astro serves and builds this site with Vite.
// https://astro.build/config
export default defineConfig({
	redirects: {
		'/investment': '/costs-guide',
	},
});
