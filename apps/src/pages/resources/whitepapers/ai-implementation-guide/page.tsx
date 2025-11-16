
import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const AIImplementationGuidePage = () => {
  const [downloadCount, setDownloadCount] = useState(1247);

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1);
    // 실제 다운로드 로직
    window.open('#', '_blank');
  };

  const guides = [
    {
      title: "AI 도입 준비도 체크리스트",
      description: "조직의 AI 도입 준비 상태를 평가하는 포괄적인 체크리스트",
      pages: 12,
      downloadCount: 892,
      category: "준비 단계"
    },
    {
      title: "데이터 품질 평가 가이드",
      description: "AI 프로젝트 성공을 위한 데이터 품질 기준과 평가 방법론",
      pages: 18,
      downloadCount: 756,
      category: "데이터 준비"
    },
    {
      title: "AI ROI 측정 프레임워크",
      description: "AI 투자 대비 효과를 정량적으로 측정하는 체계적 접근법",
      pages: 24,
      downloadCount: 1034,
      category: "성과 측정"
    },
    {
      title: "기업 AI 보안 전략 가이드",
      description: "AI 시스템 구축 시 고려해야 할 보안 요소와 대응 전략",
      pages: 16,
      downloadCount: 623,
      category: "보안"
    },
    {
      title: "Agent 기반 자동화 설계",
      description: "LLM Agent를 활용한 업무 자동화 시스템 설계 방법론",
      pages: 28,
      downloadCount: 1156,
      category: "기술 구현"
    },
    {
      title: "AI 거버넌스 프레임워크",
      description: "기업 내 AI 활용을 위한 정책, 절차, 통제 체계 구축 가이드",
      pages: 20,
      downloadCount: 834,
      category: "거버넌스"
    }
  ];

  const categories = ["전체", "준비 단계", "데이터 준비", "성과 측정", "보안", "기술 구현", "거버넌스"];
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredGuides = selectedCategory === "전체" 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb 
              items={[
                { label: '홈', href: '/' },
                { label: '리소스', href: '/resources' },
                { label: '백서 & 가이드', href: '/resources/whitepapers' },
                { label: 'AI 도입 가이드', href: '/resources/whitepapers/ai-implementation-guide' }
              ]} 
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                <i className="ri-file-text-line mr-2"></i>
                AI 도입 가이드
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                기업 AI 도입을 위한
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  완전한 실행 가이드
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                AI 도입 계획부터 실행, 성과 측정까지 기업이 알아야 할 모든 것을 담은 전문 가이드 모음입니다.
                검증된 방법론과 실제 사례를 통해 성공적인 AI 전환을 지원합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <i className="ri-download-line mr-2"></i>
                  전체 가이드 다운로드
                </button>
                <a
                  href="/contact/projects/ai-estimate"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
                >
                  <i className="ri-chat-3-line mr-2"></i>
                  AI 도입 상담 신청
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{downloadCount.toLocaleString()}</div>
                <div className="text-gray-600">총 다운로드</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-gray-600">전문 가이드</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">118</div>
                <div className="text-gray-600">총 페이지</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">95%</div>
                <div className="text-gray-600">고객 만족도</div>
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
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-200 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl">
                      <i className="ri-file-text-line text-2xl text-purple-600"></i>
                    </div>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                      {guide.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                      <i className="ri-file-line mr-1"></i>
                      {guide.pages} 페이지
                    </span>
                    <span className="flex items-center">
                      <i className="ri-download-line mr-1"></i>
                      {guide.downloadCount.toLocaleString()}
                    </span>
                  </div>
                  
                  <button
                    onClick={handleDownload}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
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
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI 도입 프로젝트를 시작하세요
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              전문가와 함께 귀하의 비즈니스에 최적화된 AI 전략을 수립하고 실행하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact/projects/ai-estimate"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <i className="ri-calculator-line mr-2"></i>
                AI 프로젝트 견적 요청
              </a>
              <a
                href="/contact/enterprise/consulting"
                className="inline-flex items-center px-8 py-4 bg-purple-700 text-white font-semibold rounded-xl hover:bg-purple-800 transition-all duration-300 border-2 border-purple-500"
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

export default AIImplementationGuidePage;
