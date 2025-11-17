/**
 * Description : AppRoutes.tsx - 📌 SPA 라우팅 + 전역 네비게이션 지원
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import { useEffect } from "react";
import { useNavigate, useRoutes, type NavigateFunction } from "react-router-dom";

/* 섹션별 RouteObject[] 자동 병합 */
import aboutRoutes from "./about.routes";
import baseRoutes from "./base.routes";
import contactRoutes from "./contact.routes";
import portfolioRoutes from "./portfolio.routes";
import resourcesRoutes from "./resources.routes";
import solutionsRoutes from "./solutions.routes";

/* 전체 라우트를 하나의 배열로 정리 */
const routes = [
  ...baseRoutes,
  ...aboutRoutes,
  ...portfolioRoutes,
  ...solutionsRoutes,
  ...contactRoutes,
  ...resourcesRoutes,
];

/* 전역 navigate Promise */
let resolveNavigate!: (nav: NavigateFunction) => void;

export const navigatePromise = new Promise<NavigateFunction>((resolve) => {
  resolveNavigate = resolve;
});

declare global {
  interface Window {
    REACT_APP_NAVIGATE?: NavigateFunction;
  }
}

/* AppRoutes Component useRoutes()로 라우팅 */
export function AppRoutes() {
  const element = useRoutes(routes);
  const navigate = useNavigate();

  useEffect(() => {
    // 최초 바인딩만 허용
    if (!window.REACT_APP_NAVIGATE) {
      window.REACT_APP_NAVIGATE = navigate;
      resolveNavigate(navigate);
    }
  }, [navigate]);

  return element;
}

export default AppRoutes;
