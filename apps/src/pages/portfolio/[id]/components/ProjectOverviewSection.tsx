interface ProjectOverviewSectionProps {
  project: any;
}

const ProjectOverviewSection = ({ project }: ProjectOverviewSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              프로젝트 개요
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Context */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <i className="ri-information-line mr-3 text-blue-600"></i>
                  프로젝트 배경
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">클라이언트</h4>
                    <p className="text-gray-600">{project.client}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">산업 분야</h4>
                    <p className="text-gray-600">{project.industry}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">프로젝트 기간</h4>
                    <p className="text-gray-600">{project.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">팀 구성</h4>
                    <p className="text-gray-600">{project.teamSize}</p>
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <i className="ri-code-s-slash-line mr-3 text-blue-600"></i>
                  기술 스택
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.techStack.map((tech: string, index: number) => (
                    <div 
                      key={index}
                      className="p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-300 transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <i className="ri-code-line text-blue-600"></i>
                        </div>
                        <span className="font-medium text-gray-800 text-sm">{tech}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-green-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <i className="ri-star-line mr-3 text-green-600"></i>
                  핵심 특징
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.tags.map((tag: string, index: number) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-green-100"
                    >
                      <i className="ri-check-line text-green-600 text-lg"></i>
                      <span className="text-gray-800 font-medium">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <i className="ri-dashboard-line mr-3"></i>
                  프로젝트 통계
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-orange-100">완료율</span>
                    <span className="font-bold text-xl">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-100">성과 지표</span>
                    <span className="font-bold text-xl">{project.results.length}개</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-100">기술 스택</span>
                    <span className="font-bold text-xl">{project.techStack.length}개</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-100">카테고리</span>
                    <span className="font-bold text-sm">{getCategoryLabel(project.category)}</span>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">유사한 프로젝트가 필요하신가요?</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  이 프로젝트와 유사한 솔루션이 필요하시다면 언제든 문의해 주세요. 
                  맞춤형 제안서를 제공해드립니다.
                </p>
                <button className="w-full px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors whitespace-nowrap">
                  <i className="ri-phone-line mr-2"></i>
                  프로젝트 문의하기
                </button>
              </div>

              {/* Share */}
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">프로젝트 공유</h3>
                <div className="flex space-x-3">
                  <button className="flex-1 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <i className="ri-linkedin-line"></i>
                  </button>
                  <button className="flex-1 p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                    <i className="ri-twitter-line"></i>
                  </button>
                  <button className="flex-1 p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <i className="ri-share-line"></i>
                  </button>
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

export default ProjectOverviewSection;