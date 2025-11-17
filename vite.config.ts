/**
 * Description : vite.config.ts - 📌 Vite 빌드 & 개발 환경 설정
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // 프로젝트 루트를 apps 폴더로 지정
  root: 'apps',

  // 공용 정적 파일 위치
  publicDir: 'apps/public',

  // 개발 서버
  server: {
    port: 5173,
    open: true,
  },

  // 배포 빌드 설정
  build: {
    outDir: '../dist', // dist는 루트 기준 생성
    emptyOutDir: true,
    sourcemap: false,
  },

  // 절대 경로 alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './apps/src'),
    },
  },

  // 배포용 기본 경로
  base: './'
});
