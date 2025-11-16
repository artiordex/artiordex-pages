import { useState } from 'react';

interface TechnologySectionProps {
  project: any;
}

const TechnologySection = ({ project }: TechnologySectionProps) => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const getTechCategory = (tech: string): string => {
    const categories: Record<string, string[]> = {
      'Frontend': ['Next.js', 'React', 'TypeScript', 'Vue.js'],
      'Backend': ['Node.js', 'Python', 'C++', 'Express'],
      'Database': ['PostgreSQL', 'MongoDB', 'SQL Server', 'Redis'],
      'Cloud': ['Azure', 'AWS', 'Kubernetes', 'Docker'],
      'Microsoft': ['Power Automate', 'Power BI', 'Power Apps', 'Dataverse', 'Teams SDK', 'SharePoint'],
      'AI/ML': ['Azure OpenAI', 'LangChain', 'TensorFlow'],
      'DevOps': ['Azure DevOps', 'CI/CD', 'Terraform']
    };

    for (const [category, techs] of Object.entries(categories)) {
      if (techs.some(t => tech.includes(t))) {
        return category;
      }
    }
    return 'Other';
  };

  const getTechIcon = (tech: string): string => {
    const icons: Record<string, string> = {
      'Next.js': 'ri-reactjs-line',
      'React': 'ri-reactjs-line',
      'TypeScript': 'ri-code-s-slash-line',
      'Python': 'ri-code-line',
      'Node.js': 'ri-nodejs-line',
      'PostgreSQL': 'ri-database-line',
      'MongoDB': 'ri-database-line',
      'Azure': 'ri-cloud-line',
      'AWS': 'ri-cloud-line',
      'Kubernetes': 'ri-server-line',
      'Power Automate': 'ri-robot-line',
      'Power BI': 'ri-bar-chart-line',
      'Power Apps': 'ri-apps-line',
      'Azure OpenAI': 'ri-brain-line',
      'Redis': 'ri-database-2-line'
    };

    for (const [techName, icon] of Object.entries(icons)) {
      if (tech.includes(techName)) {
        return icon;
      }
    }
    return 'ri-code-line';
  };

  const groupedTechs = project.techStack.reduce((acc: any, tech: string) => {
    const category = getTechCategory(tech);
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tech);
    return acc;
  }, {});

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              기술 스택 & 아키텍처
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              최신 기술과 검증된 솔루션을 조합하여 안정적이고 확장 가능한 시스템을 구축했습니다.
            </p>
          </div>

          {/* Technology Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {Object.entries(groupedTechs).map(([category, techs]: [string, any]) => (
              <div key={category} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className={`${getCategoryIcon(category)} mr-3 text-blue-600`}></i>
                  {category}
                </h3>
                <div className="space-y-3">
                  {techs.map((tech: string, index: number) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <i className={`${getTechIcon(tech)} text-blue-600`}></i>
                      </div>
                      <div className="flex-1">
                        <span className="font-medium text-gray-800">{tech}</span>
                        {selectedTech === tech && (
                          <p className="text-sm text-gray-600 mt-1">
                            {getTechDescription(tech)}
                          </p>
                        )}
                      </div>
                      <i className={`ri-arrow-${selectedTech === tech ? 'up' : 'down'}-s-line text-gray-400`}></i>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Diagram */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              시스템 아키텍처
            </h3>
            <div className="relative">
              <img 
                src={project.solution.architecture}
                alt="System Architecture"
                className="w-full h-96 object-cover object-center rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <i className="ri-shield-check-line text-3xl text-green-600 mb-2"></i>
                <h4 className="font-semibold text-gray-800">보안성</h4>
                <p className="text-sm text-gray-600 mt-1">엔터프라이즈급 보안 적용</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <i className="ri-speed-up-line text-3xl text-blue-600 mb-2"></i>
                <h4 className="font-semibold text-gray-800">성능</h4>
                <p className="text-sm text-gray-600 mt-1">최적화된 고성능 처리</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <i className="ri-expand-diagonal-line text-3xl text-purple-600 mb-2"></i>
                <h4 className="font-semibold text-gray-800">확장성</h4>
                <p className="text-sm text-gray-600 mt-1">미래 성장 대응 설계</p>
              </div>
            </div>
          </div>

          {/* Integration Points */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              시스템 통합 포인트
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <i className="ri-database-line text-3xl text-blue-400 mb-3"></i>
                <h4 className="font-semibold mb-2">데이터 레이어</h4>
                <p className="text-sm text-gray-300">안전한 데이터 저장 및 관리</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <i className="ri-cloud-line text-3xl text-green-400 mb-3"></i>
                <h4 className="font-semibold mb-2">클라우드 서비스</h4>
                <p className="text-sm text-gray-300">확장 가능한 인프라</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <i className="ri-robot-line text-3xl text-orange-400 mb-3"></i>
                <h4 className="font-semibold mb-2">자동화 엔진</h4>
                <p className="text-sm text-gray-300">지능형 프로세스 자동화</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <i className="ri-user-line text-3xl text-purple-400 mb-3"></i>
                <h4 className="font-semibold mb-2">사용자 인터페이스</h4>
                <p className="text-sm text-gray-300">직관적인 사용자 경험</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const getCategoryIcon = (category: string): string => {
  const icons: Record<string, string> = {
    'Frontend': 'ri-window-line',
    'Backend': 'ri-server-line',
    'Database': 'ri-database-line',
    'Cloud': 'ri-cloud-line',
    'Microsoft': 'ri-microsoft-line',
    'AI/ML': 'ri-brain-line',
    'DevOps': 'ri-tools-line',
    'Other': 'ri-code-line'
  };
  return icons[category] || 'ri-code-line';
};

const getTechDescription = (tech: string): string => {
  const descriptions: Record<string, string> = {
    'Next.js': '현대적인 React 프레임워크로 서버사이드 렌더링과 정적 사이트 생성 지원',
    'TypeScript': '타입 안전성을 제공하는 JavaScript 슈퍼셋',
    'Power Automate': 'Microsoft의 워크플로우 자동화 플랫폼',
    'Power BI': '비즈니스 인텔리전스 및 데이터 시각화 도구',
    'Azure Functions': '서버리스 컴퓨팅 서비스',
    'PostgreSQL': '고성능 오픈소스 관계형 데이터베이스',
    'Kubernetes': '컨테이너 오케스트레이션 플랫폼',
    'Azure OpenAI': 'Microsoft Azure의 OpenAI 서비스'
  };
  
  for (const [techName, description] of Object.entries(descriptions)) {
    if (tech.includes(techName)) {
      return description;
    }
  }
  return '프로젝트 구현에 사용된 핵심 기술';
};

export default TechnologySection;