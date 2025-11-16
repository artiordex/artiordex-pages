import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const SystemIntegrationPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '솔루션', href: '/solutions' },
    { label: '데이터 통합', href: '/solutions/data-integration' },
    { label: '시스템 연동 개발', href: '/solutions/data-integration/system-integration' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-600 via-rose-700 to-pink-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">시스템 연동 개발</h1>
            <p className="text-xl text-rose-100 mb-8 leading-relaxed">
              기업의 핵심 시스템들을 유기적으로 연결하여 데이터 흐름을 최적화하고 
              비즈니스 프로세스 전반의 효율성을 극대화하는 맞춤형 연동 솔루션을 제공합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-rose-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                프로젝트 문의
              </Link>
              <a 
                href="tel:02-1234-5678" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-rose-600 transition-colors"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">맞춤형 시스템 연동</h2>
              <p className="text-lg text-gray-600 mb-6">
                ERP, CRM, MES, SCM 등 기업의 핵심 시스템들을 Microsoft 기술 스택을 활용하여 
                안정적이고 확장 가능한 연동 아키텍처로 구축합니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-rose-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">커스텀 연동 개발</h4>
                    <p className="text-gray-600 text-sm">기업 특성에 맞는 맞춤형 시스템 연동 솔루션</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-rose-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">실시간 데이터 동기화</h4>
                    <p className="text-gray-600 text-sm">시스템 간 실시간 데이터 교환 및 동기화</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-rose-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">확장 가능한 아키텍처</h4>
                    <p className="text-gray-600 text-sm">미래 시스템 확장을 고려한 유연한 구조</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-100 p-8 rounded-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=System%20integration%20architecture%20with%20connected%20enterprise%20systems%2C%20ERP%20CRM%20MES%20connections%2C%20rose%20and%20pink%20color%20scheme%2C%20modern%20business%20technology%2C%20clean%20professional%20design&width=600&height=400&seq=system-integration-arch&orientation=landscape"
                alt="시스템 연동 개발"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 연동 대상 시스템 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">연동 대상 시스템</h2>
            <p className="text-lg text-gray-600">다양한 기업 시스템과의 완벽한 연동</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "ERP 시스템",
                systems: ["SAP", "Oracle ERP", "Microsoft Dynamics", "더존 ERP"],
                icon: "ri-building-line",
                color: "bg-blue-100 text-blue-600"
              },
              {
                category: "CRM 시스템",
                systems: ["Salesforce", "Microsoft Dynamics CRM", "HubSpot", "국산 CRM"],
                icon: "ri-customer-service-line",
                color: "bg-green-100 text-green-600"
              },
              {
                category: "제조 시스템",
                systems: ["MES", "WMS", "PLM", "SCADA"],
                icon: "ri-settings-line",
                color: "bg-orange-100 text-orange-600"
              },
              {
                category: "기타 시스템",
                systems: ["HR 시스템", "회계 시스템", "BI 도구", "레거시 시스템"],
                icon: "ri-apps-line",
                color: "bg-purple-100 text-purple-600"
              }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <i className={`${category.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.category}</h3>
                <ul className="space-y-2">
                  {category.systems.map((system, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                      <i className="ri-check-line text-rose-600"></i>
                      <span>{system}</span>
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
            <p className="text-lg text-gray-600">완벽한 시스템 연동을 위한 전문 기술</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "ri-code-s-slash-line",
                title: "커스텀 API 개발",
                description: "기업 요구사항에 맞는 맞춤형 API 및 웹서비스 개발"
              },
              {
                icon: "ri-database-2-line",
                title: "데이터베이스 연동",
                description: "다양한 DB 간 직접 연동 및 데이터 동기화"
              },
              {
                icon: "ri-exchange-line",
                title: "메시지 큐 시스템",
                description: "안정적인 비동기 메시지 처리 및 트랜잭션 관리"
              },
              {
                icon: "ri-file-transfer-line",
                title: "파일 기반 연동",
                description: "CSV, XML, JSON 등 파일 형태의 데이터 교환"
              },
              {
                icon: "ri-shield-check-line",
                title: "보안 연동",
                description: "암호화, 인증, 권한 관리를 통한 안전한 데이터 교환"
              },
              {
                icon: "ri-eye-line",
                title: "모니터링 시스템",
                description: "연동 상태 실시간 모니터링 및 장애 알림"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-xl text-rose-600`}></i>
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
            <p className="text-lg text-gray-600">다양한 산업에서의 시스템 연동 성공 사례</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "제조업 통합 시스템 구축",
                description: "ERP-MES-WMS-SCM 시스템 완전 연동으로 스마트팩토리 실현",
                benefits: ["생산 가시성 100% 확보", "재고 정확도 99% 달성", "납기 준수율 95% 향상"]
              },
              {
                title: "유통업 옴니채널 플랫폼",
                description: "온라인몰-POS-재고관리-배송시스템 실시간 연동",
                benefits: ["주문 처리 시간 80% 단축", "재고 오차율 90% 감소", "고객 만족도 30% 향상"]
              },
              {
                title: "금융업 디지털 뱅킹 통합",
                description: "코어뱅킹-CRM-리스크관리-외부API 통합 플랫폼 구축",
                benefits: ["업무 처리 속도 5배 향상", "고객 응대 시간 70% 단축", "운영 비용 40% 절감"]
              },
              {
                title: "서비스업 고객 관리 통합",
                description: "CRM-ERP-콜센터-모바일앱 완전 연동 시스템",
                benefits: ["고객 정보 일원화", "서비스 품질 향상", "업무 효율 3배 증가"]
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
                        <i className="ri-check-line text-rose-600"></i>
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
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">시스템 연동으로 비즈니스를 통합하세요</h2>
          <p className="text-xl text-rose-100 mb-8">
            전문가와 상담하고 맞춤형 시스템 연동 솔루션을 확인해보세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-rose-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              프로젝트 문의하기
            </Link>
            <a 
              href="tel:02-1234-5678" 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-rose-600 transition-colors"
            >
              전화 상담 받기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemIntegrationPage;