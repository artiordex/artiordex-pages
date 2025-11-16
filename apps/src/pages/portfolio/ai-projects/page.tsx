import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import Breadcrumb from '../../../components/feature/Breadcrumb';

const AIProjectsPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'AI 프로젝트', href: '/portfolio/ai-projects' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI 프로젝트 포트폴리오
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                인공지능 기술을 활용한 혁신적인 비즈니스 솔루션과 자동화 프로젝트 사례를 소개합니다
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  AI 워크플로우 자동화
                </span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  지능형 문서 처리
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  예측 분석 시스템
                </span>
              </div>
            </div>
          </div>
        </section>

        <Breadcrumb items={breadcrumbItems} />

        {/* AI 프로젝트 카테고리 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI 워크플로우 자동화 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    AI 워크플로우 자동화
                  </h3>
                  <p className="text-gray-600 mb-4">
                    복잡한 비즈니스 프로세스를 AI 기반으로 자동화하여 효율성을 극대화한 프로젝트들
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                      RPA + AI
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                      Process Mining
                    </span>
                  </div>
                  <a 
                    href="/portfolio/ai-projects/workflow-automation"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                  >
                    프로젝트 보기
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </div>
              </div>

              {/* 지능형 문서 처리 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    지능형 문서 처리
                  </h3>
                  <p className="text-gray-600 mb-4">
                    OCR, NLP 기술을 활용한 문서 자동 분류, 정보 추출 및 처리 시스템 구축 사례
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">
                      OCR
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">
                      NLP
                    </span>
                  </div>
                  <a 
                    href="/portfolio/ai-projects/document-intelligence"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    프로젝트 보기
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </div>
              </div>

              {/* 예측 분석 시스템 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    예측 분석 시스템
                  </h3>
                  <p className="text-gray-600 mb-4">
                    머신러닝과 빅데이터 분석을 통한 비즈니스 예측 및 의사결정 지원 시스템
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      Machine Learning
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      Big Data
                    </span>
                  </div>
                  <a 
                    href="/portfolio/ai-projects/predictive-analytics"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    프로젝트 보기
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 주요 성과 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                AI 프로젝트 주요 성과
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                아티올덱스의 AI 프로젝트가 고객사에게 가져다준 실질적인 비즈니스 가치입니다
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
                <div className="text-gray-600">업무 처리 시간 단축</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">92%</div>
                <div className="text-gray-600">문서 처리 정확도</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">78%</div>
                <div className="text-gray-600">예측 정확도 향상</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
                <div className="text-gray-600">운영 비용 절감</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              AI 프로젝트 문의하기
            </h2>
            <p className="text-purple-100 mb-8 text-lg">
              귀하의 비즈니스에 최적화된 AI 솔루션을 제안해드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                프로젝트 문의
              </a>
              <a 
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
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

export default AIProjectsPage;