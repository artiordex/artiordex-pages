import { useState, useEffect, useRef } from 'react';

const CoreValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const coreValues = [
    {
      icon: 'ri-user-heart-line',
      title: '기술의 민주화',
      description: '복잡한 기술을 누구나 쉽게 접근하고 활용할 수 있도록 만듭니다. 디지털 격차를 해소하고, 모든 조직이 혁신의 주체가 될 수 있도록 지원합니다.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-heart-3-line',
      title: '인간 중심 디자인',
      description: '기술은 수단이며, 사람이 목적입니다. 모든 솔루션은 사용자 경험을 최우선으로 설계되며, 조직 구성원의 업무 만족도와 삶의 질 향상을 지향합니다.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: 'ri-tools-line',
      title: '실용주의',
      description: '화려한 기술보다 실제 문제를 해결하는 솔루션에 집중합니다. 현장의 목소리를 듣고, 즉각적인 가치를 제공하는 것이 우리의 원칙입니다.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'ri-plant-line',
      title: '지속 가능한 성장',
      description: '단발성 프로젝트가 아닌, 고객의 장기적 디지털 역량 강화를 목표로 합니다. 교육, 지원, 협업을 통해 함께 성장하는 파트너십을 구축합니다.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'ri-bar-chart-box-line',
      title: '데이터 기반 의사결정',
      description: '모든 전략과 실행은 데이터에 기반합니다. 직관이 아닌 인사이트로, 추측이 아닌 분석으로 최선의 결정을 내립니다.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'ri-flashlight-line',
      title: '민첩성과 혁신',
      description: '빠르게 변화하는 기술 환경에 유연하게 대응합니다. 실패를 두려워하지 않고, 지속적인 실험과 개선을 통해 혁신을 추구합니다.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: 'ri-team-line',
      title: '협업과 신뢰',
      description: '고객, 파트너, 지역 사회와의 투명하고 신뢰 기반의 협업을 중시합니다. 함께 만들어가는 가치가 가장 큰 가치입니다.',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: 'ri-community-line',
      title: '지역 사회 상생',
      description: '기업의 성장이 지역 사회의 발전으로 이어져야 합니다. 지역 기반 DX 활성화를 통해 상생의 생태계를 만듭니다.',
      color: 'from-blue-600 to-indigo-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Core <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Values</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            우리의 모든 의사결정과 행동을 이끄는 핵심 가치
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                <i className={`${value.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
