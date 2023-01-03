import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import * as path from 'path';

export default defineConfig({
  plugins: [react(), viteCommonjs()],
  optimizeDeps: {
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
    commonjsOptions: {
      transformMixedEsModules: true
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom', 'react-native-web', 'styled-components', 'styled-components/native'],
    alias: {
      'react-native': 'react-native-web',
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
