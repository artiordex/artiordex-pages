
import { motion } from 'framer-motion';

const VisionStatementSection = () => {
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
            우리의 비전
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            기업, 지역, 사람, 조직이 복잡한 디지털 시스템 없이도<br />
            기술의 혜택을 100% 누리는 세상을 만들어갑니다
          </motion.p>
        </div>

        {/* 3대 핵심 원칙 */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div 
            className="bg-blue-50 p-8 rounded-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-user-heart-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Human-Centric Technology</h3>
            <p className="text-gray-600 leading-relaxed">
              기술보다 사람을 먼저 보고,<br />
              기술은 사람의 업무를 대신하기 위해 존재합니다
            </p>
          </motion.div>

          <motion.div 
            className="bg-blue-50 p-8 rounded-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-robot-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Automation-First DX</h3>
            <p className="text-gray-600 leading-relaxed">
              기업·조직의 모든 디지털 전환(DX)은<br />
              "자동화"가 중심이 되어야 합니다
            </p>
          </motion.div>

          <motion.div 
            className="bg-blue-50 p-8 rounded-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-global-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Accessible Innovation</h3>
            <p className="text-gray-600 leading-relaxed">
              대기업만 쓸 수 있는 기술을<br />
              지역·중소기업·1인 기업도 쉽게 사용할 수 있어야 합니다
            </p>
          </motion.div>
        </div>

        {/* 3년 후 비전 */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">2027년, Artiordex의 모습</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            기업의 운영, 데이터, 프로세스, 조직 전체가<br />
            <strong>Artiordex 플랫폼 한 곳에서 움직이도록 만드는 회사</strong><br />
            <br />
            단순한 DX 컨설팅을 넘어, AI 기반 자동화 OS를 제공하는<br />
            <strong>국내 DX 자동화 SaaS No.1 기업</strong>으로 성장합니다
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionStatementSection;
