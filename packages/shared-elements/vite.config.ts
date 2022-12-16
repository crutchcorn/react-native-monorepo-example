import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts(),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'SharedElements',
            fileName: 'shared-elements',
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react-native', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-native': "ReactNative",
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
    },
});
