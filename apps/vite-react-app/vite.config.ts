import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCommonjs()  ],
  optimizeDeps: {
    include: [
      '@crutchcorn/astro-react-native-styled-components/client.js',
      'react',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
      'react-dom'
    ]
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom', 'react-native-web', 'styled-components', 'styled-components/native'],
    alias: {
      'react-native': 'react-native-web',
      // // styled-components/native does not like me :(
      // "@emotion/stylis": path.resolve(__dirname, "stylis-patch.js"),
      // "css-to-react-native": path.resolve(__dirname, "css-to-react-native-patch.js")
    },
  },
  ssr: {
    external: [
      'react-dom/server',
      'react-dom/client'
    ],
    noExternal: [
      'styled-components',
      'styled-components/native',
      '@babel/runtime',
    ],
  },
})
