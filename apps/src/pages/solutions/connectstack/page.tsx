import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Breadcrumb from '../../../components/feature/Breadcrumb';

export default function ConnectStackPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: '홈', path: '/' },
    { label: '솔루션', path: '/solutions' },
    { label: 'ConnectStack', path: '/solutions/connectstack' }
  ];

  const features = [
    {
      icon: 'ri-map-pin-line',
      title: 'Location-based Operations',
      description: '지역별 매장, 지점, 현장의 운영 업무를 디지털화하고 중앙에서 통합 관리'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Booking & Reservation System',
      description: 'Power Apps 기반 예약 관리 시스템으로 고객 예약부터 리소스 배정까지 자동화'
    },
    {
      icon: 'ri-route-line',
      title: 'Task Routing & Assignment',
      description: '현장 작업을 자동으로 배정하고 실시간 진행 상황을 추적'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile-first Field App',
      description: '현장 직원을 위한 모바일 앱으로 언제 어디서나 업무 처리 가능'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Customer Communication Hub',
      description: 'Teams, SMS, Email 통합 커뮤니케이션으로 고객 응대 자동화'
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'Inventory & Asset Management',
      description: '지역별 재고, 장비, 자산을 실시간으로 추적하고 관리'
    },
    {
      icon: 'ri-bar-chart-box-line',
      title: 'Local Performance Analytics',
      description: 'Power BI 기반 지역별 매출, 운영 효율, 고객 만족도 분석'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Compliance & Safety Management',
      description: '현장 안전 점검, 규정 준수 체크리스트 디지털화'
    }
  ];

  const useCases = [
    {
      title: '프랜차이즈 매장 운영 관리',
      description: '전국 매장의 예약, 재고, 매출, 직원 관리를 단일 플랫폼에서 통합 운영',
      impact: '매장 운영 효율 50% 향상'
    },
    {
      title: '현장 서비스 업무 자동화',
      description: '설치, 수리, 점검 등 현장 서비스 작업을 모바일 앱으로 관리하고 자동 배정',
      impact: '작업 완료 시간 40% 단축'
    },
    {
      title: '헬스케어 예약 및 환자 관리',
      description: '병원, 클리닉의 예약 시스템과 환자 기록을 통합하여 운영 효율 향상',
      impact: '예약 노쇼율 60% 감소'
    },
    {
      title: '교육센터 수강 관리',
      description: '학원, 교육센터의 수강 신청, 출결, 결제를 자동화하고 학부모 소통 강화',
      impact: '행정 업무 70% 감소'
    }
  ];

  const impacts = [
    '지역별 운영 데이터를 실시간으로 통합하여 가시성 확보',
    '예약 및 스케줄링 자동화로 고객 만족도 향상',
    '현장 직원의 모바일 업무 환경 구축으로 생산성 증대',
    '중앙 관리 시스템으로 다지점 운영 효율 개선',
    '데이터 기반 지역별 성과 분석 및 의사결정',
    '확장 가능한 클라우드 구조로 신규 지점 빠른 온보딩'
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white py-24">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                Local Operations Platform
              </div>
              <h1 className="text-5xl font-bold mb-6">ConnectStack</h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                ConnectStack은 지역 기반 비즈니스와 현장 운영을 디지털화하는 Local Operations Platform입니다. 
                Power Apps와 Dynamics 365를 활용해 예약 관리, 현장 업무 자동화, 지역별 성과 분석을 통합하고, 
                모바일 우선 환경으로 현장 직원의 생산성을 극대화합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors whitespace-nowrap"
                >
                  프로젝트 문의하기
                </Link>
                <a 
                  href="#features" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors whitespace-nowrap"
                >
                  핵심 기능 보기
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">고객이 겪는 문제</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  프랜차이즈, 지점형 비즈니스, 현장 서비스 기업은 
                  여러 지역에 분산된 매장과 현장을 효율적으로 관리하는 데 어려움을 겪습니다. 
                  각 지점이 독립적으로 운영되면서 중앙에서 실시간 현황을 파악하기 어렵고, 
                  예약 관리, 재고 추적, 직원 배정이 수작업으로 이루어져 비효율이 발생합니다.
                </p>
                <p>
                  현장 직원은 종이 문서나 엑셀로 업무를 처리하며, 
                  본사와의 소통은 전화나 메신저에 의존합니다. 
                  이로 인해 정보 전달이 지연되고, 데이터 정합성이 떨어지며, 
                  고객 응대 품질도 일관되지 않습니다.
                </p>
                <p>
                  특히 예약 시스템이 없거나 구식인 경우 
                  고객 노쇼(No-show)가 빈번하고, 리소스 활용률이 낮아지며, 
                  지역별 성과를 데이터로 분석하기 어려워 전략적 의사결정이 제한됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">솔루션 개요</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  ConnectStack은 Power Apps와 Dynamics 365 Field Service를 기반으로 
                  지역 기반 비즈니스의 운영 전반을 디지털화하는 Local Operations Platform입니다.
                </p>
                <p>
                  예약 및 스케줄링 자동화, 현장 작업 배정 및 추적, 
                  모바일 우선 현장 앱, 지역별 재고 및 자산 관리, 
                  고객 커뮤니케이션 허브를 통합하여 
                  본사와 현장 간의 실시간 연결을 구축합니다.
                </p>
                <p>
                  Power BI 기반 지역별 성과 분석 대시보드로 
                  매출, 운영 효율, 고객 만족도를 실시간으로 모니터링하고, 
                  Azure Maps 연동으로 지리적 인사이트를 제공합니다.
                </p>
                <p>
                  ConnectStack은 프랜차이즈, 현장 서비스, 헬스케어, 교육 등 
                  지역 기반 운영이 필요한 모든 비즈니스에 최적화된 솔루션입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">핵심 기능</h2>
              <p className="text-xl text-gray-600">
                ConnectStack이 제공하는 지역 운영 디지털화 기능
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <i className={`${feature.icon} text-2xl text-purple-600`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Customers */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">대상 고객</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                ConnectStack은 프랜차이즈, 지점형 비즈니스, 현장 서비스 기업, 헬스케어, 교육센터 등 
                지역 기반 운영이 필요한 모든 비즈니스를 대상으로 합니다. 
                특히 여러 지점을 운영하며 중앙 관리 시스템이 필요한 중소기업과 
                현장 직원의 모바일 업무 환경을 구축하려는 조직에 최적화되어 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">활용 사례</h2>
              <p className="text-xl text-gray-600">
                다양한 산업군에서 ConnectStack을 활용한 실제 사례
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 rounded-lg font-semibold text-sm">
                    {useCase.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expected Impact */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">기대 효과</h2>
              <div className="space-y-4">
                {impacts.map((impact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <p className="text-lg text-gray-700">{impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">아키텍처 구성</h2>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-smartphone-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Mobile Field App Layer</h3>
                      <p className="text-gray-600">Power Apps 기반 현장 직원용 모바일 앱</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-calendar-check-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Booking & Scheduling Layer</h3>
                      <p className="text-gray-600">예약 관리 및 리소스 배정 자동화 엔진</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-database-2-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Operations Data Layer</h3>
                      <p className="text-gray-600">Dataverse 기반 지역별 운영 데이터 통합 관리</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-bar-chart-box-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Analytics & Insights Layer</h3>
                      <p className="text-gray-600">Power BI 기반 지역별 성과 분석 및 리포팅</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">ConnectStack으로 지역 운영을 디지털화하세요</h2>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
              분산된 지점과 현장을 하나의 플랫폼으로 연결하고 
              데이터 기반 운영 체계를 구축하세요
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors whitespace-nowrap"
              >
                프로젝트 문의하기
              </Link>
              <Link 
                to="/solutions" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors whitespace-nowrap"
              >
                다른 솔루션 보기
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}