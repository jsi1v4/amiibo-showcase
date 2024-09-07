import vue from '@vitejs/plugin-vue';
import path from 'path';
import autoimport from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

const src = path.resolve(__dirname, 'src');

export default defineConfig({
  base: '/amiibo-showcase/',
  plugins: [
    vue(),
    autoimport({
      dirs: [`${src}/components`, `${src}/layouts`, `${src}/providers`]
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: src }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${src}/styles/variables.scss";`
      }
    }
  }
});
