import { useState, useEffect } from 'react';

interface ResultsSectionProps {
  project: any;
}

const ResultsSection = ({ project }: ResultsSectionProps) => {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateMetrics();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('results-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const animateMetrics = () => {
    project.metrics.beforeAfter.forEach((metric: any, index: number) => {
      const targetValue = parseFloat(metric.improvement.replace(/[^0-9.]/g, ''));
      let currentValue = 0;
      const increment = targetValue / 50;
      
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(timer);
        }
        setAnimatedValues(prev => ({
          ...prev,
          [index]: Math.round(currentValue)
        }));
      }, 30);
    });
  };

  return (
    <section id="results-section" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              측정 가능한 성과
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              데이터로 입증된 프로젝트의 실질적인 비즈니스 임팩트를 확인하세요.
            </p>
          </div>

          {/* Before/After Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {project.metrics.beforeAfter.map((metric: any, index: number) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {metric.metric}
                </h3>
                
                {/* Before/After Comparison */}
                <div className="space-y-6">
                  {/* Before */}
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-100">
                    <div className="flex items-center space-x-3">
                      <i className="ri-close-circle-line text-red-600 text-xl"></i>
                      <span className="font-medium text-gray-800">이전</span>
                    </div>
                    <span className="text-xl font-bold text-red-600">{metric.before}</span>
                  </div>

                  {/* Arrow */}
                  <div className="text-center">
                    <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
                  </div>

                  {/* After */}
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="flex items-center space-x-3">
                      <i className="ri-check-circle-line text-green-600 text-xl"></i>
                      <span className="font-medium text-gray-800">이후</span>
                    </div>
                    <span className="text-xl font-bold text-green-600">{metric.after}</span>
                  </div>

                  {/* Improvement */}
                  <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="text-sm text-gray-600 mb-1">개선 효과</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {isVisible ? (animatedValues[index] || 0) : 0}
                      {metric.improvement.includes('%') ? '%' : ''} 
                      {metric.improvement.includes('감소') ? ' 감소' : 
                       metric.improvement.includes('향상') ? ' 향상' : 
                       metric.improvement.includes('증가') ? ' 증가' : ''}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ROI Analysis */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">투자 수익률 (ROI) 분석</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-200 mb-2">
                  {project.metrics.roi.investment}
                </div>
                <div className="text-green-100">초기 투자비용</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-200 mb-2">
                  {project.metrics.roi.savings}
                </div>
                <div className="text-green-100">연간 절감 효과</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  {project.metrics.roi.paybackPeriod}
                </div>
                <div className="text-green-100">투자 회수 기간</div>
              </div>
            </div>
          </div>

          {/* Key Results */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              주요 성과 지표
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.results.map((result: string, index: number) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-trophy-line text-blue-600"></i>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics Visualization */}
          <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">성공 지표 요약</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-2xl"></i>
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-2">90%</div>
                <div className="text-gray-300 text-sm">시간 절약</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-money-dollar-circle-line text-2xl"></i>
                </div>
                <div className="text-2xl font-bold text-green-400 mb-2">300%</div>
                <div className="text-gray-300 text-sm">ROI 달성</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-smile-line text-2xl"></i>
                </div>
                <div className="text-2xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-gray-300 text-sm">만족도</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-2xl"></i>
                </div>
                <div className="text-2xl font-bold text-orange-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">안정성</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;