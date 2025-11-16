import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ChatBot from '../../components/feature/ChatBot';
import QuickBar from '../../components/feature/QuickBar';
import Breadcrumb from '../../components/feature/Breadcrumb';

const LocationPage = () => {
  const breadcrumbItems = [
    { label: '회사소개', href: '/about' },
    { label: '오시는 길', href: '/about/find-us' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero Section - Full Width Responsive */}
        <section 
          className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=clean%20minimal%20futuristic%20digital%20city%20network%20with%20azure%20blue%20and%20white%20geometric%20lines%20representing%20modern%20ICT%20technology%20infrastructure%2C%20corporate%20headquarters%20location%20concept%2C%20aerial%20view%20of%20connected%20business%20district%20with%20data%20flow%20visualization%20and%20navigation%20elements&width=1920&height=600&seq=find-us-hero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              오시는 길
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-medium mb-1 sm:mb-2">
              Find Us
            </p>
            <p className="text-sm text-gray-600">
              Artiordex Headquarters & Offices 안내
            </p>
          </div>
        </section>

        {/* Location Info Section - Map + Address */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Map - Mobile First */}
              <div className="order-1 lg:order-1">
                <div className="bg-gray-100 rounded-xl lg:rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 lg:h-96">
                  <div 
                    className="w-full h-full bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url('https://readdy.ai/api/search-image?query=clean%20minimal%20map%20interface%20showing%20business%20district%20location%20with%20blue%20marker%20pin%2C%20simple%20street%20layout%20design%2C%20corporate%20style%20navigation%20map%20with%20clear%20roads%20and%20landmarks%2C%20professional%20cartographic%20style%20with%20azure%20blue%20accent%20colors%20and%20white%20background&width=600&height=400&seq=location-map-responsive&orientation=landscape')`
                    }}
                  >
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-md">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <i className="ri-map-pin-fill text-white text-xs sm:text-sm"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Information - Responsive */}
              <div className="order-2 lg:order-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">본사 위치</h2>
                
                <div className="space-y-6 sm:space-y-8">
                  {/* Korean Address */}
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                      <i className="ri-building-line text-blue-600 mr-2 sm:mr-3"></i>
                      한국어 주소
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      서울특별시 강남구 테헤란로 123<br />
                      Artiordex 사옥 7층<br />
                      우편번호: 06234
                    </p>
                  </div>

                  {/* English Address */}
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                      <i className="ri-global-line text-blue-600 mr-2 sm:mr-3"></i>
                      English Address
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Artiordex Headquarters<br />
                      123, Teheran-ro, Gangnam-gu<br />
                      Seoul, South Korea 06234
                    </p>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                      <i className="ri-time-line text-blue-600 mr-2 sm:mr-3"></i>
                      업무 시간
                    </h3>
                    <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                      <p><span className="font-medium">평일:</span> 09:00 - 18:00</p>
                      <p><span className="font-medium">점심시간:</span> 12:00 - 13:00</p>
                      <p><span className="font-medium">주말 및 공휴일:</span> 휴무</p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                      <i className="ri-phone-line text-blue-600 mr-2 sm:mr-3"></i>
                      연락처
                    </h3>
                    <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                      <p><span className="font-medium">대표전화:</span> 02-1234-5678</p>
                      <p><span className="font-medium">이메일:</span> contact@artiordex.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transportation Guide - Responsive Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">교통 안내</h2>
              <p className="text-lg sm:text-xl text-gray-600">다양한 교통수단으로 편리하게 방문하세요</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Public Transportation */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <i className="ri-subway-line text-xl sm:text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">지하철로 오시는 길</h3>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <p><span className="font-medium">지하철:</span> 2호선 강남역 3번 출구</p>
                  <p className="text-sm text-blue-600">도보 5분</p>
                  <p><span className="font-medium">버스:</span> 강남역 정류장</p>
                  <p className="text-xs sm:text-sm">146, 360, 740, N13 외 다수</p>
                </div>
              </div>

              {/* Walking */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <i className="ri-walk-line text-xl sm:text-2xl text-green-600"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">버스로 오시는 길</h3>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <p><span className="font-medium">강남역에서:</span> 도보 5분</p>
                  <p><span className="font-medium">경로:</span> 3번 출구 → 테헤란로 직진</p>
                  <p><span className="font-medium">도착:</span> 사옥 1층 로비 진입</p>
                  <p className="text-xs sm:text-sm text-green-600">안내 데스크에서 확인</p>
                </div>
              </div>

              {/* Car/Taxi */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <i className="ri-car-line text-xl sm:text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">자가용으로 오시는 길</h3>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <p><span className="font-medium">네비게이션:</span> "Artiordex 본사"</p>
                  <p><span className="font-medium">주요 랜드마크:</span></p>
                  <p className="text-xs sm:text-sm">• 강남역 CGV 인근</p>
                  <p className="text-xs sm:text-sm">• 테헤란로 메인 도로변</p>
                  <p className="text-xs sm:text-sm text-orange-600">지하 주차장 이용 가능</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parking Information - Responsive */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">주차 안내</h2>
              <p className="text-lg sm:text-xl text-gray-600">방문객을 위한 편리한 주차 서비스</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className="ri-parking-box-line text-white text-lg sm:text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">지하 주차장</h3>
                <p className="text-xs sm:text-sm text-gray-600">B1~B3층 이용 가능</p>
              </div>

              <div className="bg-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className="ri-time-line text-white text-lg sm:text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">이용 시간</h3>
                <p className="text-xs sm:text-sm text-gray-600">24시간 이용 가능</p>
              </div>

              <div className="bg-purple-50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className="ri-gift-line text-white text-lg sm:text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">방문객 혜택</h3>
                <p className="text-xs sm:text-sm text-gray-600">2시간 무료 주차</p>
              </div>

              <div className="bg-yellow-50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className="ri-charging-pile-line text-white text-lg sm:text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">전기차 충전</h3>
                <p className="text-xs sm:text-sm text-gray-600">B2층 충전소 운영</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <i className="ri-route-line text-blue-600 mr-2 sm:mr-3"></i>
                주차장 진입 안내
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">진입 경로</h4>
                  <ul className="space-y-1 text-gray-700 text-xs sm:text-sm">
                    <li>• 테헤란로에서 건물 우측 진입로 이용</li>
                    <li>• 지하 주차장 입구는 B1층</li>
                    <li>• 방문객 전용 구역 안내판 확인</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">주차 요금</h4>
                  <ul className="space-y-1 text-gray-700 text-xs sm:text-sm">
                    <li>• 방문객: 2시간 무료</li>
                    <li>• 추가 시간: 시간당 2,000원</li>
                    <li>• 1층 안내 데스크에서 정산</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visitor Guide - Responsive Steps */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">방문 절차 안내</h2>
              <p className="text-lg sm:text-xl text-gray-600">원활한 방문을 위한 단계별 안내</p>
            </div>

            {/* Desktop: Horizontal Steps, Mobile: Vertical Steps */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div className="pt-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-building-2-line text-blue-600 text-xl"></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">로비 방문</h3>
                  <p className="text-sm text-gray-600">건물 1층 로비 진입 후 안내 데스크 확인</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div className="pt-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-id-card-line text-green-600 text-xl"></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">신분 확인</h3>
                  <p className="text-sm text-gray-600">신분증 확인 및 방문객 출입증 발급</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div className="pt-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-user-follow-line text-purple-600 text-xl"></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">담당자 안내</h3>
                  <p className="text-sm text-gray-600">담당자 연락 후 회의실로 안내</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div className="pt-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-discuss-line text-orange-600 text-xl"></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">미팅 진행</h3>
                  <p className="text-sm text-gray-600">상담, 프로젝트 미팅, 파트너 협의 진행</p>
                </div>
              </div>
            </div>

            {/* Mobile & Tablet: Vertical Steps */}
            <div className="lg:hidden space-y-6">
              {/* Step 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <i className="ri-building-2-line text-blue-600 text-lg"></i>
                    </div>
                    <h3 className="font-bold text-gray-900">로비 방문</h3>
                  </div>
                  <p className="text-sm text-gray-600">건물 1층 로비 진입 후 안내 데스크 확인</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <i className="ri-id-card-line text-green-600 text-lg"></i>
                    </div>
                    <h3 className="font-bold text-gray-900">신분 확인</h3>
                  </div>
                  <p className="text-sm text-gray-600">신분증 확인 및 방문객 출입증 발급</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <i className="ri-user-follow-line text-purple-600 text-lg"></i>
                    </div>
                    <h3 className="font-bold text-gray-900">담당자 안내</h3>
                  </div>
                  <p className="text-sm text-gray-600">담당자 연락 후 회의실로 안내</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                      <i className="ri-discuss-line text-orange-600 text-lg"></i>
                    </div>
                    <h3 className="font-bold text-gray-900">미팅 진행</h3>
                  </div>
                  <p className="text-sm text-gray-600">상담, 프로젝트 미팅, 파트너 협의 진행</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Facilities - Responsive Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">주변 편의시설</h2>
              <p className="text-lg sm:text-xl text-gray-600">방문 시 이용 가능한 주변 시설 안내</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Cafes */}
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className="ri-cup-line text-xl sm:text-2xl text-amber-600"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">카페</h3>
                <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                  <li>스타벅스 강남역점</li>
                  <li>투썸플레이스</li>
                  <li>이디야커피</li>
                </ul>
              </div>

              {/* Convenience Store */}
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className="ri-store-line text-xl sm:text-2xl text-green-600"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">편의점</h3>
                <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                  <li>CU 강남역점</li>
                  <li>GS25</li>
                  <li>세븐일레븐</li>
                </ul>
              </div>

              {/* Bank/ATM */}
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className="ri-bank-line text-xl sm:text-2xl text-blue-600"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">은행/ATM</h3>
                <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                  <li>국민은행 강남역지점</li>
                  <li>신한은행</li>
                  <li>우리은행 ATM</li>
                </ul>
              </div>

              {/* Restaurants */}
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className="ri-restaurant-line text-xl sm:text-2xl text-red-600"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">추천 점심 식당</h3>
                <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                  <li>한식당 강남본점</li>
                  <li>이탈리안 레스토랑</li>
                  <li>일식당 사쿠라</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA - Responsive */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Artiordex와의 협업이 궁금하신가요?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
              언제든지 편리한 시간에 방문하여 상담받으세요
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap">
                프로젝트 문의
              </button>
              <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 transition-colors whitespace-nowrap">
                상담 예약
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
      <QuickBar />
    </div>
  );
};

export default LocationPage;