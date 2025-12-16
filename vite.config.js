import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	build: {
		polyfillModulePreload: false,
		outDir: 'dist',
		rollupOptions: {
			input: path.resolve(__dirname, 'index.html'),
			output: {
				entryFileNames: 'js/[name].js',
				chunkFileNames: 'js/[name].js',
				assetFileNames: assetInfo => {
					if (assetInfo.name && assetInfo.name.endsWith('.css')) {
						return 'css/[name][extname]'
					}
					return 'assets/[name][extname]'
				}
			}
		},
		sourcemap: true,
		minify: false,
		cssCodeSplit: true
	}
})
