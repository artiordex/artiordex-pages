import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import Breadcrumb from '../../../components/feature/Breadcrumb';
import VisionHeroSection from './components/VisionHeroSection';
import VisionStatementSection from './components/VisionStatementSection';
import MissionSection from './components/MissionSection';
import CoreValuesSection from './components/CoreValuesSection';
import GoalsSection from './components/GoalsSection';
import CTASection from './components/CTASection';

const VisionMissionPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <VisionHeroSection />
        <Breadcrumb />
        <VisionStatementSection />
        <MissionSection />
        <CoreValuesSection />
        <GoalsSection />
        <CTASection />
      </main>
      
      <Footer />
      <ChatBot />
      <QuickBar />
    </div>
  );
};

export default VisionMissionPage;
