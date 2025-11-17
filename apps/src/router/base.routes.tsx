/**
 * Description : base.routes.ts - 📌 React Router v6 기반 라우트 설정
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import type { RouteObject } from "react-router-dom";
import HomePage from "@/pages/home/page";

const baseRoutes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
];

export default baseRoutes;
