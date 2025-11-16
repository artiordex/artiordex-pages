import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

/* -----------------------------
   기본 페이지 (직접 import)
------------------------------ */
import HomePage from '@/pages/home/page';
import AboutPage from '@/pages/about/page';
import ContactPage from '@/pages/contact/page';
import LocationPage from '@/pages/location/page';

import InsightsPage from '@/pages/insights/page';
import ServicesPage from '@/pages/services/page';
import SolutionsPage from '@/pages/solutions/page';
import PortfolioPage from '@/pages/portfolio/page';

/* -----------------------------
   주요 Sub Pages (Direct Import)
------------------------------ */
import VisionMissionPage from '@/pages/about/vision-mission/page';
import CEOMessagePage from '@/pages/about/ceo-message/page';
import HistoryPage from '@/pages/about/history/page';
import CoreValuesPage from '@/pages/about/core-values/page';
import CertificationsPage from '@/pages/about/certifications/page';
import OrganizationPage from '@/pages/about/organization/page';
import TeamPage from '@/pages/about/teams/page';
import CareersPage from '@/pages/about/careers/page';
import CulturePage from '@/pages/about/culture/page';
import PartnershipsPage from '@/pages/about/partnerships/page';

/* -----------------------------
   Portfolio Main + Sub Categories
------------------------------ */
import AIPortfolioPage from '@/pages/portfolio/ai/page';
import DXPortfolioPage from '@/pages/portfolio/dx/page';
import DataPortfolioPage from '@/pages/portfolio/data/page';
import IndustryPortfolioMainPage from '@/pages/portfolio/industry/page';
import ProductPortfolioPage from '@/pages/portfolio/product/page';

import AIProjectsPage from '@/pages/portfolio/ai-projects/page';
import DXTransformationPage from '@/pages/portfolio/dx-transformation/page';
import DataIntegrationPortfolioPage from '@/pages/portfolio/data-integration/page';

import WorkflowAutomationPage from '@/pages/portfolio/ai-projects/workflow-automation/page';
import DocumentIntelligencePage from '@/pages/portfolio/ai-projects/document-intelligence/page';
import PredictiveAnalyticsPage from '@/pages/portfolio/ai-projects/predictive-analytics/page';

import ProjectDetailPage from '@/pages/portfolio/[id]/page';

// /* -----------------------------
//    Resources Pages
// ------------------------------ */
// import ResourcesPage from '@/pages/resources/page';
// import TechnicalBlogPage from '@/pages/resources/blog/page';
// import WhitepapersPage from '@/pages/resources/whitepapers/page';
// import WebinarsEventsPage from '@/pages/resources/webinars/page';
// import ToolsTemplatesPage from '@/pages/resources/tools/page';

// /* Resources — Blog subpages */
// const AITrendsPage = lazy(() => import('@/pages/resources/blog/ai-trends/page'));
// const DXBestPracticesPage = lazy(() => import('@/pages/resources/blog/dx-best-practices/page'));
// const TechTutorialsPage = lazy(() => import('@/pages/resources/blog/tech-tutorials/page'));

// /* Resources — Whitepapers subpages */
// const AIImplementationGuidePage = lazy(() => import('@/pages/resources/whitepapers/ai-implementation-guide/page'));
// const DXStrategyWhitepaperPage = lazy(() => import('@/pages/resources/whitepapers/dx-strategy-whitepaper/page'));
// const DataIntegrationBestPracticesPage = lazy(() => import('@/pages/resources/whitepapers/data-integration-best-practices/page'));

// /* Resources — Webinars subpages */
// const UpcomingWebinarsPage = lazy(() => import('@/pages/resources/webinars/upcoming-webinars/page'));
// const PastEventsPage = lazy(() => import('@/pages/resources/webinars/past-events/page'));
// const ConferencePresentationsPage = lazy(() => import('@/pages/resources/webinars/conference-presentations/page'));

// /* Resources — Tools subpages */
// const ROICalculatorPage = lazy(() => import('@/pages/resources/tools/roi-calculator/page'));
// const DXMaturityAssessmentPage = lazy(() => import('@/pages/resources/tools/dx-maturity-assessment/page'));
// const ProjectTemplatesPage = lazy(() => import('@/pages/resources/tools/project-templates/page'));

// /* -----------------------------
//    Contact Pages
// ------------------------------ */
// import AIEstimatePage from '@/pages/contact/projects/ai-estimate/page';
// import DXConsultingPage from '@/pages/contact/projects/dx-consulting/page';
// import PowerPlatformPage from '@/pages/contact/projects/power-platform/page';
// import CustomDevPage from '@/pages/contact/projects/custom-dev/page';

