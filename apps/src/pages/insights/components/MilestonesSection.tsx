import { useState, useEffect } from 'react';

const MilestonesSection = () => {
  const [activePhase, setActivePhase] = useState(0);

  const milestones = [
    {
      phase: 'Phase 1',
      period: '2026-2027',
      title: 'Technical Foundation & Certification',
      status: 'In Progress',
      progress: 75,
      objectives: [
        'Microsoft Partner certification achievement',
        'AI Platform MVP development completion',
        'Core team technical certifications',
        'Initial client base establishment'
      ],
      keyMetrics: {
        certifications: '15+ Microsoft Certs',
        mvp: 'Q4 2026 - Q1 2027',
        team: '5 Expert Developers',
        clients: '3 Pilot Projects'
      },
      image: 'https://readdy.ai/api/search-image?query=Technology%20certification%20ceremony%20with%20Microsoft%20Azure%20badges%20and%20professional%20developers%20working%20on%20AI%20platform%20development%20in%20modern%20office%20environment&width=500&height=300&seq=phase1-milestone&orientation=landscape'
    },
    {
      phase: 'Phase 2',
      period: '2027-2029',
      title: 'B2B SaaS Transition & Series A',
      status: 'Planned',
      progress: 25,
      objectives: [
        'B2B SaaS platform launch',
        'Series A funding round completion',
        '10 public institution PoCs',
        '500M KRW sales milestone'
      ],
      keyMetrics: {
        funding: 'Series A Target',
        pocs: '10 Public Institutions',
        revenue: '500M KRW',
        growth: '350% Annual'
      },
      image: 'https://readdy.ai/api/search-image?query=Business%20growth%20presentation%20with%20SaaS%20platform%20dashboard%20and%20investment%20meeting%20in%20corporate%20boardroom%20with%20financial%20charts%20and%20growth%20metrics&width=500&height=300&seq=phase2-milestone&orientation=landscape'
    },
    {
      phase: 'Phase 3',
      period: '2030-2031',
      title: 'Azure Marketplace & Global Expansion',
      status: 'Future',
      progress: 10,
      objectives: [
        'Azure Marketplace listing',
        'International market expansion',
        '3-country presence establishment',
        'Enterprise client acquisition'
      ],
      keyMetrics: {
        marketplace: 'Azure Listed',
        countries: '3 Markets',
        enterprise: '50+ Clients',
        scale: 'Global Presence'
      },
      image: 'https://readdy.ai/api/search-image?query=Global%20expansion%20map%20with%20Azure%20cloud%20infrastructure%20connecting%20multiple%20countries%2C%20international%20business%20network%20visualization%20with%20blue%20and%20orange%20connections&width=500&height=300&seq=phase3-milestone&orientation=landscape'
    },
    {
      phase: 'Phase 4',
      period: '2031+',
      title: 'AI DX Platform & IPO Preparation',
      status: 'Vision',
      progress: 5,
      objectives: [
        'Complete AI DX platform launch',
        'IPO preparation and filing',
        'Market leadership position',
        'Industry standard establishment'
      ],
      keyMetrics: {
        platform: 'Full AI DX Suite',
        ipo: 'Public Listing',
        leadership: 'Market Leader',
        standard: 'Industry Benchmark'
      },
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20AI%20platform%20interface%20with%20stock%20market%20IPO%20celebration%2C%20advanced%20digital%20transformation%20dashboard%20with%20holographic%20displays%20and%20corporate%20success%20visualization&width=500&height=300&seq=phase4-milestone&orientation=landscape'
    }
  ];

  const currentMilestone = milestones[activePhase];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'bg-green-500';
      case 'Planned': return 'bg-blue-500';
      case 'Future': return 'bg-orange-500';
      case 'Vision': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case 'In Progress': return 'text-green-600';
      case 'Planned': return 'text-blue-600';
      case 'Future': return 'text-orange-600';
      case 'Vision': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            Growth Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Strategic Milestones & Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive roadmap from technical foundation to global AI DX platform leadership, 
            targeting sustainable growth and market expansion.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {milestones.map((milestone, index) => (
            <button
              key={index}
              onClick={() => setActivePhase(index)}
              className={`px-6 py-3 mx-2 mb-4 rounded-full font-semibold transition-all duration-300 ${
                activePhase === index
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {milestone.phase}
              <span className="block text-xs opacity-75">{milestone.period}</span>
            </button>
          ))}
        </div>

        {/* Active Milestone Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <span className={`px-3 py-1 ${getStatusColor(currentMilestone.status)} text-white text-sm font-medium rounded-full mr-3`}>
                  {currentMilestone.status}
                </span>
                <span className="text-gray-500 text-sm">{currentMilestone.period}</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {currentMilestone.title}
              </h3>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Progress</span>
                  <span className={`text-sm font-bold ${getStatusTextColor(currentMilestone.status)}`}>
                    {currentMilestone.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ${getStatusColor(currentMilestone.status)}`}
                    style={{ width: `${currentMilestone.progress}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Objectives */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Objectives</h4>
                <div className="space-y-3">
                  {currentMilestone.objectives.map((objective, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-2 h-2 ${getStatusColor(currentMilestone.status)} rounded-full mr-3`}></div>
                      <span className="text-gray-600">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentMilestone.keyMetrics).map(([key, value], index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-xl">
                    <div className="text-sm text-gray-500 capitalize mb-1">{key}</div>
                    <div className="font-semibold text-gray-900">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <img
                src={currentMilestone.image}
                alt={currentMilestone.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
              
              {/* Phase Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3">
                  <div className="text-2xl font-bold text-blue-600">{currentMilestone.phase}</div>
                  <div className="text-xs text-gray-600">{currentMilestone.period}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Overview */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Complete Growth Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-blue-500 via-orange-500 to-purple-500 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-3">
                        <span className={`px-2 py-1 ${getStatusColor(milestone.status)} text-white text-xs font-medium rounded-full`}>
                          {milestone.status}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{milestone.period}</p>
                      <div className="text-xs text-gray-500">
                        {milestone.objectives.length} key objectives
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className={`w-6 h-6 ${getStatusColor(milestone.status)} rounded-full border-4 border-white shadow-lg`}></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Growth Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Growth Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-orange-300 mb-2">350%</div>
                <div className="text-white/80">Annual Growth Target</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-300 mb-2">500M</div>
                <div className="text-white/80">KRW Sales Goal (2027)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-300 mb-2">3</div>
                <div className="text-white/80">Countries by 2031</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-300 mb-2">IPO</div>
                <div className="text-white/80">Public Listing Goal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;