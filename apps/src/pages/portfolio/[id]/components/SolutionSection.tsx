interface SolutionSectionProps {
  project: any;
}

const SolutionSection = ({ project }: SolutionSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Solution Visual */}
            <div className="space-y-8">
              {/* Architecture Diagram */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={project.solution.architecture}
                  alt="Solution Architecture"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold mb-2">솔루션 아키텍처</h4>
                  <p className="text-white/90 text-sm">
                    확장 가능하고 안정적인 기술 아키텍처 설계
                  </p>
                </div>
              </div>

              {/* Solution Benefits */}
              <div className="bg-blue-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <i className="ri-lightbulb-line mr-3 text-blue-600"></i>
                  솔루션 핵심 혜택
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl">
                    <i className="ri-speed-up-line text-3xl text-blue-600 mb-2"></i>
                    <h5 className="font-semibold text-gray-800">성능 향상</h5>
                    <p className="text-sm text-gray-600 mt-1">처리 속도 대폭 개선</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl">
                    <i className="ri-shield-check-line text-3xl text-green-600 mb-2"></i>
                    <h5 className="font-semibold text-gray-800">안정성 확보</h5>
                    <p className="text-sm text-gray-600 mt-1">99.9% 가용성 보장</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl">
                    <i className="ri-money-dollar-circle-line text-3xl text-orange-600 mb-2"></i>
                    <h5 className="font-semibold text-gray-800">비용 절감</h5>
                    <p className="text-sm text-gray-600 mt-1">운영비 대폭 감소</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl">
                    <i className="ri-rocket-line text-3xl text-purple-600 mb-2"></i>
                    <h5 className="font-semibold text-gray-800">확장성</h5>
                    <p className="text-sm text-gray-600 mt-1">미래 성장 대응</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <i className="ri-lightbulb-line text-2xl text-blue-600"></i>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    우리의 솔루션
                  </h2>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {project.solution.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.solution.description}
                </p>
              </div>

              {/* Solution Approach */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 flex items-center">
                  <i className="ri-route-line mr-3 text-blue-500"></i>
                  솔루션 접근 방법
                </h4>
                <div className="space-y-3">
                  {project.solution.approach.map((approach: string, index: number) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{approach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Innovation */}
              <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl text-white">
                <div className="flex items-start space-x-4">
                  <i className="ri-star-line text-2xl text-yellow-300 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-xl mb-2">핵심 혁신 포인트</h4>
                    <p className="text-blue-100">
                      기존 솔루션과 차별화되는 Artiordex만의 독창적인 접근 방식을 통해 
                      고객의 비즈니스 목표를 효과적으로 달성했습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology Integration */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-puzzle-line mr-3 text-indigo-600"></i>
                  기술 통합 전략
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <i className="ri-microsoft-line text-blue-600"></i>
                    <span className="text-sm font-medium text-gray-800">Microsoft 생태계</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <i className="ri-code-line text-green-600"></i>
                    <span className="text-sm font-medium text-gray-800">오픈소스 기술</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <i className="ri-cloud-line text-purple-600"></i>
                    <span className="text-sm font-medium text-gray-800">클라우드 네이티브</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <i className="ri-robot-line text-orange-600"></i>
                    <span className="text-sm font-medium text-gray-800">AI/자동화</span>
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

export default SolutionSection;