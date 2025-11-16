
import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const DataIntegrationBestPracticesPage = () => {
  const [downloadCount, setDownloadCount] = useState(1834);

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1);
    window.open('#', '_blank');
  };

  const practices = [
    {
      title: "Graph API 기반 통합 가이드",
      description: "Microsoft Graph API를 활용한 엔터프라이즈 데이터 통합 전략과 구현 방법",
      pages: 26,
      downloadCount: 1245,
      category: "API 통합",
      difficulty: "중급"
    },
    {
      title: "ETL vs ELT 전략 비교 분석",
      description: "데이터 파이프라인 구축을 위한 ETL과 ELT 방식의 장단점과 선택 기준",
      pages: 22,
      downloadCount: 987,
      category: "데이터 파이프라인",
      difficulty: "고급"
    },
    {
      title: "데이터 품질 관리 지표",
      description: "통합 데이터의 품질을 측정하고 관리하는 핵심 지표와 모니터링 방법",
      pages: 18,
      downloadCount: 756,
      category: "품질 관리",
      difficulty: "초급"
    },
    {
      title: "레거시 시스템 현대화 사례",
      description: "오래된 시스템을 현대적 아키텍처로 전환한 실제 프로젝트 사례 분석",
      pages: 34,
      downloadCount: 1456,
      category: "레거시 현대화",
      difficulty: "고급"
    },
    {
      title: "실시간 데이터 스트리밍",
      description: "Apache Kafka와 Azure Event Hub를 활용한 실시간 데이터 처리 아키텍처",
      pages: 28,
      downloadCount: 892,
      category: "실시간 처리",
      difficulty: "고급"
    },
    {
      title: "클라우드 데이터 거버넌스",
      description: "멀티클라우드 환경에서의 데이터 거버넌스 정책과 보안 전략",
      pages: 24,
      downloadCount: 634,
      category: "거버넌스",
      difficulty: "중급"
    }
  ];

  const categories = ["전체", "API 통합", "데이터 파이프라인", "품질 관리", "레거시 현대화", "실시간 처리", "거버넌스"];
  const difficulties = ["전체", "초급", "중급", "고급"];
  
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedDifficulty, setSelectedDifficulty] = useState("전체");

  const filteredPractices = practices.filter(practice => {
    const categoryMatch = selectedCategory === "전체" || practice.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === "전체" || practice.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "초급": return "bg-green-100 text-green-700";
      case "중급": return "bg-yellow-100 text-yellow-700";
      case "고급": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-emerald-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb 
              items={[
                { label: '홈', href: '/' },
                { label: '리소스', href: '/resources' },
                { label: '백서 & 가이드', href: '/resources/whitepapers' },
                { label: '데이터 통합 베스트 프랙티스', href: '/resources/whitepapers/data-integration-best-practices' }
              ]} 
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
                <i className="ri-database-2-line mr-2"></i>
                데이터 통합 베스트 프랙티스
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                엔터프라이즈 데이터 통합을 위한
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  검증된 방법론과 실무 가이드
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                복잡한 기업 환경에서 데이터를 효과적으로 통합하고 관리하는 방법을 제시합니다.
                API 통합부터 레거시 현대화까지, 실제 프로젝트 경험을 바탕으로 한 전문 가이드입니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <i className="ri-download-line mr-2"></i>
                  전체 가이드 다운로드
                </button>
                <a
                  href="/contact/projects/custom-dev"
                  className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300"
                >
                  <i className="ri-code-s-slash-line mr-2"></i>
                  데이터 통합 프로젝트 문의
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="py-12 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">데이터 통합 아키텍처 개요</h2>
              <p className="text-gray-600">현대적인 데이터 통합 시스템의 핵심 구성 요소</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20data%20integration%20architecture%20diagram%20showing%20API%20connections%2C%20ETL%20pipelines%2C%20cloud%20databases%2C%20real-time%20streaming%2C%20data%20governance%20layers%2C%20enterprise%20system%20integration%2C%20technical%20blueprint%20style%20with%20clean%20lines%20and%20professional%20color%20scheme&width=800&height=400&seq=data-integration-arch&orientation=landscape"
                alt="데이터 통합 아키텍처"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{downloadCount.toLocaleString()}</div>
                <div className="text-gray-600">총 다운로드</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">6</div>
                <div className="text-gray-600">전문 가이드</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">152</div>
                <div className="text-gray-600">총 페이지</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">97%</div>
                <div className="text-gray-600">개발자 만족도</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">카테고리</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">난이도</h3>
                <div className="flex flex-wrap gap-3">
                  {difficulties.map((difficulty) => (
                    <button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedDifficulty === difficulty
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200'
                      }`}
                    >
                      {difficulty}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practices Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPractices.map((practice, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl">
                      <i className="ri-database-2-line text-2xl text-emerald-600"></i>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                        {practice.category}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(practice.difficulty)}`}>
                        {practice.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {practice.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {practice.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                      <i className="ri-file-line mr-1"></i>
                      {practice.pages} 페이지
                    </span>
                    <span className="flex items-center">
                      <i className="ri-download-line mr-1"></i>
                      {practice.downloadCount.toLocaleString()}
                    </span>
                  </div>
                  
                  <button
                    onClick={handleDownload}
                    className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center"
                  >
                    <i className="ri-download-line mr-2"></i>
                    다운로드
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">지원 기술 스택</h2>
              <p className="text-gray-600">가이드에서 다루는 주요 기술과 플랫폼</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Microsoft Graph", icon: "ri-microsoft-line" },
                { name: "Azure Data Factory", icon: "ri-cloud-line" },
                { name: "Apache Kafka", icon: "ri-database-line" },
                { name: "Power BI", icon: "ri-bar-chart-line" },
                { name: "SQL Server", icon: "ri-server-line" },
                { name: "REST APIs", icon: "ri-code-s-slash-line" }
              ].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300">
                  <i className={`${tech.icon} text-3xl text-emerald-600 mb-2`}></i>
                  <div className="text-sm font-medium text-gray-700">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              데이터 통합 프로젝트를 시작하세요
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              전문가와 함께 귀하의 데이터 환경에 최적화된 통합 솔루션을 구축하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact/projects/custom-dev"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <i className="ri-code-s-slash-line mr-2"></i>
                맞춤형 개발 문의
              </a>
              <a
                href="/contact/enterprise/consulting"
                className="inline-flex items-center px-8 py-4 bg-emerald-700 text-white font-semibold rounded-xl hover:bg-emerald-800 transition-all duration-300 border-2 border-emerald-500"
              >
                <i className="ri-user-star-line mr-2"></i>
                전문가 상담 예약
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DataIntegrationBestPracticesPage;
