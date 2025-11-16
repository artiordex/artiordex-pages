import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const EnterpriseIntegrationPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '솔루션', href: '/solutions' },
    { label: '데이터 통합', href: '/solutions/data-integration' },
    { label: '엔터프라이즈 연계 구조 개선', href: '/solutions/data-integration/enterprise-integration' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-600 via-slate-700 to-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">엔터프라이즈 연계 구조 개선</h1>
            <p className="text-xl text-slate-100 mb-8 leading-relaxed">
              복잡한 대기업 환경에서 수십 개의 시스템을 체계적으로 연결하고 
              전사 차원의 데이터 거버넌스와 통합 아키텍처를 구축합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-slate-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                프로젝트 문의
              </Link>
              <a 
                href="tel:02-1234-5678" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-600 transition-colors"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">엔터프라이즈급 통합 아키텍처</h2>
              <p className="text-lg text-gray-600 mb-6">
                Microsoft Azure 기반의 엔터프라이즈 서비스 버스(ESB)와 API 관리 플랫폼을 통해 
                대규모 조직의 복잡한 시스템 환경을 체계적으로 통합합니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-slate-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ESB 아키텍처</h4>
                    <p className="text-gray-600 text-sm">엔터프라이즈 서비스 버스 기반 중앙 집중식 통합</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-slate-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">거버넌스 체계</h4>
                    <p className="text-gray-600 text-sm">전사 데이터 거버넌스 및 API 라이프사이클 관리</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-slate-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">확장성 보장</h4>
                    <p className="text-gray-600 text-sm">미래 시스템 확장을 고려한 유연한 아키텍처</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-8 rounded-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Enterprise%20integration%20architecture%20with%20ESB%2C%20multiple%20system%20connections%2C%20data%20governance%2C%20slate%20and%20gray%20color%20scheme%2C%20large%20scale%20business%20technology%2C%20clean%20professional%20design&width=600&height=400&seq=enterprise-integration&orientation=landscape"
                alt="엔터프라이즈 연계 구조"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 아키텍처 레이어 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">엔터프라이즈 통합 아키텍처</h2>
            <p className="text-lg text-gray-600">계층화된 통합 아키텍처로 복잡성 관리</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                layer: "Presentation Layer",
                title: "프레젠테이션 계층",
                components: ["Portal", "Dashboard", "Mobile Apps", "Web Applications"],
                color: "bg-blue-100 text-blue-600"
              },
              {
                layer: "Business Layer",
                title: "비즈니스 계층",
                components: ["Business Rules", "Workflow Engine", "Process Orchestration", "Service Composition"],
                color: "bg-green-100 text-green-600"
              },
              {
                layer: "Integration Layer",
                title: "통합 계층",
                components: ["ESB", "API Gateway", "Message Broker", "Data Transformation"],
                color: "bg-slate-100 text-slate-600"
              },
              {
                layer: "Data Layer",
                title: "데이터 계층",
                components: ["Data Warehouse", "Master Data", "Operational Systems", "Legacy Systems"],
                color: "bg-orange-100 text-orange-600"
              }
            ].map((layer, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${layer.color}`}>
                  {layer.layer}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{layer.title}</h3>
                <ul className="space-y-2">
                  {layer.components.map((component, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                      <i className="ri-check-line text-slate-600"></i>
                      <span>{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 핵심 기능 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">핵심 기능</h2>
            <p className="text-lg text-gray-600">엔터프라이즈급 통합을 위한 전문 기능</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "ri-building-line",
                title: "ESB 아키텍처",
                description: "엔터프라이즈 서비스 버스 기반 중앙 집중식 통합 관리"
              },
              {
                icon: "ri-shield-check-line",
                title: "데이터 거버넌스",
                description: "전사 데이터 품질, 보안, 규정 준수 통합 관리"
              },
              {
                icon: "ri-flow-chart",
                title: "프로세스 오케스트레이션",
                description: "복잡한 비즈니스 프로세스의 자동화 및 최적화"
              },
              {
                icon: "ri-eye-line",
                title: "통합 모니터링",
                description: "전사 시스템 상태 실시간 모니터링 및 성능 관리"
              },
              {
                icon: "ri-settings-3-line",
                title: "API 라이프사이클 관리",
                description: "API 설계부터 폐기까지 전체 생명주기 관리"
              },
              {
                icon: "ri-line-chart-line",
                title: "성능 최적화",
                description: "대용량 트랜잭션 처리 및 성능 튜닝"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-xl text-slate-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 활용 사례 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">활용 사례</h2>
            <p className="text-lg text-gray-600">대기업 및 공공기관의 성공적인 통합 사례</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "대기업 그룹 통합 플랫폼",
                description: "계열사 50개, 시스템 200개 통합 아키텍처 구축",
                benefits: ["시스템 통합 완료", "데이터 일관성 99% 달성", "운영 비용 50% 절감"]
              },
              {
                title: "금융지주 디지털 통합",
                description: "은행, 증권, 보험 계열사 시스템 완전 통합",
                benefits: ["고객 360도 뷰 구현", "상품 출시 시간 70% 단축", "규정 준수 100% 달성"]
              },
              {
                title: "제조 대기업 글로벌 통합",
                description: "전 세계 30개 법인 ERP 및 생산 시스템 통합",
                benefits: ["글로벌 가시성 확보", "의사결정 속도 5배 향상", "재고 최적화 30% 달성"]
              },
              {
                title: "공공기관 디지털 정부",
                description: "중앙부처 및 산하기관 100개 시스템 통합",
                benefits: ["민원 처리 시간 80% 단축", "부처 간 협업 강화", "국민 만족도 40% 향상"]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">주요 성과</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <i className="ri-check-line text-slate-600"></i>
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
      <section className="py-16 bg-gradient-to-r from-slate-600 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">엔터프라이즈 통합으로 디지털 전환을 완성하세요</h2>
          <p className="text-xl text-slate-100 mb-8">
            전문가와 상담하고 맞춤형 엔터프라이즈 통합 전략을 수립해보세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-slate-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              프로젝트 문의하기
            </Link>
            <a 
              href="tel:02-1234-5678" 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-600 transition-colors"
            >
              전화 상담 받기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseIntegrationPage;