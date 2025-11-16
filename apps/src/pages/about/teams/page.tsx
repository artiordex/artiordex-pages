import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import CoreTeamSection from './components/CoreTeamSection';
import CTASection from './components/CTASection';

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CoreTeamSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default TeamPage;