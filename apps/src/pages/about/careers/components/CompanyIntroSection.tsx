const CompanyIntroSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Artiordex를 소개합니다</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Microsoft 파트너 생태계 기반의 DX·AX 전문 기업으로,<br />
            기술과 사람을 연결하는 혁신적인 솔루션을 제공합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-lightbulb-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">우리의 미션</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              기술을 통해 조직의 디지털 전환을 가속화하고, 자동화와 AI를 활용하여 
              업무 효율성을 극대화합니다. 고객의 성공이 곧 우리의 성공입니다.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="ri-check-line text-blue-600 mt-1 mr-2"></i>
                <span className="text-gray-700">고객 중심의 DX·AX 솔루션 구현</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-blue-600 mt-1 mr-2"></i>
                <span className="text-gray-700">Microsoft 생태계 기반 기술 전문성</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-blue-600 mt-1 mr-2"></i>
                <span className="text-gray-700">데이터 기반 의사결정 지원</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-rocket-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">3년 성장 비전</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              2027년까지 50명 규모의 중견 DX 전문 기업으로 성장하며, 
              자체 SaaS 제품군을 통해 시장을 선도하는 기술 파트너가 됩니다.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="ri-check-line text-green-600 mt-1 mr-2"></i>
                <span className="text-gray-700">R&D 및 AI Lab 확장</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-green-600 mt-1 mr-2"></i>
                <span className="text-gray-700">SaaS 제품 포트폴리오 강화</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-green-600 mt-1 mr-2"></i>
                <span className="text-gray-700">글로벌 시장 진출 준비</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">핵심 솔루션</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-flow-chart text-3xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Artiflow</h4>
              <p className="text-sm text-gray-600 mb-3">AI Workflow OS</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI 기반 워크플로우 자동화 플랫폼으로 업무 프로세스를 지능화합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-database-2-line text-3xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">SmartHub</h4>
              <p className="text-sm text-gray-600 mb-3">Data Integration</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                다양한 시스템과 데이터를 통합하여 단일 허브로 관리합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-store-2-line text-3xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">ConnectStack</h4>
              <p className="text-sm text-gray-600 mb-3">Local Operations</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                로컬 비즈니스를 위한 통합 운영 관리 솔루션입니다.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Artiordex는 기업·교육기관·공공기관·로컬 비즈니스 등 다양한 고객사와 함께 
            디지털 전환을 실현하고 있습니다. Power Platform, Azure, AI 기술을 기반으로 
            엔드투엔드 프로세스 구축부터 데이터 통합, 자동화 솔루션까지 
            포괄적인 기술 서비스를 제공합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroSection;