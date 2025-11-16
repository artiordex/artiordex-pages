
import React from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import HumanFirstSection from './components/HumanFirstSection';
import SimplicitySection from './components/SimplicitySection';
import AutomationSection from './components/AutomationSection';
import AdditionalValuesSection from './components/AdditionalValuesSection';
import CTASection from './components/CTASection';

const CoreValuesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <HumanFirstSection />
        <SimplicitySection />
        <AutomationSection />
        <AdditionalValuesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default CoreValuesPage;
