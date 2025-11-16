const BrochureLibrarySection = () => {
  const brochures = [
    {
      category: "Company Profile",
      items: [
        {
          title: "아티올덱스 회사 소개서",
          description: "회사 개요, 비전·미션, 핵심 가치 및 조직 구조",
          pages: "16 pages",
          format: "PDF",
          size: "2.4 MB"
        },
        {
          title: "SaaS 제품 라인업 가이드",
          description: "Artiflow, SmartHub, ConnectStack 제품 소개",
          pages: "24 pages",
          format: "PDF",
          size: "3.8 MB"
        },
        {
          title: "기업 역량 및 실적 보고서",
          description: "주요 프로젝트 성과 및 기술 역량 증명",
          pages: "12 pages",
          format: "PDF",
          size: "1.9 MB"
        }
      ]
    },
    {
      category: "Product Brochures",
      items: [
        {
          title: "Artiflow 제품 브로슈어",
          description: "AI 워크플로우 자동화 솔루션 상세 가이드",
          pages: "20 pages",
          format: "PDF",
          size: "4.2 MB"
        },
        {
          title: "SmartHub 플랫폼 가이드",
          description: "통합 데이터 허브 및 분석 플랫폼 소개",
          pages: "18 pages",
          format: "PDF",
          size: "3.5 MB"
        },
        {
          title: "ConnectStack 솔루션 개요",
          description: "지역 기반 디지털 생태계 구축 플랫폼",
          pages: "22 pages",
          format: "PDF",
          size: "4.8 MB"
        }
      ]
    },
    {
      category: "DX & AI Whitepapers",
      items: [
        {
          title: "디지털 전환 전략 가이드",
          description: "기업 DX 추진 방법론 및 성공 사례",
          pages: "28 pages",
          format: "PDF",
          size: "5.1 MB"
        },
        {
          title: "AI 워크플로우 기술 백서",
          description: "AI 기반 업무 자동화 기술 및 구현 방안",
          pages: "32 pages",
          format: "PDF",
          size: "6.3 MB"
        },
        {
          title: "클라우드 통합 구현 가이드",
          description: "멀티클라우드 환경 구축 및 관리 방법론",
          pages: "26 pages",
          format: "PDF",
          size: "4.7 MB"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            브로슈어 라이브러리
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            아티올덱스의 제품, 서비스, 기술 역량을 상세히 소개하는 공식 문서
          </p>
        </div>

        <div className="space-y-12">
          {brochures.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((brochure, brochureIndex) => (
                  <div key={brochureIndex} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    {/* Document Thumbnail */}
                    <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg mb-4 flex items-center justify-center border border-blue-100">
                      <i className="ri-file-pdf-line text-4xl text-blue-600"></i>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {brochure.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {brochure.description}
                    </p>
                    
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                      <span>{brochure.pages}</span>
                      <span>{brochure.format}</span>
                      <span>{brochure.size}</span>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                      <i className="ri-download-line mr-2"></i>
                      다운로드
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrochureLibrarySection;