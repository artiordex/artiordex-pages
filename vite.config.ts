/**
 * Description : vite.config.ts - 📌 Vite 빌드 & 개발 환경 설정
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // React 플러그인
  plugins: [react()],

  // 프로젝트 루트를 apps 폴더로 지정
  root: 'apps',

  // 공용 정적 파일 위치 (root 기준 상대 경로)
  publicDir: 'public',

  // GitHub Pages 배포용 기본 경로
  base: '/artiordex-pages/',

  // 개발 서버
  server: {
    port: 5173,
    open: true,
  },

  // 배포 빌드 설정
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: false,
  },

  // 절대 경로 alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './apps/src'),
    },
  },
});
