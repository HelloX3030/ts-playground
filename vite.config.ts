import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: 'index.html',
				animals: 'animals.html',
			}
		}
	},
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, './src'),
		},
	},
});
