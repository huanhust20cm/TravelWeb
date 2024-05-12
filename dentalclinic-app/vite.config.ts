import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        globalVars: {},
        javascriptEnabled: true
      },
      scss: {
        additionalData: `
        @import "./src/common/assets/scss/variables/_variables.scss";
        @import "./src/common/assets/scss/variables/_mixin.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'app-admin': resolve(__dirname, './src/app-admin')
    }
  },
  assetsInclude: ['**/*.svgx']
});
