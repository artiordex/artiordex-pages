import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const DXPartnershipPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: '고객 성공', href: '/contact' },
    { label: '기업 단위 DX 전략 파트너십', href: '/contact/enterprise/dx-partnership' }
  ];

  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    employeeCount: '',
    contactName: '',
    position: '',
    email: '',
    phone: '',
    dxMaturity: '',
    partnershipType: '',
    focusArea: '',
    budget: '',
    timeline: '',
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

      const response = await fetch('https://readdy.ai/api/form/d4bbsumoquaeac4hdo8g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          companyName: '',
          industry: '',
          employeeCount: '',
          contactName: '',
          position: '',
          email: '',
          phone: '',
          dxMaturity: '',
          partnershipType: '',
          focusArea: '',
          budget: '',
          timeline: '',
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
        <section className="bg-gradient-to-br from-indigo-700 to-purple-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                <i className="ri-building-line text-3xl text-indigo-700"></i>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                기업 단위 DX 전략 파트너십
              </h1>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                장기적인 관점에서 기업의 디지털 전환을 함께 설계하고 실행하는 전략적 파트너십
              </p>
            </div>
          </div>
        </section>
        
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Partnership Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">DX 전략 파트너십의 가치</h2>
              <p className="text-lg text-gray-600">단순한 프로젝트를 넘어 지속 가능한 디지털 혁신을 실현합니다</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-roadmap-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">전사 DX 로드맵 수립</h3>
                <p className="text-gray-600">
                  현황 진단부터 3-5년 장기 로드맵까지, 체계적인 DX 전략을 함께 수립합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-team-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">전담 팀 배정</h3>
                <p className="text-gray-600">
                  귀사만을 위한 전담 컨설턴트와 기술 팀이 상시 지원합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-funds-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">비용 최적화</h3>
                <p className="text-gray-600">
                  장기 파트너십을 통한 특별 가격 정책과 우선 지원 혜택을 제공합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-graduation-cap-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">지속적인 교육</h3>
                <p className="text-gray-600">
                  임직원 대상 정기 교육과 워크샵을 통해 내재화를 지원합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-lightbulb-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">혁신 지원</h3>
                <p className="text-gray-600">
                  최신 기술 트렌드와 베스트 프랙티스를 지속적으로 공유합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-line-chart-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">성과 측정</h3>
                <p className="text-gray-600">
                  정기적인 성과 리뷰와 개선 방안을 통해 지속적인 가치를 창출합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">파트너십 유형</h2>
              <p className="text-lg text-gray-600">기업의 상황과 목표에 맞는 맞춤형 파트너십</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-indigo-200">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                    <i className="ri-rocket-line text-3xl text-indigo-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">스타터 파트너십</h3>
                  <p className="text-gray-600">DX 여정을 시작하는 기업을 위한 기본 패키지</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="ri-check-line text-indigo-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">DX 현황 진단</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-indigo-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">1년 로드맵 수립</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-indigo-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">분기별 컨설팅 (4회)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-indigo-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">기본 교육 프로그램</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-indigo-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">이메일 기술 지원</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">계약 기간</p>
                  <p className="text-2xl font-bold text-indigo-600">1년</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    추천
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                    <i className="ri-vip-crown-line text-3xl text-purple-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">프로 파트너십</h3>
                  <p className="text-gray-600">본격적인 DX 추진을 위한 종합 패키지</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">전사 DX 진단 및 전략 수립</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">3년 로드맵 수립</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">월간 컨설팅 (12회)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">전담 컨설턴트 배정</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">정기 교육 프로그램</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">우선 기술 지원</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">프로젝트 할인 (10%)</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">계약 기간</p>
                  <p className="text-2xl font-bold text-purple-600">2년</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-blue-200">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <i className="ri-building-4-line text-3xl text-blue-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">엔터프라이즈 파트너십</h3>
                  <p className="text-gray-600">대기업을 위한 프리미엄 패키지</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">전사 DX 전략 수립</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">5년 로드맵 수립</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">상시 컨설팅</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">전담 팀 배정</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">맞춤형 교육 프로그램</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">24/7 기술 지원</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">프로젝트 할인 (20%)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span className="text-gray-700">혁신 워크샵</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">계약 기간</p>
                  <p className="text-2xl font-bold text-blue-600">3년+</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">파트너십 프로세스</h2>
              <p className="text-lg text-gray-600">체계적인 프로세스로 성공적인 DX를 실현합니다</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">현황 진단</h3>
                <p className="text-sm text-gray-600">
                  DX 성숙도 평가 및 현황 분석
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">전략 수립</h3>
                <p className="text-sm text-gray-600">
                  DX 비전 및 로드맵 수립
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">실행 지원</h3>
                <p className="text-sm text-gray-600">
                  프로젝트 실행 및 기술 지원
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">성과 측정</h3>
                <p className="text-sm text-gray-600">
                  KPI 모니터링 및 성과 분석
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">5</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">지속 개선</h3>
                <p className="text-sm text-gray-600">
                  피드백 반영 및 최적화
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">파트너십 문의하기</h2>
              <p className="text-lg text-gray-600">
                귀사의 DX 전략 파트너가 되어드리겠습니다
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg" data-readdy-form>
              <div className="space-y-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    회사명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="회사명을 입력해주세요"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      산업 분야 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    >
                      <option value="">선택해주세요</option>
                      <option value="제조업">제조업</option>
                      <option value="금융업">금융업</option>
                      <option value="유통/리테일">유통/리테일</option>
                      <option value="IT/소프트웨어">IT/소프트웨어</option>
                      <option value="헬스케어">헬스케어</option>
                      <option value="물류">물류</option>
                      <option value="건설">건설</option>
                      <option value="교육">교육</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-2">
                      임직원 수 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="employeeCount"
                      name="employeeCount"
                      value={formData.employeeCount}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    >
                      <option value="">선택해주세요</option>
                      <option value="50명 미만">50명 미만</option>
                      <option value="50-100명">50-100명</option>
                      <option value="100-300명">100-300명</option>
                      <option value="300-500명">300-500명</option>
                      <option value="500-1000명">500-1000명</option>
                      <option value="1000명 이상">1000명 이상</option>
                    </select>
                  </div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="담당자명"
                    />
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      직급/직책 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="직급/직책"
                    />
                  </div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="email@company.com"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="dxMaturity" className="block text-sm font-medium text-gray-700 mb-2">
                    현재 DX 성숙도 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="dxMaturity"
                    name="dxMaturity"
                    value={formData.dxMaturity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="DX 준비 단계">DX 준비 단계 (계획 수립 중)</option>
                    <option value="DX 시작 단계">DX 시작 단계 (일부 도입)</option>
                    <option value="DX 성장 단계">DX 성장 단계 (확산 중)</option>
                    <option value="DX 발전 단계">DX 발전 단계 (전사 확대)</option>
                    <option value="DX 리더">DX 리더 (최적화 단계)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-2">
                    희망 파트너십 유형 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="스타터 파트너십">스타터 파트너십 (1년)</option>
                    <option value="프로 파트너십">프로 파트너십 (2년)</option>
                    <option value="엔터프라이즈 파트너십">엔터프라이즈 파트너십 (3년+)</option>
                    <option value="맞춤형">맞춤형 (상담 필요)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="focusArea" className="block text-sm font-medium text-gray-700 mb-2">
                    주요 관심 분야
                  </label>
                  <input
                    type="text"
                    id="focusArea"
                    name="focusArea"
                    value={formData.focusArea}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="예: AI 도입, 업무 자동화, 데이터 통합 등"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      연간 DX 예산
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
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
                      시작 희망 시기
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    DX 추진 배경 및 목표 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="DX를 추진하게 된 배경, 달성하고자 하는 목표, 현재 직면한 과제 등을 자유롭게 작성해주세요 (최대 500자)"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-700 text-white py-4 px-6 rounded-lg font-semibold hover:bg-indigo-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? '제출 중...' : '파트너십 문의하기'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">✓ 문의가 성공적으로 제출되었습니다. DX 전략 전문가가 검토 후 연락드리겠습니다.</p>
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

export default DXPartnershipPage;