import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import Breadcrumb from '../../../components/feature/Breadcrumb';

const ProductsPortfolioPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: '제품 기반 구축 사례', href: '/portfolio/products' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                제품 기반 구축 사례
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                아티올덱스의 핵심 제품들을 활용하여 고객사에 구축한 실제 프로젝트 사례들을 소개합니다
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  Artiflow 적용 사례
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  SmartHub 연동 사례
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  ConnectStack 운영 사례
                </span>
              </div>
            </div>
          </div>
        </section>

        <Breadcrumb items={breadcrumbItems} />

        {/* 제품별 구축 사례 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Artiflow 적용 사례 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Artiflow</h3>
                    <p className="text-indigo-100">AI Workflow OS</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Artiflow 적용 사례
                  </h3>
                  <p className="text-gray-600 mb-4">
                    AI 기반 워크플로우 자동화 플랫폼을 활용한 비즈니스 프로세스 혁신 사례
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">
                      Workflow Automation
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">
                      AI Integration
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-600">
                      • 대기업 HR 프로세스 자동화
                    </div>
                    <div className="text-sm text-gray-600">
                      • 금융사 승인 워크플로우 구축
                    </div>
                    <div className="text-sm text-gray-600">
                      • 제조업 품질관리 프로세스
                    </div>
                  </div>
                  <a 
                    href="/portfolio/products/artiflow"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    사례 보기
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </div>
              </div>

              {/* SmartHub 연동 사례 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">SmartHub</h3>
                    <p className="text-purple-100">Data Integration</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    SmartHub 연동 사례
                  </h3>
                  <p className="text-gray-600 mb-4">
                    통합 데이터 허브를 통한 다중 시스템 연동과 실시간 데이터 동기화 구축 사례
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                      Data Integration
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                      Real-time Sync
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-600">
                      • ERP-CRM-MES 통합 연동
                    </div>
                    <div className="text-sm text-gray-600">
                      • 실시간 재고 데이터 동기화
                    </div>
                    <div className="text-sm text-gray-600">
                      • 다국가 시스템 통합 구축
                    </div>
                  </div>
                  <a 
                    href="/portfolio/products/smarthub"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                  >
                    사례 보기
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </div>
              </div>

              {/* ConnectStack 운영 사례 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">ConnectStack</h3>
                    <p className="text-blue-100">Local Operations</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    ConnectStack 운영 사례
                  </h3>
                  <p className="text-gray-600 mb-4">
                    로컬 환경에서의 안전한 데이터 처리와 온프레미스 시스템 통합 운영 사례
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      On-premise
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      Security
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-600">
                      • 금융기관 보안 환경 구축
                    </div>
                    <div className="text-sm text-gray-600">
                      • 공공기관 폐쇄망 운영
                    </div>
                    <div className="text-sm text-gray-600">
                      • 의료기관 개인정보 보호
                    </div>
                  </div>
                  <a 
                    href="/portfolio/products/connectstack"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    사례 보기
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 제품별 성과 지표 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                제품 기반 구축 성과
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                아티올덱스 제품들을 활용한 프로젝트에서 달성한 실질적인 성과입니다
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">150+</div>
                <div className="text-gray-600 mb-2">Artiflow 구축 프로젝트</div>
                <div className="text-sm text-gray-500">평균 70% 업무 효율성 향상</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">85+</div>
                <div className="text-gray-600 mb-2">SmartHub 연동 프로젝트</div>
                <div className="text-sm text-gray-500">평균 60% 데이터 처리 시간 단축</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">45+</div>
                <div className="text-gray-600 mb-2">ConnectStack 운영 사례</div>
                <div className="text-sm text-gray-500">99.9% 보안 수준 달성</div>
              </div>
            </div>
          </div>
        </section>

        {/* 구축 프로세스 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                제품 기반 구축 프로세스
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                검증된 제품을 기반으로 빠르고 안정적인 구축 프로세스를 제공합니다
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">요구사항 분석</h3>
                <p className="text-gray-600 text-sm">비즈니스 요구사항과 제품 적합성 분석</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">제품 커스터마이징</h3>
                <p className="text-gray-600 text-sm">고객 환경에 맞는 제품 설정 및 커스터마이징</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">시스템 구축</h3>
                <p className="text-gray-600 text-sm">제품 설치 및 기존 시스템과의 연동</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">테스트 & 검증</h3>
                <p className="text-gray-600 text-sm">기능 테스트 및 성능 검증</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">5</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">운영 지원</h3>
                <p className="text-gray-600 text-sm">교육, 운영 지원 및 지속적인 개선</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              제품 기반 구축 프로젝트 문의하기
            </h2>
            <p className="text-indigo-100 mb-8 text-lg">
              검증된 제품으로 빠르고 안정적인 시스템 구축을 경험해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                프로젝트 문의
              </a>
              <a 
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
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

export default ProductsPortfolioPage;