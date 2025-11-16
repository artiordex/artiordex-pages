
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';

export default function PredictiveAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb 
        items={[
          { label: '홈', href: '/' },
          { label: '포트폴리오', href: '/portfolio' },
          { label: 'AI 프로젝트', href: '/portfolio/ai-projects' },
          { label: '예측 분석 시스템', href: '/portfolio/ai-projects/predictive-analytics' }
        ]} 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <i className="ri-line-chart-line w-4 h-4 flex items-center justify-center mr-2"></i>
              예측 분석 시스템
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI 기반 예측 분석 플랫폼
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
              머신러닝과 빅데이터 분석을 통해 미래를 예측하고, 
              데이터 기반의 전략적 의사결정을 지원합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">Machine Learning</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">Big Data</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">Predictive Modeling</span>
            </div>
          </div>
        </div>
      </section>

      {/* 솔루션 개요 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">솔루션 개요</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              과거 데이터 패턴을 학습하여 미래 트렌드를 예측하고, 
              비즈니스 리스크를 사전에 식별하여 최적의 의사결정을 지원합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-database-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">데이터 수집</h3>
              <p className="text-gray-600">다양한 소스에서 실시간 데이터 수집 및 통합</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-brain-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">모델 학습</h3>
              <p className="text-gray-600">고도화된 ML 알고리즘으로 예측 모델 구축</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-line-chart-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">예측 분석</h3>
              <p className="text-gray-600">실시간 예측 결과 생성 및 트렌드 분석</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-dashboard-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">시각화</h3>
              <p className="text-gray-600">직관적인 대시보드와 인사이트 리포트 제공</p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 예측 분야 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">주요 예측 분야</h2>
            <p className="text-lg text-gray-600">다양한 비즈니스 영역에서 활용되는 예측 분석 솔루션</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">수요 예측</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">판매 수요 예측</h3>
                <p className="text-gray-600 mb-4">과거 판매 데이터와 시장 트렌드 분석으로 미래 수요 예측</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">예측 정확도</span>
                    <span className="font-semibold text-emerald-600">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">재고 최적화</span>
                    <span className="font-semibold text-emerald-600">87%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">고객 분석</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">고객 이탈 예측</h3>
                <p className="text-gray-600 mb-4">고객 행동 패턴 분석으로 이탈 위험 고객 사전 식별</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">이탈 예측 정확도</span>
                    <span className="font-semibold text-blue-600">91%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">고객 유지율</span>
                    <span className="font-semibold text-blue-600">83%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">리스크 관리</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">신용 리스크 예측</h3>
                <p className="text-gray-600 mb-4">금융 데이터 분석으로 대출 및 투자 리스크 평가</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">리스크 탐지율</span>
                    <span className="font-semibold text-purple-600">96%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">손실 감소</span>
                    <span className="font-semibold text-purple-600">78%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">운영 최적화</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">설비 고장 예측</h3>
                <p className="text-gray-600 mb-4">IoT 센서 데이터로 설비 상태 모니터링 및 고장 예측</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">예측 정확도</span>
                    <span className="font-semibold text-orange-600">89%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">다운타임 감소</span>
                    <span className="font-semibold text-orange-600">92%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 text-sm rounded-full">마케팅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">마케팅 ROI 예측</h3>
                <p className="text-gray-600 mb-4">캠페인 성과 예측 및 최적 마케팅 전략 수립</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">ROI 예측 정확도</span>
                    <span className="font-semibold text-pink-600">88%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">마케팅 효율성</span>
                    <span className="font-semibold text-pink-600">76%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-blue-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">공급망</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">공급망 최적화</h3>
                <p className="text-gray-600 mb-4">물류 및 공급망 데이터로 최적 배송 경로 예측</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">배송 시간 단축</span>
                    <span className="font-semibold text-indigo-600">84%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">물류 비용 절감</span>
                    <span className="font-semibold text-indigo-600">79%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">핵심 기술 스택</h2>
            <p className="text-lg text-gray-600">최신 머신러닝 기술과 빅데이터 플랫폼을 활용한 예측 분석 시스템</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-brain-line text-xl text-emerald-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ML Frameworks</h3>
              <p className="text-sm text-gray-600 mb-3">TensorFlow, PyTorch, Scikit-learn</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 딥러닝 모델 구축</li>
                <li>• 앙상블 학습</li>
                <li>• 자동 하이퍼파라미터 튜닝</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-database-2-line text-xl text-blue-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Big Data Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Apache Spark, Hadoop, Kafka</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 대용량 데이터 처리</li>
                <li>• 실시간 스트리밍</li>
                <li>• 분산 컴퓨팅</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-cloud-line text-xl text-purple-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cloud ML Services</h3>
              <p className="text-sm text-gray-600 mb-3">Azure ML, AWS SageMaker, GCP AI</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 관리형 ML 서비스</li>
                <li>• 자동 스케일링</li>
                <li>• MLOps 파이프라인</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-bar-chart-line text-xl text-orange-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visualization</h3>
              <p className="text-sm text-gray-600 mb-3">Tableau, Power BI, D3.js</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 인터랙티브 대시보드</li>
                <li>• 실시간 모니터링</li>
                <li>• 커스텀 차트</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 성과 지표 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">프로젝트 성과</h2>
            <p className="text-lg text-gray-600">예측 분석 시스템 도입으로 달성한 주요 성과 지표</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">150+</div>
              <div className="text-gray-600">구축 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-gray-600">평균 예측 정확도</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600">의사결정 속도 향상</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">73%</div>
              <div className="text-gray-600">운영 비용 절감</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">예측 분석 시스템 구축하기</h2>
          <p className="text-xl text-emerald-100 mb-8">
            데이터 기반의 미래 예측으로 비즈니스 경쟁력을 강화하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              프로젝트 문의하기
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors whitespace-nowrap cursor-pointer">
              데모 체험 신청
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
