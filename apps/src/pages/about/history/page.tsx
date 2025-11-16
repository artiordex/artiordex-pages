
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import Breadcrumb from '../../../components/feature/Breadcrumb';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import CTASection from './components/CTASection';

const HistoryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        
        <Breadcrumb />
        
        <TimelineSection />
        
        <CTASection />
      </main>
      
      <Footer />
      
      <ChatBot />
      <QuickBar />
    </div>
  );
};

export default HistoryPage;
