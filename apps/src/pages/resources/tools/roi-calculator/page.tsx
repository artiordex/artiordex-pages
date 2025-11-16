import React, { useState, useEffect } from 'react';
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';
import { Link } from 'react-router-dom';

interface CalculationResult {
  monthlySavings: number;
  annualSavings: number;
  roi: number;
  paybackPeriod: number;
  totalBenefit: number;
}

const ROICalculatorPage: React.FC = () => {
  const [formData, setFormData] = useState({
    employees: 50,
    avgSalary: 4500000,
    hoursPerWeek: 10,
    automationRate: 70,
    implementationCost: 50000000,
    maintenanceCost: 5000000
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateROI = () => {
    const { employees, avgSalary, hoursPerWeek, automationRate, implementationCost, maintenanceCost } = formData;
    
    // 월 급여를 시급으로 변환 (월 160시간 기준)
    const hourlyRate = avgSalary / 160;
    
    // 주당 절약 시간
    const weeklySavedHours = (hoursPerWeek * automationRate / 100) * employees;
    
    // 월간 절약 비용 (4.33주 기준)
    const monthlySavings = weeklySavedHours * 4.33 * hourlyRate;
    
    // 연간 절약 비용
    const annualSavings = monthlySavings * 12;
    
    // 총 비용 (구현 + 연간 유지보수)
    const totalCost = implementationCost + maintenanceCost;
    
    // ROI 계산
    const roi = ((annualSavings - maintenanceCost) / implementationCost) * 100;
    
    // 투자 회수 기간 (개월)
    const paybackPeriod = implementationCost / monthlySavings;
    
    // 3년간 총 효익
    const totalBenefit = (annualSavings * 3) - implementationCost - (maintenanceCost * 3);

    setResult({
      monthlySavings,
      annualSavings,
      roi,
      paybackPeriod,
      totalBenefit
    });
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '리소스 센터', href: '/resources' },
    { label: '도구 & 템플릿', href: '/resources/tools' },
    { label: 'ROI 계산기' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <i className="ri-calculator-line text-2xl"></i>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">자동화 ROI 계산기</h1>
                <p className="text-xl text-orange-100">업무 자동화 도입의 경제적 효과를 정확하게 측정하세요</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-lg leading-relaxed">
                조직의 현재 상황을 입력하면 자동화 도입 시 예상되는 비용 절감 효과, ROI, 투자 회수 기간을 
                실시간으로 계산해드립니다. 의사결정에 필요한 구체적인 수치를 확인하세요.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <i className="ri-settings-3-line text-orange-600"></i>
              계산 조건 설정
            </h2>

            <div className="space-y-6">
              {/* 직원 수 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  대상 직원 수
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.employees}
                    onChange={(e) => handleInputChange('employees', Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="50"
                  />
                  <span className="absolute right-3 top-3 text-gray-500">명</span>
                </div>
              </div>

              {/* 평균 월급 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  평균 월급여
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.avgSalary}
                    onChange={(e) => handleInputChange('avgSalary', Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="4500000"
                  />
                  <span className="absolute right-3 top-3 text-gray-500">원</span>
                </div>
              </div>

              {/* 주당 반복 업무 시간 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  주당 반복 업무 시간
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.hoursPerWeek}
                    onChange={(e) => handleInputChange('hoursPerWeek', Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="10"
                  />
                  <span className="absolute right-3 top-3 text-gray-500">시간</span>
                </div>
              </div>

              {/* 자동화율 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  예상 자동화율
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="10"
                    max="95"
                    value={formData.automationRate}
                    onChange={(e) => handleInputChange('automationRate', Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>10%</span>
                    <span className="font-medium text-orange-600">{formData.automationRate}%</span>
                    <span>95%</span>
                  </div>
                </div>
              </div>

              {/* 구현 비용 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  초기 구현 비용
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.implementationCost}
                    onChange={(e) => handleInputChange('implementationCost', Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="50000000"
                  />
                  <span className="absolute right-3 top-3 text-gray-500">원</span>
                </div>
              </div>

              {/* 연간 유지보수 비용 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  연간 유지보수 비용
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.maintenanceCost}
                    onChange={(e) => handleInputChange('maintenanceCost', Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="5000000"
                  />
                  <span className="absolute right-3 top-3 text-gray-500">원</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <i className="ri-line-chart-line text-orange-600"></i>
              계산 결과
            </h2>

            {result && (
              <div className="space-y-6">
                {/* 월간 절약 */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">월간 비용 절약</p>
                      <p className="text-3xl font-bold text-green-600">
                        {formatCurrency(result.monthlySavings)}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-calendar-line text-green-600 text-xl"></i>
                    </div>
                  </div>
                </div>

                {/* 연간 절약 */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">연간 비용 절약</p>
                      <p className="text-3xl font-bold text-blue-600">
                        {formatCurrency(result.annualSavings)}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="ri-calendar-2-line text-blue-600 text-xl"></i>
                    </div>
                  </div>
                </div>

                {/* ROI */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">투자 수익률 (ROI)</p>
                      <p className="text-3xl font-bold text-purple-600">
                        {result.roi.toFixed(1)}%
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <i className="ri-percent-line text-purple-600 text-xl"></i>
                    </div>
                  </div>
                </div>

                {/* 투자 회수 기간 */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">투자 회수 기간</p>
                      <p className="text-3xl font-bold text-orange-600">
                        {result.paybackPeriod.toFixed(1)}개월
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <i className="ri-time-line text-orange-600 text-xl"></i>
                    </div>
                  </div>
                </div>

                {/* 3년간 총 효익 */}
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">3년간 총 효익</p>
                      <p className="text-3xl font-bold text-gray-700">
                        {formatCurrency(result.totalBenefit)}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <i className="ri-trophy-line text-gray-600 text-xl"></i>
                    </div>
                  </div>
                </div>

                {/* 결과 해석 */}
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <i className="ri-lightbulb-line text-yellow-600"></i>
                    결과 해석
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    {result.roi > 100 && (
                      <p className="flex items-center gap-2">
                        <i className="ri-check-line text-green-600"></i>
                        매우 높은 ROI로 투자 가치가 뛰어납니다.
                      </p>
                    )}
                    {result.paybackPeriod < 12 && (
                      <p className="flex items-center gap-2">
                        <i className="ri-check-line text-green-600"></i>
                        1년 이내 투자 회수가 가능합니다.
                      </p>
                    )}
                    {result.totalBenefit > 0 && (
                      <p className="flex items-center gap-2">
                        <i className="ri-check-line text-green-600"></i>
                        3년간 순이익이 예상됩니다.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">정확한 ROI 분석이 필요하신가요?</h2>
          <p className="text-lg mb-6 text-orange-100">
            전문가와 함께 더 정밀한 분석과 맞춤형 자동화 전략을 수립해보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact/projects/ai-estimate"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              무료 컨설팅 신청
            </Link>
            <Link
              to="/resources/whitepapers/ai-implementation-guide"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              AI 도입 가이드 다운로드
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculatorPage;