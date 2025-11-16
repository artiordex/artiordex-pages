import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const OnboardingPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: '고객 성공', href: '/contact' },
    { label: '교육 & 온보딩 지원', href: '/contact/enterprise/onboarding' }
  ];

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    productName: '',
    userCount: '',
    trainingType: '',
    trainingLevel: '',
    preferredDate: '',
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

      const response = await fetch('https://readdy.ai/api/form/d4bbsumoquaeac4hdob0', {
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
          contactName: '',
          email: '',
          phone: '',
          productName: '',
          userCount: '',
          trainingType: '',
          trainingLevel: '',
          preferredDate: '',
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
        <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                <i className="ri-graduation-cap-line text-3xl text-indigo-600"></i>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                교육 & 온보딩 지원
              </h1>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                체계적인 교육 프로그램으로 빠르고 효과적인 시스템 도입을 지원합니다
              </p>
            </div>
          </div>
        </section>
        
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Training Programs Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">교육 프로그램</h2>
              <p className="text-lg text-gray-600">사용자 레벨에 맞는 맞춤형 교육을 제공합니다</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-200">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-seedling-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">기본 교육</h3>
                <p className="text-gray-600 mb-4">
                  시스템 사용법과 기본 기능을 익히는 입문 과정
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                    <span>시스템 개요 및 구조</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                    <span>기본 기능 사용법</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                    <span>실습 및 Q&A</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                    <span>교육 시간: 4시간</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-rocket-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">심화 교육</h3>
                <p className="text-gray-600 mb-4">
                  고급 기능과 활용 방법을 배우는 전문 과정
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                    <span>고급 기능 활용</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                    <span>커스터마이징 방법</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                    <span>실전 프로젝트 실습</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                    <span>교육 시간: 8시간</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border-2 border-purple-200">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-vip-crown-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">관리자 교육</h3>
                <p className="text-gray-600 mb-4">
                  시스템 관리와 운영을 위한 전문가 과정
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                    <span>시스템 관리 및 설정</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                    <span>사용자 권한 관리</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                    <span>모니터링 및 최적화</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                    <span>교육 시간: 12시간</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Onboarding Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">온보딩 프로세스</h2>
              <p className="text-lg text-gray-600">단계별 체계적인 온보딩으로 성공적인 도입을 보장합니다</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">킥오프 미팅</h3>
                <p className="text-sm text-gray-600">
                  프로젝트 목표 설정, 일정 수립, 담당자 지정
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">환경 구축</h3>
                <p className="text-sm text-gray-600">
                  시스템 설치, 초기 설정, 데이터 마이그레이션
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">사용자 교육</h3>
                <p className="text-sm text-gray-600">
                  레벨별 맞춤 교육, 실습, 테스트 운영
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">안정화 지원</h3>
                <p className="text-sm text-gray-600">
                  실시간 모니터링, 이슈 대응, 최적화
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Training Methods Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">교육 방식</h2>
              <p className="text-lg text-gray-600">다양한 교육 방식으로 최적의 학습 환경을 제공합니다</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-team-line text-2xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">오프라인 교육</h3>
                    <p className="text-gray-600 mb-4">
                      강사와 직접 대면하여 실습 중심의 교육을 진행합니다
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                        <span>실시간 질의응답</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                        <span>1:1 맞춤 지도</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                        <span>팀 협업 실습</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-computer-line text-2xl text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">온라인 교육</h3>
                    <p className="text-gray-600 mb-4">
                      화상 회의를 통해 시간과 장소에 구애받지 않고 교육을 받을 수 있습니다
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                        <span>화면 공유 실습</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                        <span>녹화 영상 제공</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                        <span>유연한 일정 조정</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-video-line text-2xl text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">동영상 교육</h3>
                    <p className="text-gray-600 mb-4">
                      언제든지 반복 학습이 가능한 동영상 콘텐츠를 제공합니다
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <i className="ri-check-line text-emerald-600 mr-2 mt-0.5"></i>
                        <span>자기주도 학습</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line text-emerald-600 mr-2 mt-0.5"></i>
                        <span>반복 재생 가능</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line text-emerald-600 mr-2 mt-0.5"></i>
                        <span>자막 및 자료 제공</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-book-open-line text-2xl text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">문서 교육</h3>
                    <p className="text-gray-600 mb-4">
                      상세한 매뉴얼과 가이드 문서를 제공합니다
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <i className="ri-check-line text-orange-600 mr-2 mt-0.5"></i>
                        <span>사용자 매뉴얼</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line text-orange-600 mr-2 mt-0.5"></i>
                        <span>FAQ 문서</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line text-orange-600 mr-2 mt-0.5"></i>
                        <span>베스트 프랙티스</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Request Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">교육 신청하기</h2>
              <p className="text-lg text-gray-600">
                맞춤형 교육 프로그램을 신청하세요
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
                  <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-2">
                    교육 대상 제품 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="productName"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="Artiflow">Artiflow</option>
                    <option value="SmartHub">SmartHub</option>
                    <option value="ConnectStack">ConnectStack</option>
                    <option value="Power Platform">Power Platform</option>
                    <option value="Custom Solution">커스텀 솔루션</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="userCount" className="block text-sm font-medium text-gray-700 mb-2">
                    교육 대상 인원 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="userCount"
                    name="userCount"
                    value={formData.userCount}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="1-10">1-10명</option>
                    <option value="11-30">11-30명</option>
                    <option value="31-50">31-50명</option>
                    <option value="51-100">51-100명</option>
                    <option value="100+">100명 이상</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="trainingType" className="block text-sm font-medium text-gray-700 mb-2">
                    교육 방식 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="trainingType"
                    name="trainingType"
                    value={formData.trainingType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="Offline">오프라인 교육</option>
                    <option value="Online">온라인 교육</option>
                    <option value="Video">동영상 교육</option>
                    <option value="Hybrid">혼합형 교육</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="trainingLevel" className="block text-sm font-medium text-gray-700 mb-2">
                    교육 레벨 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="trainingLevel"
                    name="trainingLevel"
                    value={formData.trainingLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="Basic">기본 교육</option>
                    <option value="Advanced">심화 교육</option>
                    <option value="Admin">관리자 교육</option>
                    <option value="All">전체 교육</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    희망 교육 시기
                  </label>
                  <input
                    type="text"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="예: 2024년 2월 중, 평일 오후 선호"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    추가 요청사항
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="특별히 집중하고 싶은 기능이나 추가 요청사항이 있다면 입력해주세요 (최대 500자)"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? '제출 중...' : '교육 신청하기'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">✓ 교육 신청이 완료되었습니다. 담당자가 확인 후 연락드리겠습니다.</p>
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

export default OnboardingPage;
