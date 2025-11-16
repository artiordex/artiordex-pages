import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import Breadcrumb from '../../../components/feature/Breadcrumb';

const DataIntegrationPortfolioPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: '데이터 통합', href: '/portfolio/data-integration' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                데이터 통합 포트폴리오
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                복잡한 시스템 환경에서 데이터를 통합하고 실시간 동기화를 구현한 프로젝트 사례들을 소개합니다
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                  다중 시스템 통합
                </span>
                <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                  실시간 데이터 동기화
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  레거시 시스템 현대화
                </span>
              </div>
            </div>
          </div>
        </section>

        <Breadcrumb items={breadcrumbItems} />

        {/* 데이터 통합 카테고리 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 다중 시스템 통합 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-emerald-500 to-emerald-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    다중 시스템 통합
                  </h3>
                  <p className="text-gray-600 mb-4">
                    ERP, CRM, MES 등 여러 시스템을 하나의 통합 플랫폼으로 연결한 프로젝트
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs">
                      API Gateway
                    </span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs">
                      ESB
                    </span>
                  </div>
                  <a 
                    href="/portfolio/data-integration/multi-system"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    프로젝트 보기
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </div>
              </div>

              {/* 실시간 데이터 동기화 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-teal-500 to-teal-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    실시간 데이터 동기화
                  </h3>
                  <p className="text-gray-600 mb-4">
                    실시간 스트리밍과 이벤트 기반 아키텍처로 구현한 데이터 동기화 시스템
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs">
                      Event Streaming
                    </span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs">
                      CDC
                    </span>
                  </div>
                  <a 
                    href="/portfolio/data-integration/realtime-sync"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                  >
                    프로젝트 보기
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </div>
              </div>

              {/* 레거시 시스템 현대화 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    레거시 시스템 현대화
                  </h3>
                  <p className="text-gray-600 mb-4">
                    오래된 시스템을 현대적인 아키텍처로 전환하면서 데이터 무결성을 보장
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      Microservices
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      Cloud Native
                    </span>
                  </div>
                  <a 
                    href="/portfolio/data-integration/legacy-modernization"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    프로젝트 보기
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 데이터 통합 성과 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                데이터 통합 프로젝트 성과
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                아티올덱스의 데이터 통합 솔루션이 고객사에게 가져다준 실질적인 가치입니다
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">99.9%</div>
                <div className="text-gray-600">데이터 정확도</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">&lt;100ms</div>
                <div className="text-gray-600">실시간 동기화 지연시간</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
                <div className="text-gray-600">데이터 처리 시간 단축</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">시스템 가용성</div>
              </div>
            </div>
          </div>
        </section>

        {/* 기술 스택 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                데이터 통합 기술 스택
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                검증된 기술과 최신 도구를 활용하여 안정적이고 확장 가능한 데이터 통합 솔루션을 구축합니다
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="ri-database-2-line text-2xl text-emerald-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Apache Kafka</h4>
                <p className="text-sm text-gray-600">실시간 스트리밍</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="ri-cloud-line text-2xl text-teal-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Azure Service Bus</h4>
                <p className="text-sm text-gray-600">메시지 큐</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="ri-git-branch-line text-2xl text-green-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Apache Airflow</h4>
                <p className="text-sm text-gray-600">워크플로우 관리</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="ri-share-line text-2xl text-blue-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">REST API</h4>
                <p className="text-sm text-gray-600">시스템 연동</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              데이터 통합 프로젝트 문의하기
            </h2>
            <p className="text-emerald-100 mb-8 text-lg">
              복잡한 데이터 환경을 통합하고 실시간 동기화를 구현해드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                프로젝트 문의
              </a>
              <a 
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
              >
                전화 상담 예약
              </a>
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

export default DataIntegrationPortfolioPage;