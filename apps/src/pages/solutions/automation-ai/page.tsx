import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import Breadcrumb from '../../../components/feature/Breadcrumb';
import { Link } from 'react-router-dom';

const AutomationAIPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '솔루션', href: '/solutions' },
    { label: 'AI & Automation Solutions', href: '/solutions/automation-ai' }
  ];

  const features = [
    {
      icon: 'ri-robot-line',
      title: 'RPA 자동화',
      description: 'Power Automate Desktop 기반 반복 업무 완전 자동화'
    },
    {
      icon: 'ri-file-text-line',
      title: '문서 자동화',
      description: 'AI 기반 문서 생성, 양식 작성, 보고서 자동 생성'
    },
    {
      icon: 'ri-mail-line',
      title: '메일 자동화',
      description: '스마트 메일 분류, 자동 응답, 일정 관리'
    },
    {
      icon: 'ri-brain-line',
      title: 'AI Agent 운영',
      description: 'Azure OpenAI 기반 지능형 업무 처리 에이전트'
    },
    {
      icon: 'ri-bar-chart-line',
      title: '예측 분석',
      description: 'Power BI 연동 데이터 기반 예측 및 인사이트'
    },
    {
      icon: 'ri-settings-3-line',
      title: '프로세스 최적화',
      description: '업무 흐름 분석 및 자동화 포인트 발굴'
    }
  ];

  const useCases = [
    {
      title: '제조업 품질 관리 자동화',
      description: 'MES 데이터 기반 품질 검사 자동화 및 불량품 예측',
      impact: '검사 시간 70% 단축'
    },
    {
      title: '금융업 문서 처리 자동화',
      description: 'AI OCR 기반 서류 검토 및 승인 프로세스 자동화',
      impact: '처리 속도 5배 향상'
    },
    {
      title: '유통업 재고 관리 자동화',
      description: '판매 데이터 기반 자동 발주 및 재고 최적화',
      impact: '재고 비용 30% 절감'
    },
    {
      title: '서비스업 고객 응대 자동화',
      description: 'AI 챗봇 및 자동 티켓 분류 시스템',
      impact: '응답 시간 80% 단축'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <i className="ri-robot-line text-4xl text-white"></i>
                </div>
                <div className="text-left">
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">AI & Automation Solutions</h1>
                  <p className="text-xl text-orange-100">RPA + AI 통합 운영</p>
                </div>
              </div>
              
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                RPA와 AI를 통합한 운영 솔루션으로 문서 자동화, 메일 및 보고서 자동 생성, 
                예측 분석, AI Agent 운영을 통해 업무 프로세스를 완전 자동화합니다.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors whitespace-nowrap"
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
                  <i className="ri-time-line text-3xl text-red-500 mb-4"></i>
                  <h3 className="font-semibold text-gray-900 mb-2">반복 업무 과부하</h3>
                  <p className="text-gray-600">매일 반복되는 단순 업무로 인한 생산성 저하</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <i className="ri-error-warning-line text-3xl text-orange-500 mb-4"></i>
                  <h3 className="font-semibold text-gray-900 mb-2">휴먼 에러</h3>
                  <p className="text-gray-600">수작업으로 인한 실수와 품질 불일치</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <i className="ri-money-dollar-circle-line text-3xl text-blue-500 mb-4"></i>
                  <h3 className="font-semibold text-gray-900 mb-2">운영 비용 증가</h3>
                  <p className="text-gray-600">비효율적인 프로세스로 인한 비용 상승</p>
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
                  Microsoft Power Platform과 Azure AI를 기반으로 한 통합 자동화 솔루션으로 
                  업무 프로세스의 완전한 디지털 전환을 실현합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
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
                <p className="text-xl text-gray-600">다양한 산업군에서 검증된 자동화 성과</p>
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
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
                  <i className="ri-brain-line text-3xl text-orange-600 mb-3"></i>
                  <h3 className="font-semibold text-gray-900">AI Layer</h3>
                  <p className="text-sm text-gray-600 mt-2">Azure OpenAI, Cognitive Services</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-100">
                  <i className="ri-robot-line text-3xl text-red-600 mb-3"></i>
                  <h3 className="font-semibold text-gray-900">RPA Layer</h3>
                  <p className="text-sm text-gray-600 mt-2">Power Automate, Desktop Flow</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                  <i className="ri-links-line text-3xl text-blue-600 mb-3"></i>
                  <h3 className="font-semibold text-gray-900">Integration Layer</h3>
                  <p className="text-sm text-gray-600 mt-2">API Hub, Dataverse</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                  <i className="ri-dashboard-line text-3xl text-green-600 mb-3"></i>
                  <h3 className="font-semibold text-gray-900">Monitoring Layer</h3>
                  <p className="text-sm text-gray-600 mt-2">Power BI, Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">AI & Automation으로 업무 혁신을 시작하세요</h2>
              <p className="text-xl text-orange-100 mb-8">
                반복 업무를 자동화하고 AI 기반 지능형 프로세스로 생산성을 극대화하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors whitespace-nowrap"
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

export default AutomationAIPage;