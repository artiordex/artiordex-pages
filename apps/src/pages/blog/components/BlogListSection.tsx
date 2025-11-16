
const BlogListSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Power Automate로 업무 프로세스 자동화하기",
      excerpt: "Microsoft Power Automate를 활용한 반복 업무 자동화 구현 방법과 실제 적용 사례를 상세히 설명합니다.",
      category: "Microsoft Solutions",
      author: "김민수",
      date: "2024년 1월 8일",
      readTime: "6분",
      image: "https://readdy.ai/api/search-image?query=Microsoft%20Power%20Automate%20workflow%20automation%20interface%20with%20connected%20apps%20and%20process%20flows%20in%20a%20modern%20business%20environment&width=400&height=250&seq=power-automate&orientation=landscape",
      notionUrl: "https://notion.so/artiordex/power-automate-guide"
    },
    {
      id: 2,
      title: "SharePoint를 활용한 문서 관리 시스템 구축",
      excerpt: "기업의 문서 관리 효율성을 높이는 SharePoint 기반 협업 시스템 설계와 구현 전략을 제시합니다.",
      category: "Microsoft Solutions",
      author: "이지영",
      date: "2024년 1월 5일",
      readTime: "9분",
      image: "https://readdy.ai/api/search-image?query=SharePoint%20document%20management%20system%20with%20organized%20file%20structures%2C%20collaboration%20features%2C%20and%20modern%20interface%20design&width=400&height=250&seq=sharepoint-docs&orientation=landscape",
      notionUrl: "https://notion.so/artiordex/sharepoint-document-system"
    },
    {
      id: 3,
      title: "AI 챗봇 개발을 위한 자연어 처리 기술",
      excerpt: "고객 서비스 자동화를 위한 AI 챗봇 개발 과정에서 활용되는 최신 NLP 기술과 구현 방법론을 다룹니다.",
      category: "AI & Automation",
      author: "박준호",
      date: "2024년 1월 3일",
      readTime: "11분",
      image: "https://readdy.ai/api/search-image?query=AI%20chatbot%20interface%20with%20natural%20language%20processing%20visualization%2C%20conversation%20flows%2C%20and%20machine%20learning%20algorithms%20in%20a%20tech%20environment&width=400&height=250&seq=ai-chatbot-nlp&orientation=landscape",
      notionUrl: "https://notion.so/artiordex/ai-chatbot-nlp"
    },
    {
      id: 4,
      title: "클라우드 마이그레이션 전략과 실행 계획",
      excerpt: "온프레미스 시스템을 클라우드로 안전하고 효율적으로 이전하기 위한 단계별 마이그레이션 전략을 소개합니다.",
      category: "Digital Transformation",
      author: "최수진",
      date: "2024년 1월 1일",
      readTime: "13분",
      image: "https://readdy.ai/api/search-image?query=Cloud%20migration%20strategy%20visualization%20with%20data%20transfer%2C%20server%20infrastructure%2C%20and%20digital%20transformation%20elements%20in%20a%20professional%20setting&width=400&height=250&seq=cloud-migration&orientation=landscape",
      notionUrl: "https://notion.so/artiordex/cloud-migration-strategy"
    },
    {
      id: 5,
      title: "React Native를 활용한 크로스플랫폼 앱 개발",
      excerpt: "하나의 코드베이스로 iOS와 Android 앱을 동시에 개발하는 React Native 활용법과 성능 최적화 팁을 공유합니다.",
      category: "Custom Development",
      author: "정태현",
      date: "2023년 12월 28일",
      readTime: "8분",
      image: "https://readdy.ai/api/search-image?query=React%20Native%20cross-platform%20mobile%20app%20development%20with%20code%20editor%2C%20smartphone%20mockups%2C%20and%20modern%20development%20environment&width=400&height=250&seq=react-native-dev&orientation=landscape",
      notionUrl: "https://notion.so/artiordex/react-native-development"
    },
    {
      id: 6,
      title: "비즈니스 인텔리전스 대시보드 설계 원칙",
      excerpt: "효과적인 데이터 시각화와 의사결정 지원을 위한 BI 대시보드 설계 방법론과 베스트 프랙티스를 제시합니다.",
      category: "Data Intelligence",
      author: "한소영",
      date: "2023년 12월 25일",
      readTime: "10분",
      image: "https://readdy.ai/api/search-image?query=Business%20intelligence%20dashboard%20with%20data%20visualization%20charts%2C%20KPI%20metrics%2C%20and%20analytics%20interface%20in%20a%20modern%20office%20environment&width=400&height=250&seq=bi-dashboard&orientation=landscape",
      notionUrl: "https://notion.so/artiordex/bi-dashboard-design"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            최신 <span className="text-blue-600">포스트</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artiordex 전문가들의 실무 경험과 기술 노하우를 담은 심화 콘텐츠
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <a href={post.notionUrl} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} 읽기</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
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

        <div className="text-center mt-12">
          <a 
            href="https://notion.so/artiordex" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap"
          >
            <span>노션에서 더 많은 포스트 보기</span>
            <i className="ri-external-link-line ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogListSection;
