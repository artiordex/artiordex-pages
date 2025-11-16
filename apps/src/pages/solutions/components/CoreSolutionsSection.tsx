
const CoreSolutionsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              3대 핵심 솔루션
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Artiordex의 기술 기반이 되는 3대 SaaS 솔루션으로 기업의 완전한 디지털 전환을 실현합니다.
            </p>
          </div>

          <div className="space-y-20">
            {/* Artiflow Deep Dive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <i className="ri-flow-chart text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Artiflow</h3>
                    <p className="text-blue-600 font-medium">AI Workflow Operating System</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    기업 운영의 중심이 되는 AI 기반 Workflow OS로, 모든 업무 프로세스를 지능적으로 자동화합니다.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-600"></i>
                        <span className="font-medium">Workflow 자동화</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-600"></i>
                        <span className="font-medium">Approval Flow</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-600"></i>
                        <span className="font-medium">AI 기반 의사결정</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-600"></i>
                        <span className="font-medium">문서 자동화</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-gray-100">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        <i className="ri-cpu-line"></i>
                        <span>AI Workflow Generator</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <i className="ri-play-circle-line text-blue-600"></i>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">프로세스 시작</div>
                            <div className="text-sm text-gray-600">자동 트리거 & 조건 분기</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                            <i className="ri-user-settings-line text-cyan-600"></i>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">승인 워크플로우</div>
                            <div className="text-sm text-gray-600">다단계 승인 & 알림</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <i className="ri-file-text-line text-green-600"></i>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">자동 문서화</div>
                            <div className="text-sm text-gray-600">보고서 & 결과 생성</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SmartHub Deep Dive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <i className="ri-database-2-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">SmartHub</h3>
                    <p className="text-indigo-600 font-medium">Data Integration Platform</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    모든 기업 시스템의 데이터를 통합하고 AI 기반 자동 매핑으로 실시간 동기화를 실현합니다.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-600"></i>
                        <span className="font-medium">데이터 통합 - ERP, CRM, MES 연결</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-600"></i>
                        <span className="font-medium">API 자동 매핑 - Schema Auto-Mapping AI</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-600"></i>
                        <span className="font-medium">기업 시스템 언어 통일</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-600"></i>
                        <span className="font-medium">예측 분석 기반 인사이트</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:order-1">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3 border border-gray-100">
                        <i className="ri-building-line text-2xl text-indigo-600"></i>
                      </div>
                      <div className="text-sm font-medium text-gray-900">ERP</div>
                      <div className="text-xs text-gray-600">Enterprise Resource</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3 border border-gray-100">
                        <i className="ri-customer-service-line text-2xl text-purple-600"></i>
                      </div>
                      <div className="text-sm font-medium text-gray-900">CRM</div>
                      <div className="text-xs text-gray-600">Customer Relations</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3 border border-gray-100">
                        <i className="ri-factory-line text-2xl text-blue-600"></i>
                      </div>
                      <div className="text-sm font-medium text-gray-900">MES</div>
                      <div className="text-xs text-gray-600">Manufacturing</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      <i className="ri-shuffle-line"></i>
                      <span>Schema Auto-Mapping AI</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <i className="ri-bar-chart-line text-white"></i>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">통합 대시보드</div>
                        <div className="text-sm text-gray-600">실시간 데이터 분석 & 예측</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ConnectStack Deep Dive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <i className="ri-links-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">ConnectStack</h3>
                    <p className="text-green-600 font-medium">Local Operations Platform</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    지역, 기관, 조직 운영을 위한 통합 OS로 예약부터 정산까지 모든 운영 프로세스를 자동화합니다.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-600"></i>
                        <span className="font-medium">예약 시스템</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-600"></i>
                        <span className="font-medium">인력 배정</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-600"></i>
                        <span className="font-medium">공지 관리</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-600"></i>
                        <span className="font-medium">결제 처리</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-600"></i>
                        <span className="font-medium">자동 정산</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-600"></i>
                        <span className="font-medium">운영 보고</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-gray-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <i className="ri-calendar-line text-green-600"></i>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">예약</div>
                          <div className="text-sm text-gray-600">스마트 스케줄링</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <i className="ri-notification-line text-blue-600"></i>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">알림</div>
                          <div className="text-sm text-gray-600">자동 공지</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <i className="ri-bank-card-line text-purple-600"></i>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">결제</div>
                          <div className="text-sm text-gray-600">통합 처리</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <i className="ri-file-chart-line text-orange-600"></i>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">보고</div>
                          <div className="text-sm text-gray-600">자동 생성</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      <i className="ri-community-line"></i>
                      <span>로컬 생태계 플랫폼</span>
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

export default CoreSolutionsSection;
