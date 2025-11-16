
import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const DXStrategyWhitepaperPage = () => {
  const [downloadCount, setDownloadCount] = useState(2156);

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1);
    window.open('#', '_blank');
  };

  const whitepapers = [
    {
      title: "DX 추진 로드맵 2024",
      description: "성공적인 디지털 전환을 위한 단계별 실행 계획과 핵심 전략",
      pages: 32,
      downloadCount: 1456,
      category: "전략 수립",
      featured: true
    },
    {
      title: "조직문화 변화 관리 가이드",
      description: "DX 과정에서 발생하는 조직 저항을 극복하는 체계적 접근법",
      pages: 24,
      downloadCount: 987,
      category: "조직 변화"
    },
    {
      title: "Power Platform 기반 DX 전략",
      description: "Microsoft Power Platform을 활용한 기업 디지털 전환 방법론",
      pages: 28,
      downloadCount: 1234,
      category: "기술 전략"
    },
    {
      title: "국내외 DX 성공사례 분석",
      description: "글로벌 기업과 국내 선도기업의 DX 성공 요인 심층 분석",
      pages: 36,
      downloadCount: 1678,
      category: "사례 연구"
    },
    {
      title: "DX ROI 측정 프레임워크",
      description: "디지털 전환 투자 대비 효과를 정량적으로 측정하는 방법론",
      pages: 20,
      downloadCount: 892,
      category: "성과 측정"
    },
    {
      title: "공공기관 DX 추진 가이드",
      description: "공공부문 특성을 고려한 디지털 전환 전략과 실행 방안",
      pages: 40,
      downloadCount: 756,
      category: "공공 부문"
    }
  ];

  const categories = ["전체", "전략 수립", "조직 변화", "기술 전략", "사례 연구", "성과 측정", "공공 부문"];
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredWhitepapers = selectedCategory === "전체" 
    ? whitepapers 
    : whitepapers.filter(paper => paper.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-cyan-50 to-blue-100">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb 
              items={[
                { label: '홈', href: '/' },
                { label: '리소스', href: '/resources' },
                { label: '백서 & 가이드', href: '/resources/whitepapers' },
                { label: 'DX 전략 백서', href: '/resources/whitepapers/dx-strategy-whitepaper' }
              ]} 
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-cyan-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
                <i className="ri-lightbulb-line mr-2"></i>
                DX 전략 백서
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                디지털 전환 성공을 위한
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
                  전략적 백서 컬렉션
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                경영진과 의사결정자를 위한 DX 전략 수립 가이드입니다. 
                검증된 방법론과 실제 성공사례를 통해 조직의 디지털 전환을 성공으로 이끄세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <i className="ri-download-line mr-2"></i>
                  전체 백서 다운로드
                </button>
                <a
                  href="/contact/projects/dx-consulting"
                  className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl border-2 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300"
                >
                  <i className="ri-compass-3-line mr-2"></i>
                  DX 컨설팅 문의
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Whitepaper */}
        <section className="py-12 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                    <i className="ri-star-line mr-2"></i>
                    추천 백서
                  </div>
                  <h2 className="text-3xl font-bold mb-4">DX 추진 로드맵 2024</h2>
                  <p className="text-indigo-100 mb-6">
                    2024년 최신 트렌드를 반영한 디지털 전환 로드맵입니다. 
                    AI, 클라우드, 자동화를 중심으로 한 실행 가능한 전략을 제시합니다.
                  </p>
                  <div className="flex items-center gap-6 text-sm mb-6">
                    <span className="flex items-center">
                      <i className="ri-file-line mr-2"></i>
                      32 페이지
                    </span>
                    <span className="flex items-center">
                      <i className="ri-download-line mr-2"></i>
                      1,456 다운로드
                    </span>
                    <span className="flex items-center">
                      <i className="ri-time-line mr-2"></i>
                      2024년 1월 발행
                    </span>
                  </div>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                  >
                    <i className="ri-download-line mr-2"></i>
                    지금 다운로드
                  </button>
                </div>
                <div className="relative">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Professional%20business%20strategy%20document%20cover%20design%20with%20digital%20transformation%20elements%2C%20modern%20corporate%20whitepaper%20layout%2C%20clean%20minimalist%20design%20with%20blue%20and%20cyan%20gradients%2C%20technology%20icons%2C%20data%20visualization%20charts%2C%20professional%20business%20presentation%20style&width=400&height=500&seq=dx-strategy-cover&orientation=portrait"
                    alt="DX 전략 백서"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{downloadCount.toLocaleString()}</div>
                <div className="text-gray-600">총 다운로드</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">6</div>
                <div className="text-gray-600">전문 백서</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">180</div>
                <div className="text-gray-600">총 페이지</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
                <div className="text-gray-600">경영진 추천도</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Whitepapers Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWhitepapers.map((paper, index) => (
                <div key={index} className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border group ${
                  paper.featured ? 'border-indigo-200 ring-2 ring-indigo-100' : 'border-gray-100 hover:border-indigo-200'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-xl">
                      <i className="ri-file-text-line text-2xl text-indigo-600"></i>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                        {paper.category}
                      </span>
                      {paper.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                          추천
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {paper.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {paper.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                      <i className="ri-file-line mr-1"></i>
                      {paper.pages} 페이지
                    </span>
                    <span className="flex items-center">
                      <i className="ri-download-line mr-1"></i>
                      {paper.downloadCount.toLocaleString()}
                    </span>
                  </div>
                  
                  <button
                    onClick={handleDownload}
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                  >
                    <i className="ri-download-line mr-2"></i>
                    다운로드
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              DX 전략 수립을 시작하세요
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              전문가와 함께 귀하의 조직에 최적화된 디지털 전환 전략을 수립하고 실행하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact/projects/dx-consulting"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <i className="ri-compass-3-line mr-2"></i>
                DX 컨설팅 문의
              </a>
              <a
                href="/contact/enterprise/consulting"
                className="inline-flex items-center px-8 py-4 bg-indigo-700 text-white font-semibold rounded-xl hover:bg-indigo-800 transition-all duration-300 border-2 border-indigo-500"
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

export default DXStrategyWhitepaperPage;