// import MaintenancePage from '@/pages/contact/support/maintenance/page';
// import EmergencyPage from '@/pages/contact/support/emergency/page';
// import SupportPortalPage from '@/pages/contact/support/portal/page';
// import UpdateGuidePage from '@/pages/contact/support/update-guide/page';

// import ProposalPage from '@/pages/contact/partners/proposal/page';
// import MicrosoftPartnerPage from '@/pages/contact/partners/microsoft/page';
// import CoDevelopmentPage from '@/pages/contact/partners/co-development/page';

// import ConsultingPage from '@/pages/contact/enterprise/consulting/page';
// import OnboardingPage from '@/pages/contact/enterprise/onboarding/page';
// import GuideRequestPage from '@/pages/contact/enterprise/guide-request/page';
// import PublicSectorPage from '@/pages/contact/enterprise/public-sector/page';
// import DXPartnershipPage from '@/pages/contact/enterprise/dx-partnership/page';

// /* -----------------------------
//    Solutions (Lazy Loading)
// ------------------------------ */
// const ArtiflowPage = lazy(() => import('@/pages/solutions/artiflow/page'));
// const SmartHubPage = lazy(() => import('@/pages/solutions/smarthub/page'));
// const ConnectStackPage = lazy(() => import('@/pages/solutions/connectstack/page'));

// const AIAutomationPage = lazy(() => import('@/pages/solutions/ai-automation/page'));
// const RPAIntegrationPage = lazy(() => import('@/pages/solutions/ai-automation/rpa-integration/page'));
// const DocumentAutomationPage = lazy(() => import('@/pages/solutions/ai-automation/document-automation/page'));
// const AIAgentPage = lazy(() => import('@/pages/solutions/ai-automation/ai-agent/page'));
// const AIConsultingPage = lazy(() => import('@/pages/solutions/ai-automation/ai-consulting/page'));

// const DataIntegrationPage = lazy(() => import('@/pages/solutions/data-integration/page'));
// const APIIntegrationPage = lazy(() => import('@/pages/solutions/data-integration/api-integration/page'));
// const DataMigrationPage = lazy(() => import('@/pages/solutions/data-integration/data-migration/page'));
// const SystemIntegrationPage = lazy(() => import('@/pages/solutions/data-integration/system-integration/page'));
// const EnterpriseIntegrationPage = lazy(() => import('@/pages/solutions/data-integration/enterprise-integration/page'));

// /* -----------------------------
//    Router Definition
// ------------------------------ */
// const routes: RouteObject[] = [
//   { path: '/', element: <HomePage /> },

//   /* About */
//   { path: '/about', element: <AboutPage /> },
//   { path: '/about/vision-mission', element: <VisionMissionPage /> },
//   { path: '/about/ceo-message', element: <CEOMessagePage /> },
//   { path: '/about/history', element: <HistoryPage /> },
//   { path: '/about/core-values', element: <CoreValuesPage /> },
//   { path: '/about/certifications', element: <CertificationsPage /> },
//   { path: '/about/organization', element: <OrganizationPage /> },
//   { path: '/about/teams', element: <TeamPage /> },
//   { path: '/about/careers', element: <CareersPage /> },
//   { path: '/about/culture', element: <CulturePage /> },
//   { path: '/about/partnerships', element: <PartnershipsPage /> },
//   { path: '/location', element: <LocationPage /> },

//   /* Solutions */
//   { path: '/solutions', element: <SolutionsPage /> },
//   { path: '/solutions/artiflow', element: <ArtiflowPage /> },
//   { path: '/solutions/smarthub', element: <SmartHubPage /> },
//   { path: '/solutions/connectstack', element: <ConnectStackPage /> },

//   /* AI Automation */
//   { path: '/solutions/ai-automation', element: <AIAutomationPage /> },
//   { path: '/solutions/ai-automation/rpa-integration', element: <RPAIntegrationPage /> },
//   { path: '/solutions/ai-automation/document-automation', element: <DocumentAutomationPage /> },
//   { path: '/solutions/ai-automation/ai-agent', element: <AIAgentPage /> },
//   { path: '/solutions/ai-automation/ai-consulting', element: <AIConsultingPage /> },

//   /* Data Integration */
//   { path: '/solutions/data-integration', element: <DataIntegrationPage /> },
//   { path: '/solutions/data-integration/api-integration', element: <APIIntegrationPage /> },
//   { path: '/solutions/data-integration/data-migration', element: <DataMigrationPage /> },
//   { path: '/solutions/data-integration/system-integration', element: <SystemIntegrationPage /> },
//   { path: '/solutions/data-integration/enterprise-integration', element: <EnterpriseIntegrationPage /> },

