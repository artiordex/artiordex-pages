import { motion } from 'motion/react';

const GoalsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            3년 로드맵
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            DX 컨설팅에서 AI 기반 SaaS 플랫폼 기업으로의 전환 계획
          </motion.p>
        </div>

        {/* 3년 로드맵 타임라인 */}
        <div className="relative">
          {/* 타임라인 라인 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden lg:block"></div>

          {/* 1년차 */}
          <motion.div 
            className="relative mb-16 lg:mb-24"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="lg:flex lg:items-center">
              <div className="lg:w-1/2 lg:pr-12">
                <div className="bg-blue-50 p-8 rounded-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">1</div>
                    <h3 className="text-2xl font-bold text-gray-900">1년차: 기반 기술 준비</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-check-line text-blue-600 mt-1 mr-3 flex-shrink-0"></i>
                      <span>ConnectWon MVP → 포트폴리오 완료</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-blue-600 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Power Platform 실전 프로젝트 확보</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-blue-600 mt-1 mr-3 flex-shrink-0"></i>
                      <span>AI 자동화 스크립트 제작</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-blue-600 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Artiflow Core Prototype 출시</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-blue-600 mt-1 mr-3 flex-shrink-0"></i>
                      <span>SmartHub AI Mapping 초기 모델 개발</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                    <p className="font-semibold text-blue-800">목표: DX·AI·Automation 전문 기업 이미지 확보</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:w-1/2 lg:pl-12">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto relative z-10">
                  <i className="ri-rocket-line text-2xl text-white"></i>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2년차 */}
          <motion.div 
            className="relative mb-16 lg:mb-24"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:flex lg:items-center lg:flex-row-reverse">
              <div className="lg:w-1/2 lg:pl-12">
                <div className="bg-green-50 p-8 rounded-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">2</div>
                    <h3 className="text-2xl font-bold text-gray-900">2년차: 제품 개발 + B2B 진출</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-600 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Artiflow Beta 출시</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-600 mt-1 mr-3 flex-shrink-0"></i>
                      <span>SmartHub Beta 버전 개발</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-600 mt-1 mr-3 flex-shrink-0"></i>
                      <span>ConnectStack 프로토타입 개발</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-600 mt-1 mr-3 flex-shrink-0"></i>
                      <span>기업 고객 5곳 이상 확보</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-600 mt-1 mr-3 flex-shrink-0"></i>
                      <span>특허 1차 출원 (AI Workflow + Schema Mapping)</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-green-100 rounded-lg">
                    <p className="font-semibold text-green-800">목표: SaaS 기업으로 변모 (B2B 유료 고객 확보)</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:w-1/2 lg:pr-12">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto relative z-10">
                  <i className="ri-building-2-line text-2xl text-white"></i>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3년차 */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="lg:flex lg:items-center">
              <div className="lg:w-1/2 lg:pr-12">
                <div className="bg-purple-50 p-8 rounded-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">3</div>
                    <h3 className="text-2xl font-bold text-gray-900">3년차: 정식 SaaS 출시 + 투자</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-check-line text-purple-600 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Artiflow 정식 출시</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-purple-600 mt-1 mr-3 flex-shrink-0"></i>
                      <span>SmartHub 정식 출시</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-purple-600 mt-1 mr-3 flex-shrink-0"></i>
                      <span>ConnectStack v1 출시</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-purple-600 mt-1 mr-3 flex-shrink-0"></i>
                      <span>특허 2~3건 추가 출원</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-purple-600 mt-1 mr-3 flex-shrink-0"></i>
                      <span>법인 설립 + 팀 구성 (AI 엔지니어, 프론트엔드, 백엔드, 디자이너, PM)</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-purple-100 rounded-lg">
                    <p className="font-semibold text-purple-800">목표: AI DX SaaS 기업으로 시장 공식 데뷔</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:w-1/2 lg:pl-12">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto relative z-10">
                  <i className="ri-trophy-line text-2xl text-white"></i>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3대 핵심 특허 */}
        <motion.div 
          className="mt-20 bg-gray-50 rounded-2xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">3대 핵심 특허 확보 계획</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-brain-line text-2xl text-red-600"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">AI Workflow Generator</h4>
              <p className="text-gray-600 text-center text-sm">
                업무 패턴을 분석해 자동으로 프로세스를 생성·최적화하는 엔진
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-links-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">Schema Auto-Mapping AI</h4>
              <p className="text-gray-600 text-center text-sm">
                기업 시스템 간 스키마 구조를 분석해 서로 다른 API/DB를 자동 연결
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-settings-3-line text-2xl text-green-600"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">Autonomous Operation Engine</h4>
              <p className="text-gray-600 text-center text-sm">
                예약→배정→알림→결제→정산→보고서까지 지역 운영 전 과정 자동화
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoalsSection;