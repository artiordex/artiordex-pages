import { useState } from 'react';

interface ImplementationSectionProps {
  project: any;
}

const ImplementationSection = ({ project }: ImplementationSectionProps) => {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              구현 프로세스
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              체계적이고 단계적인 접근 방식을 통해 프로젝트를 성공적으로 완료했습니다.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {project.implementation.timeline.map((phase: any, index: number) => (
                  <div 
                    key={index}
                    className={`relative flex items-start space-x-6 cursor-pointer transition-all duration-300 ${
                      activePhase === index ? 'transform scale-105' : ''
                    }`}
                    onClick={() => setActivePhase(index)}
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activePhase === index 
                        ? 'bg-blue-600 shadow-lg shadow-blue-600/30' 
                        : 'bg-white border-4 border-blue-200 hover:border-blue-400'
                    }`}>
                      <span className={`font-bold text-lg ${
                        activePhase === index ? 'text-white' : 'text-blue-600'
                      }`}>
                        {index + 1}
                      </span>
                    </div>

                    {/* Phase Content */}
                    <div className={`flex-1 p-6 rounded-2xl transition-all duration-300 ${
                      activePhase === index 
                        ? 'bg-white shadow-lg border border-blue-100' 
                        : 'bg-white/50 hover:bg-white hover:shadow-md'
                    }`}>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h3 className={`text-xl font-bold transition-colors ${
                          activePhase === index ? 'text-blue-600' : 'text-gray-800'
                        }`}>
                          {phase.phase}
                        </h3>
                        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      
                      {activePhase === index && (
                        <div className="space-y-3 animate-fade-in">
                          <h4 className="font-semibold text-gray-800 flex items-center">
                            <i className="ri-flag-line mr-2 text-green-600"></i>
                            주요 마일스톤
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {phase.milestones.map((milestone: string, milestoneIndex: number) => (
                              <div 
                                key={milestoneIndex}
                                className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-100"
                              >
                                <i className="ri-check-line text-green-600 text-sm"></i>
                                <span className="text-gray-700 text-sm">{milestone}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Implementation Challenges */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="ri-error-warning-line mr-3 text-red-600"></i>
                구현 과정의 도전과제
              </h3>
              <div className="space-y-4">
                {project.implementation.challenges.map((challenge: string, index: number) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border border-red-100"
                  >
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-alert-line text-red-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions Applied */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="ri-lightbulb-line mr-3 text-green-600"></i>
                적용된 해결책
              </h3>
              <div className="space-y-4">
                {project.implementation.solutions.map((solution: string, index: number) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border border-green-100"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-green-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Implementation Stats */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">구현 성과 요약</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  {project.implementation.timeline.length}
                </div>
                <div className="text-blue-100">구현 단계</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  {project.duration}
                </div>
                <div className="text-blue-100">총 소요 기간</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  {project.teamSize}
                </div>
                <div className="text-blue-100">팀 구성</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  100%
                </div>
                <div className="text-blue-100">목표 달성률</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;