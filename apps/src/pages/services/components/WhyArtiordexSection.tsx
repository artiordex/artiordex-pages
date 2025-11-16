import { useState, useEffect, useRef } from 'react';

const WhyArtiordexSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const differentiators = [
    {
      title: 'Eliminate',
      subtitle: 'Complex Integration Structures',
      description: 'Remove complex and high-cost custom system integration structures, solving the difficulty of digital transformation across business areas (75.7% of companies affected)',
      icon: 'ri-delete-bin-line',
      color: 'from-red-500 to-pink-500',
      benefits: [
        'Simplified system architecture',
        'Reduced integration complexity',
        'Lower maintenance overhead',
        'Faster implementation cycles'
      ]
    },
    {
      title: 'Reduce',
      subtitle: 'Operational Costs',
      description: 'Reduce labor-intensive sales and manual maintenance costs, lowering the burden on SMEs struggling with technical expertise and professional workforce supply',
      icon: 'ri-arrow-down-line',
      color: 'from-orange-500 to-yellow-500',
      benefits: [
        'Automated maintenance processes',
        'Self-service capabilities',
        'Reduced training requirements',
        'Lower total cost of ownership'
      ]
    },
    {
      title: 'Raise',
      subtitle: 'Platform Capabilities',
      description: 'Enhance self-operable DX platformization, price and speed competitiveness, and Microsoft partner-based collaboration networks to increase customer transformation success',
      icon: 'ri-arrow-up-line',
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Self-service platform capabilities',
        'Microsoft ecosystem advantages',
        'Accelerated deployment speed',
        'Enhanced collaboration networks'
      ]
    },
    {
      title: 'Create',
      subtitle: 'Fusion Innovation',
      description: 'Create a unique DX companion platform that enables immediate construction and improvement for small organizations through open source and Microsoft fusion automation',
      icon: 'ri-add-line',
      color: 'from-green-500 to-teal-500',
      benefits: [
        'Open source + Microsoft fusion',
        'Immediate deployment capability',
        'Scalable architecture design',
        'Innovation-driven solutions'
      ]
    }
  ];

  const competitiveAdvantages = [
    {
      title: 'Microsoft Stability',
      description: 'Azure, Dynamics 365 enterprise-grade reliability',
      icon: 'ri-microsoft-fill',
      stats: '99.9% Uptime'
    },
    {
      title: 'Open Source Agility',
      description: 'Docker, Next.js, Git rapid development',
      icon: 'ri-open-source-line',
      stats: '50% Faster'
    },
    {
      title: 'Integrated DX Design',
      description: 'Scalable and trustworthy solution architecture',
      icon: 'ri-settings-3-line',
      stats: '75% Automation'
    },
    {
      title: 'Market Gap Solution',
      description: 'Bridging execution capability gap for SMEs',
      icon: 'ri-target-line',
      stats: '78% Recognition'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">Artiordex</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Positioned as an All-In-One platform partner with both <strong>Execution</strong> and <strong>Efficiency</strong> 
            in competition with domestic digital transformation startups
          </p>
        </div>

        {/* ERRC Framework */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                <i className={`${item.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">{item.subtitle}</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
              
              <ul className="space-y-2">
                {item.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                    <i className="ri-check-line text-green-500 mr-2 mt-0.5 flex-shrink-0"></i>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Competitive Advantages */}
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Competitive Advantage Summary</h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Artiordex combines Microsoft's stability with open source agility to provide scalable, 
                trustworthy solutions that fill the execution capability gap in the domestic SME and 
                solo creative enterprise market
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {competitiveAdvantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${advantage.icon} text-2xl text-white`}></i>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{advantage.description}</p>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                    {advantage.stats}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Statistics */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">78%</div>
                <div className="text-gray-600">High Digitalization Intent</div>
                <div className="text-sm text-gray-500 mt-1">Korean SME Recognition Rate</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-orange-600 mb-2">75.7%</div>
                <div className="text-gray-600">Execution Capability Gap</div>
                <div className="text-sm text-gray-500 mt-1">Companies Without DX Strategy</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Execution Focus</div>
                <div className="text-sm text-gray-500 mt-1">Artiordex Core Philosophy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArtiordexSection;