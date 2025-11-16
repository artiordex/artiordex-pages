
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ChatBot from '../../components/feature/ChatBot';
import QuickBar from '../../components/feature/QuickBar';
import Breadcrumb from '../../components/feature/Breadcrumb';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import FeaturedPortfolioSection from './components/FeaturedPortfolioSection';
import PortfolioListSection from './components/PortfolioListSection';
import CTASection from './components/CTASection';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Portfolio', href: '/portfolio' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Breadcrumb Navigation - 히어로 섹션 아래로 이동 */}
        <Breadcrumb items={breadcrumbItems} />
        
        <FilterSection 
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <FeaturedPortfolioSection />
        <PortfolioListSection activeFilter={activeFilter} />
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

export default PortfolioPage;
