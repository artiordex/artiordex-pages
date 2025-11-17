/**
 * Description : vite.config.ts - 📌 Vite 빌드 & 개발 환경 설정
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  // 기본 public 경로 설정 (배포 환경 CDN 대응 가능)
  base: '/',

  // 절대 경로 alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // 개발 서버 설정
  server: {
    port: 5173,
    open: true,
  },

  // 빌드 옵션
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
  },
});
