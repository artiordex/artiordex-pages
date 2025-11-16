
const CategoriesSection = () => {
  const categories = [
    {
      name: "AI & Automation",
      description: "인공지능과 자동화 기술의 최신 동향",
      icon: "ri-robot-line",
      count: 24,
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Microsoft Solutions",
      description: "Microsoft 기반 엔터프라이즈 솔루션",
      icon: "ri-microsoft-line",
      count: 18,
      color: "bg-green-100 text-green-600"
    },
    {
      name: "Data Intelligence",
      description: "데이터 분석과 비즈니스 인텔리전스",
      icon: "ri-bar-chart-line",
      count: 15,
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Digital Transformation",
      description: "디지털 전환 전략과 실행 방법론",
      icon: "ri-refresh-line",
      count: 21,
      color: "bg-orange-100 text-orange-600"
    },
    {
      name: "Custom Development",
      description: "맞춤형 앱/웹 개발 사례와 기술",
      icon: "ri-code-line",
      count: 12,
      color: "bg-red-100 text-red-600"
    },
    {
      name: "Consulting",
      description: "전략 컨설팅과 비즈니스 혁신",
      icon: "ri-lightbulb-line",
      count: 9,
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            카테고리별 <span className="text-blue-600">탐색</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            관심 있는 분야의 전문 콘텐츠를 쉽게 찾아보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${category.icon} text-xl`}></i>
                </div>
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                  {category.count}개 포스트
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {category.name}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
