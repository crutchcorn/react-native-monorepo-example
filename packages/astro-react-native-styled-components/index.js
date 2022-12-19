import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getRenderer() {
	return {
		name: '@crutchcorn/astro-react-native-styled-components',
		clientEntrypoint: '@crutchcorn/astro-react-native-styled-components/client.js',
		serverEntrypoint: '@crutchcorn/astro-react-native-styled-components/server.js',
		jsxImportSource: 'react',
		jsxTransformOptions: async () => {
			const babelPluginTransformReactJsxModule = await import('@babel/plugin-transform-react-jsx');
			const jsx =
				babelPluginTransformReactJsxModule?.default?.default ??
				babelPluginTransformReactJsxModule?.default;
			return {
				plugins: [
					jsx(
						{},
						{
							runtime: 'automatic',
							importSource: 'react',
						}
					),
				],
			};
		},
	};
}

function getViteConfiguration() {
	return {
		optimizeDeps: {
			include: [
				'@crutchcorn/astro-react-native-styled-components/client.js',
				'react',
				'react/jsx-runtime',
				'react/jsx-dev-runtime',
				'react-dom',
			],
			exclude: [
				'@crutchcorn/astro-react-native-styled-components/server.js'
			],
		},
		resolve: {
			dedupe: ['react', 'react-dom'],
			alias: {
				'react-native': 'react-native-web',
				"@emotion/stylis": path.resolve(__dirname, "stylis-patch.js")
			},
		},
		ssr: {
			external: [
				'react-dom/server',
				'react-dom/client',
				'@crutchcorn/astro-react-native-styled-components/server.js'
			],
			noExternal: [
				'styled-components',
				'@babel/runtime',
			],
		},
		plugins: [
			viteCommonjs()
		]
	};
}

export default function () {
	return {
		name: '@crutchcorn/astro-react-native-styled-components',
		hooks: {
			'astro:config:setup': ({ addRenderer, updateConfig }) => {
				addRenderer(getRenderer());
				updateConfig({ vite: getViteConfiguration() });
			},
		},
	};
}
