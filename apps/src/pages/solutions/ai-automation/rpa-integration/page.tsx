
import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const RPAIntegrationPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '솔루션', href: '/solutions' },
    { label: 'AI & 자동화', href: '/solutions/ai-automation' },
    { label: 'RPA + AI 통합', href: '/solutions/ai-automation/rpa-integration' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">RPA + AI 통합 솔루션</h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              로봇 프로세스 자동화(RPA)와 인공지능을 결합하여 단순 반복 업무를 넘어 
              지능형 의사결정이 가능한 완전 자동화 시스템을 구축합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                프로젝트 문의
              </Link>
              <a 
                href="tel:02-1234-5678" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                전화 상담
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 솔루션 개요 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">RPA와 AI의 완벽한 융합</h2>
              <p className="text-lg text-gray-600 mb-6">
                기존 RPA의 한계를 뛰어넘어 AI 기술과 결합함으로써 복잡한 판단이 필요한 
                업무까지 자동화할 수 있는 지능형 자동화 솔루션입니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-purple-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">지능형 문서 처리</h4>
                    <p className="text-gray-600 text-sm">AI OCR과 자연어 처리로 비정형 문서도 자동 처리</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-purple-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">예외 상황 자동 처리</h4>
                    <p className="text-gray-600 text-sm">AI 판단 로직으로 예외 상황도 자동으로 해결</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-purple-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">학습형 자동화</h4>
                    <p className="text-gray-600 text-sm">사용할수록 더 정확해지는 머신러닝 기반 자동화</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=RPA%20robot%20with%20AI%20brain%20integration%2C%20automated%20workflow%20with%20intelligent%20decision%20making%2C%20purple%20and%20blue%20color%20scheme%2C%20modern%20business%20automation%20technology%2C%20clean%20professional%20design&width=600&height=400&seq=rpa-ai-integration&orientation=landscape"
                alt="RPA + AI 통합 솔루션"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 기능 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">핵심 기능</h2>
            <p className="text-lg text-gray-600">RPA와 AI 기술의 시너지 효과</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "ri-robot-line",
                title: "지능형 RPA 봇",
                description: "AI 판단 로직이 내장된 차세대 RPA 봇으로 복잡한 업무 자동 처리"
              },
              {
                icon: "ri-eye-line",
                title: "컴퓨터 비전 통합",
                description: "화면 인식과 이미지 분석으로 GUI 기반 애플리케이션 자동 조작"
              },
              {
                icon: "ri-brain-line",
                title: "자연어 처리",
                description: "텍스트 이해와 생성으로 이메일, 문서 작성 업무 자동화"
              },
              {
                icon: "ri-flow-chart",
                title: "동적 워크플로우",
                description: "상황에 따라 자동으로 변경되는 적응형 프로세스 실행"
              },
              {
                icon: "ri-database-line",
                title: "데이터 마이닝",
                description: "대용량 데이터에서 패턴을 찾아 자동으로 인사이트 도출"
              },
              {
                icon: "ri-notification-line",
                title: "예측 알림",
                description: "AI 예측 모델로 문제 발생 전 사전 알림 및 대응"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-xl text-purple-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 활용 사례 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">활용 사례</h2>
            <p className="text-lg text-gray-600">다양한 업무 영역에서의 RPA + AI 적용</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "금융업 대출 심사 자동화",
                description: "서류 검토부터 신용 평가까지 전 과정 자동화",
                benefits: ["심사 시간 80% 단축", "정확도 95% 향상", "24시간 무중단 처리"]
              },
              {
                title: "제조업 품질 검사 자동화",
                description: "AI 비전으로 제품 검사 후 자동 분류 및 보고",
                benefits: ["검사 속도 10배 향상", "불량률 90% 감소", "인력 비용 60% 절감"]
              },
              {
                title: "유통업 주문 처리 자동화",
                description: "주문 접수부터 배송 지시까지 완전 자동화",
                benefits: ["처리 시간 70% 단축", "오류율 95% 감소", "고객 만족도 향상"]
              },
              {
                title: "HR 채용 프로세스 자동화",
                description: "이력서 스크리닝부터 면접 일정 조율까지 자동화",
                benefits: ["스크리닝 시간 90% 단축", "후보자 매칭 정확도 향상", "채용 효율성 3배 증가"]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">주요 효과</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <i className="ri-check-line text-purple-600"></i>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">RPA + AI로 업무 혁신을 시작하세요</h2>
          <p className="text-xl text-purple-100 mb-8">
            전문가와 상담하고 맞춤형 자동화 솔루션을 확인해보세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              프로젝트 문의하기
            </Link>
            <a 
              href="tel:02-1234-5678" 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              전화 상담 받기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RPAIntegrationPage;
