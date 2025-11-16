import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectHeroSectionProps {
  project: any;
}

const ProjectHeroSection = ({ project }: ProjectHeroSectionProps) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform skew-y-12"></div>
      </div>

      {/* Project Image Background */}
      <div className="absolute inset-0">
        <img 
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-20' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-indigo-900/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-blue-200">
              <button 
                onClick={() => navigate('/')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                홈
              </button>
              <i className="ri-arrow-right-s-line"></i>
              <button 
                onClick={() => navigate('/portfolio')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                포트폴리오
              </button>
              <i className="ri-arrow-right-s-line"></i>
              <span className="text-white font-medium">{project.title}</span>
            </div>
          </nav>

          {/* Project Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center mb-2">
                <i className="ri-building-line text-orange-400 mr-2 text-lg"></i>
                <span className="text-blue-200 text-sm font-medium">클라이언트</span>
              </div>
              <div className="text-white font-semibold">{project.client}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center mb-2">
                <i className="ri-time-line text-orange-400 mr-2 text-lg"></i>
                <span className="text-blue-200 text-sm font-medium">프로젝트 기간</span>
              </div>
              <div className="text-white font-semibold">{project.duration}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center mb-2">
                <i className="ri-team-line text-orange-400 mr-2 text-lg"></i>
                <span className="text-blue-200 text-sm font-medium">팀 규모</span>
              </div>
              <div className="text-white font-semibold">{project.teamSize}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center mb-2">
                <i className="ri-trophy-line text-orange-400 mr-2 text-lg"></i>
                <span className="text-blue-200 text-sm font-medium">핵심 성과</span>
              </div>
              <div className="text-white font-semibold text-sm">{project.impact}</div>
            </div>
          </div>

          {/* Contextual CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                <i className="ri-question-line text-orange-400 mr-2"></i>
                비슷한 과제에 직면하고 계신가요?
              </h3>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                저희 전문가들이 이 솔루션을 귀하의 특정 요구사항에 맞게 적용할 수 있습니다. 
                <strong className="text-white">프로젝트에 대해 논의하기 위해 저희 팀과 연결</strong>하세요.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                  onClick={() => {
                    window.location.href = `mailto:contact@artiordex.com?subject=${encodeURIComponent(`${project.title} 유사 프로젝트 문의`)}&body=${encodeURIComponent(`안녕하세요,\n\n${project.title} 프로젝트와 유사한 과제를 해결하고자 합니다.\n\n상담을 요청드립니다.\n\n감사합니다.`)}`;
                  }}
                >
                  <i className="ri-mail-line mr-2 text-lg"></i>
                  유사 프로젝트 상담 요청
                </button>
                <button 
                  className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 border border-white/30 hover:border-white/50 transition-all duration-300 whitespace-nowrap"
                  onClick={() => {
                    window.location.href = 'tel:02-1234-5678';
                  }}
                >
                  <i className="ri-phone-line mr-2 text-lg"></i>
                  즉시 전화 상담
                </button>
              </div>

              {/* Quick Benefits */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-3">
                  <i className="ri-time-line text-orange-400 text-xl mb-2 block"></i>
                  <div className="text-white text-sm font-medium">빠른 PoC</div>
                  <div className="text-blue-200 text-xs">2주 내 구현</div>
                </div>
                <div className="p-3">
                  <i className="ri-shield-check-line text-green-400 text-xl mb-2 block"></i>
                  <div className="text-white text-sm font-medium">검증된 방법론</div>
                  <div className="text-blue-200 text-xs">실제 성과 기반</div>
                </div>
                <div className="p-3">
                  <i className="ri-team-line text-blue-400 text-xl mb-2 block"></i>
                  <div className="text-white text-sm font-medium">전담 팀</div>
                  <div className="text-blue-200 text-xs">맞춤형 지원</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div className="space-y-8">
              {/* Category Badge */}
              <div className="flex items-center space-x-4">
                <span className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full">
                  {getCategoryLabel(project.category)}
                </span>
                <div className="flex items-center space-x-4 text-blue-200">
                  <div className="flex items-center space-x-1">
                    <i className="ri-building-line"></i>
                    <span className="text-sm">{project.client}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="ri-time-line"></i>
                    <span className="text-sm">{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="ri-team-line"></i>
                    <span className="text-sm">{project.teamSize}</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-blue-100 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Key Impact */}
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="flex items-center space-x-3 mb-3">
                  <i className="ri-trophy-line text-2xl text-orange-400"></i>
                  <h3 className="text-lg font-semibold text-white">핵심 성과</h3>
                </div>
                <p className="text-blue-100 text-lg font-medium">{project.impact}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                  <i className="ri-download-line mr-2"></i>
                  프로젝트 자료 다운로드
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 whitespace-nowrap">
                  <i className="ri-phone-line mr-2"></i>
                  유사 프로젝트 문의
                </button>
              </div>
            </div>

            {/* Project Stats */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Industry */}
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-center">
                  <i className="ri-building-2-line text-3xl text-orange-400 mb-3"></i>
                  <h4 className="text-white font-semibold mb-2">산업 분야</h4>
                  <p className="text-blue-200">{project.industry}</p>
                </div>

                {/* Team Size */}
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-center">
                  <i className="ri-group-line text-3xl text-orange-400 mb-3"></i>
                  <h4 className="text-white font-semibold mb-2">팀 규모</h4>
                  <p className="text-blue-200">{project.teamSize}</p>
                </div>

                {/* Duration */}
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-center">
                  <i className="ri-calendar-line text-3xl text-orange-400 mb-3"></i>
                  <h4 className="text-white font-semibold mb-2">프로젝트 기간</h4>
                  <p className="text-blue-200">{project.duration}</p>
                </div>

                {/* Tech Count */}
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-center">
                  <i className="ri-code-s-slash-line text-3xl text-orange-400 mb-3"></i>
                  <h4 className="text-white font-semibold mb-2">기술 스택</h4>
                  <p className="text-blue-200">{project.techStack.length}개 기술</p>
                </div>
              </div>

              {/* Quick Results */}
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <i className="ri-bar-chart-line mr-2 text-orange-400"></i>
                  주요 성과 지표
                </h4>
                <div className="space-y-3">
                  {project.results.slice(0, 3).map((result: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <i className="ri-check-line text-green-400 flex-shrink-0"></i>
                      <span className="text-blue-100 text-sm">{result}</span>
                    </div>
                  ))}
                  {project.results.length > 3 && (
                    <div className="text-orange-400 text-sm font-medium">
                      +{project.results.length - 3}개 추가 성과
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <i className="ri-arrow-down-line text-2xl text-white/60"></i>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
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

export default ProjectHeroSection;