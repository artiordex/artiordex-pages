import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import Breadcrumb from '../../../components/feature/Breadcrumb';
import HeroSection from './components/HeroSection';
import MicrosoftPartnerSection from './components/MicrosoftPartnerSection';
import TechnicalPartnersSection from './components/TechnicalPartnersSection';
import ClientReferencesSection from './components/ClientReferencesSection';
import CTASection from './components/CTASection';

const PartnershipsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb />
        
        <MicrosoftPartnerSection />
        <TechnicalPartnersSection />
        <ClientReferencesSection />
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

export default PartnershipsPage;