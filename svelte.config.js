import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	routes: {
		include: ['/*'],
		exclude: ['<all>']
	},

	kit: {
		adapter: adapter()
	}
};

export default config;
