/**
 * Description : portfolio.routes.tsx - 📌 포트폴리오(portfolio) 라우터 정의
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import type { RouteObject } from "react-router-dom";

/* Portfolio 메인 */
import PortfolioPage from "@/pages/portfolio/page";

/* Top-level categories */
import AIPortfolioPage from "@/pages/portfolio/ai/page";
import DataPortfolioPage from "@/pages/portfolio/data/page";
import DXPortfolioPage from "@/pages/portfolio/dx/page";
import IndustryPortfolioMainPage from "@/pages/portfolio/industry/page";
import ProductPortfolioPage from "@/pages/portfolio/product/page";

/* AI Projects 상세 섹션 */
import DocumentIntelligencePage from "@/pages/portfolio/ai-projects/document-intelligence/page";
import AIProjectsPage from "@/pages/portfolio/ai-projects/page";
import PredictiveAnalyticsPage from "@/pages/portfolio/ai-projects/predictive-analytics/page";
import WorkflowAutomationPage from "@/pages/portfolio/ai-projects/workflow-automation/page";

/* Portfolio 상세 페이지 */
import ProjectDetailPage from "@/pages/portfolio/[id]/page";

/* Portfolio 라우트 구성 */
const portfolioRoutes: RouteObject[] = [
  { path: "/portfolio", element: <PortfolioPage /> },

  /* Category pages */
  { path: "/portfolio/ai", element: <AIPortfolioPage /> },
  { path: "/portfolio/dx", element: <DXPortfolioPage /> },
  { path: "/portfolio/data", element: <DataPortfolioPage /> },
  { path: "/portfolio/industry", element: <IndustryPortfolioMainPage /> },
  { path: "/portfolio/product", element: <ProductPortfolioPage /> },

  /* AI Projects (sub pages) */
  { path: "/portfolio/ai-projects", element: <AIProjectsPage /> },
  { path: "/portfolio/ai-projects/workflow-automation", element: <WorkflowAutomationPage /> },
  { path: "/portfolio/ai-projects/document-intelligence", element: <DocumentIntelligencePage /> },
  { path: "/portfolio/ai-projects/predictive-analytics", element: <PredictiveAnalyticsPage /> },

  /* Portfolio dynamic detail page */
  { path: "/portfolio/:id", element: <ProjectDetailPage /> },
];

export default portfolioRoutes;
