import reactRefresh from '@vitejs/plugin-react-swc'

import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
	base: '/',
	plugins: [reactRefresh(), eslint()],
	build: {
		outDir: './build/',
		sourcemap: false,
	},
	server: {
		port: 3000,
		strictPort: true,
	},
	preview: {
		port: 3000,
	},
})
