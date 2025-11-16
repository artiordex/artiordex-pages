interface ChallengeSectionProps {
  project: any;
}

const ChallengeSection = ({ project }: ChallengeSectionProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Challenge Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <i className="ri-error-warning-line text-2xl text-red-600"></i>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    해결해야 할 과제
                  </h2>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {project.challenge.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.challenge.description}
                </p>
              </div>

              {/* Pain Points */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 flex items-center">
                  <i className="ri-alert-line mr-3 text-red-500"></i>
                  주요 문제점
                </h4>
                <div className="space-y-3">
                  {project.challenge.painPoints.map((point: string, index: number) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-red-100 hover:border-red-200 transition-colors"
                    >
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-close-line text-red-600 text-sm"></i>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Statement */}
              <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                <div className="flex items-start space-x-4">
                  <i className="ri-alarm-warning-line text-2xl text-red-600 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">비즈니스 임팩트</h4>
                    <p className="text-gray-700">
                      이러한 문제들로 인해 조직의 생산성 저하, 비용 증가, 그리고 경쟁력 약화가 
                      지속적으로 발생하고 있었습니다. 근본적인 해결책이 시급한 상황이었습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Representation */}
            <div className="space-y-8">
              {/* Challenge Visualization */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  문제 상황 분석
                </h4>
                
                {/* Problem Metrics */}
                <div className="space-y-6">
                  {/* Efficiency Loss */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">업무 효율성</span>
                      <span className="text-sm text-red-600 font-semibold">30% 저하</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>

                  {/* Cost Impact */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">운영 비용 증가</span>
                      <span className="text-sm text-red-600 font-semibold">45% 증가</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>

                  {/* Error Rate */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">오류 발생률</span>
                      <span className="text-sm text-red-600 font-semibold">15% 높음</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>

                  {/* Time Waste */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">시간 낭비</span>
                      <span className="text-sm text-red-600 font-semibold">60% 증가</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Problem Summary */}
                <div className="mt-8 p-4 bg-red-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <i className="ri-error-warning-line text-red-600 text-xl"></i>
                    <div>
                      <h5 className="font-semibold text-gray-900">핵심 문제</h5>
                      <p className="text-sm text-gray-600 mt-1">
                        수동 프로세스와 레거시 시스템으로 인한 
                        전반적인 업무 효율성 저하
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenge Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://readdy.ai/api/search-image?query=business%20challenge%20visualization%20showing%20inefficient%20manual%20processes%2C%20frustrated%20office%20workers%20dealing%20with%20paperwork%20and%20legacy%20systems%2C%20professional%20office%20environment%20with%20stress%20indicators%2C%20problem%20analysis%20concept&width=600&height=400&seq=13&orientation=landscape"
                  alt="Challenge Visualization"
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold mb-2">해결 전 상황</h4>
                  <p className="text-white/90 text-sm">
                    비효율적인 수동 프로세스로 인한 생산성 저하
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;