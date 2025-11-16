/**
 * Description : ui-types.ts - 📌 ConnectWon UI 타입 정의
 * Author : Shiwoo Min
 * Date : 2025-09-16
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import App from '@/AppShell';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
