/**
 * Description : home/page.tsx - 📌 아티올덱스 메인 홈페이지
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import AppShell from "@/layouts/AppShell";

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
