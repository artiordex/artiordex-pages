import React, { useState } from 'react';
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  category: string;
  question: string;
  options: { value: number; label: string }[];
}

interface AssessmentResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  level: string;
  levelColor: string;
  recommendations: string[];
  categoryScores: { [key: string]: { score: number; max: number } };
}

const DXMaturityAssessmentPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      category: '디지털 인프라',
      question: '조직의 클라우드 도입 수준은 어느 정도입니까?',
      options: [
        { value: 1, label: '온프레미스 중심, 클라우드 미도입' },
        { value: 2, label: '일부 서비스만 클라우드 사용' },
        { value: 3, label: '하이브리드 클라우드 환경 구축' },
        { value: 4, label: '대부분 클라우드 기반으로 운영' },
        { value: 5, label: '완전한 클라우드 네이티브 환경' }
      ]
    },
    {
      id: 2,
      category: '데이터 역량',
      question: '데이터 수집, 저장, 분석 체계가 얼마나 체계적입니까?',
      options: [
        { value: 1, label: '데이터가 분산되어 있고 체계가 없음' },
        { value: 2, label: '기본적인 데이터 수집만 가능' },
        { value: 3, label: '데이터 웨어하우스 구축 완료' },
        { value: 4, label: '실시간 데이터 분석 가능' },
        { value: 5, label: 'AI/ML 기반 예측 분석 활용' }
      ]
    },
    {
      id: 3,
      category: '업무 자동화',
      question: '반복적인 업무 프로세스의 자동화 수준은?',
      options: [
        { value: 1, label: '대부분 수작업으로 처리' },
        { value: 2, label: '일부 단순 작업만 자동화' },
        { value: 3, label: '핵심 프로세스 일부 자동화' },
        { value: 4, label: '대부분 프로세스 자동화 완료' },
        { value: 5, label: 'AI 기반 지능형 자동화 구현' }
      ]
    },
    {
      id: 4,
      category: '조직 문화',
      question: '디지털 변화에 대한 조직원들의 수용도는?',
      options: [
        { value: 1, label: '변화에 대한 저항이 매우 큼' },
        { value: 2, label: '일부 구성원만 적극적' },
        { value: 3, label: '보통 수준의 수용도' },
        { value: 4, label: '대부분 적극적으로 참여' },
        { value: 5, label: '전 조직이 디지털 마인드셋 보유' }
      ]
    },
    {
      id: 5,
      category: '고객 경험',
      question: '디지털 채널을 통한 고객 서비스 수준은?',
      options: [
        { value: 1, label: '오프라인 중심, 디지털 채널 미흡' },
        { value: 2, label: '기본적인 온라인 서비스 제공' },
        { value: 3, label: '멀티채널 고객 서비스 구축' },
        { value: 4, label: '개인화된 디지털 경험 제공' },
        { value: 5, label: 'AI 기반 맞춤형 서비스 구현' }
      ]
    },
    {
      id: 6,
      category: '혁신 역량',
      question: '새로운 기술 도입과 실험에 대한 조직의 태도는?',
      options: [
        { value: 1, label: '새로운 기술 도입에 매우 보수적' },
        { value: 2, label: '필요시에만 제한적으로 도입' },
        { value: 3, label: '검증된 기술 위주로 도입' },
        { value: 4, label: '적극적으로 신기술 테스트' },
        { value: 5, label: '혁신 기술의 선도적 도입' }
      ]
    },
    {
      id: 7,
      category: '데이터 거버넌스',
      question: '데이터 보안 및 개인정보 관리 체계는?',
      options: [
        { value: 1, label: '기본적인 보안 정책만 존재' },
        { value: 2, label: '법적 요구사항 수준의 관리' },
        { value: 3, label: '체계적인 데이터 거버넌스 구축' },
        { value: 4, label: '고도화된 보안 및 컴플라이언스' },
        { value: 5, label: '제로 트러스트 기반 보안 체계' }
      ]
    },
    {
      id: 8,
      category: '성과 측정',
      question: 'DX 성과를 측정하고 개선하는 체계가 있습니까?',
      options: [
        { value: 1, label: '성과 측정 체계가 없음' },
        { value: 2, label: '기본적인 KPI만 관리' },
        { value: 3, label: '정기적인 성과 리뷰 실시' },
        { value: 4, label: '실시간 성과 모니터링' },
        { value: 5, label: 'AI 기반 예측적 성과 관리' }
      ]
    },
    {
      id: 9,
      category: '파트너십',
      question: '외부 기술 파트너와의 협력 수준은?',
      options: [
        { value: 1, label: '내부 역량만으로 추진' },
        { value: 2, label: '필요시 외부 업체 활용' },
        { value: 3, label: '전략적 파트너십 구축' },
        { value: 4, label: '생태계 기반 협력 체계' },
        { value: 5, label: '오픈 이노베이션 플랫폼 운영' }
      ]
    }
  ];

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateResult = (): AssessmentResult => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 5;
    const percentage = (totalScore / maxScore) * 100;

    let level = '';
    let levelColor = '';
    let recommendations: string[] = [];

    if (percentage >= 80) {
      level = 'DX 리더';
      levelColor = 'text-green-600';
      recommendations = [
        '혁신 기술의 선도적 도입으로 경쟁 우위 확보',
        '다른 조직의 벤치마킹 대상이 될 수 있는 베스트 프랙티스 구축',
        '오픈 이노베이션을 통한 생태계 확장'
      ];
    } else if (percentage >= 60) {
      level = 'DX 발전';
      levelColor = 'text-blue-600';
      recommendations = [
        'AI/ML 기반 고도화된 자동화 시스템 구축',
        '실시간 데이터 분석을 통한 의사결정 체계 강화',
        '고객 경험 개선을 위한 개인화 서비스 확대'
      ];
    } else if (percentage >= 40) {
      level = 'DX 성장';
      levelColor = 'text-yellow-600';
      recommendations = [
        '핵심 업무 프로세스의 체계적 자동화 추진',
        '데이터 기반 의사결정 문화 확산',
        '조직 전반의 디지털 역량 강화 교육'
      ];
    } else if (percentage >= 20) {
      level = 'DX 시작';
      levelColor = 'text-orange-600';
      recommendations = [
        '클라우드 기반 인프라 구축 우선 추진',
        '기본적인 업무 자동화 도구 도입',
        '디지털 마인드셋 확산을 위한 조직 문화 개선'
      ];
    } else {
      level = 'DX 준비';
      levelColor = 'text-red-600';
      recommendations = [
        'DX 전략 수립 및 로드맵 구축',
        '기본적인 디지털 인프라 정비',
        '조직원 대상 디지털 리터러시 교육'
      ];
    }

    // 카테고리별 점수 계산
    const categoryScores: { [key: string]: { score: number; max: number } } = {};
    questions.forEach(q => {
      if (!categoryScores[q.category]) {
        categoryScores[q.category] = { score: 0, max: 0 };
      }
      categoryScores[q.category].score += answers[q.id] || 0;
      categoryScores[q.category].max += 5;
    });

    return {
      totalScore,
      maxScore,
      percentage,
      level,
      levelColor,
      recommendations,
      categoryScores
    };
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const assessmentResult = calculateResult();
      setResult(assessmentResult);
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '리소스 센터', href: '/resources' },
    { label: '도구 & 템플릿', href: '/resources/tools' },
    { label: 'DX 성숙도 평가' }
  ];

  if (showResult && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} className="mb-8" />
            
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">DX 성숙도 평가 결과</h1>
              <p className="text-xl text-blue-100">귀하의 조직 디지털 성숙도를 분석했습니다</p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Overall Score */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(result.percentage / 100) * 314} 314`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">
                    {Math.round(result.percentage)}%
                  </span>
                </div>
              </div>
              
              <h2 className={`text-3xl font-bold mb-2 ${result.levelColor}`}>
                {result.level}
              </h2>
              <p className="text-gray-600">
                총 {result.totalScore}점 / {result.maxScore}점
              </p>
            </div>

            {/* Category Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {Object.entries(result.categoryScores).map(([category, scores]) => {
                const categoryPercentage = (scores.score / scores.max) * 100;
                return (
                  <div key={category} className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${categoryPercentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-600">
                        {Math.round(categoryPercentage)}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recommendations */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-lightbulb-line text-blue-600"></i>
                개선 권장사항
              </h3>
              <ul className="space-y-3">
                {result.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <i className="ri-check-line text-green-600 mt-1"></i>
                    <span className="text-gray-700">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={resetAssessment}
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              다시 평가하기
            </button>
            <Link
              to="/contact/enterprise/consulting"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              전문가 상담 신청
            </Link>
            <Link
              to="/resources/whitepapers/dx-strategy-whitepaper"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              DX 전략 가이드 다운로드
            </Link>
          </div>

          {/* Additional Resources */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">추천 리소스</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/resources/blog/dx-best-practices"
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-book-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">DX 베스트 프랙티스</h4>
                  <p className="text-sm text-gray-600">성공 사례와 실무 가이드</p>
                </div>
              </Link>
              
              <Link
                to="/resources/tools/roi-calculator"
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <i className="ri-calculator-line text-orange-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">ROI 계산기</h4>
                  <p className="text-sm text-gray-600">자동화 투자 효과 측정</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <i className="ri-survey-line text-2xl"></i>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">DX 성숙도 평가</h1>
                <p className="text-xl text-blue-100">조직의 디지털 전환 수준을 정확하게 진단하세요</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-lg leading-relaxed">
                9개 핵심 영역에 대한 질문을 통해 조직의 디지털 성숙도를 측정하고, 
                맞춤형 개선 방안을 제시해드립니다. 약 5분 소요됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                진행률
              </span>
              <span className="text-sm font-medium text-blue-600">
                {currentQuestion + 1} / {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                {questions[currentQuestion].category}
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                {questions[currentQuestion].question}
              </h2>
            </div>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option) => (
                <label
                  key={option.value}
                  className={`block p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    answers[questions[currentQuestion].id] === option.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${questions[currentQuestion].id}`}
                    value={option.value}
                    checked={answers[questions[currentQuestion].id] === option.value}
                    onChange={() => handleAnswer(questions[currentQuestion].id, option.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      answers[questions[currentQuestion].id] === option.value
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {answers[questions[currentQuestion].id] === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-gray-700">{option.label}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              이전
            </button>
            
            <button
              onClick={handleNext}
              disabled={!answers[questions[currentQuestion].id]}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                !answers[questions[currentQuestion].id]
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {currentQuestion === questions.length - 1 ? '결과 보기' : '다음'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DXMaturityAssessmentPage;