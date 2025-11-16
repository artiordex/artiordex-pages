
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ChatBot from '../../components/feature/ChatBot';
import QuickBar from '../../components/feature/QuickBar';
import Breadcrumb from '../../components/feature/Breadcrumb';
import HeroSection from './components/HeroSection';
import WhyArtiordexSection from './components/WhyArtiordexSection';
import ProcessSection from './components/ProcessSection';
import ServicePortfolioSection from './components/ServicePortfolioSection';
import CTASection from './components/CTASection';

const ServicesPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Services', href: '/services' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Breadcrumb Navigation - 히어로 섹션 아래로 이동 */}
        <Breadcrumb items={breadcrumbItems} />
        
        <WhyArtiordexSection />
        <ProcessSection />
        <ServicePortfolioSection />
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

export default ServicesPage;