import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import Breadcrumb from '../../../components/feature/Breadcrumb';
import HeroSection from './components/HeroSection';
import WelcomeMessageSection from './components/WelcomeMessageSection';
import CEOSignatureSection from './components/CEOSignatureSection';
import PhilosophySection from './components/PhilosophySection';
import VisionSection from './components/VisionSection';
import CommitmentSection from './components/CommitmentSection';
import CTASection from './components/CTASection';

const CEOMessagePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb />
        
        <WelcomeMessageSection />
        <CEOSignatureSection />
        <PhilosophySection />
        <VisionSection />
        <CommitmentSection />
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

export default CEOMessagePage;