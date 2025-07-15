import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
,
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
