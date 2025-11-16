
import { useParams } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import Breadcrumb from '../../../components/feature/Breadcrumb';
import ProjectHeroSection from './components/ProjectHeroSection';
import ProjectOverviewSection from './components/ProjectOverviewSection';
import ChallengeSection from './components/ChallengeSection';
import SolutionSection from './components/SolutionSection';
import ImplementationSection from './components/ImplementationSection';
import TechnologySection from './components/TechnologySection';
import ResultsSection from './components/ResultsSection';
import TestimonialsSection from './components/TestimonialsSection';
import RelatedProjectsSection from './components/RelatedProjectsSection';
import { portfolioData } from '../../../mocks/portfolioData';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = portfolioData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">프로젝트를 찾을 수 없습니다</h1>
          <p className="text-gray-600">요청하신 프로젝트가 존재하지 않습니다.</p>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: project.title, href: `/portfolio/${id}` }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <ProjectHeroSection project={project} />
        
        {/* Breadcrumb Navigation - 히어로 섹션 아래로 이동 */}
        <Breadcrumb items={breadcrumbItems} />
        
        <ProjectOverviewSection project={project} />
        <ChallengeSection project={project} />
        <SolutionSection project={project} />
        <ImplementationSection project={project} />
        <TechnologySection project={project} />
        <ResultsSection project={project} />
        <TestimonialsSection project={project} />
        <RelatedProjectsSection currentProjectId={id!} />
      </main>
      
      <Footer />
      
      {/* AI Chatbot - Bottom Right */}
      <ChatBot />
      
      {/* Quick Actions Bar - Bottom Left */}
      <QuickBar />
    </div>
  );
};

export default ProjectDetailPage;