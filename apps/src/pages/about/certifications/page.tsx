import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import Breadcrumb from '../../../components/feature/Breadcrumb';
import HeroSection from './components/HeroSection';
import CertificationOverviewSection from './components/CertificationOverviewSection';
import TechnicalCertificationsSection from './components/TechnicalCertificationsSection';
import PartnershipBadgesSection from './components/PartnershipBadgesSection';
import BrochureLibrarySection from './components/BrochureLibrarySection';
import TechnicalWhitepapersSection from './components/TechnicalWhitepapersSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <Breadcrumb />
        <CertificationOverviewSection />
        <TechnicalCertificationsSection />
        <PartnershipBadgesSection />
        <BrochureLibrarySection />
        <TechnicalWhitepapersSection />
        <FAQSection />
        <CTASection />
      </main>
      
      <Footer />
      <ChatBot />
      <QuickBar />
    </div>
  );
};

export default CertificationsPage;