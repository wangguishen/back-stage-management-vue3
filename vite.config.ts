import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import';
const resolve = (dir: string) => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 设置别名
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [
        ElementPlusResolve()
      ],
      libs: [
        // 如果没有需要的 resolve ，可以在 lib 内直接写，也可以提供PR
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`
          },
          ensureStyleFile: true // 忽略文件是否存在，导入不存在的 CSS 文件时防止错误。
        }
      ]
    })
  ],
  server: {
    port: 8080, // 启动端口
    hmr: {
      host: '127.0.0.1',
      port: 8080
    },
    // 设置https代理
    proxy: {
      '/api': {
        target: '', // https地址
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