//   /* Portfolio */
//   { path: '/portfolio', element: <PortfolioPage /> },
//   { path: '/portfolio/ai', element: <AIPortfolioPage /> },
//   { path: '/portfolio/dx', element: <DXPortfolioPage /> },
//   { path: '/portfolio/data', element: <DataPortfolioPage /> },
//   { path: '/portfolio/industry', element: <IndustryPortfolioMainPage /> },
//   { path: '/portfolio/product', element: <ProductPortfolioPage /> },
//   { path: '/portfolio/ai-projects', element: <AIProjectsPage /> },
//   { path: '/portfolio/dx-transformation', element: <DXTransformationPage /> },
//   { path: '/portfolio/data-integration', element: <DataIntegrationPortfolioPage /> },

//   /* AI Projects Sub-pages */
//   { path: '/portfolio/ai-projects/workflow-automation', element: <WorkflowAutomationPage /> },
//   { path: '/portfolio/ai-projects/document-intelligence', element: <DocumentIntelligencePage /> },
//   { path: '/portfolio/ai-projects/predictive-analytics', element: <PredictiveAnalyticsPage /> },

//   /* Portfolio Detail */
//   { path: '/portfolio/:id', element: <ProjectDetailPage /> },

//   /* Blog & Resources */
//   { path: '/resources', element: <ResourcesPage /> },
//   { path: '/resources/blog', element: <TechnicalBlogPage /> },
//   { path: '/resources/blog/ai-trends', element: <AITrendsPage /> },
//   { path: '/resources/blog/dx-best-practices', element: <DXBestPracticesPage /> },
//   { path: '/resources/blog/tech-tutorials', element: <TechTutorialsPage /> },

//   /* Whitepapers */
//   { path: '/resources/whitepapers', element: <WhitepapersPage /> },
//   { path: '/resources/whitepapers/ai-implementation-guide', element: <AIImplementationGuidePage /> },
//   { path: '/resources/whitepapers/dx-strategy-whitepaper', element: <DXStrategyWhitepaperPage /> },
//   { path: '/resources/whitepapers/data-integration-best-practices', element: <DataIntegrationBestPracticesPage /> },

//   /* Webinars */
//   { path: '/resources/webinars', element: <WebinarsEventsPage /> },
//   { path: '/resources/webinars/upcoming-webinars', element: <UpcomingWebinarsPage /> },
//   { path: '/resources/webinars/past-events', element: <PastEventsPage /> },
//   { path: '/resources/webinars/conference-presentations', element: <ConferencePresentationsPage /> },

//   /* Tools */
//   { path: '/resources/tools', element: <ToolsTemplatesPage /> },
//   { path: '/resources/tools/roi-calculator', element: <ROICalculatorPage /> },
//   { path: '/resources/tools/dx-maturity-assessment', element: <DXMaturityAssessmentPage /> },
//   { path: '/resources/tools/project-templates', element: <ProjectTemplatesPage /> },

//   /* Contact */
//   { path: '/contact', element: <ContactPage /> },

//   /* Contact — Projects */
//   { path: '/contact/projects/ai-estimate', element: <AIEstimatePage /> },
//   { path: '/contact/projects/dx-consulting', element: <DXConsultingPage /> },
//   { path: '/contact/projects/power-platform', element: <PowerPlatformPage /> },
//   { path: '/contact/projects/custom-dev', element: <CustomDevPage /> },

//   /* Contact — Support */
//   { path: '/contact/support/maintenance', element: <MaintenancePage /> },
//   { path: '/contact/support/emergency', element: <EmergencyPage /> },
//   { path: '/contact/support/portal', element: <SupportPortalPage /> },
//   { path: '/contact/support/update-guide', element: <UpdateGuidePage /> },

//   /* Contact — Partners */
//   { path: '/contact/partners/proposal', element: <ProposalPage /> },
//   { path: '/contact/partners/microsoft', element: <MicrosoftPartnerPage /> },
//   { path: '/contact/partners/co-development', element: <CoDevelopmentPage /> },

//   /* Enterprise Contact */
//   { path: '/contact/enterprise/consulting', element: <ConsultingPage /> },
//   { path: '/contact/enterprise/onboarding', element: <OnboardingPage /> },
//   { path: '/contact/enterprise/guide-request', element: <GuideRequestPage /> },
//   { path: '/contact/enterprise/public-sector', element: <PublicSectorPage /> },
//   { path: '/contact/enterprise/dx-partnership', element: <DXPartnershipPage /> },

//   /* Etc */
//   { path: '/services', element: <ServicesPage /> },
//   { path: '/insights', element: <InsightsPage /> },
];

export default routes;
