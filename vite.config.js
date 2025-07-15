import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

// Install this first:
// npm install --save-dev @esbuild-plugins/node-globals-polyfill

export default defineConfig({
  plugins: [
    react(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis', // required for Buffer polyfill to work
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
});
