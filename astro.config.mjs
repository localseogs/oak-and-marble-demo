// @ts-check
import { defineConfig } from 'astro/config';

// Astro serves and builds this site with Vite.
// https://astro.build/config
export default defineConfig({
	site: 'https://localseogs.github.io',
	base: '/oak-and-marble-demo',
	redirects: {
		'/investment': '/costs-guide',
	},
});
