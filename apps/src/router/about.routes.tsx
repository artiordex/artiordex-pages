/**
 * Description : about.routes.tsx - 📌 회사소개(About) 라우터 정의
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import type { RouteObject } from "react-router-dom";

/* 회사소개(About) 메인 */
import AboutPage from "@/pages/about/page";

/* 회사소개(About) - 아티올덱스 소개 */
/* 비전 & 미션 */
import VisionMissionPage from "@/pages/about/vision-mission/page";

/* CEO 인사말 */
import CEOMessagePage from "@/pages/about/ceo-message/page";

/* 회사 연혁 */
import HistoryPage from "@/pages/about/history/page";

/* 핵심 가치 */
import CoreValuesPage from "@/pages/about/core-values/page";

/* 인증 & 브로슈어 */
import CertificationsPage from "@/pages/about/certifications/page";

/* 회사소개(About) - 팀 소개 */
/* 조직도 */
import OrganizationPage from "@/pages/about/organization/page";
/* 핵심 멤버 프로필 */
import TeamPage from "@/pages/about/teams/page";
/* 채용 정보 */
import CareersPage from "@/pages/about/careers/page";
/* 기업 문화 & 일하는 방식 */
import CulturePage from "@/pages/about/culture/page";

/* 회사소개(About) - 파트너십 */
/* 파트너십 */
import PartnershipsPage from "@/pages/about/partnerships/page";

/* 회사소개(About) - 오시는길 */
/* 오시는길 */
import LocationPage from "@/pages/about/find-us/page";

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
  { path: "/about/find-us", element: <LocationPage /> },
];

export default aboutRoutes;
