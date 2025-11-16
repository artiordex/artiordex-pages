import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const DocumentAutomationPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '솔루션', href: '/solutions' },
    { label: 'AI & 자동화', href: '/solutions/ai-automation' },
    { label: '문서 자동화', href: '/solutions/ai-automation/document-automation' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">문서 자동화 솔루션</h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              AI OCR과 자연어 처리 기술로 문서 인식, 분류, 처리, 보관까지 
              전체 문서 라이프사이클을 완전 자동화합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                프로젝트 문의
              </Link>
              <a 
                href="tel:02-1234-5678" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">지능형 문서 처리 시스템</h2>
              <p className="text-lg text-gray-600 mb-6">
                Azure AI Document Intelligence와 Power Platform을 활용하여 
                종이 문서부터 디지털 파일까지 모든 형태의 문서를 자동으로 처리합니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-emerald-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI OCR 문서 인식</h4>
                    <p className="text-gray-600 text-sm">99% 정확도의 텍스트 추출 및 구조화</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-emerald-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">자동 분류 및 라우팅</h4>
                    <p className="text-gray-600 text-sm">문서 유형별 자동 분류 및 담당자 배정</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-emerald-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">워크플로우 자동화</h4>
                    <p className="text-gray-600 text-sm">승인, 검토, 보관 프로세스 완전 자동화</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-8 rounded-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=AI%20document%20processing%20system%20with%20OCR%20scanning%2C%20automatic%20classification%2C%20digital%20workflow%20automation%2C%20emerald%20and%20teal%20color%20scheme%2C%20modern%20office%20technology%2C%20clean%20professional%20design&width=600&height=400&seq=document-automation&orientation=landscape"
                alt="문서 자동화 솔루션"
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
            <p className="text-lg text-gray-600">완전한 문서 자동화를 위한 통합 솔루션</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "ri-scan-line",
                title: "AI OCR 엔진",
                description: "다국어 지원 고정밀 텍스트 인식 및 테이블, 양식 구조 파악"
              },
              {
                icon: "ri-file-list-line",
                title: "문서 분류",
                description: "머신러닝 기반 자동 문서 유형 분류 및 카테고리 배정"
              },
              {
                icon: "ri-database-line",
                title: "데이터 추출",
                description: "핵심 정보 자동 추출 및 구조화된 데이터로 변환"
              },
              {
                icon: "ri-flow-chart",
                title: "워크플로우 엔진",
                description: "문서별 맞춤형 승인 및 처리 프로세스 자동 실행"
              },
              {
                icon: "ri-shield-check-line",
                title: "보안 및 규정 준수",
                description: "문서 접근 권한 관리 및 규정 준수 자동 검증"
              },
              {
                icon: "ri-archive-line",
                title: "자동 보관",
                description: "문서 생명주기 관리 및 자동 아카이빙 시스템"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-xl text-emerald-600`}></i>
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
            <p className="text-lg text-gray-600">다양한 업무 영역에서의 문서 자동화 적용</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "금융업 대출 서류 처리",
                description: "신청서, 소득증명서, 재무제표 등 자동 검토 및 심사",
                benefits: ["처리 시간 85% 단축", "정확도 98% 달성", "인력 비용 60% 절감"]
              },
              {
                title: "보험업 청구 서류 자동화",
                description: "보험금 청구서류 자동 분류 및 심사 프로세스",
                benefits: ["심사 시간 70% 단축", "오류율 90% 감소", "고객 만족도 향상"]
              },
              {
                title: "제조업 품질 문서 관리",
                description: "검사 성적서, 인증서 등 품질 관련 문서 자동 처리",
                benefits: ["문서 처리 속도 10배 향상", "규정 준수 100% 달성", "추적성 완벽 확보"]
              },
              {
                title: "공공기관 민원 서류 처리",
                description: "각종 신청서 및 증명서 자동 접수 및 처리",
                benefits: ["접수 시간 80% 단축", "민원인 대기시간 감소", "업무 효율성 3배 향상"]
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
                        <i className="ri-check-line text-emerald-600"></i>
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
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">문서 자동화로 업무 효율성을 극대화하세요</h2>
          <p className="text-xl text-emerald-100 mb-8">
            전문가와 상담하고 맞춤형 문서 자동화 솔루션을 확인해보세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              프로젝트 문의하기
            </Link>
            <a 
              href="tel:02-1234-5678" 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              전화 상담 받기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentAutomationPage;