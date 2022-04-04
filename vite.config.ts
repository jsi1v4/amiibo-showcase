import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoimport from 'unplugin-vue-components/vite';
import path from 'path';

const src = path.resolve(__dirname, 'src');

export default defineConfig({
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
