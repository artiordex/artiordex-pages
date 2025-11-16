const BenefitsSection = () => {
  const benefits = [
    {
      category: '근무 환경',
      icon: 'ri-time-line',
      color: 'blue',
      items: [
        { icon: 'ri-calendar-check-line', title: '유연근무제', description: '코어타임 기반 자율 출퇴근' },
        { icon: 'ri-home-office-line', title: '재택근무', description: '주 2회 재택근무 선택 가능' },
        { icon: 'ri-macbook-line', title: '장비 지원', description: '업무용 노트북 및 모니터 제공' },
        { icon: 'ri-cup-line', title: '사무 환경', description: '간식, 음료 무제한 제공' }
      ]
    },
    {
      category: '성장 지원',
      icon: 'ri-rocket-line',
      color: 'green',
      items: [
        { icon: 'ri-book-open-line', title: '도서 구입비', description: '월 10만원 도서 구입 지원' },
        { icon: 'ri-graduation-cap-line', title: '교육비 지원', description: '직무 관련 교육 및 컨퍼런스 참가비 지원' },
        { icon: 'ri-microsoft-line', title: 'Microsoft 인증', description: 'Microsoft 기술 인증 시험비 전액 지원' },
        { icon: 'ri-team-line', title: '멘토링', description: '1:1 멘토링 및 커리어 개발 지원' }
      ]
    },
    {
      category: '복지 혜택',
      icon: 'ri-gift-line',
      color: 'purple',
      items: [
        { icon: 'ri-heart-pulse-line', title: '건강검진', description: '연 1회 종합 건강검진 지원' },
        { icon: 'ri-cake-3-line', title: '경조사 지원', description: '경조사비 및 휴가 제공' },
        { icon: 'ri-flight-takeoff-line', title: '휴가 지원', description: '연차 외 리프레시 휴가 제공' },
        { icon: 'ri-team-line', title: '팀 워크숍', description: '분기별 팀 빌딩 및 워크숍' }
      ]
    },
    {
      category: '보상 체계',
      icon: 'ri-money-dollar-circle-line',
      color: 'orange',
      items: [
        { icon: 'ri-line-chart-line', title: '성과급', description: '개인 및 팀 성과 기반 인센티브' },
        { icon: 'ri-stock-line', title: '스톡옵션', description: '핵심 인재 대상 스톡옵션 부여' },
        { icon: 'ri-trophy-line', title: '프로젝트 보너스', description: '주요 프로젝트 성공 시 보너스' },
        { icon: 'ri-medal-line', title: '장기근속 포상', description: '근속 연수별 포상 제도' }
      ]
    }
  ];

  const colorClasses: Record<string, { bg: string; text: string; iconBg: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', iconBg: 'bg-blue-100' },
    green: { bg: 'bg-green-50', text: 'text-green-600', iconBg: 'bg-green-100' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', iconBg: 'bg-purple-100' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', iconBg: 'bg-orange-100' }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">복지 & 근무환경</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            구성원의 성장과 행복을 지원하는 다양한 복지 제도를 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const colors = colorClasses[benefit.color];
            return (
              <div key={index} className={`${colors.bg} rounded-2xl p-8 border border-gray-200`}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                    <i className={`${benefit.icon} text-2xl ${colors.text}`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{benefit.category}</h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {benefit.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-start">
                        <div className={`w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 mr-3`}>
                          <i className={`${item.icon} text-lg ${colors.text}`}></i>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;