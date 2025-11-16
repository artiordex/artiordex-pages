
const FeaturedPostsSection = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "AI 기반 자동화 솔루션의 미래",
      excerpt: "인공지능과 RPA 기술의 융합으로 만들어지는 차세대 비즈니스 자동화 전략을 살펴봅니다.",
      category: "AI & Automation",
      readTime: "8분",
      date: "2024년 1월 15일",
      image: "https://readdy.ai/api/search-image?query=Futuristic%20AI%20automation%20dashboard%20with%20robotic%20process%20automation%20workflows%2C%20neural%20networks%2C%20and%20digital%20transformation%20elements%20in%20a%20clean%20modern%20interface&width=600&height=400&seq=ai-automation-future&orientation=landscape",
      notionUrl: "https://notion.so/artiordex/ai-automation-future"
    },
    {
      id: 2,
      title: "Microsoft 365 기반 디지털 워크스페이스 구축",
      excerpt: "Teams, SharePoint, Power Platform을 활용한 통합 협업 환경 구축 방법론을 제시합니다.",
      category: "Microsoft Solutions",
      readTime: "12분",
      date: "2024년 1월 12일",
      image: "https://readdy.ai/api/search-image?query=Modern%20Microsoft%20365%20workspace%20with%20Teams%20collaboration%2C%20SharePoint%20documents%2C%20and%20Power%20Platform%20apps%20displayed%20on%20multiple%20screens%20in%20a%20professional%20office%20setting&width=600&height=400&seq=microsoft-workspace&orientation=landscape",
      notionUrl: "https://notion.so/artiordex/microsoft-workspace"
    },
    {
      id: 3,
      title: "데이터 인텔리전스로 경영 혁신하기",
      excerpt: "빅데이터 분석과 비즈니스 인텔리전스를 통한 데이터 기반 의사결정 체계 구축 사례를 공유합니다.",
      category: "Data Intelligence",
      readTime: "10분",
      date: "2024년 1월 10일",
      image: "https://readdy.ai/api/search-image?query=Advanced%20data%20analytics%20dashboard%20with%20business%20intelligence%20charts%2C%20graphs%2C%20and%20KPI%20metrics%20displayed%20on%20large%20monitors%20in%20a%20modern%20data%20center%20environment&width=600&height=400&seq=data-intelligence&orientation=landscape",
      notionUrl: "https://notion.so/artiordex/data-intelligence"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            주요 <span className="text-blue-600">인사이트</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artiordex 전문가들이 엄선한 최신 기술 트렌드와 비즈니스 혁신 사례
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <a href={post.notionUrl} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} 읽기</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                    <span>노션에서 읽기</span>
                    <i className="ri-external-link-line ml-2 text-sm"></i>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostsSection;
