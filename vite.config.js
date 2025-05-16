import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
// https://vite.dev/config/
export default defineConfig(({ command }) => {
  console.log(command)
  return {
    base: './',
    build: {
      rollupOptions: {
        input: {
          main: fileURLToPath(new URL('./index.html', import.meta.url)),
          admin: fileURLToPath(new URL('./admin.html', import.meta.url)),
          mobile: fileURLToPath(new URL('./mobile.html', import.meta.url)),
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            'arcoblue-6': '#f85959',
          },
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      viteMockServe({
        mockPath: 'mock',
        enable: command === 'serve' ? true : false,
      }),
      AutoImport({
        resolvers: [ArcoResolver()],
      }),
      Components({
        resolvers: [
          ArcoResolver({
            sideEffect: true,
          }),
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://localhost:5173', // 替换为你的后端地址
          changeOrigin: true, // 是否修改请求的源
          // rewrite: (path) => path.replace(/^\/api/, ''), // 去掉 /api 前缀
        },
      },
    },
  }
})
