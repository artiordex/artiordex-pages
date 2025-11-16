
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';

export default function WorkflowAutomationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb 
        items={[
          { label: '홈', href: '/' },
          { label: '포트폴리오', href: '/portfolio' },
          { label: 'AI 프로젝트', href: '/portfolio/ai-projects' },
          { label: 'AI 워크플로우 자동화', href: '/portfolio/ai-projects/workflow-automation' }
        ]} 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <i className="ri-robot-line w-4 h-4 flex items-center justify-center mr-2"></i>
              AI 워크플로우 자동화
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              지능형 업무 프로세스 자동화
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              RPA와 AI를 결합한 차세대 워크플로우 자동화로 반복 업무를 완전 자동화하고, 
              업무 효율성을 극대화합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">RPA + AI</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">Process Mining</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">Intelligent Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 개요 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">프로젝트 개요</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AI 기반 워크플로우 자동화를 통해 기업의 핵심 업무 프로세스를 지능화하고, 
              생산성 향상과 비용 절감을 동시에 실현합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-settings-3-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">프로세스 분석</h3>
              <p className="text-gray-600">기존 업무 프로세스를 분석하고 자동화 포인트를 식별</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-brain-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI 모델 구축</h3>
              <p className="text-gray-600">업무 특성에 맞는 맞춤형 AI 모델 개발 및 학습</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-flow-chart text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">워크플로우 설계</h3>
              <p className="text-gray-600">효율적인 자동화 워크플로우 설계 및 구현</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-dashboard-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">모니터링</h3>
              <p className="text-gray-600">실시간 성과 모니터링 및 지속적 최적화</p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 프로젝트 사례 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">주요 프로젝트 사례</h2>
            <p className="text-lg text-gray-600">다양한 산업 분야에서 성공적으로 구축된 AI 워크플로우 자동화 사례</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">제조업</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">스마트 팩토리 자동화</h3>
                <p className="text-gray-600 mb-4">생산 계획부터 품질 관리까지 전 공정 자동화</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">생산성 향상</span>
                    <span className="font-semibold text-purple-600">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">불량률 감소</span>
                    <span className="font-semibold text-purple-600">92%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">금융업</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">대출 심사 자동화</h3>
                <p className="text-gray-600 mb-4">AI 기반 신용평가 및 대출 승인 프로세스</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">처리 시간 단축</span>
                    <span className="font-semibold text-blue-600">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">정확도 향상</span>
                    <span className="font-semibold text-blue-600">94%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">헬스케어</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">환자 관리 자동화</h3>
                <p className="text-gray-600 mb-4">진료 예약부터 치료 계획까지 통합 관리</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">업무 효율성</span>
                    <span className="font-semibold text-emerald-600">89%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">환자 만족도</span>
                    <span className="font-semibold text-emerald-600">96%</span>
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
            <p className="text-lg text-gray-600">최신 AI 기술과 자동화 플랫폼을 활용한 통합 솔루션</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-robot-line text-xl text-purple-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">RPA Platform</h3>
              <p className="text-sm text-gray-600">UiPath, Automation Anywhere</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-brain-line text-xl text-blue-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI/ML</h3>
              <p className="text-sm text-gray-600">TensorFlow, PyTorch, Azure ML</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-flow-chart text-xl text-emerald-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Workflow Engine</h3>
              <p className="text-sm text-gray-600">Power Automate, Camunda</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-cloud-line text-xl text-orange-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cloud Platform</h3>
              <p className="text-sm text-gray-600">Azure, AWS, Google Cloud</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">AI 워크플로우 자동화 프로젝트 시작하기</h2>
          <p className="text-xl text-purple-100 mb-8">
            귀하의 비즈니스에 최적화된 AI 자동화 솔루션을 제안해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              프로젝트 문의하기
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors whitespace-nowrap cursor-pointer">
              전화 상담 신청
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
