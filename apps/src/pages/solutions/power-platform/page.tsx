import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import Breadcrumb from '../../../components/feature/Breadcrumb';
import { Link } from 'react-router-dom';

const PowerPlatformPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '솔루션', href: '/solutions' },
    { label: 'Power Platform Solutions', href: '/solutions/power-platform' }
  ];

  const features = [
    {
      icon: 'ri-apps-line',
      title: 'Power Apps 개발',
      description: '로우코드 기반 맞춤형 비즈니스 앱 구축'
    },
    {
      icon: 'ri-flow-chart',
      title: 'Power Automate',
      description: '업무 프로세스 자동화 및 워크플로우 구축'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Power BI 분석',
      description: '데이터 시각화 및 비즈니스 인텔리전스'
    },
    {
      icon: 'ri-database-2-line',
      title: 'Dataverse 구축',
      description: '통합 데이터 플랫폼 및 보안 관리'
    },
    {
      icon: 'ri-microsoft-line',
      title: 'M365 연동',
      description: 'Teams, SharePoint, Outlook 완전 통합'
    },
    {
      icon: 'ri-shield-check-line',
      title: '보안 & 거버넌스',
      description: '엔터프라이즈급 보안 및 관리 체계'
    }
  ];

  const useCases = [
    {
      title: '중소기업 ERP 구축',
      description: 'Power Apps 기반 맞춤형 ERP 시스템 구축',
      impact: '개발 기간 60% 단축'
    },
    {
      title: '제조업 품질 관리',
      description: 'Power BI 기반 실시간 품질 모니터링 대시보드',
      impact: '품질 이슈 90% 사전 감지'
    },
    {
      title: '교육기관 학사 관리',
      description: 'Power Platform 기반 통합 학사 관리 시스템',
      impact: '행정 업무 70% 자동화'
    },
    {
      title: '유통업 재고 관리',
      description: 'Power Automate 기반 자동 발주 및 재고 최적화',
      impact: '재고 비용 40% 절감'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <i className="ri-microsoft-line text-4xl text-white"></i>
                </div>
                <div className="text-left">
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Power Platform Solutions</h1>
                  <p className="text-xl text-blue-100">Microsoft 파트너십 기반 DX</p>
                </div>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Power Apps, Power Automate, Power BI, Dataverse 구축을 통한 Microsoft 파트너십 기반 
                디지털 전환 솔루션으로 기업의 로우코드 플랫폼 구축을 지원합니다.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
                >
                  프로젝트 문의
                </Link>
                <Link
                  to="/solutions"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  다른 솔루션 보기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">해결하는 문제</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <i className="ri-code-line text-3xl text-red-500 mb-4"></i>
                  <h3 className="font-semibold text-gray-900 mb-2">복잡한 개발 과정</h3>
                  <p className="text-gray-600">전통적인 개발 방식의 긴 개발 기간과 높은 비용</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <i className="ri-disconnect-line text-3xl text-orange-500 mb-4"></i>
                  <h3 className="font-semibold text-gray-900 mb-2">시스템 분산</h3>
                  <p className="text-gray-600">각각 독립된 시스템으로 인한 데이터 사일로</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <i className="ri-user-settings-line text-3xl text-blue-500 mb-4"></i>
                  <h3 className="font-semibold text-gray-900 mb-2">IT 의존성</h3>
                  <p className="text-gray-600">비즈니스 사용자의 높은 IT 부서 의존도</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">솔루션 개요</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Microsoft Power Platform을 기반으로 한 로우코드/노코드 솔루션으로 
                  빠르고 효율적인 디지털 전환을 실현합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                      <i className={`${feature.icon} text-xl text-white`}></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">활용 사례</h2>
                <p className="text-xl text-gray-600">다양한 산업군에서 검증된 Power Platform 성과</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                    <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      <i className="ri-arrow-up-line"></i>
                      <span>{useCase.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">아키텍처 구성</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                  <i className="ri-apps-line text-3xl text-blue-600 mb-3"></i>
                  <h3 className="font-semibold text-gray-900">App Layer</h3>
                  <p className="text-sm text-gray-600 mt-2">Power Apps, Canvas Apps</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
                  <i className="ri-flow-chart text-3xl text-indigo-600 mb-3"></i>
                  <h3 className="font-semibold text-gray-900">Automation Layer</h3>
                  <p className="text-sm text-gray-600 mt-2">Power Automate, Workflows</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                  <i className="ri-database-2-line text-3xl text-purple-600 mb-3"></i>
                  <h3 className="font-semibold text-gray-900">Data Layer</h3>
                  <p className="text-sm text-gray-600 mt-2">Dataverse, Common Data Model</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-xl border border-pink-100">
                  <i className="ri-bar-chart-line text-3xl text-pink-600 mb-3"></i>
                  <h3 className="font-semibold text-gray-900">Analytics Layer</h3>
                  <p className="text-sm text-gray-600 mt-2">Power BI, Reports</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Power Platform으로 디지털 전환을 시작하세요</h2>
              <p className="text-xl text-blue-100 mb-8">
                Microsoft 파트너십 기반의 검증된 솔루션으로 빠르고 안전한 DX를 실현하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
                >
                  프로젝트 문의하기
                </Link>
                <a
                  href="tel:02-1234-5678"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  전화 상담: 02-1234-5678
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatBot />
      <QuickBar />
    </div>
  );
};

export default PowerPlatformPage;