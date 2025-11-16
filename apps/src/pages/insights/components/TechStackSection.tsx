import { useState } from 'react';

const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState('microsoft');

  const techStacks = {
    microsoft: {
      title: 'Microsoft Ecosystem & Low-Code',
      subtitle: 'Power Platform & Azure Excellence',
      description: 'Custom AX/DX solutions, ERP/RPA automation, real-time business intelligence, and M365 integration.',
      tools: [
        { name: 'Power Apps', icon: 'ri-apps-2-line', description: 'Custom business applications' },
        { name: 'Power Automate', icon: 'ri-flow-chart', description: 'Workflow automation' },
        { name: 'Azure DevOps', icon: 'ri-git-branch-line', description: 'CI/CD pipelines' },
        { name: 'Dynamics 365', icon: 'ri-database-2-line', description: 'ERP integration' },
        { name: 'Azure Functions', icon: 'ri-function-line', description: 'Serverless computing' },
        { name: 'Power BI', icon: 'ri-bar-chart-box-line', description: 'Business intelligence' },
        { name: 'Microsoft Copilot', icon: 'ri-robot-line', description: 'AI assistance' }
      ],
      image: 'https://readdy.ai/api/search-image?query=Microsoft%20Azure%20cloud%20infrastructure%20dashboard%20with%20Power%20Platform%20applications%2C%20showing%20data%20flows%20and%20automation%20workflows%20in%20a%20modern%20corporate%20environment%20with%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=microsoft-stack&orientation=landscape'
    },
    devops: {
      title: 'DevOps & Infrastructure',
      subtitle: 'Containerization & Orchestration',
      description: 'CI/CD pipeline establishment, scalable and efficient application deployment, and infrastructure-as-code principles.',
      tools: [
        { name: 'Docker', icon: 'ri-ship-line', description: 'Containerization platform' },
        { name: 'Kubernetes', icon: 'ri-settings-3-line', description: 'Container orchestration' },
        { name: 'ArgoCD', icon: 'ri-git-commit-line', description: 'GitOps deployment' },
        { name: 'Helm', icon: 'ri-compass-3-line', description: 'Package management' },
        { name: 'Git', icon: 'ri-git-branch-line', description: 'Version control' },
        { name: 'Azure DevOps', icon: 'ri-cloud-line', description: 'DevOps platform' },
        { name: 'Monorepo', icon: 'ri-folder-3-line', description: 'Code organization' }
      ],
      image: 'https://readdy.ai/api/search-image?query=DevOps%20infrastructure%20visualization%20with%20Docker%20containers%2C%20Kubernetes%20clusters%2C%20and%20CI%2FCD%20pipelines%20in%20a%20high-tech%20data%20center%20environment%20with%20orange%20and%20blue%20lighting&width=600&height=400&seq=devops-stack&orientation=landscape'
    },
    ai: {
      title: 'Automation, AI & Testing',
      subtitle: 'Intelligent Automation Solutions',
      description: 'Natural language-based automation, predictive analytics, end-to-end test automation, and workflow orchestration.',
      tools: [
        { name: 'ChatGPT API', icon: 'ri-chat-3-line', description: 'Conversational AI' },
        { name: 'LangChain', icon: 'ri-links-line', description: 'LLM framework' },
        { name: 'Azure OpenAI', icon: 'ri-brain-line', description: 'Enterprise AI' },
        { name: 'n8n', icon: 'ri-node-tree', description: 'Workflow automation' },
        { name: 'Playwright', icon: 'ri-play-circle-line', description: 'E2E testing' },
        { name: 'Appium', icon: 'ri-smartphone-line', description: 'Mobile testing' },
        { name: 'Cypress', icon: 'ri-test-tube-line', description: 'Web testing' }
      ],
      image: 'https://readdy.ai/api/search-image?query=AI%20and%20automation%20laboratory%20with%20neural%20network%20visualizations%2C%20testing%20frameworks%2C%20and%20intelligent%20workflow%20diagrams%20in%20a%20futuristic%20tech%20environment%20with%20green%20and%20blue%20accents&width=600&height=400&seq=ai-stack&orientation=landscape'
    }
  };

  const currentStack = techStacks[activeTab];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Technology Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Core Tech Stack Summary
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demonstrating technical capability through Microsoft ecosystem integration, 
            DevOps excellence, and AI-driven automation solutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.entries(techStacks).map(([key, stack]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 mx-2 mb-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {stack.title.split(' & ')[0]}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {currentStack.title}
                </h3>
                <p className="text-lg text-orange-600 font-medium mb-4">
                  {currentStack.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {currentStack.description}
                </p>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentStack.tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <i className={`${tool.icon} text-blue-600 text-lg`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{tool.name}</h4>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Competency Badge */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl border border-blue-100">
                <div className="flex items-center">
                  <i className="ri-award-line text-orange-600 text-xl mr-3"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Core Competency</h4>
                    <p className="text-sm text-gray-600">{currentStack.description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <img
                src={currentStack.image}
                alt={currentStack.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{currentStack.tools.length}</div>
                      <div className="text-xs text-gray-600">Technologies</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">95%</div>
                      <div className="text-xs text-gray-600">Efficiency</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">24/7</div>
                      <div className="text-xs text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-microsoft-line text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Microsoft Partner</h3>
            <p className="text-gray-600">Certified expertise in Azure, Power Platform, and M365 ecosystem</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-code-s-slash-line text-orange-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Open Source</h3>
            <p className="text-gray-600">Seamless integration with open-source technologies and frameworks</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-robot-2-line text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI Integration</h3>
            <p className="text-gray-600">Advanced AI and automation solutions for digital transformation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;