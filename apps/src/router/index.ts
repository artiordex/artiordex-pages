/**
 * Description : AppRoutes.tsx - 📌 SPA 라우팅 + 전역 네비게이션 지원
 * Author : Shiwoo Min
 * Date : 2025-11-16
 */

import { useRoutes, useNavigate, type NavigateFunction } from "react-router-dom";
import { useEffect } from "react";
import routes from "./routes";

/* 전역 navigate Promise */
let resolveNavigate!: (nav: NavigateFunction) => void;

export const navigatePromise = new Promise<NavigateFunction>((resolve) => {
  resolveNavigate = resolve;
});

/* Window 글로벌 타입 확장 */
declare global {
  interface Window {
    REACT_APP_NAVIGATE?: NavigateFunction;
  }
}

/* AppRoutes (정상 라우팅 + navigate 바인딩) */
export function AppRoutes() {
  const element = useRoutes(routes);
  const navigate = useNavigate();

  useEffect(() => {
    // 글로벌 navigate 최초 바인딩
    if (!window.REACT_APP_NAVIGATE) {
      window.REACT_APP_NAVIGATE = navigate;
      resolveNavigate(navigate);
    }
  }, [navigate]);

  return element;
}

export default AppRoutes;
