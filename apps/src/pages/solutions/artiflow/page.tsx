import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Breadcrumb from '../../../components/feature/Breadcrumb';

export default function ArtifloWPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: '홈', path: '/' },
    { label: '솔루션', path: '/solutions' },
    { label: 'ArtiFlow', path: '/solutions/artiflow' }
  ];

  const features = [
    {
      icon: 'ri-robot-2-line',
      title: 'AI Workflow Orchestration',
      description: 'Azure OpenAI와 LangChain 기반 지능형 워크플로 자동화 엔진'
    },
    {
      icon: 'ri-git-branch-line',
      title: 'Multi-System Integration',
      description: 'Power Platform, Logic Apps, API를 통한 멀티시스템 연결 레이어'
    },
    {
      icon: 'ri-flow-chart',
      title: 'Process Automation',
      description: 'Power Automate 기반 반복 업무 자동화 및 프로세스 표준화'
    },
    {
      icon: 'ri-database-2-line',
      title: 'Dataverse 기반 데이터 구조화',
      description: '단일 데이터 모델로 업무 정보를 통합 관리'
    },
    {
      icon: 'ri-dashboard-line',
      title: 'Real-time Monitoring Dashboard',
      description: 'Power BI 기반 워크플로 실행 현황 실시간 모니터링'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Enterprise-grade Security',
      description: 'Azure AD 기반 인증 및 역할 기반 접근 제어(RBAC)'
    },
    {
      icon: 'ri-code-s-slash-line',
      title: 'Low-code/No-code Interface',
      description: '개발자 없이도 워크플로를 설계하고 배포할 수 있는 환경'
    },
    {
      icon: 'ri-notification-3-line',
      title: 'Intelligent Notification System',
      description: 'Teams, Email, SMS 등 다채널 알림 자동화'
    }
  ];

  const useCases = [
    {
      title: '제조업 현장 운영 자동화',
      description: '생산 라인의 작업 지시, 품질 검사, 재고 관리를 AI 워크플로로 통합 자동화',
      impact: '운영 효율 40% 향상'
    },
    {
      title: '스타트업 내부 운영 효율화',
      description: '인사, 재무, 프로젝트 관리 업무를 단일 워크플로 시스템으로 통합',
      impact: '업무 처리 시간 60% 단축'
    },
    {
      title: '공공기관 민원 처리 자동화',
      description: '민원 접수부터 처리, 피드백까지 전 과정을 AI 기반 워크플로로 구축',
      impact: '민원 처리 속도 3배 향상'
    },
    {
      title: '교육기관 학사 관리 시스템',
      description: '수강 신청, 성적 관리, 졸업 요건 검증을 자동화된 워크플로로 운영',
      impact: '행정 업무 70% 감소'
    }
  ];

  const impacts = [
    '반복 업무 자동화로 인한 운영 비용 50% 절감',
    '멀티시스템 통합으로 데이터 사일로 제거',
    'AI 기반 의사결정으로 업무 정확도 향상',
    '표준화된 프로세스로 업무 일관성 확보',
    '실시간 모니터링으로 병목 지점 즉시 파악',
    '확장 가능한 클라우드 네이티브 아키텍처'
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
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                AI Workflow OS
              </div>
              <h1 className="text-5xl font-bold mb-6">ArtiFlow</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                ArtiFlow는 AI와 자동화를 기반으로 기업의 모든 워크플로를 통합 관리하는 지능형 운영 시스템입니다. 
                Microsoft 생태계(Power Platform, Azure, Logic Apps)를 활용해 멀티시스템 작업을 자동화하고, 
                데이터 기반 의사결정을 지원하는 Execution-Driven Workflow OS입니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
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
                  많은 기업들이 여러 시스템에 분산된 업무 프로세스로 인해 비효율을 겪고 있습니다. 
                  ERP, CRM, 협업 도구, 문서 관리 시스템이 각각 독립적으로 운영되면서 데이터 사일로가 발생하고, 
                  반복적인 수작업이 지속됩니다.
                </p>
                <p>
                  표준화되지 않은 프로세스는 업무 일관성을 해치고, 실시간 현황 파악이 어려워 의사결정이 지연됩니다. 
                  특히 중소기업과 스타트업은 개발 리소스 부족으로 자동화 구축이 어렵고, 
                  기존 레거시 시스템과의 통합도 복잡합니다.
                </p>
                <p>
                  이러한 환경에서는 AI와 자동화의 잠재력을 활용하기 어렵고, 
                  디지털 전환(DX)이 선언에 그치는 경우가 많습니다.
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
                  ArtiFlow는 Microsoft Power Platform과 Azure를 기반으로 
                  멀티시스템 워크플로를 단일 플랫폼에서 설계·실행·모니터링할 수 있는 AI Workflow OS입니다.
                </p>
                <p>
                  Power Automate와 Logic Apps를 활용한 로우코드 자동화 엔진, 
                  Azure OpenAI 기반 지능형 의사결정 레이어, 
                  Dataverse를 통한 단일 데이터 모델 구조화를 통해 
                  기업의 모든 업무 프로세스를 통합 자동화합니다.
                </p>
                <p>
                  개발자 없이도 워크플로를 설계할 수 있는 No-code 인터페이스와 
                  Power BI 기반 실시간 모니터링 대시보드를 제공하며, 
                  Azure AD 기반 엔터프라이즈급 보안을 보장합니다.
                </p>
                <p>
                  ArtiFlow는 단순한 자동화 도구가 아닌, 
                  기업의 운영 체계 전체를 AI 기반으로 재설계하는 Workflow Operating System입니다.
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
                ArtiFlow가 제공하는 AI 기반 워크플로 자동화 기능
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <i className={`${feature.icon} text-2xl text-blue-600`}></i>
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
                ArtiFlow는 반복 업무 자동화와 프로세스 표준화가 필요한 중소기업, 스타트업, 공공기관, 교육기관을 대상으로 합니다. 
                특히 Microsoft 365를 사용 중이거나 Azure 클라우드 환경을 운영하는 조직에서 
                빠르게 DX·AX 기반 운영 체계를 구축할 수 있습니다.
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
                다양한 산업군에서 ArtiFlow를 활용한 실제 사례
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
                  <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-semibold text-sm">
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
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-brain-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">AI Layer</h3>
                      <p className="text-gray-600">Azure OpenAI, LangChain 기반 지능형 의사결정 엔진</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-flow-chart text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Automation Layer</h3>
                      <p className="text-gray-600">Power Automate, Logic Apps 기반 워크플로 실행 엔진</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-git-branch-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Integration Layer</h3>
                      <p className="text-gray-600">API, Connector를 통한 멀티시스템 연결 레이어</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-dashboard-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Operation Dashboard Layer</h3>
                      <p className="text-gray-600">Power BI 기반 실시간 모니터링 및 분석 대시보드</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">ArtiFlow로 AI 기반 자동화를 시작하세요</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Microsoft 생태계 기반의 지능형 워크플로 시스템으로 
              기업의 운영 효율을 혁신하세요
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
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