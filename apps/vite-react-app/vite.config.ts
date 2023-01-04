import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import * as path from 'path';

export default defineConfig({
  plugins: [react(), viteCommonjs()],
  optimizeDeps: {
    // Needed for react-native-icons
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
    include: [
      'react',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
      'react-dom',
      "styled-components",
      "styled-components/native",
    ],
  },
  build: {
    // Needed for styled-components/native
    commonjsOptions: {
      transformMixedEsModules: true
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom', 'react-native-web', 'styled-components', 'styled-components/native'],
    alias: {
      'react-native': 'react-native-web',
      // Needed for styled-components/native
      "postcss-safe-parser": path.resolve(process.cwd(), "config", "noop.js"),
    },
  },
  ssr: {
    external: [
      'react-dom/server',
      'react-dom/client',
    ],
    noExternal: [
      'styled-components',
      'styled-components/native',
    ],
  },
})
