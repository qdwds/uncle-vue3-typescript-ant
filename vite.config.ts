import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import { baseURL } from "./src/utils/env";
console.log(loadEnv);

// https://vitejs.dev/config/

export default ({ mode }) => {
  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        //  @/ => src/
        "@": resolve(__dirname, "src"),
        //  #/ => types/
        "#": resolve(__dirname, "types"),
      },
    },
    build: {
      sourcemap: true
    },
    server: {
      proxy: {
        '/api': {
          target: "http://localhost:5000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      },
    }
  })

}