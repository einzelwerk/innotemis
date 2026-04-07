import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	build: {
		polyfillModulePreload: false,
		outDir: 'dist',
		rollupOptions: {
			input: {
				index: path.resolve(__dirname, 'index.html'),
				impressum: path.resolve(__dirname, 'impressum.html'),
				datenschutz: path.resolve(__dirname, 'datenschutz.html')
			},
			output: {
				entryFileNames: 'assets/js/[name].js',
				chunkFileNames: 'assets/js/[name].js',
				assetFileNames: assetInfo => {
					if (assetInfo.name && assetInfo.name.endsWith('.css')) {
						return 'assets/css/[name][extname]'
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
