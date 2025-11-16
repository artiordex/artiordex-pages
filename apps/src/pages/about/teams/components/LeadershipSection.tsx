const LeadershipSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">리더십 원칙</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            아티올덱스 팀이 공유하는 핵심 가치와 리더십 철학입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-user-heart-line text-2xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">고객 중심</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              고객의 성공이 우리의 성공입니다. 모든 의사결정의 중심에 고객 가치를 둡니다.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-lightbulb-line text-2xl text-green-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">혁신 추구</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              기술의 가능성을 탐구하고 창의적 솔루션으로 새로운 가치를 창출합니다.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-team-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">협업 문화</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              다양한 전문성이 만나 시너지를 창출하는 협업 중심의 조직 문화를 추구합니다.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-trophy-line text-2xl text-orange-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">실행 우수성</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              높은 품질 기준과 체계적인 프로세스로 탁월한 결과를 지속적으로 달성합니다.
            </p>
          </div>
        </div>

        {/* Leadership Quote */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <blockquote className="text-2xl font-medium text-gray-900 mb-4">
              "기술이 사람을 연결하고, 혁신이 모든 이해관계자에게 가치를 제공하는 생태계를 구축합니다."
            </blockquote>
            <cite className="text-lg text-blue-600 font-semibold">— 민시우, CEO & Founder</cite>
          </div>
        </div>

        {/* Team Values */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">기술 철학</h3>
            <p className="text-gray-600 leading-relaxed">
              복잡한 문제를 우아한 솔루션으로 해결하며, 기술의 깊이와 실용성을 동시에 추구합니다.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">성장 마인드</h3>
            <p className="text-gray-600 leading-relaxed">
              지속적인 학습과 도전을 통해 개인과 조직의 역량을 확장하며 시장을 선도합니다.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">사회적 책임</h3>
            <p className="text-gray-600 leading-relaxed">
              기술을 통한 사회적 가치 창출과 지속 가능한 발전에 기여하는 것을 사명으로 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;