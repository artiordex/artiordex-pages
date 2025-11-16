
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Artiordex와 함께 디지털 전환을 구현해보세요
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            AI, 자동화, 데이터 통합을 통한 완전한 DX 솔루션으로 
            귀하의 비즈니스를 다음 단계로 발전시키세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg whitespace-nowrap"
            >
              프로젝트 문의
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              상담 예약
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-blue-500/30">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <i className="ri-mail-line"></i>
                <span>contact@artiordex.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-phone-line"></i>
                <span>02-1234-5678</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
