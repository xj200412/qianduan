
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    proxy: {
      // 匹配所有以 '/' 开头的请求（需与 axios baseURL 对应）
      '/': {
        target: 'http://localhost:8081', // 后端接口地址
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace(/^\//, '') // 移除请求路径中的 '/' 前缀
      }
    }
  }
})