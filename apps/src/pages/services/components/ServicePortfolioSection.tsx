import { useState, useEffect, useRef } from 'react';

const ServicePortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
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

  const services = [
    {
      id: 'ax-dx-integration',
      title: '⚙️ AX/DX Integration Solutions',
      subtitle: 'AI-RPA Based Business Automation',
      description: 'Microsoft Power Platform (Power Apps, Power Automate, Power BI) and Azure-based low-code AI fusion automation solution construction',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://readdy.ai/api/search-image?query=Microsoft%20Power%20Platform%20development%20environment%20with%20Power%20Apps%20Power%20Automate%20Power%20BI%20interfaces%2C%20AI-RPA%20automation%20workflows%2C%20Azure%20DevOps%20CI%2FCD%20pipelines%2C%20professional%20Korean%20office%20with%20blue%20lighting%20and%20modern%20workstations&width=600&height=400&seq=1&orientation=landscape',
      modules: [
        {
          name: 'AI-RPA Automation',
          description: 'RPA/AI-Agent based automation for eliminating repetitive tasks and process efficiency',
          technologies: ['Power Automate', 'n8n', 'Power Virtual Agents', 'Azure AI'],
          features: [
            'Complex workflow processing with Power Automate and n8n combination',
            'Conversational UX (chatbot) using Power Virtual Agents',
            'Intelligent document processing and data extraction',
            'Process mining and optimization recommendations'
          ]
        },
        {
          name: 'Microsoft 365 Integration',
          description: 'Integrated DX solution that unifies collaboration, security, and data flow',
          technologies: ['Teams SDK', 'Graph API', 'SharePoint', 'Dynamics 365', 'C#'],
          features: [
            'Teams, SharePoint, Dynamics 365 integration',
            'M365-ERP bridging development using Teams SDK and Graph API',
            'C# based custom connector development',
            'Single sign-on (SSO) and security policy management'
          ]
        },
        {
          name: 'Business Intelligence',
          description: 'Real-time analysis of ERP/CRM data and dashboard construction for decision support',
          technologies: ['Power BI', 'Azure ML', 'Dataverse', 'Azure Synapse'],
          features: [
            'Real-time dashboard with Power BI and Azure ML',
            'Data security and relationship management through Dataverse',
            'Predictive analytics and trend analysis',
            'Executive reporting and KPI monitoring'
          ]
        },
        {
          name: 'Data Bridging & Integration',
          description: 'API bridging between M365 and ERP, legacy system connector-based integration architecture',
          technologies: ['Custom Connector', 'OData API', 'SAP ERP Connector', 'Oracle Integration'],
          features: [
            'SAP, Oracle legacy system integration',
            'Custom connector and OData API development',
            'Real-time data synchronization',
            'Data governance and compliance management'
          ]
        }
      ]
    },
    {
      id: 'web-app-development',
      title: '📱 Web/App Development & Construction',
      subtitle: 'Open Source Fusion Custom App/Web',
      description: 'Custom web/app service development and integration combining code-based development languages like Next.js, TypeScript, C++ with Power Pages',
      color: 'from-purple-500 to-pink-500',
      image: 'https://readdy.ai/api/search-image?query=Modern%20web%20application%20development%20workspace%20with%20Next.js%20TypeScript%20code%20on%20multiple%20monitors%2C%20Docker%20Kubernetes%20containers%2C%20DevOps%20CI%2FCD%20pipelines%2C%20ConnectWon%20platform%20interface%2C%20professional%20Korean%20developer%20environment%20with%20purple%20accent%20lighting&width=600&height=400&seq=2&orientation=landscape',
      modules: [
        {
          name: 'Custom MVP Development',
          description: 'Fast prototyping for solo creative enterprises and startups',
          technologies: ['TypeScript', 'JavaScript', 'Next.js', 'React', 'Power Pages'],
          features: [
            'TypeScript/JavaScript and Next.js based responsive web/app implementation',
            'Power Pages integration for rapid development',
            'Progressive Web App (PWA) capabilities',
            'Mobile-first responsive design approach'
          ]
        },
        {
          name: 'DevOps Automation',
          description: 'Cloud-based infrastructure construction and deployment automation for service stability and scalability',
          technologies: ['Azure DevOps', 'Docker', 'Kubernetes', 'Helm', 'Git'],
          features: [
            'CI/CD pipeline construction through Azure DevOps',
            'Environment setup and architecture design using Docker, Kubernetes/Helm',
            'Infrastructure as Code (IaC) implementation',
            'Automated testing and deployment strategies'
          ]
        },
        {
          name: 'E2E Test Automation',
          description: 'End-to-end test automation strategy establishment and implementation for service quality assurance',
          technologies: ['Playwright', 'Cypress', 'Appium', 'Jest', 'Azure Test Plans'],
          features: [
            'Cross-browser testing automation with Playwright and Cypress',
            'Mobile app testing using Appium',
            'API testing and performance monitoring',
            'Continuous testing integration in CI/CD pipeline'
          ]
        },
        {
          name: 'Reservation/Space Platform Construction',
          description: 'Platform service construction with complex business logic including reservation, payment, settlement',
          technologies: ['PostgreSQL', 'Redis Cache', 'Node.js', 'Express', 'Payment APIs'],
          features: [
            'Stable server and data architecture design based on ConnectWon project experience',
            'Complex business logic implementation (reservation, payment, settlement)',
            'Real-time notification and communication systems',
            'Scalable microservices architecture'
          ]
        }
      ]
    },
    {
      id: 'dx-consulting',
      title: '💡 DX Strategy & Consulting',
      subtitle: 'Technology Democratization Based Execution-Type Consulting',
      description: 'Execution-centered consulting that goes beyond simple report writing, providing digital transformation roadmap establishment, AI strategy formulation, technology verification (PoC), and social value-linked education programs',
      color: 'from-green-500 to-teal-500',
      image: 'https://readdy.ai/api/search-image?query=Digital%20transformation%20consulting%20session%20with%20Korean%20business%20executives%2C%20strategic%20roadmap%20presentations%2C%20AI%20technology%20demonstrations%2C%20Microsoft%20Cloud%20Partner%20certification%20displays%2C%20modern%20conference%20room%20with%20green%20accent%20lighting%20and%20collaborative%20workspace&width=600&height=400&seq=3&orientation=landscape',
      modules: [
        {
          name: 'DX Execution Roadmap',
          description: '4-stage consulting process starting from customer perspective Pain Point derivation and improvement KPI setting',
          technologies: ['Microsoft Cloud Partner', 'Power Platform', 'Azure', 'AI Services'],
          features: [
            'Current business process diagnosis report',
            'DX introduction roadmap with SPF (Solution-Product Fit) and PMF (Product-Market Fit) securing',
            'ROI analysis and implementation timeline',
            'Change management and training programs'
          ]
        },
        {
          name: 'Technical Advisory & Education',
          description: 'Practical education and workshops for Power Platform, AI, Open Source utilization to improve customer organization technical autonomy',
          technologies: ['Power Platform', 'AI Services', 'Open Source', 'Azure'],
          features: [
            'Microsoft Cloud Partner expertise-based technical advisory',
            'Hands-on workshops and training programs',
            'Best practices and governance framework establishment',
            'Technical skill assessment and development planning'
          ]
        },
        {
          name: 'AI Strategy & Implementation',
          description: 'AI fusion strategy establishment combining ChatGPT-Copilot-LangChain for natural language-based automation and predictive analysis',
          technologies: ['ChatGPT API', 'Microsoft Copilot', 'LangChain', 'Azure OpenAI', 'Python'],
          features: [
            'Natural language-based automation implementation',
            'Predictive analysis and data-driven intelligence',
            'AI model selection and customization',
            'Prototype development and proof of concept'
          ]
        },
        {
          name: 'Social Value Connection',
          description: 'Consulting that expands to social problem-solving DX models based on mission to contribute to youth self-reliance and social self-sustainability recovery',
          technologies: ['Social Impact Measurement', 'Community Platforms', 'Educational Technology'],
          features: [
            'Youth self-reliance support programs',
            'Talent development and social enterprise connection programs',
            'Social problem-solving DX model development',
            'Impact measurement and reporting systems'
          ]
        }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Three Core <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">Service Portfolios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Execution-focused services designed to maximize your organization's digital transformation capabilities
          </p>
        </div>

        {/* Service Navigation */}
        <div className={`flex flex-wrap justify-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`px-6 py-3 m-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeService === index
                  ? 'bg-gradient-to-r from-blue-600 to-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Service Header */}
            <div className={`bg-gradient-to-r ${services[activeService].color} p-8 text-white`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">{services[activeService].title}</h3>
                  <p className="text-xl mb-4">{services[activeService].subtitle}</p>
                  <p className="text-lg opacity-90">{services[activeService].description}</p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <img 
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full max-w-md h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Service Modules */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services[activeService].modules.map((module, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{module.name}</h4>
                    <p className="text-gray-600 mb-4">{module.description}</p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {module.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Features</h5>
                      <ul className="space-y-1">
                        {module.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                            <i className="ri-check-line text-green-500 mr-2 mt-0.5 flex-shrink-0"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePortfolioSection;