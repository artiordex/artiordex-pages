import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const PublicSectorPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: '고객 성공', href: '/contact' },
    { label: '공공기관 프로젝트 문의', href: '/contact/enterprise/public-sector' }
  ];

  const [formData, setFormData] = useState({
    organizationName: '',
    organizationType: '',
    contactName: '',
    department: '',
    position: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    procurementMethod: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4bbsumoquaeac4hdoc0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          organizationName: '',
          organizationType: '',
          contactName: '',
          department: '',
          position: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          timeline: '',
          procurementMethod: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-700 to-indigo-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                <i className="ri-government-line text-3xl text-blue-700"></i>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                공공기관 프로젝트 문의
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                공공기관의 디지털 전환을 위한 전문 솔루션과 컨설팅을 제공합니다
              </p>
            </div>
          </div>
        </section>
        
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Public Sector Experience Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">공공기관 프로젝트 경험</h2>
              <p className="text-lg text-gray-600">다양한 공공기관과 함께한 성공적인 디지털 전환 사례</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-700 font-medium">공공기관 프로젝트</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">95%</div>
                <p className="text-gray-700 font-medium">고객 만족도</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">8년</div>
                <p className="text-gray-700 font-medium">공공 부문 경험</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                <p className="text-gray-700 font-medium">프로젝트 완료율</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions for Public Sector Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">공공기관 특화 솔루션</h2>
              <p className="text-lg text-gray-600">공공 부문의 특수성을 고려한 맞춤형 솔루션</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-file-list-3-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">민원 처리 자동화</h3>
                <p className="text-gray-600 mb-4">
                  AI 기반 민원 분류, 자동 배정, 처리 현황 추적 시스템
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                    <span>민원 자동 분류 및 배정</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                    <span>처리 기한 자동 알림</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                    <span>통계 및 분석 대시보드</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-file-text-line text-2xl text-emerald-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">문서 관리 시스템</h3>
                <p className="text-gray-600 mb-4">
                  전자문서 관리, 결재 워크플로우, 보안 문서 관리
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-emerald-600 mr-2 mt-0.5"></i>
                    <span>전자결재 시스템</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-emerald-600 mr-2 mt-0.5"></i>
                    <span>문서 보안 등급 관리</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-emerald-600 mr-2 mt-0.5"></i>
                    <span>문서 생명주기 관리</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-database-2-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">데이터 통합 플랫폼</h3>
                <p className="text-gray-600 mb-4">
                  부서 간 데이터 연계, 통합 데이터베이스 구축
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                    <span>부서 간 데이터 연계</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                    <span>실시간 데이터 동기화</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                    <span>데이터 품질 관리</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-shield-check-line text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">보안 & 컴플라이언스</h3>
                <p className="text-gray-600 mb-4">
                  개인정보보호법, 정보보안 규정 준수 시스템
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-indigo-600 mr-2 mt-0.5"></i>
                    <span>개인정보 암호화</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-indigo-600 mr-2 mt-0.5"></i>
                    <span>접근 권한 관리</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-indigo-600 mr-2 mt-0.5"></i>
                    <span>감사 로그 관리</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-line-chart-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">성과 관리 시스템</h3>
                <p className="text-gray-600 mb-4">
                  업무 성과 측정, KPI 관리, 평가 시스템
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-orange-600 mr-2 mt-0.5"></i>
                    <span>KPI 설정 및 추적</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-orange-600 mr-2 mt-0.5"></i>
                    <span>성과 평가 자동화</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-orange-600 mr-2 mt-0.5"></i>
                    <span>실시간 대시보드</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-customer-service-2-line text-2xl text-teal-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">국민 소통 플랫폼</h3>
                <p className="text-gray-600 mb-4">
                  온라인 민원, 정책 제안, 국민 참여 시스템
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-teal-600 mr-2 mt-0.5"></i>
                    <span>온라인 민원 접수</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-teal-600 mr-2 mt-0.5"></i>
                    <span>정책 제안 시스템</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-teal-600 mr-2 mt-0.5"></i>
                    <span>AI 챗봇 상담</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Procurement Support Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">조달 지원</h2>
              <p className="text-lg text-gray-600">공공기관 조달 절차에 대한 전문적인 지원</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-file-list-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">나라장터 등록</h3>
                <p className="text-gray-600">
                  나라장터 쇼핑몰 등록 제품 보유 및 입찰 참여 지원
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-article-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">제안서 작성 지원</h3>
                <p className="text-gray-600">
                  RFP 분석, 제안서 작성, 기술 검토 등 전문 지원
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-shield-check-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">인증 및 심사 대응</h3>
                <p className="text-gray-600">
                  보안 인증, 기술 심사, 적격 심사 등 대응 지원
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">프로젝트 문의하기</h2>
              <p className="text-lg text-gray-600">
                공공기관 프로젝트에 대해 상담해드립니다
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg" data-readdy-form>
              <div className="space-y-6">
                <div>
                  <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-2">
                    기관명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="기관명을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="organizationType" className="block text-sm font-medium text-gray-700 mb-2">
                    기관 유형 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="organizationType"
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="중앙행정기관">중앙행정기관</option>
                    <option value="지방자치단체">지방자치단체</option>
                    <option value="공공기관">공공기관</option>
                    <option value="교육기관">교육기관</option>
                    <option value="의료기관">의료기관</option>
                    <option value="연구기관">연구기관</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                      담당자명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="담당자명"
                    />
                  </div>

                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                      부서명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="부서명"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    직급/직위
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="직급/직위"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="email@gov.kr"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="02-0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    프로젝트 유형 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="민원 처리 자동화">민원 처리 자동화</option>
                    <option value="문서 관리 시스템">문서 관리 시스템</option>
                    <option value="데이터 통합">데이터 통합</option>
                    <option value="AI 도입">AI 도입</option>
                    <option value="업무 자동화">업무 자동화</option>
                    <option value="시스템 현대화">시스템 현대화</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      예산 규모
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    >
                      <option value="">선택해주세요</option>
                      <option value="1억 미만">1억 미만</option>
                      <option value="1억 ~ 3억">1억 ~ 3억</option>
                      <option value="3억 ~ 5억">3억 ~ 5억</option>
                      <option value="5억 ~ 10억">5억 ~ 10억</option>
                      <option value="10억 이상">10억 이상</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      추진 일정
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    >
                      <option value="">선택해주세요</option>
                      <option value="즉시">즉시</option>
                      <option value="1개월 이내">1개월 이내</option>
                      <option value="3개월 이내">3개월 이내</option>
                      <option value="6개월 이내">6개월 이내</option>
                      <option value="내년도">내년도</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="procurementMethod" className="block text-sm font-medium text-gray-700 mb-2">
                    조달 방식
                  </label>
                  <select
                    id="procurementMethod"
                    name="procurementMethod"
                    value={formData.procurementMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="나라장터 쇼핑몰">나라장터 쇼핑몰</option>
                    <option value="일반경쟁입찰">일반경쟁입찰</option>
                    <option value="제한경쟁입찰">제한경쟁입찰</option>
                    <option value="수의계약">수의계약</option>
                    <option value="미정">미정</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    프로젝트 상세 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="프로젝트 배경, 목적, 주요 요구사항 등을 자유롭게 작성해주세요 (최대 500자)"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? '제출 중...' : '프로젝트 문의하기'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">✓ 문의가 성공적으로 제출되었습니다. 담당자가 검토 후 연락드리겠습니다.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">✗ 제출 중 오류가 발생했습니다. 다시 시도해주세요.</p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatBot />
      <QuickBar />
    </div>
  );
};

export default PublicSectorPage;