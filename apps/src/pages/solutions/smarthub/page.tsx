import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Breadcrumb from '../../../components/feature/Breadcrumb';

export default function SmartHubPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: '홈', path: '/' },
    { label: '솔루션', path: '/solutions' },
    { label: 'SmartHub', path: '/solutions/smarthub' }
  ];

  const features = [
    {
      icon: 'ri-database-2-line',
      title: 'Unified Data Model',
      description: 'Dataverse 기반 단일 데이터 모델로 모든 시스템 정보를 통합 관리'
    },
    {
      icon: 'ri-git-merge-line',
      title: 'Real-time Data Pipeline',
      description: 'Azure Data Factory와 Logic Apps를 활용한 실시간 데이터 동기화'
    },
    {
      icon: 'ri-plug-line',
      title: 'API Integration Hub',
      description: '200+ 커넥터를 통한 SaaS, 레거시, 클라우드 시스템 연결'
    },
    {
      icon: 'ri-refresh-line',
      title: 'ETL Automation',
      description: '데이터 추출, 변환, 적재 프로세스를 자동화된 파이프라인으로 구축'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Data Governance',
      description: 'Azure Purview 기반 데이터 품질 관리 및 규정 준수'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Analytics-ready Structure',
      description: 'Power BI, Azure Synapse와 즉시 연결 가능한 분석 최적화 구조'
    },
    {
      icon: 'ri-timer-line',
      title: 'Change Data Capture',
      description: '데이터 변경 사항을 실시간으로 감지하고 자동 동기화'
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'Master Data Management',
      description: '고객, 제품, 거래처 등 마스터 데이터의 단일 진실 공급원(SSOT) 구축'
    }
  ];

  const useCases = [
    {
      title: '제조업 ERP-MES-SCM 통합',
      description: '생산, 재고, 물류 시스템의 데이터를 실시간으로 통합하여 단일 대시보드에서 운영 현황 파악',
      impact: '데이터 정합성 95% 향상'
    },
    {
      title: '유통업 옴니채널 데이터 통합',
      description: '온라인 쇼핑몰, 오프라인 POS, 물류센터 데이터를 통합하여 재고 가시성 확보',
      impact: '재고 오차율 80% 감소'
    },
    {
      title: '금융기관 레거시 시스템 현대화',
      description: '기존 메인프레임 데이터를 클라우드 기반 데이터 레이크로 마이그레이션',
      impact: '데이터 접근 속도 10배 향상'
    },
    {
      title: '공공기관 부서 간 데이터 공유',
      description: '분산된 부서별 시스템 데이터를 통합 플랫폼으로 연결하여 협업 효율 향상',
      impact: '데이터 조회 시간 70% 단축'
    }
  ];

  const impacts = [
    '데이터 사일로 제거로 정보 접근성 향상',
    '실시간 데이터 동기화로 의사결정 속도 개선',
    '수작업 데이터 입력 제거로 오류율 감소',
    '단일 데이터 모델로 시스템 간 정합성 확보',
    'API 기반 확장 가능한 통합 아키텍처',
    '클라우드 네이티브 구조로 운영 비용 절감'
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
        <section className="relative bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 text-white py-24">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                Data Integration Platform
              </div>
              <h1 className="text-5xl font-bold mb-6">SmartHub</h1>
              <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
                SmartHub는 분산된 시스템의 데이터를 단일 플랫폼으로 통합하는 Data Integration Hub입니다. 
                Microsoft Dataverse와 Azure Data Factory를 기반으로 실시간 데이터 파이프라인을 구축하고, 
                API 연결을 통해 레거시부터 최신 SaaS까지 모든 시스템을 연결합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors whitespace-nowrap"
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
                  대부분의 기업은 ERP, CRM, 회계 시스템, 전자결재, 협업 도구 등 
                  수십 개의 시스템을 동시에 운영하고 있습니다. 
                  각 시스템은 독립적인 데이터베이스를 가지고 있어 데이터 사일로가 발생하고, 
                  동일한 정보가 여러 곳에 중복 저장되면서 정합성 문제가 생깁니다.
                </p>
                <p>
                  데이터를 통합하려면 수작업으로 엑셀 파일을 주고받거나, 
                  개발팀이 매번 커스텀 연동 코드를 작성해야 합니다. 
                  이는 시간과 비용이 많이 들고, 실시간 동기화가 어려워 의사결정이 지연됩니다.
                </p>
                <p>
                  특히 레거시 시스템과 최신 클라우드 서비스를 함께 사용하는 환경에서는 
                  기술 스택 차이로 인해 통합이 더욱 복잡해지고, 
                  데이터 품질 관리와 보안 규정 준수도 어려워집니다.
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
                  SmartHub는 Microsoft Dataverse를 중심으로 
                  모든 시스템의 데이터를 단일 데이터 모델로 통합하는 Data Integration Platform입니다.
                </p>
                <p>
                  Azure Data Factory와 Logic Apps를 활용한 실시간 ETL 파이프라인, 
                  Power Platform의 200+ 커넥터를 통한 API 연결, 
                  Change Data Capture(CDC) 기반 자동 동기화를 통해 
                  데이터 사일로를 제거하고 단일 진실 공급원(Single Source of Truth)을 구축합니다.
                </p>
                <p>
                  Azure Purview를 통한 데이터 거버넌스, 
                  Power BI와 Azure Synapse Analytics와의 즉시 연결 가능한 분석 최적화 구조, 
                  마스터 데이터 관리(MDM) 기능을 제공하여 
                  데이터 품질과 규정 준수를 보장합니다.
                </p>
                <p>
                  SmartHub는 코드 없이도 데이터 통합을 구축할 수 있는 로우코드 환경을 제공하며, 
                  클라우드 네이티브 아키텍처로 확장성과 안정성을 보장합니다.
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
                SmartHub가 제공하는 데이터 통합 및 관리 기능
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-teal-500 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                    <i className={`${feature.icon} text-2xl text-teal-600`}></i>
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
                SmartHub는 여러 시스템을 운영하며 데이터 통합이 필요한 제조업, 유통업, 금융기관, 공공기관을 대상으로 합니다. 
                특히 레거시 시스템과 클라우드 서비스를 함께 사용하는 중견·대기업, 
                데이터 기반 의사결정을 강화하려는 조직에 최적화되어 있습니다.
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
                다양한 산업군에서 SmartHub를 활용한 실제 사례
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
                  <div className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-lg font-semibold text-sm">
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
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-plug-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Source Systems Layer</h3>
                      <p className="text-gray-600">ERP, CRM, 레거시, SaaS 등 모든 소스 시스템 연결</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-git-merge-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Integration Layer</h3>
                      <p className="text-gray-600">Azure Data Factory, Logic Apps 기반 ETL 파이프라인</p>
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
                      <h3 className="text-xl font-bold text-gray-900">Unified Data Layer</h3>
                      <p className="text-gray-600">Dataverse 기반 단일 데이터 모델 및 마스터 데이터 관리</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-line-chart-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Analytics & Consumption Layer</h3>
                      <p className="text-gray-600">Power BI, Azure Synapse 기반 분석 및 리포팅</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">SmartHub로 데이터 통합을 시작하세요</h2>
            <p className="text-xl text-cyan-100 mb-10 leading-relaxed">
              분산된 시스템의 데이터를 단일 플랫폼으로 통합하고 
              실시간 의사결정 체계를 구축하세요
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors whitespace-nowrap"
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