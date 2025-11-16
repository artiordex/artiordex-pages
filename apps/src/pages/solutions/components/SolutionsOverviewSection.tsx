
const SolutionsOverviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                통합 솔루션 생태계
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Artiordex는 DX, AI, 데이터 통합, 자동화, 로우코드 생태계를 중심으로 기업의 디지털 전환을 완성합니다.
                </p>
                <p>
                  3대 SaaS 솔루션인 Artiflow, SmartHub, ConnectStack이 기술 기반이 되어 모든 솔루션이 기업 운영을 자동화하고 표준화하는 방향으로 설계되었습니다.
                </p>
                <p>
                  기업, 조직, 지역 운영까지 확장되는 구조로 Microsoft 파트너십을 기반으로 한 신뢰할 수 있는 플랫폼을 제공합니다.
                </p>
              </div>
            </div>

            {/* Right Content - Solution Architecture */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  {/* Core Layer */}
                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      <i className="ri-cpu-line"></i>
                      <span>AI Core Engine</span>
                    </div>
                  </div>

                  {/* Solution Layers */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-2 border border-gray-100">
                        <i className="ri-flow-chart text-2xl text-blue-600"></i>
                      </div>
                      <div className="text-sm font-medium text-gray-900">Artiflow</div>
                      <div className="text-xs text-gray-600">Workflow OS</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-2 border border-gray-100">
                        <i className="ri-database-2-line text-2xl text-indigo-600"></i>
                      </div>
                      <div className="text-sm font-medium text-gray-900">SmartHub</div>
                      <div className="text-xs text-gray-600">Data Integration</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-2 border border-gray-100">
                        <i className="ri-links-line text-2xl text-green-600"></i>
                      </div>
                      <div className="text-sm font-medium text-gray-900">ConnectStack</div>
                      <div className="text-xs text-gray-600">Local Operations</div>
                    </div>
                  </div>

                  {/* Extended Solutions */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-100">
                        <i className="ri-robot-line text-orange-600"></i>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">AI & Automation</div>
                        <div className="text-xs text-gray-600">RPA + AI 통합</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-100">
                        <i className="ri-microsoft-line text-blue-600"></i>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Power Platform</div>
                        <div className="text-xs text-gray-600">Microsoft 생태계</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-100">
                        <i className="ri-graduation-cap-line text-purple-600"></i>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Training</div>
                        <div className="text-xs text-gray-600">역량 강화</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-100">
                        <i className="ri-tools-line text-yellow-600"></i>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Custom API</div>
                        <div className="text-xs text-gray-600">맞춤형 통합</div>
                      </div>
                    </div>
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

export default SolutionsOverviewSection;
