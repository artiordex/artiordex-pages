import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import Breadcrumb from '../../../components/feature/Breadcrumb';
import HeroSection from './components/HeroSection';
import OrganizationChartSection from './components/OrganizationChartSection';
import DivisionDetailsSection from './components/DivisionDetailsSection';
import WorkflowProcessSection from './components/WorkflowProcessSection';
import FutureVisionSection from './components/FutureVisionSection';
import CTASection from './components/CTASection';

const OrganizationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb />
        
        <OrganizationChartSection />
        <DivisionDetailsSection />
        <WorkflowProcessSection />
        <FutureVisionSection />
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

export default OrganizationPage;