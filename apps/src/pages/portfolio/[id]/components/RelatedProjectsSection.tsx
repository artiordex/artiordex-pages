import { useNavigate } from 'react-router-dom';
import { getRelatedProjects } from '../../../../mocks/portfolioData';

interface RelatedProjectsSectionProps {
  currentProject: any;
}

const RelatedProjectsSection = ({ currentProject }: RelatedProjectsSectionProps) => {
  const navigate = useNavigate();
  const relatedProjects = getRelatedProjects(currentProject.id, currentProject.relatedProjects);

  if (relatedProjects.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              관련 프로젝트
            </h2>
            <p className="text-xl text-gray-600">
              유사한 기술과 솔루션을 적용한 다른 성공 사례들을 확인해보세요.
            </p>
          </div>

          {/* Related Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => navigate(`/portfolio/${project.id}`)}
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

                  {/* View Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium border border-white/30 hover:bg-white/30 transition-colors whitespace-nowrap">
                      자세히 보기
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
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
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((tech: string, techIndex: number) => (
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

                  {/* Project Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <i className="ri-building-line mr-1"></i>
                        {project.client}
                      </div>
                      <div className="flex items-center">
                        <i className="ri-time-line mr-1"></i>
                        {project.duration}
                      </div>
                    </div>
                    <i className="ri-arrow-right-line text-blue-600 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/portfolio')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <i className="ri-grid-line mr-2 text-lg"></i>
              전체 포트폴리오 보기
              <i className="ri-arrow-right-line ml-2 text-lg"></i>
            </button>
          </div>

          {/* Similar Solutions CTA */}
          <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              유사한 솔루션이 필요하신가요?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              이 프로젝트들과 비슷한 과제를 해결해야 한다면, 
              Artiordex의 검증된 솔루션과 경험을 활용해보세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap">
                <i className="ri-phone-line mr-2"></i>
                무료 상담 신청
              </button>
              <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-orange-600 transition-colors whitespace-nowrap">
                <i className="ri-download-line mr-2"></i>
                솔루션 자료 다운로드
              </button>
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

export default RelatedProjectsSection;