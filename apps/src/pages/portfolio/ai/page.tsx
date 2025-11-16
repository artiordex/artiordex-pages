import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import { Breadcrumb } from '../../../components/feature/Breadcrumb';

const AIPortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'AI 프로젝트', href: '/portfolio/ai' }
  ];

  const projects = [
    {
      id: 'workflow-automation',
      title: 'AI 워크플로우 자동화',
      description: 'RPA와 AI를 결합하여 복잡한 업무 프로세스를 지능적으로 자동화합니다.',
      image: 'https://readdy.ai/api/search-image?query=AI%20workflow%20automation%20system%20with%20intelligent%20process%20automation%20combining%20RPA%20and%20artificial%20intelligence%2C%20modern%20office%20environment%20with%20automated%20business%20processes%2C%20digital%20transformation%20visualization%2C%20smart%20workflow%20management%20interface&width=600&height=400&seq=ai001&orientation=landscape',
      tags: ['RPA', 'AI', 'Process Mining', 'Intelligent Automation'],
      results: ['생산성 85% 향상', '처리시간 78% 단축', '오류율 95% 감소'],
      link: '/portfolio/ai/workflow-automation'
    },
    {
      id: 'intelligent-document-processing',
      title: '지능형 문서 처리',
      description: 'OCR과 NLP를 활용하여 문서를 자동으로 분석하고 처리합니다.',
      image: 'https://readdy.ai/api/search-image?query=intelligent%20document%20processing%20with%20OCR%20and%20NLP%20technology%2C%20automated%20document%20analysis%20system%2C%20modern%20office%20with%20digital%20document%20management%2C%20AI-powered%20text%20extraction%20and%20classification&width=600&height=400&seq=ai002&orientation=landscape',
      tags: ['OCR', 'NLP', 'Document AI', 'Computer Vision'],
      results: ['문서 처리 90% 자동화', '정확도 98% 달성', '비용 70% 절감'],
      link: '/portfolio/ai/intelligent-document-processing'
    },
    {
      id: 'prediction-system',
      title: '예측 분석 시스템',
      description: 'Machine Learning을 활용한 수요 예측, 이탈 예측, 리스크 분석 시스템입니다.',
      image: 'https://readdy.ai/api/search-image?query=predictive%20analytics%20system%20with%20machine%20learning%20for%20demand%20forecasting%20and%20risk%20analysis%2C%20modern%20data%20science%20office%20with%20analytics%20dashboard%2C%20AI-powered%20prediction%20visualization%2C%20business%20intelligence%20interface&width=600&height=400&seq=ai003&orientation=landscape',
      tags: ['Machine Learning', 'Predictive Analytics', 'Big Data', 'Forecasting'],
      results: ['예측 정확도 94%', '의사결정 속도 85% 향상', '리스크 60% 감소'],
      link: '/portfolio/ai/prediction-system'
    },
    {
      id: 'agent-automation',
      title: 'AI Agent 자동화',
      description: 'LangChain과 GPT를 활용한 자율적인 AI Agent 시스템을 구축합니다.',
      image: 'https://readdy.ai/api/search-image?query=AI%20agent%20automation%20system%20with%20LangChain%20and%20GPT%20technology%2C%20autonomous%20intelligent%20agent%20interface%2C%20modern%20tech%20office%20with%20AI%20assistant%20visualization%2C%20conversational%20AI%20workflow%20automation&width=600&height=400&seq=ai004&orientation=landscape',
      tags: ['LangChain', 'GPT', 'AI Agent', 'Autonomous Systems'],
      results: ['업무 자동화 80%', '응답 시간 95% 단축', '고객 만족도 92%'],
      link: '/portfolio/ai/agent-automation'
    },
    {
      id: 'enterprise-chatbot',
      title: '기업용 AI 챗봇',
      description: '고객 서비스와 내부 업무를 지원하는 지능형 챗봇 솔루션입니다.',
      image: 'https://readdy.ai/api/search-image?query=enterprise%20AI%20chatbot%20for%20customer%20service%20and%20internal%20operations%2C%20intelligent%20conversational%20interface%2C%20modern%20customer%20support%20center%20with%20AI%20assistant%2C%20automated%20help%20desk%20system&width=600&height=400&seq=ai005&orientation=landscape',
      tags: ['Chatbot', 'NLP', 'Customer Service', 'Azure OpenAI'],
      results: ['일일 5,000+ 대화 처리', '고객 만족도 90%', '운영 비용 60% 절감'],
      link: '/portfolio/ai/enterprise-chatbot'
    },
    {
      id: 'anomaly-detection',
      title: '이상 탐지 시스템',
      description: 'AI 기반 실시간 이상 탐지로 보안과 품질을 강화합니다.',
      image: 'https://readdy.ai/api/search-image?query=AI-powered%20anomaly%20detection%20system%20for%20security%20and%20quality%20control%2C%20real-time%20monitoring%20interface%2C%20modern%20security%20operations%20center%20with%20threat%20detection%2C%20automated%20alert%20system%20visualization&width=600&height=400&seq=ai006&orientation=landscape',
      tags: ['Anomaly Detection', 'Real-time Monitoring', 'Security', 'Quality Control'],
      results: ['이상 탐지율 99%', '거짓 양성 70% 감소', '대응 시간 85% 단축'],
      link: '/portfolio/ai/anomaly-detection'
    },
    {
      id: 'support-automation',
      title: '고객 지원 자동화',
      description: 'AI를 활용한 티켓 분류, 자동 응답, 우선순위 지정 시스템입니다.',
      image: 'https://readdy.ai/api/search-image?query=customer%20support%20automation%20with%20AI-powered%20ticket%20classification%20and%20auto-response%2C%20modern%20help%20desk%20interface%2C%20automated%20customer%20service%20system%2C%20intelligent%20ticket%20routing%20visualization&width=600&height=400&seq=ai007&orientation=landscape',
      tags: ['Support Automation', 'Ticket Classification', 'Auto-response', 'Priority Management'],
      results: ['티켓 처리 75% 자동화', '응답 시간 80% 단축', '고객 만족도 88%'],
      link: '/portfolio/ai/support-automation'
    },
    {
      id: 'knowledge-rag',
      title: '지식 기반 RAG 시스템',
      description: 'RAG 기술로 기업 지식을 활용하는 AI 검색 및 질의응답 시스템입니다.',
      image: 'https://readdy.ai/api/search-image?query=knowledge-based%20RAG%20system%20with%20AI-powered%20search%20and%20question%20answering%2C%20enterprise%20knowledge%20management%20interface%2C%20modern%20office%20with%20intelligent%20document%20retrieval%2C%20semantic%20search%20visualization&width=600&height=400&seq=ai008&orientation=landscape',
      tags: ['RAG', 'Vector DB', 'Semantic Search', 'Knowledge Management'],
      results: ['검색 정확도 96%', '지식 활용도 300% 향상', '업무 효율 70% 개선'],
      link: '/portfolio/ai/knowledge-rag'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-purple-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                <i className="ri-robot-line mr-2"></i>
                AI 프로젝트 포트폴리오
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI로 비즈니스를 혁신하다
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Azure OpenAI, LangChain, Machine Learning을 활용하여<br />
                실질적인 비즈니스 가치를 창출하는 AI 솔루션을 제공합니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
                  <div className="text-gray-700 font-medium">AI 프로젝트</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                  <div className="text-gray-700 font-medium">평균 정확도</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                  <div className="text-gray-700 font-medium">업무 효율 향상</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Breadcrumb items={breadcrumbItems} />

        {/* Filter Section */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {['all', 'RPA', 'NLP', 'Machine Learning', 'Chatbot', 'RAG'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                  }`}
                >
                  {filter === 'all' ? '전체' : filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.link}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2 mb-4">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-600">
                          <i className="ri-check-line text-green-500 mr-2 mt-0.5"></i>
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform">
                      자세히 보기
                      <i className="ri-arrow-right-line ml-2"></i>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI 프로젝트를 시작하세요
              </h2>
              <p className="text-xl mb-8 opacity-90">
                귀사의 비즈니스에 최적화된 AI 솔루션을 제안해드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact/projects/ai-estimate"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  <i className="ri-calculator-line mr-2"></i>
                  AI 프로젝트 견적 요청
                </a>
                <a
                  href="/contact/enterprise/consulting"
                  className="inline-flex items-center justify-center px-8 py-4 bg-purple-700 text-white font-semibold rounded-xl hover:bg-purple-800 transition-colors border-2 border-white/30 whitespace-nowrap"
                >
                  <i className="ri-phone-line mr-2"></i>
                  전문가 상담 예약
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatBot />
      <QuickBar />
    </div>
  );
};

export default AIPortfolioPage;
