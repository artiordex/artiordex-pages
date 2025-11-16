const TechnicalWhitepapersSection = () => {
  const whitepapers = [
    {
      title: "AI Workflow Generator Whitepaper",
      description: "인공지능 기반 워크플로우 자동 생성 기술의 아키텍처와 구현 방법론을 상세히 다룬 기술 문서",
      author: "아티올덱스 AI 연구팀",
      publishDate: "2024년 3월",
      pages: "45 pages",
      downloadCount: "1,247"
    },
    {
      title: "Schema Auto-Mapping AI Architecture",
      description: "데이터베이스 스키마 자동 매핑을 위한 AI 아키텍처 설계 및 머신러닝 모델 최적화 기법",
      author: "데이터 엔지니어링팀",
      publishDate: "2024년 2월",
      pages: "38 pages",
      downloadCount: "892"
    },
    {
      title: "DX Organization Operating Model",
      description: "디지털 전환을 위한 조직 운영 모델과 변화 관리 프레임워크 구축 방법론",
      author: "DX 컨설팅팀",
      publishDate: "2024년 1월",
      pages: "52 pages",
      downloadCount: "1,563"
    },
    {
      title: "Cloud-Native Automation System",
      description: "클라우드 네이티브 환경에서의 자동화 시스템 구축 및 마이크로서비스 아키텍처 설계",
      author: "클라우드 아키텍처팀",
      publishDate: "2023년 12월",
      pages: "41 pages",
      downloadCount: "2,108"
    },
    {
      title: "Local-to-Global Platform Technology",
      description: "지역 기반 플랫폼에서 글로벌 확장을 위한 기술 스택과 확장성 설계 원칙",
      author: "플랫폼 개발팀",
      publishDate: "2023년 11월",
      pages: "36 pages",
      downloadCount: "756"
    },
    {
      title: "Microsoft Power Platform Integration",
      description: "Microsoft Power Platform과 타사 시스템 간의 통합 패턴 및 최적화 전략",
      author: "통합 솔루션팀",
      publishDate: "2023년 10월",
      pages: "29 pages",
      downloadCount: "1,834"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            기술 백서
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            아티올덱스의 핵심 기술력과 연구 성과를 담은 전문 기술 문서
          </p>
        </div>

        <div className="space-y-6">
          {whitepapers.map((paper, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1 mb-4 lg:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {paper.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {paper.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span>
                      <i className="ri-user-line mr-1"></i>
                      {paper.author}
                    </span>
                    <span>
                      <i className="ri-calendar-line mr-1"></i>
                      {paper.publishDate}
                    </span>
                    <span>
                      <i className="ri-file-text-line mr-1"></i>
                      {paper.pages}
                    </span>
                    <span>
                      <i className="ri-download-line mr-1"></i>
                      {paper.downloadCount} 다운로드
                    </span>
                  </div>
                </div>
                
                <div className="lg:ml-6">
                  <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap cursor-pointer">
                    <i className="ri-download-line mr-2"></i>
                    다운로드
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            더 많은 기술 백서와 연구 자료는 정기적으로 업데이트됩니다.
          </p>
          <button className="bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium whitespace-nowrap cursor-pointer">
            <i className="ri-notification-line mr-2"></i>
            업데이트 알림 받기
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalWhitepapersSection;