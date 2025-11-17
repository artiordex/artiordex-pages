/**
 * Description : contact.routes.tsx - 📌 문의하기(Contact) 페이지 라우터 정의
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import type { RouteObject } from "react-router-dom";

/* Contact 메인 */
import ContactPage from "@/pages/contact/page";

/* Contact — Projects */
import AIEstimatePage from "@/pages/contact/projects/ai-estimate/page";
import DXConsultingPage from "@/pages/contact/projects/dx-consulting/page";
import PowerPlatformPage from "@/pages/contact/projects/power-platform/page";
import CustomDevPage from "@/pages/contact/projects/custom-dev/page";

/* Contact — Support */
import MaintenancePage from "@/pages/contact/support/maintenance/page";
import EmergencyPage from "@/pages/contact/support/emergency/page";
import SupportPortalPage from "@/pages/contact/support/portal/page";
import UpdateGuidePage from "@/pages/contact/support/update-guide/page";

/* Contact — Partners */
import ProposalPage from "@/pages/contact/partners/proposal/page";
import MicrosoftPartnerPage from "@/pages/contact/partners/microsoft/page";
import CoDevelopmentPage from "@/pages/contact/partners/co-development/page";

/* Contact — Enterprise */
import ConsultingPage from "@/pages/contact/enterprise/consulting/page";
import OnboardingPage from "@/pages/contact/enterprise/onboarding/page";
import GuideRequestPage from "@/pages/contact/enterprise/guide-request/page";
import PublicSectorPage from "@/pages/contact/enterprise/public-sector/page";
import DXPartnershipPage from "@/pages/contact/enterprise/dx-partnership/page";

/* Contact 라우트 구성 */
const contactRoutes: RouteObject[] = [
  /* 메인 */
  { path: "/contact", element: <ContactPage /> },

  /* Projects */
  { path: "/contact/projects/ai-estimate", element: <AIEstimatePage /> },
  { path: "/contact/projects/dx-consulting", element: <DXConsultingPage /> },
  { path: "/contact/projects/power-platform", element: <PowerPlatformPage /> },
  { path: "/contact/projects/custom-dev", element: <CustomDevPage /> },

  /* Support */
  { path: "/contact/support/maintenance", element: <MaintenancePage /> },
  { path: "/contact/support/emergency", element: <EmergencyPage /> },
  { path: "/contact/support/portal", element: <SupportPortalPage /> },
  { path: "/contact/support/update-guide", element: <UpdateGuidePage /> },

  /* Partners */
  { path: "/contact/partners/proposal", element: <ProposalPage /> },
  { path: "/contact/partners/microsoft", element: <MicrosoftPartnerPage /> },
  { path: "/contact/partners/co-development", element: <CoDevelopmentPage /> },

  /* Enterprise */
  { path: "/contact/enterprise/consulting", element: <ConsultingPage /> },
  { path: "/contact/enterprise/onboarding", element: <OnboardingPage /> },
  { path: "/contact/enterprise/guide-request", element: <GuideRequestPage /> },
  { path: "/contact/enterprise/public-sector", element: <PublicSectorPage /> },
  { path: "/contact/enterprise/dx-partnership", element: <DXPartnershipPage /> },
];

export default contactRoutes;
