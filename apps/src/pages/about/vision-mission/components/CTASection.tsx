import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          기술로 연결하고, 혁신으로 성장하며,<br />함께 미래를 만듭니다
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Artiordex와 함께 디지털 전환을 시작하세요.<br />
          우리는 당신의 비즈니스가 지속 가능한 혁신을 이룰 수 있도록 지원합니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <i className="ri-mail-line mr-2"></i>
            상담 문의하기
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold whitespace-nowrap"
          >
            <i className="ri-service-line mr-2"></i>
            서비스 둘러보기
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: '350%', label: '연간 성장 목표' },
            { number: '12+', label: '파트너 기업' },
            { number: '75%', label: '업무 자동화율' },
            { number: '2026', label: '설립 연도' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
