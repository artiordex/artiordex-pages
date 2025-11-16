import { useState, useEffect, useRef } from 'react';

const GrowthRoadmapSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const roadmapPhases = [
    {
      period: '2026-2027',
      title: 'Foundation & Certification',
      subtitle: 'Technical Excellence & Partnership',
      icon: 'ri-building-line',
      color: 'from-blue-500 to-cyan-500',
      status: 'current',
      goals: [
        'Establish technical foundation and core team',
        'Achieve Microsoft Partner certification',
        'Develop proprietary automation frameworks',
        'Build initial client portfolio'
      ],
      metrics: [
        { label: 'Team Size', value: '5-8 experts' },
        { label: 'Certifications', value: '3+ Microsoft' },
        { label: 'Client Projects', value: '15+ completed' },
        { label: 'Revenue Growth', value: '200%' }
      ]
    },
    {
      period: '2027-2029',
      title: 'B2B SaaS Transition',
      subtitle: 'Series A & Market Expansion',
      icon: 'ri-rocket-line',
      color: 'from-indigo-500 to-purple-500',
      status: 'planned',
      goals: [
        'Transition to B2B SaaS business model',
        'Secure Series A funding round',
        'Expand to enterprise market segment',
        'Develop AI-powered platform solutions'
      ],
      metrics: [
        { label: 'Funding', value: 'Series A' },
        { label: 'Enterprise Clients', value: '50+' },
        { label: 'Platform Users', value: '1,000+' },
        { label: 'Annual Growth', value: '350%' }
      ]
    },
    {
      period: '2030-2031',
      title: 'Global Expansion',
      subtitle: 'Azure Marketplace & International',
      icon: 'ri-global-line',
      color: 'from-purple-500 to-pink-500',
      status: 'future',
      goals: [
        'List solutions on Azure Marketplace',
        'Expand to 3 international markets',
        'Establish regional partnerships',
        'Scale automation platform globally'
      ],
      metrics: [
        { label: 'Countries', value: '3 markets' },
        { label: 'Marketplace', value: 'Azure listed' },
        { label: 'Partners', value: '12+ global' },
        { label: 'Automation Rate', value: '75%' }
      ]
    },
    {
      period: 'Post-2031',
      title: 'Platform Leadership',
      subtitle: 'AI DX Platform & IPO',
      icon: 'ri-trophy-line',
      color: 'from-pink-500 to-red-500',
      status: 'vision',
      goals: [
        'Complete AI DX platform development',
        'Achieve market leadership position',
        'Prepare for IPO or strategic acquisition',
        'Establish industry standards'
      ],
      metrics: [
        { label: 'Market Position', value: 'Top 3' },
        { label: 'Platform Maturity', value: '100%' },
        { label: 'IPO Readiness', value: 'Achieved' },
        { label: 'Industry Impact', value: 'Standard setter' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'bg-green-100 text-green-800 border-green-200';
      case 'planned': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'future': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'vision': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Growth <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strategic journey from technical foundation to global AI DX platform leadership
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className={`flex flex-wrap justify-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {roadmapPhases.map((phase, index) => (
            <button
              key={index}
              onClick={() => setActivePhase(index)}
              className={`px-6 py-3 m-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer border-2 ${
                activePhase === index
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-lg'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              <i className={`${phase.icon} mr-2`}></i>
              {phase.period}
            </button>
          ))}
        </div>

        {/* Active Phase Content */}
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-12 rounded-2xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Phase Details */}
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${roadmapPhases[activePhase].color} rounded-xl flex items-center justify-center mr-4`}>
                    <i className={`${roadmapPhases[activePhase].icon} text-2xl text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{roadmapPhases[activePhase].title}</h3>
                    <p className="text-xl text-blue-600 font-semibold">{roadmapPhases[activePhase].subtitle}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(roadmapPhases[activePhase].status)}`}>
                    {roadmapPhases[activePhase].period}
                  </span>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Strategic Goals</h4>
                  <ul className="space-y-3">
                    {roadmapPhases[activePhase].goals.map((goal, index) => (
                      <li key={index} className="flex items-start">
                        <i className="ri-check-line text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span className="text-gray-600">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Metrics */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">Key Metrics & Targets</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {roadmapPhases[activePhase].metrics.map((metric, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{metric.value}</div>
                      <div className="text-gray-600 text-sm">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className={`mt-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-indigo-200 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {roadmapPhases.map((phase, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-12 h-12 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <i className={`${phase.icon} text-white text-lg`}></i>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                    <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      activePhase === index ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                    }`} onClick={() => setActivePhase(index)}>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900">{phase.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(phase.status)}`}>
                          {phase.period}
                        </span>
                      </div>
                      <p className="text-blue-600 font-semibold text-sm mb-2">{phase.subtitle}</p>
                      <p className="text-gray-600 text-sm">{phase.goals[0]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Growth Targets Summary */}
        <div className={`mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 p-12 rounded-2xl text-white text-center transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <h3 className="text-3xl font-bold mb-8">Growth Targets Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">350%</div>
              <div className="text-sm opacity-80">Annual Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-sm opacity-80">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">75%</div>
              <div className="text-sm opacity-80">Automation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-sm opacity-80">International Markets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthRoadmapSection;