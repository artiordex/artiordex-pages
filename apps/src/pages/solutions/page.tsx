
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ChatBot from '../../components/feature/ChatBot';
import QuickBar from '../../components/feature/QuickBar';
import HeroSection from './components/HeroSection';
import SolutionsOverviewSection from './components/SolutionsOverviewSection';
import SolutionCardsSection from './components/SolutionCardsSection';
import CoreSolutionsSection from './components/CoreSolutionsSection';
import CTASection from './components/CTASection';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <SolutionsOverviewSection />
        <SolutionCardsSection />
        <CoreSolutionsSection />
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

export default SolutionsPage;
