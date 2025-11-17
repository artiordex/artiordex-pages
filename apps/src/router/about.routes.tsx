/**
 * Description : about.routes.tsx - 📌 회사소개(About) 라우터 정의
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import type { RouteObject } from "react-router-dom";

/* About 메인 */
import AboutPage from "@/pages/about/page";

/* About — 세부 소개 페이지 */
import VisionMissionPage from "@/pages/about/vision-mission/page";
import CEOMessagePage from "@/pages/about/ceo-message/page";
import HistoryPage from "@/pages/about/history/page";
import CoreValuesPage from "@/pages/about/core-values/page";
import CertificationsPage from "@/pages/about/certifications/page";
import OrganizationPage from "@/pages/about/organization/page";
import TeamPage from "@/pages/about/teams/page";
import CareersPage from "@/pages/about/careers/page";
import CulturePage from "@/pages/about/culture/page";
import PartnershipsPage from "@/pages/about/partnerships/page";

/* About 라우트 구성 */
const aboutRoutes: RouteObject[] = [
  { path: "/about", element: <AboutPage /> },
  { path: "/about/vision-mission", element: <VisionMissionPage /> },
  { path: "/about/ceo-message", element: <CEOMessagePage /> },
  { path: "/about/history", element: <HistoryPage /> },
  { path: "/about/core-values", element: <CoreValuesPage /> },
  { path: "/about/certifications", element: <CertificationsPage /> },
  { path: "/about/organization", element: <OrganizationPage /> },
  { path: "/about/teams", element: <TeamPage /> },
  { path: "/about/careers", element: <CareersPage /> },
  { path: "/about/culture", element: <CulturePage /> },
  { path: "/about/partnerships", element: <PartnershipsPage /> },
];

export default aboutRoutes;
