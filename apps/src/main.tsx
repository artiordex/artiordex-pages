/**
 * Description : main.tsx - 📌 React 애플리케이션 진입점 및 Strict Mode 적용
 * Author : Shiwoo Min
 * Date : 2025-09-17
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppShell from '@/AppShell';
import '@/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppShell />
  </StrictMode>,
);
