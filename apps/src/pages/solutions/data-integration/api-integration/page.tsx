import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const APIIntegrationPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '솔루션', href: '/solutions' },
    { label: '데이터 통합', href: '/solutions/data-integration' },
    { label: 'API 통합 서비스', href: '/solutions/data-integration/api-integration' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">API 통합 서비스</h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              다양한 시스템과 애플리케이션을 API로 연결하여 실시간 데이터 교환과 
              비즈니스 프로세스 자동화를 실현하는 통합 플랫폼을 제공합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                프로젝트 문의
              </Link>
              <a 
                href="tel:02-1234-5678" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">API 기반 시스템 통합</h2>
              <p className="text-lg text-gray-600 mb-6">
                Azure API Management와 Logic Apps를 활용하여 200+ 사전 구축된 커넥터로 
                다양한 시스템을 빠르고 안전하게 연결합니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">RESTful API 개발</h4>
                    <p className="text-gray-600 text-sm">표준 REST API 설계 및 개발로 시스템 간 원활한 통신</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">API 게이트웨이</h4>
                    <p className="text-gray-600 text-sm">중앙 집중식 API 관리 및 보안, 모니터링</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">실시간 동기화</h4>
                    <p className="text-gray-600 text-sm">웹훅과 이벤트 기반 실시간 데이터 동기화</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=API%20integration%20platform%20with%20multiple%20system%20connections%2C%20data%20flow%20diagrams%2C%20REST%20API%20endpoints%2C%20green%20and%20emerald%20color%20scheme%2C%20modern%20technology%20architecture%2C%20clean%20professional%20design&width=600&height=400&seq=api-integration-platform&orientation=landscape"
                alt="API 통합 서비스"
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
            <p className="text-lg text-gray-600">완벽한 API 통합을 위한 포괄적 솔루션</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "ri-code-line",
                title: "RESTful API 개발",
                description: "표준 REST API 설계 및 개발로 시스템 간 안정적인 통신 구현"
              },
              {
                icon: "ri-shield-line",
                title: "API 게이트웨이",
                description: "중앙 집중식 API 관리, 인증, 권한 제어 및 트래픽 관리"
              },
              {
                icon: "ri-plug-line",
                title: "사전 구축 커넥터",
                description: "200+ 주요 시스템과의 사전 구축된 커넥터로 빠른 연동"
              },
              {
                icon: "ri-refresh-line",
                title: "실시간 동기화",
                description: "웹훅과 이벤트 기반 실시간 데이터 동기화 및 업데이트"
              },
              {
                icon: "ri-database-line",
                title: "데이터 변환",
                description: "시스템 간 데이터 포맷 변환 및 매핑 자동화"
              },
              {
                icon: "ri-eye-line",
                title: "API 모니터링",
                description: "API 성능, 사용량, 오류 실시간 모니터링 및 알림"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-xl text-green-600`}></i>
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
            <p className="text-lg text-gray-600">다양한 산업에서의 API 통합 성공 사례</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "이커머스 플랫폼 통합",
                description: "ERP, 재고관리, 배송시스템 API 통합으로 주문 처리 자동화",
                benefits: ["주문 처리 시간 80% 단축", "재고 정확도 99% 달성", "고객 만족도 25% 향상"]
              },
              {
                title: "금융 시스템 연동",
                description: "코어뱅킹, 신용평가, 외부 데이터 API 통합으로 대출 심사 자동화",
                benefits: ["심사 시간 70% 단축", "데이터 정확도 95% 향상", "운영 비용 40% 절감"]
              },
              {
                title: "제조업 IoT 데이터 통합",
                description: "생산설비, MES, ERP 시스템 API 연동으로 스마트팩토리 구현",
                benefits: ["생산 효율 30% 향상", "설비 가동률 95% 달성", "품질 불량률 50% 감소"]
              },
              {
                title: "헬스케어 시스템 통합",
                description: "EMR, 검사장비, 보험시스템 API 통합으로 진료 프로세스 최적화",
                benefits: ["진료 대기시간 60% 단축", "의료진 업무 효율 40% 향상", "환자 만족도 향상"]
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
                        <i className="ri-check-line text-green-600"></i>
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">API 통합으로 시스템을 연결하세요</h2>
          <p className="text-xl text-green-100 mb-8">
            전문가와 상담하고 맞춤형 API 통합 솔루션을 확인해보세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              프로젝트 문의하기
            </Link>
            <a 
              href="tel:02-1234-5678" 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              전화 상담 받기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIIntegrationPage;