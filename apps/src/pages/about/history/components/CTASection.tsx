
const CTASection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            함께 만들어갈 미래
          </h2>
          <p className="text-lg text-gray-600">
            Artiordex와 함께 디지털 전환의 새로운 여정을 시작하세요.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
            <i className="ri-mail-line mr-2"></i>
            프로젝트 문의
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold whitespace-nowrap cursor-pointer">
            <i className="ri-calendar-line mr-2"></i>
            상담 예약
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
