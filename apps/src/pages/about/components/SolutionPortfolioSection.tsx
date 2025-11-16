import { useState, useEffect, useRef } from 'react';

const SolutionPortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

  const solutions = [
    {
      title: 'Custom Solutions',
      subtitle: 'ERP/RPA Workflow Integration',
      icon: 'ri-settings-3-line',
      color: 'from-blue-500 to-cyan-500',
      technologies: ['Power Apps', 'Power Automate', 'TypeScript', 'C++', 'Node.js', 'Azure DevOps'],
      description: 'Comprehensive custom solutions leveraging Microsoft Power Platform for seamless ERP and RPA workflow integration with robust CI/CD pipelines.',
      features: [
        'Custom Power Apps development for business processes',
        'Power Automate workflows for process automation',
        'TypeScript/Node.js backend integration',
        'C++ performance-critical components',
        'Azure DevOps CI/CD implementation',
        'Real-time data synchronization'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20Microsoft%20Power%20Platform%20development%20workspace%20with%20multiple%20screens%20showing%20Power%20Apps%20interface%2C%20Power%20Automate%20workflows%2C%20and%20Azure%20DevOps%20CI%2FCD%20pipelines%2C%20professional%20developer%20environment%20with%20blue%20accent%20lighting%20and%20clean%20minimalist%20design&width=600&height=400&seq=1&orientation=landscape'
    },
    {
      title: 'Microsoft Ecosystem DX',
      subtitle: 'M365-ERP API Bridging',
      icon: 'ri-microsoft-line',
      color: 'from-indigo-500 to-purple-500',
      technologies: ['Microsoft 365', 'Azure AD', 'Teams SDK', 'Graph API', 'SharePoint', 'C#'],
      description: 'Deep Microsoft ecosystem integration solutions that bridge M365 applications with enterprise ERP systems for unified digital experiences.',
      features: [
        'Microsoft 365 comprehensive integration',
        'Azure Active Directory authentication',
        'Teams SDK custom applications',
        'Microsoft Graph API utilization',
        'SharePoint workflow automation',
        'C# enterprise application development'
      ],
      image: 'https://readdy.ai/api/search-image?query=Microsoft%20365%20ecosystem%20integration%20dashboard%20showing%20Teams%2C%20SharePoint%2C%20and%20Azure%20AD%20interfaces%20connected%20to%20ERP%20systems%2C%20modern%20corporate%20office%20environment%20with%20multiple%20monitors%20displaying%20unified%20digital%20workspace%20solutions&width=600&height=400&seq=2&orientation=landscape'
    },
    {
      title: 'AI-Powered Automation',
      subtitle: 'Natural Language Decision Support',
      icon: 'ri-robot-line',
      color: 'from-purple-500 to-pink-500',
      technologies: ['Azure OpenAI', 'ChatGPT API', 'Python', 'LangChain', 'n8n'],
      description: 'Cutting-edge AI automation solutions using natural language processing for intelligent decision support and workflow optimization.',
      features: [
        'Azure OpenAI service integration',
        'ChatGPT API custom implementations',
        'Python AI/ML model development',
        'LangChain framework utilization',
        'n8n workflow automation',
        'Natural language processing capabilities'
      ],
      image: 'https://readdy.ai/api/search-image?query=AI%20automation%20control%20center%20with%20natural%20language%20processing%20interfaces%2C%20ChatGPT%20integration%20dashboards%2C%20Python%20development%20environment%2C%20and%20intelligent%20workflow%20visualization%2C%20futuristic%20tech%20workspace%20with%20purple%20and%20blue%20lighting&width=600&height=400&seq=3&orientation=landscape'
    },
    {
      title: 'Open-Source AI Consulting',
      subtitle: 'Comprehensive DX Education',
      icon: 'ri-open-source-line',
      color: 'from-green-500 to-teal-500',
      technologies: ['Git', 'Next.js', 'OpenAPI', 'Docker'],
      description: 'Open-source AI consulting services providing comprehensive digital transformation education and implementation guidance.',
      features: [
        'Git-based collaborative development',
        'Next.js modern web applications',
        'OpenAPI specification and documentation',
        'Docker containerization strategies',
        'Open-source technology integration',
        'Digital transformation education programs'
      ],
      image: 'https://readdy.ai/api/search-image?query=Open%20source%20development%20environment%20with%20Git%20repositories%2C%20Next.js%20applications%2C%20Docker%20containers%2C%20and%20OpenAPI%20documentation%2C%20collaborative%20workspace%20with%20multiple%20developers%20and%20green%20accent%20lighting%20representing%20innovation&width=600&height=400&seq=4&orientation=landscape'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solution <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four core solution portfolios designed to accelerate your digital transformation journey
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex flex-wrap justify-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {solutions.map((solution, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 m-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === index
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <i className={`${solution.icon} mr-2`}></i>
              {solution.title}
            </button>
          ))}
        </div>

        {/* Active Solution Content */}
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Solution Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${solutions[activeTab].color} rounded-2xl transform rotate-2 opacity-20`}></div>
                <img 
                  src={solutions[activeTab].image}
                  alt={solutions[activeTab].title}
                  className="relative w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Solution Details */}
            <div className="order-1 lg:order-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${solutions[activeTab].color} rounded-xl flex items-center justify-center mb-6`}>
                <i className={`${solutions[activeTab].icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{solutions[activeTab].title}</h3>
              <p className="text-xl text-blue-600 font-semibold mb-4">{solutions[activeTab].subtitle}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{solutions[activeTab].description}</p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {solutions[activeTab].technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {solutions[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <i className="ri-check-line text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                activeTab === index ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-4`}>
                <i className={`${solution.icon} text-xl text-white`}></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{solution.title}</h4>
              <p className="text-sm text-gray-600">{solution.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionPortfolioSection;