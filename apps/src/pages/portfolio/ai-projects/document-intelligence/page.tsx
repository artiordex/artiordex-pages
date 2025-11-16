
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';

export default function DocumentIntelligencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb 
        items={[
          { label: '홈', href: '/' },
          { label: '포트폴리오', href: '/portfolio' },
          { label: 'AI 프로젝트', href: '/portfolio/ai-projects' },
          { label: '지능형 문서 처리', href: '/portfolio/ai-projects/document-intelligence' }
        ]} 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <i className="ri-file-text-line w-4 h-4 flex items-center justify-center mr-2"></i>
              지능형 문서 처리
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI 기반 문서 자동화 솔루션
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              OCR, NLP, Computer Vision을 결합한 차세대 문서 처리 시스템으로 
              모든 형태의 문서를 지능적으로 분석하고 처리합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">OCR</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">NLP</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">Computer Vision</span>
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
              다양한 형태의 문서를 AI가 자동으로 인식, 분류, 추출하여 
              업무 효율성을 극대화하는 지능형 문서 처리 시스템입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-scan-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">문서 스캔</h3>
              <p className="text-gray-600">고정밀 OCR로 다양한 형태의 문서를 디지털화</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-file-search-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">문서 분류</h3>
              <p className="text-gray-600">AI 기반 자동 문서 유형 분류 및 카테고리화</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-database-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">데이터 추출</h3>
              <p className="text-gray-600">핵심 정보 자동 추출 및 구조화된 데이터 변환</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">검증 및 승인</h3>
              <p className="text-gray-600">자동 검증 프로세스 및 예외 처리 워크플로우</p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 적용 분야 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">주요 적용 분야</h2>
            <p className="text-lg text-gray-600">다양한 산업 분야에서 활용되는 지능형 문서 처리 솔루션</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">금융업</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">대출 서류 자동화</h3>
                <p className="text-gray-600 mb-4">신분증, 소득증명서, 재직증명서 등 자동 처리</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">처리 시간 단축</span>
                    <span className="font-semibold text-blue-600">92%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">정확도</span>
                    <span className="font-semibold text-blue-600">98.5%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">보험업</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">보험 청구 처리</h3>
                <p className="text-gray-600 mb-4">진단서, 영수증, 청구서 자동 분석 및 처리</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">청구 처리 속도</span>
                    <span className="font-semibold text-emerald-600">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">사기 탐지율</span>
                    <span className="font-semibold text-emerald-600">94%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">물류업</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">운송 서류 관리</h3>
                <p className="text-gray-600 mb-4">운송장, 세관 서류, 배송 증명서 자동 처리</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">서류 처리 시간</span>
                    <span className="font-semibold text-purple-600">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">오류 감소</span>
                    <span className="font-semibold text-purple-600">89%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">제조업</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">품질 관리 문서</h3>
                <p className="text-gray-600 mb-4">검사 성적서, 인증서, 규격서 자동 분석</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">검사 효율성</span>
                    <span className="font-semibold text-orange-600">91%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">품질 향상</span>
                    <span className="font-semibold text-orange-600">87%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 text-sm rounded-full">헬스케어</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">의료 기록 관리</h3>
                <p className="text-gray-600 mb-4">처방전, 진료 기록, 검사 결과 디지털화</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">기록 정확도</span>
                    <span className="font-semibold text-pink-600">96%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">업무 효율성</span>
                    <span className="font-semibold text-pink-600">83%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-blue-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">공공기관</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">민원 서류 처리</h3>
                <p className="text-gray-600 mb-4">신청서, 증명서, 허가서 자동 분류 및 처리</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">민원 처리 시간</span>
                    <span className="font-semibold text-indigo-600">74%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">시민 만족도</span>
                    <span className="font-semibold text-indigo-600">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 아키텍처 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">기술 아키텍처</h2>
            <p className="text-lg text-gray-600">최신 AI 기술을 활용한 엔터프라이즈급 문서 처리 플랫폼</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-eye-line text-xl text-blue-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Computer Vision</h3>
              <p className="text-sm text-gray-600 mb-3">OpenCV, TensorFlow Vision API</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 이미지 전처리 및 노이즈 제거</li>
                <li>• 문서 레이아웃 분석</li>
                <li>• 테이블 및 양식 인식</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-text text-xl text-emerald-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">OCR Engine</h3>
              <p className="text-sm text-gray-600 mb-3">Tesseract, Azure Form Recognizer</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 다국어 텍스트 인식</li>
                <li>• 필기체 및 인쇄체 지원</li>
                <li>• 고정밀 문자 추출</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-brain-line text-xl text-purple-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">NLP Processing</h3>
              <p className="text-sm text-gray-600 mb-3">spaCy, BERT, GPT Models</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 개체명 인식 (NER)</li>
                <li>• 문서 분류 및 태깅</li>
                <li>• 의미 분석 및 요약</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-database-2-line text-xl text-orange-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Pipeline</h3>
              <p className="text-sm text-gray-600 mb-3">Apache Kafka, Azure Data Factory</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 실시간 데이터 스트리밍</li>
                <li>• 배치 처리 및 ETL</li>
                <li>• 데이터 품질 관리</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-cloud-line text-xl text-red-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cloud Platform</h3>
              <p className="text-sm text-gray-600 mb-3">Azure, AWS, Google Cloud</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 확장 가능한 인프라</li>
                <li>• 고가용성 보장</li>
                <li>• 글로벌 배포 지원</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-xl text-indigo-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Security & Compliance</h3>
              <p className="text-sm text-gray-600 mb-3">ISO 27001, GDPR, SOC 2</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 엔드투엔드 암호화</li>
                <li>• 접근 권한 관리</li>
                <li>• 감사 로그 및 추적</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">지능형 문서 처리 솔루션 도입하기</h2>
          <p className="text-xl text-blue-100 mb-8">
            귀하의 문서 처리 업무를 AI로 자동화하여 생산성을 극대화하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              프로젝트 문의하기
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              데모 체험 신청
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
