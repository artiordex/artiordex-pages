import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import Breadcrumb from '../../../components/feature/Breadcrumb';

const DXTransformationPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'DX 전환 사례', href: '/portfolio/dx-transformation' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                DX 전환 사례 포트폴리오
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                대기업부터 중소기업, 공공기관까지 성공적인 디지털 전환을 이끈 프로젝트 사례들을 소개합니다
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  대기업 DX 전환
                </span>
                <span className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                  공공기관 디지털화
                </span>
                <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                  중소기업 자동화
                </span>
              </div>
            </div>
          </div>
        </section>

        <Breadcrumb items={breadcrumbItems} />

        {/* DX 전환 카테고리 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 대기업 DX 전환 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    대기업 DX 전환
                  </h3>
                  <p className="text-gray-600 mb-4">
                    글로벌 대기업의 레거시 시스템 현대화와 전사적 디지털 전환 프로젝트
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      Enterprise Architecture
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      Cloud Migration
                    </span>
                  </div>
                  <a 
                    href="/portfolio/dx-transformation/enterprise"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    사례 보기
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </div>
              </div>

              {/* 공공기관 디지털화 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-cyan-500 to-cyan-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    공공기관 디지털화
                  </h3>
                  <p className="text-gray-600 mb-4">
                    정부기관 및 공공기관의 민원 서비스 디지털화와 업무 프로세스 혁신
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs">
                      Digital Government
                    </span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs">
                      Citizen Service
                    </span>
                  </div>
                  <a 
                    href="/portfolio/dx-transformation/public-sector"
                    className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
                  >
                    사례 보기
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </div>
              </div>

              {/* 중소기업 자동화 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-teal-500 to-teal-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    중소기업 자동화
                  </h3>
                  <p className="text-gray-600 mb-4">
                    중소기업의 제한된 리소스로 최대 효과를 내는 스마트 자동화 솔루션
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs">
                      Smart Automation
                    </span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs">
                      Cost Optimization
                    </span>
                  </div>
                  <a 
                    href="/portfolio/dx-transformation/smes"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                  >
                    사례 보기
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DX 전환 성과 지표 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                DX 전환 성과 지표
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                아티올덱스의 DX 전환 프로젝트가 고객사에게 가져다준 실질적인 변화입니다
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">73%</div>
                <div className="text-gray-600">업무 효율성 향상</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-600 mb-2">65%</div>
                <div className="text-gray-600">운영 비용 절감</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">89%</div>
                <div className="text-gray-600">고객 만족도 증가</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">156%</div>
                <div className="text-gray-600">ROI 달성</div>
              </div>
            </div>
          </div>
        </section>

        {/* 전환 프로세스 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                DX 전환 프로세스
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                체계적이고 검증된 방법론으로 안전하고 효과적인 디지털 전환을 지원합니다
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-search-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">현황 분석</h3>
                <p className="text-gray-600 text-sm">기존 시스템과 프로세스 분석</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-lightbulb-line text-2xl text-cyan-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">전략 수립</h3>
                <p className="text-gray-600 text-sm">맞춤형 DX 전략 및 로드맵 설계</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-tools-line text-2xl text-teal-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">구축 실행</h3>
                <p className="text-gray-600 text-sm">단계별 시스템 구축 및 이행</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-rocket-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">운영 최적화</h3>
                <p className="text-gray-600 text-sm">지속적인 모니터링 및 개선</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              DX 전환 프로젝트 문의하기
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              귀하의 조직에 최적화된 디지털 전환 전략을 제안해드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                프로젝트 문의
              </a>
              <a 
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
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

export default DXTransformationPage;