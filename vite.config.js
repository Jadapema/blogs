import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import react from '@vitejs/plugin-react'
import { terser } from 'rollup-plugin-terser'
import svgr from 'vite-plugin-svgr'
import TsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path';
import EnvironmentPlugin from 'vite-plugin-environment';
import reactSvgPlugin from 'vite-plugin-react-svg';

const mode = process.env.NODE_ENV ?? 'production'
const isProd = mode === 'production'

const aliases = {
	'@src': resolve(__dirname, 'src'),
	'@hoc': resolve(__dirname, 'src/hoc'),
	'@i18n': resolve(__dirname, 'src/i18n'),
	'@public': resolve(__dirname, 'public'),
	'@gql': resolve(__dirname, 'src/graphql'),
	'@pages': resolve(__dirname, 'src/pages'),
	'@hooks': resolve(__dirname, 'src/hooks'),
	'@assets': resolve(__dirname, 'src/assets'),
	'@config': resolve(__dirname, 'src/config'),
	'@styles': resolve(__dirname, 'src/styles'),
	'@helpers': resolve(__dirname, 'src/helpers'),
	'@state': resolve(__dirname, 'src/redux'),
	'@services': resolve(__dirname, 'src/services'),
	'@navigation': resolve(__dirname, 'src/navigation'),
	'@components': resolve(__dirname, 'src/components'),
	'@layouts': resolve(__dirname, 'src/pages/__layouts__'),
	// '@types/react': require.resolve('@types/react'),
}

export default defineConfig({
	plugins: [
		react(),
		reactRefresh(),
		TsconfigPaths(),
		svgr(),
		EnvironmentPlugin('all'),
		reactSvgPlugin(),
		isProd && terser()
	],
	resolve: {
		alias: aliases,
	},
	build: {
		outDir: 'dist',
		sourcemap: !isProd,
		rollupOptions: {
			input: {
				entry: resolve(__dirname, 'public/index.html'),
			},
		},
	},
	server: {
		port: 8082,
		open: '/',
		host: '0.0.0.0',
	},
	css: {
		preprocessorOptions: {
			scss: {},
		},
	},
	publicDir: '/public',
})

