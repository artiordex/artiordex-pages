/**
 * Description : Main.tsx - 📌 메인 홈 페이지
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

// 공통 레이아웃
import AppShell from "@/layouts/AppShell";
import Container from "@/layouts/Container";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

// 레이아웃 전용 UI 조각
import Grid from "@/layouts/Grid";
import HeroCarousel from "@/layouts/HeroCarousel";
import Section from "@/layouts/Section";

export default function MainPage() {
  return (
    <AppShell
      variant="default"
      showHeader={true}
      showFooter={true}
      headerSlot={<Header />}
      footerSlot={<Footer />}
    >
      {/* HERO SECTION */}
      <section className="w-full border-b border-gray-100 dark:border-gray-800">
        <HeroCarousel
          slides={[
            {
              title: "AI Workflow · Automation · Enterprise Integration",
              image: "/assets/hero/hero-1.jpg",
            },
            {
              title: "교육 · ERP · 자동화의 통합 플랫폼",
              image: "/assets/hero/hero-2.jpg",
            },
          ]}
        />
      </section>

      {/* CORE SOLUTIONS */}
      <Container size="xl" padding="lg" className="py-20">
        <Section
          title="Artiordex Platform"
          subtitle="교육 · ERP · 자동화 솔루션을 모두 연결하는 통합 플랫폼"
          className="text-center"
        >
          <Grid cols={3} gap="lg">
            {/* Card 1 */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-blue-600 mb-2">ArtiFlow</h3>
              <p className="text-gray-600 dark:text-gray-300">
                AI Workflow OS 기반으로 기업 업무 · ERP · 재무관리 · 자동화를 모두
                통합하는 엔터프라이즈 솔루션입니다.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-blue-600 mb-2">ArtiQuest</h3>
              <p className="text-gray-600 dark:text-gray-300">
                아동 교육 · 인터랙티브 스토리북 · 상상모험북을 제공하는
                AI 기반 창의 학습 플랫폼입니다.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-blue-600 mb-2">ArtiSync</h3>
              <p className="text-gray-600 dark:text-gray-300">
                AI Agent · RPA · 데이터 통합 · 워크플로우 자동화를 위한
                통합 자동화 엔진입니다.
              </p>
            </div>
          </Grid>
        </Section>

        {/* VISION SECTION */}
        <Section
          title="Our Vision"
          subtitle="AI + Cloud + Automation 을 바탕으로 새로운 운영 표준을 만듭니다."
          className="text-center mt-28"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Artiordex는 단순한 제품 모음이 아니라,
            <span className="font-semibold">
              업무 자동화 · 교육 · 기업 데이터 통합을 연결하는 생태계 플랫폼
            </span>
            입니다.
            모든 페이지는 AppShell과 JSON 기반 HeaderConfig를 중심으로 일관된
            UI/UX를 유지합니다.
          </p>
        </Section>
      </Container>
    </AppShell>
  );
}
