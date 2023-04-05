import {resolve} from 'path'
import Tov from './presets/tov'
import {defineConfig} from 'vite'

export default defineConfig({
	base: './',
	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`,
		},
	},
	define: {
		__VUE_OPTIONS_API__: false, // 明确不使用 options api
	},
	plugins: [Tov()],
})
