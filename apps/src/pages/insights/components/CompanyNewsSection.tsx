import { useState, useEffect } from 'react';

const CompanyNewsSection = () => {
  const [selectedNews, setSelectedNews] = useState(0);

  const newsItems = [
    {
      id: 1,
      category: 'Strategic Partnership',
      title: 'Microsoft Ecosystem Integration Leadership',
      summary: 'Artiordex establishes itself as a premier AX/DX Solution Partner, leveraging Microsoft Power Platform and Azure cloud services. Strategic partnerships with Microsoft, NTT, SK Hynix, KT DS, and LG U+ position the company at the forefront of digital transformation.',
      date: '2024-12-15',
      image: 'https://readdy.ai/api/search-image?query=Corporate%20handshake%20between%20technology%20executives%20in%20modern%20office%20with%20Microsoft%20Azure%20and%20partnership%20logos%20displayed%20on%20digital%20screens%2C%20professional%20business%20atmosphere&width=400&height=300&seq=partnership-news&orientation=landscape',
      tags: ['Microsoft Partner', 'Strategic Alliance', 'Digital Transformation'],
      readTime: '3 min read'
    },
    {
      id: 2,
      category: 'Growth Milestone',
      title: 'Accelerated Growth Trajectory & Financial Targets',
      summary: 'Company achieves Microsoft Partner certification milestone while targeting AI Platform MVP completion by Q4 2026-Q1 2027. Strategic roadmap includes securing 10 public institution PoCs and reaching first 500 million KRW in sales by Q2-Q3 2027.',
      date: '2024-12-10',
      image: 'https://readdy.ai/api/search-image?query=Financial%20growth%20charts%20and%20milestone%20achievements%20displayed%20on%20modern%20digital%20dashboard%20with%20upward%20trending%20graphs%2C%20corporate%20success%20visualization%20in%20blue%20and%20orange%20colors&width=400&height=300&seq=growth-news&orientation=landscape',
      tags: ['Growth Target', 'Financial Milestone', 'AI Platform'],
      readTime: '4 min read'
    },
    {
      id: 3,
      category: 'Team Excellence',
      title: 'Expert Certifications & Technical Leadership',
      summary: 'Artiordex team achieves multiple Microsoft Certified Expert and Associate certifications across Azure Developer, Data Analyst, DevOps Engineer, and Solutions Architect domains. CEO Shiwoo Min leads the AX/DX Development Team with proven expertise in full-stack development and DevOps engineering.',
      date: '2024-12-05',
      image: 'https://readdy.ai/api/search-image?query=Professional%20team%20of%20certified%20technology%20experts%20working%20with%20multiple%20computer%20screens%20showing%20Azure%20certifications%20and%20development%20environments%2C%20modern%20tech%20office%20setting&width=400&height=300&seq=team-news&orientation=landscape',
      tags: ['Team Expertise', 'Microsoft Certified', 'Technical Leadership'],
      readTime: '2 min read'
    }
  ];

  const currentNews = newsItems[selectedNews];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Company Updates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest News & Milestones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with Artiordex's latest achievements, strategic partnerships, 
            and technological advancements in the digital transformation space.
          </p>
        </div>

        {/* Featured News Card */}
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl overflow-hidden shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mr-3">
                  {currentNews.category}
                </span>
                <span className="text-gray-500 text-sm">{currentNews.date}</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {currentNews.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {currentNews.summary}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentNews.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white text-gray-600 text-sm rounded-full border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Read More */}
              <div className="flex items-center justify-between">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300">
                  Read Full Article
                </button>
                <span className="text-gray-500 text-sm">{currentNews.readTime}</span>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <img
                src={currentNews.image}
                alt={currentNews.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* News Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((news, index) => (
            <div
              key={news.id}
              onClick={() => setSelectedNews(index)}
              className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                selectedNews === index
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center mb-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  selectedNews === index
                    ? 'bg-white/20 text-white'
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  {news.category}
                </span>
              </div>
              
              <h4 className={`font-bold mb-2 ${
                selectedNews === index ? 'text-white' : 'text-gray-900'
              }`}>
                {news.title}
              </h4>
              
              <p className={`text-sm ${
                selectedNews === index ? 'text-white/80' : 'text-gray-600'
              }`}>
                {news.summary.substring(0, 100)}...
              </p>
              
              <div className={`flex items-center justify-between mt-4 text-xs ${
                selectedNews === index ? 'text-white/70' : 'text-gray-500'
              }`}>
                <span>{news.date}</span>
                <span>{news.readTime}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="mt-16 bg-gray-900 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Company Performance Metrics
            </h3>
            <p className="text-gray-300">
              Real-time insights into Artiordex's growth and achievements
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">350%</div>
              <div className="text-white font-medium mb-1">Annual Growth</div>
              <div className="text-gray-400 text-sm">Revenue Target</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">12+</div>
              <div className="text-white font-medium mb-1">Partners</div>
              <div className="text-gray-400 text-sm">Strategic Alliances</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">75%</div>
              <div className="text-white font-medium mb-1">Automation</div>
              <div className="text-gray-400 text-sm">Process Efficiency</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500M</div>
              <div className="text-white font-medium mb-1">KRW Target</div>
              <div className="text-gray-400 text-sm">2027 Sales Goal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyNewsSection;