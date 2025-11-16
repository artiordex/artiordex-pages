
interface FeaturedPortfolioSectionProps {
  activeFilter: string;
  onShowAll: () => void;
}

const FeaturedPortfolioSection = ({ activeFilter, onShowAll }: FeaturedPortfolioSectionProps) => {
  const featuredProjects = [
    {
      id: 1,
      title: "Government Financial Reporting Automation System",
      category: "ax-rpa",
      tags: ["AX/RPA 자동화", "Microsoft Power Automate", "Power BI", "Python"],
      description: "Revolutionized public sector financial reporting through intelligent automation combining Microsoft Power Automate, Power BI, and custom Python scripts. This comprehensive solution reduced monthly financial data collection and report generation time by 90%, while implementing real-time dashboards that enhanced transparency and enabled data-driven decision-making across multiple government departments. The system processes over 10,000 data points daily, generating automated compliance reports that previously required 40 person-hours weekly.",
      techStack: ["Microsoft Power Automate", "Power BI", "Python 스크립트 연동", "Azure Functions"],
      results: [
        "90% 시간 단축 (주 40시간 → 4시간)",
        "일일 10,000+ 데이터 포인트 자동 처리",
        "실시간 규정 준수 대시보드 구축",
        "데이터 투명성 및 정확도 98% 달성"
      ],
      image: "https://readdy.ai/api/search-image?query=modern%20financial%20dashboard%20with%20automated%20reporting%20system%20showing%20real-time%20data%20visualization%2C%20clean%20professional%20interface%20with%20charts%20graphs%20and%20compliance%20metrics%2C%20Microsoft%20Power%20BI%20style%20interface%20with%20blue%20and%20orange%20accents%2C%20government%20sector%20data%20transparency%2C%20multiple%20department%20integration%20display&width=600&height=400&seq=1&orientation=landscape",
      client: "공공기관",
      duration: "3개월",
      teamSize: "4명",
      impact: "주 40시간 → 4시간으로 업무 시간 단축"
    },
    {
      id: 2,
      title: "ConnectWon - Spatial-Based Lifestyle Service Platform",
      category: "platform",
      tags: ["Platform", "Next.js", "TypeScript", "Azure DevOps", "Kubernetes"],
      description: "Developed a cutting-edge lifestyle service platform integrating complex reservation and settlement logic within an ambitious one-month MVP timeline. Leveraging Next.js with TypeScript, Power Pages, Azure DevOps, and Kubernetes orchestration, this project exemplifies our hybrid approach combining Microsoft Low-Code capabilities with open-source code-first development. The platform now serves 5,000+ active users monthly, processing 15,000+ transactions with 99.9% uptime reliability.",
      techStack: ["Next.js (TypeScript)", "Power Pages", "Azure DevOps", "Kubernetes", "PostgreSQL", "Redis Cache"],
      results: [
        "1개월 내 MVP 완성 및 출시",
        "월 5,000+ 활성 사용자 서비스",
        "월 15,000+ 거래 처리",
        "99.9% 가동 시간 안정성 확보"
      ],
      image: "https://readdy.ai/api/search-image?query=modern%20space%20booking%20platform%20interface%20with%20reservation%20calendar%20payment%20and%20settlement%20features%2C%20clean%20user-friendly%20web%20application%20design%20showing%20active%20user%20dashboard%2C%20blue%20and%20orange%20branding%2C%20professional%20lifestyle%20service%20platform%20with%20transaction%20processing%20visualization%2C%20scalable%20cloud%20architecture%20display&width=600&height=400&seq=2&orientation=landscape",
      client: "스타트업",
      duration: "1개월",
      teamSize: "3명",
      impact: "월 15,000+ 거래 처리, 99.9% 가동률"
    },
    {
      id: 3,
      title: "Global B2B Enterprise Backoffice Integration System",
      category: "microsoft-dx",
      tags: ["Microsoft DX", "Power Apps", "Dataverse", "Teams SDK"],
      description: "Transformed fragmented customer and contract management processes into a unified Power Apps-based portal seamlessly integrated with Microsoft Teams. This solution eliminated the learning curve for 500+ employees who can now handle all operations within their familiar Teams environment, achieving 100% user adoption within two weeks and reducing process completion time by 65%.",
      techStack: ["Microsoft Power Apps", "Dataverse", "Teams SDK", "Graph API", "SharePoint"],
      results: [
        "500+ 직원 대상 통합 포털 구현",
        "2주 내 100% 사용자 채택률 달성",
        "프로세스 완료 시간 65% 단축",
        "Teams 내 완전한 업무 연속성 확보"
      ],
      image: "https://readdy.ai/api/search-image?query=Microsoft%20Teams%20integrated%20business%20portal%20interface%20showing%20Power%20Apps%20customer%20and%20contract%20management%20system%2C%20professional%20office%20environment%20with%20seamless%20workflow%20integration%2C%20modern%20business%20application%20with%20unified%20dashboard%2C%20500%20plus%20employees%20collaboration%20platform%2C%20enterprise%20productivity%20enhancement%20visualization&width=600&height=400&seq=3&orientation=landscape",
      client: "글로벌 B2B 기업",
      duration: "4개월",
      teamSize: "5명",
      impact: "프로세스 시간 65% 단축, 100% 채택률"
    },
    {
      id: 4,
      title: "Financial Industry AI Document Q&A Agent",
      category: "ai-intelligence",
      tags: ["AI", "Azure OpenAI", "LangChain", "C++"],
      description: "Implemented an advanced AI-powered document intelligence system using Azure OpenAI Service, LangChain, and custom C++ APIs. This solution enables instant query resolution for internal regulations and legal documentation, reducing compliance review time by 75% and improving regulatory adherence accuracy to 98%. The system processes 1,000+ queries daily across 50,000+ pages of documentation.",
      techStack: ["Azure OpenAI Service", "LangChain", "C++ (API)", "Vector Database", "RAG Architecture"],
      results: [
        "일일 1,000+ 질의 즉시 처리",
        "50,000+ 페이지 문서 분석",
        "규정 준수 검토 시간 75% 단축",
        "규제 준수 정확도 98% 달성"
      ],
      image: "https://readdy.ai/api/search-image?query=AI-powered%20document%20intelligence%20system%20for%20financial%20industry%20showing%20intelligent%20chatbot%20interface%20with%20legal%20document%20processing%2C%20professional%20financial%20office%20setting%20with%20compliance%20and%20risk%20management%20visualization%2C%20Azure%20OpenAI%20integration%20display%2C%20natural%20language%20query%20processing%20with%2098%20percent%20accuracy%20metrics&width=600&height=400&seq=4&orientation=landscape",
      client: "금융기관",
      duration: "2개월",
      teamSize: "4명",
      impact: "검토 시간 75% 단축, 정확도 98%"
    },
    {
      id: 5,
      title: "SME Digital Transformation 4-Phase Execution Roadmap",
      category: "dx-consulting",
      tags: ["DX 컨설팅", "Power Platform", "교육 워크숍", "PoC"],
      description: "Delivered comprehensive digital transformation consulting utilizing our proprietary 4-phase methodology, Power Platform proof-of-concept implementations, and hands-on workshops. Successfully bridged the execution gap for mid-sized enterprises, achieving validated 20% efficiency improvements in pilot departments and establishing sustainable DX internalization frameworks.",
      techStack: ["DX 실행 컨설팅 방법론", "Power Platform (PoC)", "교육 워크숍", "Change Management"],
      results: [
        "4단계 컨설팅 프로세스 완료",
        "파일럿 부서 20% 업무 효율 개선 검증",
        "DX 내재화 기반 마련",
        "전사 확산 로드맵 수립"
      ],
      image: "https://readdy.ai/api/search-image?query=digital%20transformation%20consulting%20workshop%20showing%20business%20strategy%20meeting%20with%20charts%20roadmaps%20and%20efficiency%20metrics%2C%20professional%20consulting%20environment%20with%20team%20collaboration%20and%20planning%20session%2C%20modern%20office%20setting%20with%204-phase%20methodology%20visualization%2C%20SME%20digital%20transformation%20success%20story%20with%2020%20percent%20improvement%20display&width=600&height=400&seq=5&orientation=landscape",
      client: "중소기업",
      duration: "6개월",
      teamSize: "3명",
      impact: "20% 효율 개선, DX 내재화 성공"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(project => {
        // Check if project matches the selected filter
        if (project.category === activeFilter) return true;
        
        // Check if any tags match the filter
        const filterMappings: Record<string, string[]> = {
          'web': ['Next.js', 'TypeScript', 'Platform'],
          'app': ['Next.js', 'TypeScript', 'Platform'],
          'ai': ['AI', 'Azure OpenAI', 'LangChain'],
          'erp': ['Microsoft DX', 'Power Apps', 'Dataverse'],
          'platform': ['Platform', 'Next.js'],
          'landing': []
        };
        
        const relevantTags = filterMappings[activeFilter] || [];
        return project.tags.some(tag => relevantTags.some(filterTag => tag.includes(filterTag)));
      });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Portfolio Showcase - Five Flagship Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Artiordex의 기술 융합 역량과 실행력을 가장 잘 보여주는 대표 사례들을 확인해보세요. 
              각 프로젝트는 측정 가능한 비즈니스 성과와 기술적 우수성을 입증하며, 
              고품질 비주얼과 간결한 설명, 핵심 기술 스택, 정량화된 결과를 통해 
              즉각적인 역량과 전문성의 인상을 제공합니다.
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full shadow-lg">
                      {getCategoryLabel(project.category)}
                    </span>
                  </div>

                  {/* Project Stats */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2 text-white text-xs">
                      <span className="bg-black/50 px-2 py-1 rounded backdrop-blur-sm">{project.duration}</span>
                      <span className="bg-black/50 px-2 py-1 rounded backdrop-blur-sm">{project.teamSize}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Highlight */}
                  <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                    <div className="flex items-center text-sm">
                      <i className="ri-trophy-line text-orange-500 mr-2 text-lg"></i>
                      <span className="font-semibold text-gray-800">{project.impact}</span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                      <i className="ri-code-s-slash-line mr-1 text-blue-600"></i>
                      핵심 기술 스택
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                      <i className="ri-checkbox-circle-line mr-1 text-green-600"></i>
                      주요 성과
                    </h4>
                    <div className="space-y-1">
                      {project.results.slice(0, 2).map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start text-xs text-gray-600">
                          <i className="ri-check-line text-green-500 mr-2 mt-0.5 flex-shrink-0"></i>
                          <span>{result}</span>
                        </div>
                      ))}
                      {project.results.length > 2 && (
                        <div className="text-xs text-blue-600 font-medium mt-1">
                          +{project.results.length - 2}개 추가 성과
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="ri-building-line mr-2"></i>
                      {project.client}
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform whitespace-nowrap">
                      자세히 보기
                      <i className="ri-arrow-right-line ml-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show All Button */}
          <div className="text-center mb-16">
            <button
              onClick={onShowAll}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <i className="ri-eye-line mr-2 text-lg"></i>
              상세 포트폴리오 전체 보기 (50+ 프로젝트)
              <i className="ri-arrow-down-line ml-2 text-lg"></i>
            </button>
          </div>

          {/* Strategic CTA Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6">
                <i className="ri-lightbulb-line text-4xl text-orange-500 mb-4 block"></i>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  저희 작업에 감명받으셨나요?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  비즈니스 과제를 성공 스토리로 변환하는 방법에 대해 논의해보세요. 
                  귀하의 요구사항에 맞춘 맞춤형 솔루션을 탐색하기 위한 
                  <strong className="text-blue-600"> 무료 상담을 예약</strong>하세요.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-time-line text-blue-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">빠른 PoC 제공</h4>
                  <p className="text-sm text-gray-600">2주 내 개념 증명 구현</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-shield-check-line text-green-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">검증된 전문성</h4>
                  <p className="text-sm text-gray-600">Microsoft 파트너 인증</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-rocket-line text-orange-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">실행 보장</h4>
                  <p className="text-sm text-gray-600">결과 중심 프로젝트 수행</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                  onClick={() => {
                    window.location.href = 'mailto:contact@artiordex.com?subject=무료 상담 예약 요청';
                  }}
                >
                  <i className="ri-calendar-line mr-2 text-lg"></i>
                  무료 상담 예약하기
                </button>
                <button 
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 whitespace-nowrap"
                  onClick={() => {
                    window.location.href = 'tel:02-1234-5678';
                  }}
                >
                  <i className="ri-phone-line mr-2 text-lg"></i>
                  즉시 전화 상담
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-blue-200">
                <p className="text-sm text-gray-600 mb-4">신뢰할 수 있는 파트너</p>
                <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <i className="ri-award-line text-blue-500 mr-2"></i>
                    Microsoft 공식 파트너
                  </div>
                  <div className="flex items-center">
                    <i className="ri-shield-check-line text-green-500 mr-2"></i>
                    ISO 27001 인증
                  </div>
                  <div className="flex items-center">
                    <i className="ri-star-fill text-yellow-500 mr-2"></i>
                    98% 고객 만족도
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    'ax-rpa': 'AX/RPA 자동화',
    'microsoft-dx': 'Microsoft DX',
    'web-app': 'Web/App 개발',
    'platform': '플랫폼',
    'ai-intelligence': 'AI 인텔리전스',
    'dx-consulting': 'DX 컨설팅'
  };
  return labels[category] || category;
};

export default FeaturedPortfolioSection;
