import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../../components/feature/Breadcrumb';
import Header from '../../../components/feature/Header';

const ToolsTemplatesPage = () => {
  const [activeTab, setActiveTab] = useState('roi-calculator');

  // ROI Calculator State
  const [roiInputs, setRoiInputs] = useState({
    currentEmployees: 50,
    averageSalary: 4500,
    hoursPerWeek: 40,
    automationPercentage: 30,
    implementationCost: 50000,
    maintenanceCost: 10000
  });

  // DX Maturity Assessment State
  const [assessmentAnswers, setAssessmentAnswers] = useState({});
  const [assessmentStep, setAssessmentStep] = useState(0);

  const assessmentQuestions = [
    {
      category: '인프라 & 기술',
      questions: [
        { id: 1, text: '클라우드 기반 인프라를 활용하고 있습니까?', options: ['전혀 없음', '부분적', '대부분', '완전히'] },
        { id: 2, text: 'API 기반 시스템 통합이 구축되어 있습니까?', options: ['전혀 없음', '부분적', '대부분', '완전히'] },
        { id: 3, text: '실시간 데이터 분석 시스템을 운영하고 있습니까?', options: ['전혀 없음', '부분적', '대부분', '완전히'] }
      ]
    },
    {
      category: '데이터 역량',
      questions: [
        { id: 4, text: '데이터 거버넌스 정책이 수립되어 있습니까?', options: ['전혀 없음', '부분적', '대부분', '완전히'] },
        { id: 5, text: '데이터 품질 관리 프로세스가 있습니까?', options: ['전혀 없음', '부분적', '대부분', '완전히'] },
        { id: 6, text: 'AI/ML 모델을 업무에 활용하고 있습니까?', options: ['전혀 없음', '부분적', '대부분', '완전히'] }
      ]
    },
    {
      category: '조직 변화',
      questions: [
        { id: 7, text: '디지털 전환을 위한 전담 조직이 있습니까?', options: ['전혀 없음', '부분적', '대부분', '완전히'] },
        { id: 8, text: '직원들의 디지털 스킬 교육이 체계적으로 이루어집니까?', options: ['전혀 없음', '부분적', '대부분', '완전히'] },
        { id: 9, text: '디지털 문화가 조직에 정착되어 있습니까?', options: ['전혀 없음', '부분적', '대부분', '완전히'] }
      ]
    }
  ];

  const projectTemplates = [
    {
      id: 1,
      title: 'AI 프로젝트 요구사항 정의서 템플릿',
      description: 'AI 프로젝트 시작 시 필요한 요구사항을 체계적으로 정리할 수 있는 템플릿입니다. 비즈니스 목표, 데이터 요구사항, 성능 지표 등을 포함합니다.',
      category: 'AI 프로젝트',
      format: 'Excel',
      pages: '12페이지',
      downloadCount: 1456,
      tags: ['요구사항', 'AI', '프로젝트 관리'],
      image: 'https://readdy.ai/api/search-image?query=AI%20project%20requirements%20template%20document%20with%20structured%20forms%20and%20checklists%2C%20professional%20business%20template%20design&width=300&height=200&seq=template1&orientation=landscape'
    },
    {
      id: 2,
      title: 'DX 전략 기획서 초안 템플릿',
      description: '디지털 전환 전략 수립을 위한 기획서 템플릿입니다. 현황 분석, 목표 설정, 로드맵, 예산 계획 등의 구조를 제공합니다.',
      category: 'DX 전략',
      format: 'PowerPoint',
      pages: '25슬라이드',
      downloadCount: 892,
      tags: ['DX 전략', '기획서', '로드맵'],
      image: 'https://readdy.ai/api/search-image?query=Digital%20transformation%20strategy%20planning%20template%20with%20business%20roadmap%20and%20strategic%20framework%2C%20corporate%20presentation%20design&width=300&height=200&seq=template2&orientation=landscape'
    },
    {
      id: 3,
      title: 'PoC 체크리스트 및 평가 템플릿',
      description: 'Proof of Concept 진행 시 필요한 체크리스트와 평가 기준을 제공하는 템플릿입니다. 기술 검증부터 비즈니스 가치 평가까지 포함합니다.',
      category: '프로젝트 관리',
      format: 'Word + Excel',
      pages: '8페이지',
      downloadCount: 634,
      tags: ['PoC', '체크리스트', '평가'],
      image: 'https://readdy.ai/api/search-image?query=Proof%20of%20Concept%20checklist%20template%20with%20evaluation%20criteria%20and%20project%20management%20elements%2C%20structured%20document%20layout&width=300&height=200&seq=template3&orientation=landscape'
    },
    {
      id: 4,
      title: '프로세스 매핑 워크시트',
      description: '현재 업무 프로세스를 시각화하고 자동화 포인트를 식별할 수 있는 워크시트입니다. 프로세스 개선과 자동화 계획 수립에 활용하세요.',
      category: '프로세스 개선',
      format: 'Visio + Excel',
      pages: '6페이지',
      downloadCount: 567,
      tags: ['프로세스 매핑', '자동화', '개선'],
      image: 'https://readdy.ai/api/search-image?query=Business%20process%20mapping%20worksheet%20with%20flowcharts%20and%20automation%20points%2C%20process%20improvement%20template%20design&width=300&height=200&seq=template4&orientation=landscape'
    }
  ];

  // ROI Calculation Logic
  const calculateROI = () => {
    const annualSalary = roiInputs.averageSalary * 12;
    const totalSalaryCost = annualSalary * roiInputs.currentEmployees;
    const automatedHours = (roiInputs.hoursPerWeek * 52 * roiInputs.automationPercentage) / 100;
    const savedCost = (automatedHours / (roiInputs.hoursPerWeek * 52)) * totalSalaryCost;
    const totalCost = roiInputs.implementationCost + roiInputs.maintenanceCost;
    const roi = ((savedCost - totalCost) / totalCost) * 100;
    const paybackPeriod = totalCost / (savedCost / 12);

    return {
      savedCost: Math.round(savedCost),
      roi: Math.round(roi * 10) / 10,
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      automatedHours: Math.round(automatedHours)
    };
  };

  // Assessment Logic
  const calculateMaturityScore = () => {
    const totalQuestions = assessmentQuestions.reduce((sum, category) => sum + category.questions.length, 0);
    const answeredQuestions = Object.keys(assessmentAnswers).length;
    const totalScore = Object.values(assessmentAnswers).reduce((sum, score) => sum + score, 0);
    const maxScore = totalQuestions * 3;
    const percentage = (totalScore / maxScore) * 100;

    let level = '';
    let recommendations = [];

    if (percentage < 25) {
      level = 'Level 1: 초기 단계';
      recommendations = ['디지털 전환 전략 수립', '기본 인프라 구축', '조직 문화 개선'];
    } else if (percentage < 50) {
      level = 'Level 2: 발전 단계';
      recommendations = ['데이터 거버넌스 강화', 'API 통합 확대', '직원 교육 프로그램'];
    } else if (percentage < 75) {
      level = 'Level 3: 성숙 단계';
      recommendations = ['AI/ML 도입 확대', '실시간 분석 시스템', '고급 자동화'];
    } else {
      level = 'Level 4: 최적화 단계';
      recommendations = ['혁신 문화 정착', '지속적 개선', '생태계 확장'];
    }

    return { percentage: Math.round(percentage), level, recommendations, answeredQuestions, totalQuestions };
  };

  const roiResults = calculateROI();
  const maturityResults = calculateMaturityScore();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Breadcrumb 
            items={[
              { label: '홈', href: '/' },
              { label: '리소스', href: '/resources' },
              { label: '도구 & 템플릿', href: '/resources/tools' }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              도구 & 템플릿
            </h1>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              실무에 바로 활용할 수 있는 실용적인 도구와 템플릿 모음. 
              ROI 계산부터 DX 성숙도 평가까지, 여러분의 디지털 전환을 지원하는 필수 도구들을 제공합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-orange-500/30 text-orange-100 text-sm rounded-full">ROI 계산</span>
              <span className="px-3 py-1 bg-orange-500/30 text-orange-100 text-sm rounded-full">성숙도 평가</span>
              <span className="px-3 py-1 bg-orange-500/30 text-orange-100 text-sm rounded-full">프로젝트 템플릿</span>
              <span className="px-3 py-1 bg-orange-500/30 text-orange-100 text-sm rounded-full">실무 도구</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'roi-calculator', label: 'ROI 계산기' },
              { id: 'maturity-assessment', label: 'DX 성숙도 평가' },
              { id: 'project-templates', label: '프로젝트 템플릿' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* ROI Calculator */}
          {activeTab === 'roi-calculator' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">자동화 ROI 계산기</h2>
                <p className="text-gray-600">
                  자동화 도입의 경제적 효과를 시각적으로 확인해보세요. 절감 시간과 비용을 기반으로 ROI를 계산합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">입력 정보</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        현재 직원 수
                      </label>
                      <input
                        type="number"
                        value={roiInputs.currentEmployees}
                        onChange={(e) => setRoiInputs({...roiInputs, currentEmployees: parseInt(e.target.value) || 0})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        평균 월급 (만원)
                      </label>
                      <input
                        type="number"
                        value={roiInputs.averageSalary}
                        onChange={(e) => setRoiInputs({...roiInputs, averageSalary: parseInt(e.target.value) || 0})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        주당 근무 시간
                      </label>
                      <input
                        type="number"
                        value={roiInputs.hoursPerWeek}
                        onChange={(e) => setRoiInputs({...roiInputs, hoursPerWeek: parseInt(e.target.value) || 0})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        자동화 비율 ({roiInputs.automationPercentage}%)
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={roiInputs.automationPercentage}
                        onChange={(e) => setRoiInputs({...roiInputs, automationPercentage: parseInt(e.target.value)})}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        구축 비용 (만원)
                      </label>
                      <input
                        type="number"
                        value={roiInputs.implementationCost}
                        onChange={(e) => setRoiInputs({...roiInputs, implementationCost: parseInt(e.target.value) || 0})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        연간 유지보수 비용 (만원)
                      </label>
                      <input
                        type="number"
                        value={roiInputs.maintenanceCost}
                        onChange={(e) => setRoiInputs({...roiInputs, maintenanceCost: parseInt(e.target.value) || 0})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">계산 결과</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-green-800">연간 절감 비용</span>
                        <i className="ri-money-dollar-circle-line text-green-600"></i>
                      </div>
                      <div className="text-2xl font-bold text-green-900">
                        {roiResults.savedCost.toLocaleString()}만원
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-800">ROI (투자수익률)</span>
                        <i className="ri-line-chart-line text-blue-600"></i>
                      </div>
                      <div className="text-2xl font-bold text-blue-900">
                        {roiResults.roi}%
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-purple-800">투자 회수 기간</span>
                        <i className="ri-time-line text-purple-600"></i>
                      </div>
                      <div className="text-2xl font-bold text-purple-900">
                        {roiResults.paybackPeriod}개월
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-orange-800">연간 절감 시간</span>
                        <i className="ri-timer-line text-orange-600"></i>
                      </div>
                      <div className="text-2xl font-bold text-orange-900">
                        {roiResults.automatedHours.toLocaleString()}시간
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="w-full px-4 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors">
                      결과 리포트 다운로드
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DX Maturity Assessment */}
          {activeTab === 'maturity-assessment' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">DX 성숙도 평가</h2>
                <p className="text-gray-600">
                  조직의 디지털 성숙도를 측정하고 개선 방향을 제시받으세요. 3개 영역 9개 질문으로 구성되어 있습니다.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Assessment Questions */}
                <div className="lg:col-span-2">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">평가 진행</h3>
                        <span className="text-sm text-gray-500">
                          {maturityResults.answeredQuestions}/{maturityResults.totalQuestions} 완료
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(maturityResults.answeredQuestions / maturityResults.totalQuestions) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {assessmentQuestions.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                          <h4 className="text-md font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                            {category.category}
                          </h4>
                          <div className="space-y-4">
                            {category.questions.map((question) => (
                              <div key={question.id} className="bg-gray-50 rounded-lg p-4">
                                <p className="text-sm font-medium text-gray-900 mb-3">
                                  {question.text}
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                  {question.options.map((option, optionIndex) => (
                                    <button
                                      key={optionIndex}
                                      onClick={() => setAssessmentAnswers({
                                        ...assessmentAnswers,
                                        [question.id]: optionIndex
                                      })}
                                      className={`px-3 py-2 text-xs font-medium rounded transition-colors ${
                                        assessmentAnswers[question.id] === optionIndex
                                          ? 'bg-orange-600 text-white'
                                          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                      }`}
                                    >
                                      {option}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">평가 결과</h3>
                    
                    {maturityResults.answeredQuestions > 0 ? (
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-orange-600 mb-2">
                            {maturityResults.percentage}%
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            {maturityResults.level}
                          </div>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${maturityResults.percentage}%` }}
                          ></div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">개선 권장사항</h4>
                          <ul className="space-y-1">
                            {maturityResults.recommendations.map((rec, index) => (
                              <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                                <i className="ri-check-line text-orange-600 mt-0.5 flex-shrink-0"></i>
                                {rec}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {maturityResults.answeredQuestions === maturityResults.totalQuestions && (
                          <button className="w-full px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded hover:bg-orange-700 transition-colors">
                            상세 리포트 다운로드
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="text-center text-gray-500">
                        <i className="ri-questionnaire-line text-4xl mb-4"></i>
                        <p className="text-sm">
                          질문에 답변하시면<br />
                          실시간으로 결과를 확인할 수 있습니다.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Project Templates */}
          {activeTab === 'project-templates' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">프로젝트 템플릿</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  실무에서 바로 사용할 수 있는 문서 템플릿 모음. 프로젝트 기획부터 실행까지 필요한 모든 문서를 제공합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projectTemplates.map((template) => (
                  <div key={template.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-32 object-cover object-top"
                    />
                    
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">
                          {template.category}
                        </span>
                        <span className="text-xs text-gray-500">{template.format}</span>
                      </div>
                      
                      <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
                        {template.title}
                      </h3>
                      
                      <p className="text-gray-600 text-xs mb-3 line-clamp-3 leading-relaxed">
                        {template.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {template.tags.map((tag) => (
                          <span key={tag} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>{template.pages}</span>
                        <div className="flex items-center gap-1">
                          <i className="ri-download-line"></i>
                          <span>{template.downloadCount.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <button className="w-full px-3 py-2 bg-orange-600 text-white text-xs font-medium rounded hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                        <i className="ri-download-line"></i>
                        다운로드
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  더 많은 템플릿 보기
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            맞춤형 도구가 필요하신가요?
          </h2>
          <p className="text-orange-100 mb-8">
            귀하의 비즈니스에 특화된 계산기나 평가 도구를 개발해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact/projects/custom-dev"
              className="px-6 py-3 bg-white text-orange-600 font-medium rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              맞춤 도구 개발 문의
            </Link>
            <Link
              to="/contact/enterprise/consulting"
              className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              컨설팅 문의
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolsTemplatesPage;