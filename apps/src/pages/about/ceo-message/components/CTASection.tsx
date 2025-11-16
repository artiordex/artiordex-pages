const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Artiordex와 함께 시작하세요
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 whitespace-nowrap">
            프로젝트 문의
          </button>
          <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 transition-colors duration-200 whitespace-nowrap">
            상담 예약
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;