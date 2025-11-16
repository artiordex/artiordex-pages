const RecruitmentProcessSection = () => {
  const processes = [
    {
      step: '01',
      title: '서류 접수',
      description: '이력서 및 포트폴리오를 제출해주세요. 지원 직무에 맞는 경력과 역량을 중심으로 검토합니다.',
      icon: 'ri-file-text-line',
      color: 'blue'
    },
    {
      step: '02',
      title: '실무 과제',
      description: '직무에 따라 실무 과제 또는 기술 테스트를 진행합니다. 실제 업무 환경과 유사한 과제를 통해 역량을 평가합니다.',
      icon: 'ri-code-s-slash-line',
      color: 'purple'
    },
    {
      step: '03',
      title: '1차 실무 면접',
      description: '해당 부문 리드 및 팀원과 함께 실무 역량과 기술적 적합성을 평가합니다. 프로젝트 경험과 문제 해결 능력을 중심으로 진행됩니다.',
      icon: 'ri-user-voice-line',
      color: 'green'
    },
    {
      step: '04',
      title: '2차 컬처핏 면접',
      description: '경영진과의 면접을 통해 조직 문화 적합성과 비전 공유를 확인합니다. Artiordex의 가치관과 성장 방향에 대해 이야기를 나눕니다.',
      icon: 'ri-team-line',
      color: 'teal'
    },
    {
      step: '05',
      title: '최종 합류',
      description: '처우 협의 후 최종 합격 통보를 드립니다. 온보딩 프로세스를 통해 팀에 빠르게 적응할 수 있도록 지원합니다.',
      icon: 'ri-checkbox-circle-line',
      color: 'orange'
    }
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
    teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">채용 프로세스</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            투명하고 공정한 채용 프로세스를 통해 최적의 인재를 선발합니다
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200" style={{ top: '80px' }}></div>

          <div className="grid md:grid-cols-5 gap-8">
            {processes.map((process, index) => {
              const colors = colorClasses[process.color];
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    {/* Step Number */}
                    <div className={`w-16 h-16 ${colors.bg} ${colors.text} rounded-full flex items-center justify-center font-bold text-lg mb-4 border-4 border-white shadow-lg relative z-10`}>
                      {process.step}
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                      <i className={`${process.icon} text-2xl ${colors.text}`}></i>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
              <i className="ri-information-line text-2xl text-blue-600"></i>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">채용 안내</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mt-1 mr-2"></i>
                  <span className="text-sm">전체 채용 프로세스는 약 2~3주 소요됩니다.</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mt-1 mr-2"></i>
                  <span className="text-sm">각 단계별 결과는 개별적으로 안내드립니다.</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mt-1 mr-2"></i>
                  <span className="text-sm">직무에 따라 일부 프로세스가 조정될 수 있습니다.</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mt-1 mr-2"></i>
                  <span className="text-sm">지원 서류는 채용 목적으로만 사용되며, 반환되지 않습니다.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentProcessSection;