
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ChatBot from '../../components/feature/ChatBot';
import QuickBar from '../../components/feature/QuickBar';
import Breadcrumb from '../../components/feature/Breadcrumb';
import HeroSection from './components/HeroSection';
import CompanyIdentitySection from './components/CompanyIdentitySection';
import CEOSection from './components/CEOSection';
import BusinessPhilosophySection from './components/BusinessPhilosophySection';
import SolutionPortfolioSection from './components/SolutionPortfolioSection';
import GrowthRoadmapSection from './components/GrowthRoadmapSection';
import ContactSection from './components/ContactSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Breadcrumb Navigation - 히어로 섹션 아래로 이동 */}
        <Breadcrumb />
        
        <CompanyIdentitySection />
        <CEOSection />
        <BusinessPhilosophySection />
        <SolutionPortfolioSection />
        <GrowthRoadmapSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* AI Chatbot - Bottom Right */}
      <ChatBot />
      
      {/* Quick Actions Bar - Bottom Left */}
      <QuickBar />
    </div>
  );
};

export default AboutPage;