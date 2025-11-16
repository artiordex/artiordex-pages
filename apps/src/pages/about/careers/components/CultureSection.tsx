const CultureSection = () => {
  const cultureValues = [
    {
      icon: 'ri-user-heart-line',
      title: '기술로 사람을 연결합니다',
      description: '기술은 수단이며, 궁극적인 목표는 사람과 조직의 성장입니다. 고객과 팀원 모두의 성공을 최우선으로 생각합니다.',
      color: 'blue'
    },
    {
      icon: 'ri-bar-chart-box-line',
      title: '데이터 기반 의사결정',
      description: '직관보다 데이터를, 추측보다 검증을 중요시합니다. 모든 의사결정은 명확한 근거와 분석을 기반으로 합니다.',
      color: 'green'
    },
    {
      icon: 'ri-shield-check-line',
      title: '책임 중심 자율 문화',
      description: '마이크로 매니지먼트 없이 각자의 전문성을 신뢰합니다. 자율성과 함께 책임감 있는 실행을 추구합니다.',
      color: 'purple'
    },
    {
      icon: 'ri-flashlight-line',
      title: '빠른 실험과 실행',
      description: '완벽함보다 빠른 실행을, 계획보다 검증을 우선합니다. 실패를 두려워하지 않고 빠르게 학습합니다.',
      color: 'orange'
    },
    {
      icon: 'ri-chat-smile-3-line',
      title: '존중 기반 수평 커뮤니케이션',
      description: '직급과 경력에 관계없이 모든 의견을 존중합니다. 열린 소통과 건설적인 피드백 문화를 지향합니다.',
      color: 'teal'
    },
    {
      icon: 'ri-lightbulb-flash-line',
      title: '지속적인 학습과 성장',
      description: '기술은 빠르게 변화하며, 우리도 함께 성장합니다. 학습하는 조직, 성장하는 개인을 지원합니다.',
      color: 'pink'
    }
  ];

  const colorClasses: Record<string, { bg: string; text: string; iconBg: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', iconBg: 'bg-blue-100' },
    green: { bg: 'bg-green-50', text: 'text-green-600', iconBg: 'bg-green-100' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', iconBg: 'bg-purple-100' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', iconBg: 'bg-orange-100' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', iconBg: 'bg-teal-100' },
    pink: { bg: 'bg-pink-50', text: 'text-pink-600', iconBg: 'bg-pink-100' }
  };

  return (
    <section id="culture" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">조직문화</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artiordex의 핵심 가치와 일하는 방식을 소개합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cultureValues.map((value, index) => {
            const colors = colorClasses[value.color];
            return (
              <div key={index} className={`${colors.bg} rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300`}>
                <div className={`w-16 h-16 ${colors.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <i className={`${value.icon} text-3xl ${colors.text}`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
          <i className="ri-double-quotes-l text-5xl mb-6 opacity-50"></i>
          <blockquote className="text-2xl font-medium mb-6 leading-relaxed max-w-4xl mx-auto">
            "우리는 기술로 사람을 연결하고, 혁신으로 가치를 창출합니다.<br />
            Artiordex에서 함께 성장하며 미래를 만들어갑니다."
          </blockquote>
          <p className="text-blue-200 text-lg">— Artiordex Team</p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-team-line text-3xl text-blue-600"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">협업 중심</h4>
            <p className="text-gray-600">부문 간 긴밀한 협업으로 최고의 결과를 만듭니다</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-plant-line text-3xl text-green-600"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">성장 마인드</h4>
            <p className="text-gray-600">개인과 조직의 지속적인 성장을 추구합니다</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-customer-service-2-line text-3xl text-purple-600"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">고객 중심</h4>
            <p className="text-gray-600">고객의 성공이 곧 우리의 성공입니다</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;