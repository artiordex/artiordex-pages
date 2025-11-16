
import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../components/feature/Breadcrumb';

const DataIntegrationPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '솔루션', href: '/solutions' },
    { label: '데이터 통합', href: '/solutions/data-integration' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">데이터 통합 솔루션</h1>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              분산된 시스템의 데이터를 하나로 연결하고, Microsoft Dataverse 기반의 
              통합 데이터 플랫폼으로 비즈니스 인사이트를 극대화합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                프로젝트 문의
              </Link>
              <a 
                href="tel:02-1234-5678" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors"
              >
                전화 상담
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 고객이 겪는 문제 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">데이터 관리의 어려움</h2>
            <p className="text-lg text-gray-600">많은 기업들이 겪고 있는 데이터 통합 과제들입니다</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "ri-database-line",
                title: "분산된 데이터",
                description: "여러 시스템에 흩어진 데이터로 인한 일관성 부족과 중복 관리"
              },
              {
                icon: "ri-link-unlink",
                title: "시스템 간 단절",
                description: "ERP, CRM, MES 등 각 시스템이 독립적으로 운영되어 연동 어려움"
              },
              {
                icon: "ri-time-line",
                title: "실시간 동기화 부족",
                description: "데이터 업데이트 지연으로 인한 의사결정 시점 놓침"
              },
              {
                icon: "ri-bar-chart-line",
                title: "통합 분석 불가",
                description: "분산된 데이터로 인한 전체적인 비즈니스 인사이트 도출 어려움"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${item.icon} text-xl text-red-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 솔루션 개요 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">통합 데이터 플랫폼으로 해결합니다</h2>
              <p className="text-lg text-gray-600 mb-6">
                Artiordex의 데이터 통합 솔루션은 Microsoft Dataverse, Azure Data Factory, 
                그리고 API 통합 기술을 활용하여 모든 시스템의 데이터를 하나로 연결합니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-teal-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">실시간 데이터 동기화</h4>
                    <p className="text-gray-600 text-sm">모든 시스템의 데이터를 실시간으로 동기화하여 일관성 보장</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-teal-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">API 기반 통합</h4>
                    <p className="text-gray-600 text-sm">200+ 커넥터를 통한 다양한 시스템과의 원활한 연동</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-teal-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">통합 분석 대시보드</h4>
                    <p className="text-gray-600 text-sm">Power BI 기반 실시간 분석과 인사이트 제공</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-8 rounded-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20data%20integration%20platform%20dashboard%20showing%20connected%20systems%2C%20real-time%20data%20flows%2C%20API%20connections%2C%20Microsoft%20Dataverse%20interface%2C%20clean%20teal%20and%20white%20design%2C%20professional%20business%20technology&width=600&height=400&seq=data-integration-overview&orientation=landscape"
                alt="데이터 통합 솔루션 개요"
                className="w-full h-64 object-cover rounded-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x400?text=데이터 통합 솔루션';
                }}
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
            <p className="text-lg text-gray-600">완벽한 데이터 통합을 위한 포괄적 솔루션</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "ri-database-2-line",
                title: "통합 데이터 모델",
                description: "Dataverse 기반 단일 데이터 구조로 모든 정보를 표준화하여 관리"
              },
              {
                icon: "ri-refresh-line",
                title: "실시간 데이터 파이프라인",
                description: "Azure Data Factory를 통한 실시간 ETL 프로세스 및 데이터 흐름 관리"
              },
              {
                icon: "ri-plug-line",
                title: "API 통합 허브",
                description: "200+ 사전 구축된 커넥터로 다양한 시스템과의 원활한 연동"
              },
              {
                icon: "ri-flow-chart",
                title: "ETL 자동화",
                description: "Extract, Transform, Load 프로세스의 완전 자동화 및 스케줄링"
              },
              {
                icon: "ri-shield-check-line",
                title: "데이터 거버넌스",
                description: "데이터 품질 관리, 보안, 규정 준수를 위한 통합 거버넌스 체계"
              },
              {
                icon: "ri-line-chart-line",
                title: "분석 최적화 구조",
                description: "Power BI 및 분석 도구에 최적화된 데이터 구조 제공"
              },
              {
                icon: "ri-eye-line",
                title: "변경 데이터 캡처",
                description: "실시간 데이터 변경 감지 및 자동 동기화 시스템"
              },
              {
                icon: "ri-settings-3-line",
                title: "마스터 데이터 관리",
                description: "고객, 제품, 조직 등 핵심 마스터 데이터의 중앙 집중 관리"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-xl text-teal-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대상 고객 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">이런 기업에 최적화되어 있습니다</h2>
            <p className="text-lg text-gray-600">다양한 시스템을 운영하는 모든 규모의 기업</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "제조업 & 유통업",
                description: "ERP, MES, SCM 등 복잡한 시스템을 통합하려는 기업",
                features: ["생산-판매 데이터 통합", "재고 실시간 동기화", "공급망 가시성 확보"]
              },
              {
                title: "금융업 & 서비스업",
                description: "고객 데이터와 거래 정보를 통합 관리하려는 기업",
                features: ["360도 고객 뷰", "리스크 관리 통합", "규정 준수 자동화"]
              },
              {
                title: "공공기관 & 대기업",
                description: "레거시 시스템과 신규 시스템을 연동하려는 조직",
                features: ["레거시 현대화", "부서 간 데이터 공유", "통합 보고 체계"]
              }
            ].map((target, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{target.title}</h3>
                <p className="text-gray-600 mb-6">{target.description}</p>
                <ul className="space-y-2">
                  {target.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <i className="ri-check-line text-teal-600"></i>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 활용 사례 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">실제 활용 사례</h2>
            <p className="text-lg text-gray-600">다양한 산업에서 검증된 데이터 통합 성과</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "제조업 ERP-MES-SCM 통합",
                industry: "제조업",
                challenge: "생산, 품질, 물류 시스템이 분리되어 전체 현황 파악 어려움",
                solution: "Dataverse 기반 통합 데이터 모델 + 실시간 동기화",
                results: ["데이터 정합성 95% 향상", "보고서 작성 시간 80% 단축", "의사결정 속도 3배 향상"]
              },
              {
                title: "유통업 옴니채널 데이터 통합",
                industry: "유통업",
                challenge: "온라인, 오프라인, 모바일 채널별 고객 데이터 분산",
                solution: "API 통합 허브 + 360도 고객 데이터 플랫폼",
                results: ["고객 통합 뷰 100% 구축", "재고 오차율 80% 감소", "매출 분석 정확도 90% 향상"]
              },
              {
                title: "금융기관 레거시 시스템 현대화",
                industry: "금융업",
                challenge: "30년된 메인프레임과 신규 디지털 시스템 간 데이터 단절",
                solution: "단계적 데이터 마이그레이션 + 하이브리드 통합 아키텍처",
                results: ["시스템 접근 속도 10배 향상", "데이터 품질 98% 달성", "운영 비용 40% 절감"]
              },
              {
                title: "공공기관 부서 간 데이터 공유",
                industry: "공공기관",
                challenge: "각 부서별 독립 시스템으로 인한 중복 업무와 정보 단절",
                solution: "통합 데이터 플랫폼 + 셀프서비스 분석 환경",
                results: ["중복 데이터 입력 90% 감소", "부서 간 협업 효율 70% 향상", "민원 처리 시간 50% 단축"]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                  <span className="px-3 py-1 bg-teal-100 text-teal-600 text-sm font-medium rounded-full">
                    {useCase.industry}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">문제</h4>
                    <p className="text-gray-600 text-sm">{useCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">솔루션</h4>
                    <p className="text-gray-600 text-sm">{useCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">성과</h4>
                    <ul className="space-y-1">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <i className="ri-arrow-right-line text-teal-600 text-sm"></i>
                          <span className="text-sm text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기대 효과 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">기대할 수 있는 효과</h2>
            <p className="text-lg text-gray-600">데이터 통합으로 얻을 수 있는 구체적인 성과</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-database-2-line",
                title: "데이터 품질 향상",
                description: "중복 제거와 표준화로 데이터 품질 95% 이상 달성",
                metric: "95%+"
              },
              {
                icon: "ri-time-line",
                title: "보고서 작성 시간 단축",
                description: "자동화된 데이터 수집으로 보고서 작성 시간 대폭 절약",
                metric: "80%"
              },
              {
                icon: "ri-eye-line",
                title: "실시간 가시성 확보",
                description: "모든 비즈니스 프로세스의 실시간 모니터링 가능",
                metric: "실시간"
              },
              {
                icon: "ri-line-chart-line",
                title: "의사결정 속도 향상",
                description: "통합된 데이터 기반 빠르고 정확한 의사결정",
                metric: "3배"
              },
              {
                icon: "ri-money-dollar-circle-line",
                title: "운영 비용 절감",
                description: "중복 시스템 제거와 효율성 향상으로 비용 절감",
                metric: "30-40%"
              },
              {
                icon: "ri-shield-check-line",
                title: "규정 준수 강화",
                description: "자동화된 거버넌스로 컴플라이언스 리스크 최소화",
                metric: "100%"
              }
            ].map((effect, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${effect.icon} text-2xl text-teal-600`}></i>
                </div>
                <div className="text-3xl font-bold text-teal-600 mb-2">{effect.metric}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{effect.title}</h3>
                <p className="text-gray-600 text-sm">{effect.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 아키텍처 구성 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">솔루션 아키텍처</h2>
            <p className="text-lg text-gray-600">Microsoft 기반 통합 데이터 아키텍처</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                layer: "Source Systems Layer",
                title: "소스 시스템",
                components: ["ERP Systems", "CRM Platforms", "Legacy Systems", "Cloud Applications"],
                color: "bg-gray-100 text-gray-600"
              },
              {
                layer: "Integration Layer",
                title: "통합 레이어",
                components: ["Azure Data Factory", "API Management", "Service Bus", "Logic Apps"],
                color: "bg-teal-100 text-teal-600"
              },
              {
                layer: "Unified Data Layer",
                title: "통합 데이터",
                components: ["Dataverse", "Azure SQL", "Data Lake", "Master Data Hub"],
                color: "bg-blue-100 text-blue-600"
              },
              {
                layer: "Analytics & Consumption Layer",
                title: "분석 및 활용",
                components: ["Power BI", "Excel", "Custom Apps", "API Endpoints"],
                color: "bg-green-100 text-green-600"
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
                      <i className="ri-check-line text-teal-600"></i>
                      <span>{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-4 text-sm text-gray-600">
              <span>Source Systems</span>
              <i className="ri-arrow-right-line"></i>
              <span>Integration Layer</span>
              <i className="ri-arrow-right-line"></i>
              <span>Unified Data</span>
              <i className="ri-arrow-right-line"></i>
              <span>Analytics & Consumption</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">데이터 통합으로 비즈니스 인사이트를 확보하세요</h2>
          <p className="text-xl text-teal-100 mb-8">
            전문가와 상담하고 맞춤형 데이터 통합 전략을 수립해보세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              프로젝트 문의하기
            </Link>
            <a 
              href="tel:02-1234-5678" 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors"
            >
              전화 상담 받기
            </a>
            <Link 
              to="/solutions" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors"
            >
              다른 솔루션 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataIntegrationPage;
