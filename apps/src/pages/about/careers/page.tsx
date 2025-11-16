import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import CompanyIntroSection from './components/CompanyIntroSection';
import JobOpeningsSection from './components/JobOpeningsSection';
import RecruitmentProcessSection from './components/RecruitmentProcessSection';
import BenefitsSection from './components/BenefitsSection';
import CultureSection from './components/CultureSection';
import CTASection from './components/CTASection';

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CompanyIntroSection />
      <JobOpeningsSection />
      <RecruitmentProcessSection />
      <BenefitsSection />
      <CultureSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default CareersPage;