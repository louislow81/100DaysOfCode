import { defineConfig } from 'vite';

const filename = "app";

export default defineConfig({
  build: {
    rollupOptions: {
      output: [
        { // [hash], [name], [ext]
          chunkFileNames: 'assets/' + filename + '.[hash].js', 
          entryFileNames: 'assets/' + filename + '.js',
          assetFileNames: 'assets/' + filename + '.[ext]',
        },
     ],
    },
  },
});
