
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Breadcrumb from '../../../components/feature/Breadcrumb';

const CulturePage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const cultureValues = [
    {
      id: 'human-centric',
      title: '사람 중심 기술',
      subtitle: 'Human-Centric Technology',
      description: '기술은 사람을 위해 존재합니다. 복잡한 프로세스를 단순하게 만들고, 반복 업무를 자동화하여 사람이 더 창의적이고 가치 있는 일에 집중할 수 있도록 돕습니다.',
      icon: 'ri-user-heart-line',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'data-driven',
      title: '데이터 기반 의사결정',
      subtitle: 'Data-Driven Decision Making',
      description: '감이 아닌 데이터로 판단합니다. Power BI와 Azure 기반 분석을 통해 객관적 지표를 확보하고, 실험과 검증을 거쳐 최적의 솔루션을 찾아갑니다.',
      icon: 'ri-bar-chart-line',
      color: 'bg-green-50 text-green-600'
    },
    {
      id: 'execution-first',
      title: '실행 우선주의',
      subtitle: 'Execution First',
      description: '완벽한 계획보다 빠른 실행을 선택합니다. MVP를 통해 고객 피드백을 받고, 지속적인 개선을 통해 가치를 전달합니다.',
      icon: 'ri-rocket-line',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      id: 'automation-mindset',
      title: '자동화 마인드셋',
      subtitle: 'Automation Mindset',
      description: '반복 가능한 업무는 반드시 자동화합니다. Power Platform과 AI를 활용하여 효율성을 극대화하고, 인간의 창의성이 필요한 영역에 집중합니다.',
      icon: 'ri-robot-line',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      id: 'transparent-collaboration',
      title: '투명한 협업',
      subtitle: 'Transparent Collaboration',
      description: '정보는 투명하게 공유하고, 의사결정 과정을 문서화합니다. Notion과 Teams를 통해 모든 구성원이 동일한 정보를 바탕으로 협업할 수 있도록 합니다.',
      icon: 'ri-team-line',
      color: 'bg-teal-50 text-teal-600'
    },
    {
      id: 'continuous-learning',
      title: '지속적 학습',
      subtitle: 'Continuous Learning',
      description: '기술의 변화 속도에 맞춰 끊임없이 학습합니다. Microsoft 인증, 기술 스터디, 멘토링을 통해 개인과 조직이 함께 성장하는 문화를 만들어갑니다.',
      icon: 'ri-book-open-line',
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  const workingStyles = [
    {
      title: '문서 기반 의사결정',
      description: '회의보다 문서를 우선시합니다. Notion과 OneNote를 통해 모든 의사결정 과정을 기록하고, 비동기적 협업을 통해 효율성을 높입니다.',
      tools: ['Notion', 'OneNote', 'Teams']
    },
    {
      title: '애자일 프로젝트 관리',
      description: '2주 스프린트 기반으로 프로젝트를 진행하며, 매일 스탠드업을 통해 진행 상황을 공유합니다. Azure DevOps로 태스크를 관리하고 투명성을 확보합니다.',
      tools: ['Azure DevOps', 'GitHub', 'Power BI']
    },
    {
      title: '고객 중심 설계',
      description: '모든 솔루션은 고객의 실제 문제에서 시작됩니다. 요구사항 분석부터 검증까지 고객과 함께하며, 지속적인 피드백을 통해 개선해나갑니다.',
      tools: ['Power Platform', 'Azure', 'Figma']
    },
    {
      title: '자율과 책임의 균형',
      description: '개인의 자율성을 존중하되, 명확한 책임과 결과를 요구합니다. 유연근무제를 통해 최적의 환경에서 최고의 성과를 낼 수 있도록 지원합니다.',
      tools: ['Teams', 'Outlook', 'Power Automate']
    }
  ];

  const dailyStory = [
    { time: '09:00', activity: '데일리 스탠드업', description: '각 팀의 진행 상황과 이슈를 공유하며 하루를 시작합니다.' },
    { time: '09:30', activity: '집중 업무 시간', description: '개인 업무에 집중하는 시간. 방해받지 않는 환경에서 깊이 있는 작업을 진행합니다.' },
    { time: '11:00', activity: '팀 간 협업', description: '전략팀과 개발팀이 요구사항을 논의하고, 솔루션 설계를 함께 검토합니다.' },
    { time: '14:00', activity: '고객 미팅', description: '영업팀과 개발팀이 함께 고객사를 방문하여 PoC 결과를 발표하고 피드백을 수집합니다.' },
    { time: '16:00', activity: '기술 스터디', description: '새로운 Azure 서비스나 Power Platform 기능을 함께 학습하고 적용 방안을 논의합니다.' },
    { time: '17:30', activity: 'Wrap-up & 문서화', description: '하루의 성과를 Notion에 기록하고, 내일의 우선순위를 정리합니다.' }
  ];

  const techStack = [
    { category: '협업 도구', tools: ['Microsoft Teams', 'Notion', 'Outlook', 'OneNote'] },
    { category: '개발 환경', tools: ['Azure DevOps', 'GitHub', 'Visual Studio Code', 'Power Platform'] },
    { category: '분석 도구', tools: ['Power BI', 'Azure Analytics', 'Excel', 'Power Query'] },
    { category: '디자인 도구', tools: ['Figma', 'Adobe Creative Suite', 'Canva', 'PowerPoint'] }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: '홈', href: '/' },
            { label: '회사소개', href: '/about' },
            { label: '기업문화', href: '/about/culture' }
          ]} 
        />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                기업문화 & 일하는 방식
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                기술이 사람을 이롭게 하는 연결을 만들어갑니다.<br />
                <span className="text-blue-600 font-semibold">Technology Connects, Innovation Empowers</span>
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">전문 인력</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <div className="text-sm text-gray-600">핵심 부문</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">프로젝트</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-sm text-gray-600">만족도</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                왜 우리는 이렇게 일하는가?
              </h2>
              <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                <p>
                  아티올덱스는 기술이 사람의 삶을 더 나아지게 만든다고 믿습니다. 
                  복잡한 비즈니스 프로세스를 단순하게 만들고, 반복적인 업무를 자동화하여 
                  사람들이 더 창의적이고 의미 있는 일에 집중할 수 있도록 돕는 것이 우리의 사명입니다.
                </p>
                <p>
                  Microsoft 생태계를 기반으로 한 DX/AX 전문가로서, 우리는 단순히 기술을 구현하는 것을 넘어 
                  고객의 비즈니스 가치를 창출하는 파트너가 되고자 합니다. 
                  이를 위해 데이터 기반의 의사결정, 빠른 실행력, 그리고 지속적인 학습을 통해 
                  고객과 함께 성장하는 조직문화를 만들어가고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                아티올덱스의 핵심 가치
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                우리의 모든 의사결정과 행동의 기준이 되는 6가지 핵심 가치입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cultureValues.map((value, index) => (
                <div 
                  key={value.id}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setActiveSection(activeSection === value.id ? null : value.id)}
                >
                  <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-6`}>
                    <i className={`${value.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-4">{value.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Working Style */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                우리의 일하는 방식
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                효율적이고 투명한 협업을 통해 최고의 결과를 만들어내는 아티올덱스만의 업무 방식입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workingStyles.map((style, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{style.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{style.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {style.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Story */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                아티올덱스에서의 하루
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                실제 구성원들이 어떻게 하루를 보내는지 살펴보세요.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {dailyStory.map((item, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {item.time}
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.activity}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Growth Model */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                우리는 이렇게 성장한다
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                개인의 성장이 곧 조직의 성장입니다. 체계적인 성장 지원 시스템을 통해 함께 발전해나갑니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-user-star-line text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">멘토링 시스템</h3>
                <p className="text-gray-600">
                  시니어 멤버와의 1:1 멘토링을 통해 기술적 성장과 커리어 발전을 지원합니다.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-book-2-line text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">학습 지원</h3>
                <p className="text-gray-600">
                  도서비, 교육비, Microsoft 인증 취득 지원을 통해 지속적인 학습을 장려합니다.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-rocket-2-line text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">실전 프로젝트</h3>
                <p className="text-gray-600">
                  다양한 고객사 프로젝트를 통해 실무 경험을 쌓고 전문성을 키워나갑니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                협업 도구 & 기술 환경
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                최신 도구와 기술을 활용하여 효율적인 업무 환경을 구축합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techStack.map((category, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{category.category}</h3>
                  <div className="space-y-2">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              아티올덱스와 함께 성장하세요
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              기술로 세상을 바꾸고 싶은 분들을 기다립니다. 
              함께 혁신적인 솔루션을 만들어나가요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/about/careers"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                채용 정보 보기
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                문의하기
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CulturePage;
