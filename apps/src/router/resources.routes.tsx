/**
 * Description : resources.routes.tsx - 📌 Resources 라우터 정의
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import type { RouteObject } from "react-router-dom";

/* Main */
import ResourcesPage from "@/pages/resources/page";

/* Blog */
import TechnicalBlogPage from "@/pages/resources/blog/page";
import AITrendsPage from "@/pages/resources/blog/ai-trends/page";
import DXBestPracticesPage from "@/pages/resources/blog/dx-best-practices/page";
import TechTutorialsPage from "@/pages/resources/blog/tech-tutorials/page";

/* Whitepapers */
import WhitepapersPage from "@/pages/resources/whitepapers/page";
import AIImplementationGuidePage from "@/pages/resources/whitepapers/ai-implementation-guide/page";
import DXStrategyWhitepaperPage from "@/pages/resources/whitepapers/dx-strategy-whitepaper/page";
import DataIntegrationBestPracticesPage from "@/pages/resources/whitepapers/data-integration-best-practices/page";

/* Webinars */
import WebinarsEventsPage from "@/pages/resources/webinars/page";
import UpcomingWebinarsPage from "@/pages/resources/webinars/upcoming-webinars/page";
import PastEventsPage from "@/pages/resources/webinars/past-events/page";
import ConferencePresentationsPage from "@/pages/resources/webinars/conference-presentations/page";

/* Tools */
import ToolsTemplatesPage from "@/pages/resources/tools/page";
import ROICalculatorPage from "@/pages/resources/tools/roi-calculator/page";
import DXMaturityAssessmentPage from "@/pages/resources/tools/dx-maturity-assessment/page";
import ProjectTemplatesPage from "@/pages/resources/tools/project-templates/page";

/* Resources 라우트 구성 */
const resourcesRoutes: RouteObject[] = [
  { path: "/resources", element: <ResourcesPage /> },

  /* Blog */
  { path: "/resources/blog", element: <TechnicalBlogPage /> },
  { path: "/resources/blog/ai-trends", element: <AITrendsPage /> },
  { path: "/resources/blog/dx-best-practices", element: <DXBestPracticesPage /> },
  { path: "/resources/blog/tech-tutorials", element: <TechTutorialsPage /> },

  /* Whitepapers */
  { path: "/resources/whitepapers", element: <WhitepapersPage /> },
  { path: "/resources/whitepapers/ai-implementation-guide", element: <AIImplementationGuidePage /> },
  { path: "/resources/whitepapers/dx-strategy-whitepaper", element: <DXStrategyWhitepaperPage /> },
  { path: "/resources/whitepapers/data-integration-best-practices", element: <DataIntegrationBestPracticesPage /> },

  /* Webinars */
  { path: "/resources/webinars", element: <WebinarsEventsPage /> },
  { path: "/resources/webinars/upcoming-webinars", element: <UpcomingWebinarsPage /> },
  { path: "/resources/webinars/past-events", element: <PastEventsPage /> },
  { path: "/resources/webinars/conference-presentations", element: <ConferencePresentationsPage /> },

  /* Tools */
  { path: "/resources/tools", element: <ToolsTemplatesPage /> },
  { path: "/resources/tools/roi-calculator", element: <ROICalculatorPage /> },
  { path: "/resources/tools/dx-maturity-assessment", element: <DXMaturityAssessmentPage /> },
  { path: "/resources/tools/project-templates", element: <ProjectTemplatesPage /> },
];

export default resourcesRoutes;
