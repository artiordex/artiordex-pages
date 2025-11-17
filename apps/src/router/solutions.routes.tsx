/**
 * Description : solutions.routes.tsx - 📌 Solutions 라우터 정의
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import type { RouteObject } from "react-router-dom";

/* Main */
import SolutionsPage from "@/pages/solutions/page";

/* Product solutions */
import ArtiflowPage from "@/pages/solutions/artiflow/page";
import SmartHubPage from "@/pages/solutions/smarthub/page";
import ConnectStackPage from "@/pages/solutions/connectstack/page";

/* AI Automation */
import AIAutomationPage from "@/pages/solutions/ai-automation/page";
import RPAIntegrationPage from "@/pages/solutions/ai-automation/rpa-integration/page";
import DocumentAutomationPage from "@/pages/solutions/ai-automation/document-automation/page";
import AIAgentPage from "@/pages/solutions/ai-automation/ai-agent/page";
import AIConsultingPage from "@/pages/solutions/ai-automation/ai-consulting/page";

/* Data Integration */
import DataIntegrationPage from "@/pages/solutions/data-integration/page";
import APIIntegrationPage from "@/pages/solutions/data-integration/api-integration/page";
import DataMigrationPage from "@/pages/solutions/data-integration/data-migration/page";
import SystemIntegrationPage from "@/pages/solutions/data-integration/system-integration/page";
import EnterpriseIntegrationPage from "@/pages/solutions/data-integration/enterprise-integration/page";

/* Solutions 라우트 구성 */
const solutionsRoutes: RouteObject[] = [
  { path: "/solutions", element: <SolutionsPage /> },

  /* Product Solutions */
  { path: "/solutions/artiflow", element: <ArtiflowPage /> },
  { path: "/solutions/smarthub", element: <SmartHubPage /> },
  { path: "/solutions/connectstack", element: <ConnectStackPage /> },

  /* AI Automation */
  { path: "/solutions/ai-automation", element: <AIAutomationPage /> },
  { path: "/solutions/ai-automation/rpa-integration", element: <RPAIntegrationPage /> },
  { path: "/solutions/ai-automation/document-automation", element: <DocumentAutomationPage /> },
  { path: "/solutions/ai-automation/ai-agent", element: <AIAgentPage /> },
  { path: "/solutions/ai-automation/ai-consulting", element: <AIConsultingPage /> },

  /* Data Integration */
  { path: "/solutions/data-integration", element: <DataIntegrationPage /> },
  { path: "/solutions/data-integration/api-integration", element: <APIIntegrationPage /> },
  { path: "/solutions/data-integration/data-migration", element: <DataMigrationPage /> },
  { path: "/solutions/data-integration/system-integration", element: <SystemIntegrationPage /> },
  { path: "/solutions/data-integration/enterprise-integration", element: <EnterpriseIntegrationPage /> },
];

export default solutionsRoutes;
