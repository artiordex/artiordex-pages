import { useState, useEffect, useRef } from 'react';

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      subtitle: 'Pain Point Identification',
      description: 'Comprehensive analysis of current business processes, pain points identification, and improvement KPI establishment from customer perspective',
      icon: 'ri-search-line',
      color: 'from-blue-500 to-cyan-500',
      deliverables: [
        'Current business process diagnosis report',
        'Pain point analysis and prioritization',
        'Improvement opportunity assessment',
        'Initial ROI estimation'
      ],
      duration: '1-2 weeks',
      activities: [
        'Stakeholder interviews and workshops',
        'Process mapping and documentation',
        'Technology audit and assessment',
        'Gap analysis and recommendations'
      ]
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      subtitle: 'DX Roadmap Development',
      description: 'Development of comprehensive digital transformation roadmap with Solution-Product Fit (SPF) and Product-Market Fit (PMF) considerations',
      icon: 'ri-route-line',
      color: 'from-purple-500 to-pink-500',
      deliverables: [
        'DX implementation roadmap',
        'Technology architecture blueprint',
        'Resource allocation plan',
        'Risk mitigation strategy'
      ],
      duration: '2-3 weeks',
      activities: [
        'Solution architecture design',
        'Technology stack selection',
        'Implementation timeline planning',
        'Budget and resource planning'
      ]
    },
    {
      step: '03',
      title: 'Proof of Concept',
      subtitle: 'Technology Verification',
      description: 'Development and validation of proof of concept (PoC) to verify technical feasibility and business value before full implementation',
      icon: 'ri-flask-line',
      color: 'from-orange-500 to-red-500',
      deliverables: [
        'Working PoC prototype',
        'Technical feasibility report',
        'Performance benchmarks',
        'User feedback analysis'
      ],
      duration: '3-4 weeks',
      activities: [
        'Prototype development',
        'User testing and feedback collection',
        'Performance optimization',
        'Security and compliance validation'
      ]
    },
    {
      step: '04',
      title: 'Implementation & Deployment',
      subtitle: 'Full-Scale Execution',
      description: 'Full-scale implementation with continuous monitoring, optimization, and knowledge transfer to ensure successful digital transformation',
      icon: 'ri-rocket-line',
      color: 'from-green-500 to-teal-500',
      deliverables: [
        'Production-ready solution',
        'User training materials',
        'Operation and maintenance guide',
        'Performance monitoring dashboard'
      ],
      duration: '6-12 weeks',
      activities: [
        'Production deployment',
        'User training and onboarding',
        'Performance monitoring setup',
        'Continuous optimization'
      ]
    }
  ];

  const methodologies = [
    {
      name: 'Agile Development',
      description: 'Iterative development with continuous feedback',
      icon: 'ri-refresh-line'
    },
    {
      name: 'DevOps Integration',
      description: 'Automated CI/CD pipelines for reliable deployment',
      icon: 'ri-git-merge-line'
    },
    {
      name: 'User-Centered Design',
      description: 'Human-centered approach for maximum adoption',
      icon: 'ri-user-heart-line'
    },
    {
      name: 'Microsoft Best Practices',
      description: 'Following Microsoft Cloud Partner guidelines',
      icon: 'ri-microsoft-line'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven 4-stage methodology that ensures successful digital transformation 
            from discovery to full-scale implementation
          </p>
        </div>

        {/* Process Timeline */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-4">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`flex-1 cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'transform scale-105' : 'hover:transform hover:scale-102'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                  activeStep === index 
                    ? 'border-blue-500 shadow-xl' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mb-4 mt-2`}>
                    <i className={`${step.icon} text-xl text-white`}></i>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-3">{step.subtitle}</p>
                  <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{step.duration}</span>
                    <i className={`ri-arrow-right-line transition-transform duration-300 ${
                      activeStep === index ? 'transform translate-x-1' : ''
                    }`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className={`bg-gradient-to-r ${processSteps[activeStep].color} p-8 text-white`}>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                  <i className={`${processSteps[activeStep].icon} text-2xl`}></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{processSteps[activeStep].title}</h3>
                  <p className="text-lg opacity-90">{processSteps[activeStep].subtitle}</p>
                </div>
              </div>
              <p className="text-lg opacity-90">{processSteps[activeStep].description}</p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Deliverables */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-file-list-3-line mr-2 text-blue-600"></i>
                    Key Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {processSteps[activeStep].deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start">
                        <i className="ri-check-line text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span className="text-gray-700">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Activities */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-settings-3-line mr-2 text-orange-600"></i>
                    Key Activities
                  </h4>
                  <ul className="space-y-3">
                    {processSteps[activeStep].activities.map((activity, index) => (
                      <li key={index} className="flex items-start">
                        <i className="ri-arrow-right-s-line text-blue-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Methodologies */}
        <div className={`mt-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Methodologies</h3>
            <p className="text-gray-600">Proven approaches that ensure project success and sustainable outcomes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((methodology, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className={`${methodology.icon} text-xl text-white`}></i>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{methodology.name}</h4>
                <p className="text-sm text-gray-600">{methodology.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;