import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import Breadcrumb from '../../../components/feature/Breadcrumb';
import { Link } from 'react-router-dom';

const TrainingEnablementPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '솔루션', href: '/solutions' },
    { label: 'Training & Enablement', href: '/solutions/training-enablement' }
  ];

  const features = [
    {
      icon: 'ri-graduation-cap-line',
      title: 'DX 역량 강화',
      description: '디지털 전환 전략 수립 및 실행 역량 교육'
    },
    {
      icon: 'ri-microsoft-line',
      title: 'Power Platform 교육',
      description: 'Power Apps, Automate, BI 실무 중심 교육'
    },
    {
      icon: 'ri-tools-line',
      title: '자동화 워크숍',
      description: 'RPA 및 업무 자동화 실습 교육'
    },
    {
      icon: 'ri-award-line',
      title: 'Microsoft 인증',
      description: 'PL-900, PL-100, PL-200 인증 준비 과정'
    },
    {
      icon: 'ri-team-line',
      title: '맞춤형 교육',
      description: '기업별 맞춤 커리큘럼 및 1:1 멘토링'
    },
    {
      icon: 'ri-presentation-line',
      title: '실무 프로젝트',
      description: '실제 업무 환경 기반 프로젝트 실습'
    }
  ];

  const programs = [
    {
      title: 'DX 리더십 과정',
      duration: '3일 (24시간)',
      target: '임원진, 팀장급',
      description: '디지털 전환 전략 수립 및 조직 변화 관리',
      curriculum: ['DX 전략 수립', '조직 변화 관리', 'ROI 측정', '성공 사례 분석']
    },
    {
      title: 'Power Platform 기초',
      duration: '5일 (40시간)',
      target: '업무 담당자',
      description: 'Power Apps, Automate, BI 기초부터 실무까지',
      curriculum: ['Power Apps 개발', 'Power Automate 워크플로우', 'Power BI 대시보드', '실습 프로젝트']
    },
    {
      title: 'RPA 전문가 과정',
      duration: '10일 (80시간)',
      target: 'IT 담당자',
      description: 'Power Automate Desktop 기반 RPA 전문가 양성',
      curriculum: ['RPA 설계', 'Desktop Flow 개발', '예외 처리', '운영 관리']
    },
    {
      title: 'Microsoft 인증 준비',
      duration: '맞춤형',
      target: '인증 희망자',
      description: 'PL-900, PL-100, PL-200 인증 시험 준비',
      curriculum: ['이론 학습', '실습 문제', '모의 시험', '1:1 멘토링']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <i className="ri-graduation-cap-line text-4xl text-white"></i>
                </div>
                <div className="text-left">
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Training & Enablement</h1>
                  <p className="text-xl text-purple-100">DX 역량 강화</p>
                </div>
              </div>
              
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                DX 역량 강화, Power Platform 사내 교육, 자동화 워크숍, Microsoft 인증 준비를 통한 
                기업 맞춤형 Enablement 프로그램을 제공합니다.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors whitespace-nowrap"
                >
                  교육 문의
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
                  <i className="ri-question-line text-3xl text-red-500 mb-4"></i>
                  <h3 className="font-semibold text-gray-900 mb-2">DX 역량 부족</h3>
                  <p className="text-gray-600">디지털 전환에 필요한 전문 지식과 경험 부족</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <i className="ri-time-line text-3xl text-orange-500 mb-4"></i>
                  <h3 className="font-semibold text-gray-900 mb-2">학습 시간 부족</h3>
                  <p className="text-gray-600">업무와 병행하기 어려운 체계적인 교육 과정</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <i className="ri-money-dollar-circle-line text-3xl text-blue-500 mb-4"></i>
                  <h3 className="font-semibold text-gray-900 mb-2">높은 교육 비용</h3>
                  <p className="text-gray-600">외부 교육 기관의 비싼 교육비와 출장비</p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">교육 프로그램</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  실무 중심의 체계적인 교육 과정으로 조직의 DX 역량을 단계적으로 강화합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
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

        {/* Training Programs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">교육 과정</h2>
                <p className="text-xl text-gray-600">직급별, 역할별 맞춤형 교육 프로그램</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programs.map((program, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                      <div className="text-right">
                        <div className="text-sm font-medium text-purple-600">{program.duration}</div>
                        <div className="text-sm text-gray-600">{program.target}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">주요 커리큘럼</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {program.curriculum.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <i className="ri-check-line text-green-600 text-sm"></i>
                            <span className="text-sm text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">교육 효과</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-trophy-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">역량 향상</h3>
                  <p className="text-gray-600">DX 전문 역량 80% 향상</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-speed-up-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">생산성 증대</h3>
                  <p className="text-gray-600">업무 효율성 60% 개선</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-money-dollar-circle-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">비용 절감</h3>
                  <p className="text-gray-600">외부 교육비 50% 절약</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">조직의 DX 역량을 강화하세요</h2>
              <p className="text-xl text-purple-100 mb-8">
                체계적인 교육 프로그램으로 디지털 전환의 성공을 보장합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors whitespace-nowrap"
                >
                  교육 프로그램 문의
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

export default TrainingEnablementPage;