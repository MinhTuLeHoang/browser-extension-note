import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  // root: './src',
  // base: '',
  plugins: [
    react(),
    // tsconfigPaths(),
    // // viteStaticCopy({
    // //   targets: [
    // //     {
    // //       src: '../public/manifest.json',
    // //       dest: '../.',
    // //     }
    // //   ],
    // // }),
  ],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
})
