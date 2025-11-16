import { motion } from 'motion/react';

const MissionSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            우리의 미션
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            3대 핵심 플랫폼을 통해 모든 기업이 AI와 자동화의 혜택을 누릴 수 있도록 합니다
          </motion.p>
        </div>

        {/* 3대 핵심 제품 */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-flow-chart text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Artiflow</h3>
            <p className="text-gray-600 text-center mb-6">AI Workflow Automation SaaS</p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <i className="ri-check-line text-blue-600 mt-1 mr-2 flex-shrink-0"></i>
                <span>기업형 Work OS</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-blue-600 mt-1 mr-2 flex-shrink-0"></i>
                <span>AI Workflow Generator</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-blue-600 mt-1 mr-2 flex-shrink-0"></i>
                <span>Approval Flow + 자동 보고서</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-blue-600 mt-1 mr-2 flex-shrink-0"></i>
                <span>RPA Integration</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-blue-600 mt-1 mr-2 flex-shrink-0"></i>
                <span>No-Code Builder</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-blue-600 font-semibold text-center">국내 DX 자동화 SaaS No.1</p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-database-2-line text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">DX SmartHub</h3>
            <p className="text-gray-600 text-center mb-6">기업 데이터 통합 허브</p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <i className="ri-check-line text-green-600 mt-1 mr-2 flex-shrink-0"></i>
                <span>Schema Auto-Mapping AI</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-green-600 mt-1 mr-2 flex-shrink-0"></i>
                <span>API 자동 연결</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-green-600 mt-1 mr-2 flex-shrink-0"></i>
                <span>데이터 통합 허브</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-green-600 mt-1 mr-2 flex-shrink-0"></i>
                <span>AI 기반 예측 분석</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-green-600 mt-1 mr-2 flex-shrink-0"></i>
                <span>Power Platform 연동</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-green-600 font-semibold text-center">기업 데이터 통합 OS</p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-building-line text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">ConnectStack</h3>
            <p className="text-gray-600 text-center mb-6">지역·조직 운영 SaaS OS</p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <i className="ri-check-line text-purple-600 mt-1 mr-2 flex-shrink-0"></i>
                <span>예약·스케줄·직원관리</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-purple-600 mt-1 mr-2 flex-shrink-0"></i>
                <span>운영 자동화 엔진</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-purple-600 mt-1 mr-2 flex-shrink-0"></i>
                <span>지역 비즈니스 관리 OS</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-purple-600 mt-1 mr-2 flex-shrink-0"></i>
                <span>고객센터·공지 자동화</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-purple-600 mt-1 mr-2 flex-shrink-0"></i>
                <span>프랜차이즈형 확장</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-purple-600 font-semibold text-center">지역 운영 플랫폼 SaaS No.1</p>
            </div>
          </motion.div>
        </div>

        {/* 미션 선언문 */}
        <motion.div 
          className="bg-white rounded-2xl p-12 shadow-lg text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">우리의 약속</h3>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            ERP, CRM, MES, HR, 예약, 웹사이트, 매장 시스템 등<br />
            기업의 모든 데이터를 한곳에 모아 자동화·분석·연계하여<br />
            <strong className="text-blue-600">작은 기업도 Microsoft, AWS처럼 데이터를 활용</strong>할 수 있도록 지원합니다
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;