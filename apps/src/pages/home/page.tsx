/**
 * Description : home/page.tsx - 📌 아티올덱스 메인 홈페이지
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import AppShell from "@/layouts/AppShell";
import Header from '../../../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ChatBot from '../../components/feature/ChatBot';
import QuickBar from '../../components/feature/QuickBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TechStackSection from './components/TechStackSection';

const HomePage = () => {
  return (
    <AppShell variant="default">
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TechStackSection />
      </main>

      <Footer />

      <ChatBot />
      <QuickBar />
    </AppShell>
  );
};

export default HomePage;
