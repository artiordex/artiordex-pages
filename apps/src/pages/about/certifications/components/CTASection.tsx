const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          협업 또는 기술 제휴를 원하시나요?
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          아티올덱스와 함께 디지털 혁신을 이끌어갈 파트너를 찾고 있습니다. 
          검증된 기술력과 전문성을 바탕으로 성공적인 협업을 시작해보세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap cursor-pointer">
            <i className="ri-mail-line mr-2"></i>
            프로젝트 문의
          </button>
          <button className="border-2 border-blue-600 text-blue-600 py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold whitespace-nowrap cursor-pointer">
            <i className="ri-calendar-line mr-2"></i>
            상담 예약
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;