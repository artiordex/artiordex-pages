import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const DataMigrationPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '솔루션', href: '/solutions' },
    { label: '데이터 통합', href: '/solutions/data-integration' },
    { label: '데이터 마이그레이션', href: '/solutions/data-integration/data-migration' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 via-amber-700 to-orange-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">데이터 마이그레이션</h1>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              레거시 시스템에서 최신 플랫폼으로 안전하고 정확한 데이터 이전을 통해 
              비즈니스 연속성을 보장하며 디지털 전환을 성공적으로 완수합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                프로젝트 문의
              </Link>
              <a 
                href="tel:02-1234-5678" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">안전한 데이터 마이그레이션</h2>
              <p className="text-lg text-gray-600 mb-6">
                Azure Database Migration Service와 체계적인 마이그레이션 방법론을 통해 
                데이터 손실 없이 안전하고 빠른 시스템 전환을 지원합니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-amber-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">무중단 마이그레이션</h4>
                    <p className="text-gray-600 text-sm">비즈니스 운영 중단 없이 점진적 데이터 이전</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-amber-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">데이터 품질 보장</h4>
                    <p className="text-gray-600 text-sm">이전 과정에서 데이터 정합성 및 품질 검증</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-amber-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">롤백 계획</h4>
                    <p className="text-gray-600 text-sm">문제 발생 시 즉시 원복 가능한 안전장치</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Data%20migration%20process%20with%20servers%2C%20databases%2C%20cloud%20transfer%2C%20amber%20and%20orange%20color%20scheme%2C%20secure%20data%20movement%2C%20modern%20technology%20infrastructure%2C%20clean%20professional%20design&width=600&height=400&seq=data-migration-process&orientation=landscape"
                alt="데이터 마이그레이션"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 마이그레이션 프로세스 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">마이그레이션 프로세스</h2>
            <p className="text-lg text-gray-600">체계적이고 안전한 6단계 마이그레이션 방법론</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                step: "1단계",
                title: "현황 분석",
                description: "기존 시스템 및 데이터 구조 상세 분석",
                icon: "ri-search-line"
              },
              {
                step: "2단계",
                title: "전략 수립",
                description: "마이그레이션 전략 및 일정 계획 수립",
                icon: "ri-lightbulb-line"
              },
              {
                step: "3단계",
                title: "환경 구축",
                description: "타겟 시스템 환경 구축 및 테스트",
                icon: "ri-settings-line"
              },
              {
                step: "4단계",
                title: "파일럿 테스트",
                description: "소규모 데이터로 마이그레이션 검증",
                icon: "ri-flask-line"
              },
              {
                step: "5단계",
                title: "본격 이전",
                description: "전체 데이터 마이그레이션 실행",
                icon: "ri-rocket-line"
              },
              {
                step: "6단계",
                title: "검증 완료",
                description: "데이터 정합성 검증 및 시스템 안정화",
                icon: "ri-check-line"
              }
            ].map((process, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className={`${process.icon} text-xl text-amber-600`}></i>
                </div>
                <div className="text-xs font-medium text-gray-500 mb-2">{process.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
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
            <p className="text-lg text-gray-600">안전하고 효율적인 데이터 마이그레이션</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "ri-shield-check-line",
                title: "무중단 마이그레이션",
                description: "비즈니스 운영을 중단하지 않고 점진적으로 데이터 이전"
              },
              {
                icon: "ri-database-line",
                title: "다중 DB 지원",
                description: "Oracle, SQL Server, MySQL, PostgreSQL 등 모든 DB 지원"
              },
              {
                icon: "ri-refresh-line",
                title: "실시간 동기화",
                description: "마이그레이션 중 실시간 데이터 동기화로 일관성 보장"
              },
              {
                icon: "ri-bug-line",
                title: "데이터 검증",
                description: "이전 전후 데이터 정합성 및 무결성 자동 검증"
              },
              {
                icon: "ri-history-line",
                title: "롤백 지원",
                description: "문제 발생 시 즉시 이전 상태로 복구 가능"
              },
              {
                icon: "ri-speed-line",
                title: "성능 최적화",
                description: "대용량 데이터 고속 이전을 위한 성능 최적화"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-xl text-amber-600`}></i>
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
            <p className="text-lg text-gray-600">성공적인 데이터 마이그레이션 프로젝트</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "금융기관 코어뱅킹 시스템 현대화",
                description: "30년된 메인프레임에서 클라우드 기반 시스템으로 이전",
                benefits: ["99.9% 데이터 정확도", "무중단 서비스 제공", "성능 10배 향상"]
              },
              {
                title: "제조업 ERP 시스템 업그레이드",
                description: "온프레미스 ERP에서 클라우드 ERP로 완전 이전",
                benefits: ["이전 시간 50% 단축", "데이터 손실 0%", "운영 비용 40% 절감"]
              },
              {
                title: "공공기관 레거시 시스템 통합",
                description: "분산된 여러 시스템을 통합 플랫폼으로 마이그레이션",
                benefits: ["시스템 통합 완료", "데이터 일관성 확보", "업무 효율 3배 향상"]
              },
              {
                title: "유통업 옴니채널 플랫폼 구축",
                description: "기존 채널별 시스템을 통합 옴니채널 플랫폼으로 이전",
                benefits: ["채널 통합 완료", "고객 데이터 일원화", "매출 20% 증가"]
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
                        <i className="ri-check-line text-amber-600"></i>
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
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">안전한 데이터 마이그레이션을 시작하세요</h2>
          <p className="text-xl text-amber-100 mb-8">
            전문가와 상담하고 맞춤형 마이그레이션 전략을 수립해보세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              프로젝트 문의하기
            </Link>
            <a 
              href="tel:02-1234-5678" 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
            >
              전화 상담 받기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataMigrationPage;