
const CTASection = () => {
  const svgPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{ backgroundImage: svgPattern }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Comprehensive Engagement Invitation */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              혁신적인 기술과 전략적 실행이 만나는 곳에서 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 block mt-2">
                무한한 가능성을 실현합니다
              </span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-blue-100 mb-6 leading-relaxed">
                저희 포트폴리오는 프로세스 자동화, 플랫폼 개발, 또는 완전한 디지털 전환이 필요한 경우 
                Artiordex가 보유한 전문성과 검증된 실적의 일부분에 불과합니다.
              </p>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                <strong className="text-white">경쟁사가 귀하의 디지털 진화를 앞서가도록 두지 마세요</strong> – 
                개념 증명 상담을 통해 오늘부터 변화의 여정을 시작하세요.
              </p>
            </div>
          </div>

          {/* Performance Metrics Display System */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-200 text-xs md:text-sm">완료된 프로젝트</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">₩100억+</div>
              <div className="text-blue-200 text-xs md:text-sm">고객 비용 절감</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">45일</div>
              <div className="text-blue-200 text-xs md:text-sm">평균 프로젝트 완료</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-200 text-xs md:text-sm">고객 만족도</div>
            </div>
          </div>

          {/* Technology Stack Diversity */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
              <i className="ri-stack-line mr-2 text-orange-400"></i>
              25+ 기술 스택 다양성
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
              {[
                { name: 'Microsoft Power Platform', icon: 'ri-microsoft-line' },
                { name: 'Azure Cloud Services', icon: 'ri-cloud-line' },
                { name: 'Next.js & React', icon: 'ri-reactjs-line' },
                { name: 'AI & Machine Learning', icon: 'ri-robot-line' },
                { name: 'Python & C++', icon: 'ri-code-s-slash-line' }
              ].map((tech, index) => (
                <div key={index} className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <i className={`${tech.icon} text-2xl text-orange-400 mb-2 block`}></i>
                  <div className="text-white text-sm font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16">
            <button 
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap min-h-[44px]"
              onClick={() => {
                window.location.href = 'mailto:contact@artiordex.com?subject=맞춤형 솔루션 문의';
              }}
            >
              <i className="ri-phone-line mr-2 text-lg"></i>
              우리 조직에 맞는 솔루션 문의
            </button>
            <button 
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 border border-white/30 hover:border-white/50 transition-all duration-300 whitespace-nowrap min-h-[44px]"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/portfolio-brochure.pdf';
                link.download = 'Artiordex_Portfolio_2024.pdf';
                link.click();
              }}
            >
              <i className="ri-download-line mr-2 text-lg"></i>
              포트폴리오 자료 다운로드
            </button>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            <div className="text-center p-4">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-white text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">빠른 PoC 제공</h3>
              <p className="text-blue-200 text-sm">2주 내 개념 증명 구현</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-white text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">Microsoft 파트너 인증</h3>
              <p className="text-blue-200 text-sm">공식 인증된 전문성</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-rocket-line text-white text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">실행 보장</h3>
              <p className="text-blue-200 text-sm">결과 중심의 프로젝트 수행</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-white text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">전담팀 배정</h3>
              <p className="text-blue-200 text-sm">프로젝트별 전문팀 구성</p>
            </div>
          </div>

          {/* Contact Information - Mobile Optimized */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">지금 바로 상담받으세요</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="flex items-center justify-center mb-3">
                  <i className="ri-phone-line text-orange-400 text-2xl mr-2"></i>
                  <span className="text-white font-semibold">전화 상담</span>
                </div>
                <a 
                  href="tel:02-1234-5678" 
                  className="text-blue-200 hover:text-white transition-colors text-lg font-medium block mb-2"
                >
                  02-1234-5678
                </a>
                <p className="text-blue-300 text-sm">평일 09:00 - 18:00</p>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-center mb-3">
                  <i className="ri-mail-line text-orange-400 text-2xl mr-2"></i>
                  <span className="text-white font-semibold">이메일 문의</span>
                </div>
                <a 
                  href="mailto:contact@artiordex.com" 
                  className="text-blue-200 hover:text-white transition-colors text-lg font-medium block mb-2 break-all"
                >
                  contact@artiordex.com
                </a>
                <p className="text-blue-300 text-sm">24시간 접수 가능</p>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-center mb-3">
                  <i className="ri-map-pin-line text-orange-400 text-2xl mr-2"></i>
                  <span className="text-white font-semibold">방문 상담</span>
                </div>
                <p className="text-blue-200 text-lg font-medium mb-2">경기도 광명시</p>
                <p className="text-blue-300 text-sm">사전 예약 필수</p>
              </div>
            </div>

            {/* Additional Trust Signals */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-blue-200">
                <div className="flex items-center">
                  <i className="ri-shield-check-line text-green-400 mr-2"></i>
                  ISO 27001 인증
                </div>
                <div className="flex items-center">
                  <i className="ri-award-line text-yellow-400 mr-2"></i>
                  Microsoft Gold Partner
                </div>
                <div className="flex items-center">
                  <i className="ri-time-line text-blue-400 mr-2"></i>
                  평균 응답시간 2시간
                </div>
                <div className="flex items-center">
                  <i className="ri-customer-service-line text-purple-400 mr-2"></i>
                  24/7 기술 지원
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTASection;
