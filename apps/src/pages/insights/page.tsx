
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ChatBot from '../../components/feature/ChatBot';
import QuickBar from '../../components/feature/QuickBar';
import Breadcrumb from '../../components/feature/Breadcrumb';
import HeroSection from './components/HeroSection';
import MilestonesSection from './components/MilestonesSection';
import CompanyNewsSection from './components/CompanyNewsSection';
import TechStackSection from './components/TechStackSection';
import CTASection from './components/CTASection';

const InsightsPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Insights', href: '/insights' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Breadcrumb Navigation - 히어로 섹션 아래로 이동 */}
        <Breadcrumb items={breadcrumbItems} />
        
        <MilestonesSection />
        <CompanyNewsSection />
        <TechStackSection />
        <CTASection />
      </main>
      
      <Footer />
      
      {/* AI Chatbot - Bottom Right */}
      <ChatBot />
      
      {/* Quick Actions Bar - Bottom Left */}
      <QuickBar />
    </div>
  );
};

export default InsightsPage;