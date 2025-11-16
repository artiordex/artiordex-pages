
const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "Flitedeck will supposedly bring something completely different to high-end cycling.",
      source: "WIRED",
      avatar: "https://framerusercontent.com/images/ikxsNRX6B6Uq1mM0u7ZjZqFvs8.jpg?width=72&height=72",
      url: "https://www.wired.com/story/this-high-tech-handlebar-is-coming-with-help-from-onlyfans/"
    },
    {
      id: 2,
      title: "Is This Audacious, Innovative New Bike Component the Future of Cycling Technology?",
      source: "Gear Patrol",
      avatar: "https://framerusercontent.com/images/43CjwnYJ8yr9u9btuwQwmN6ktkI.jpg?width=72&height=72",
      url: "https://www.gearpatrol.com/outdoors/flitedeck-cycling-digital-cockpit/"
    },
    {
      id: 3,
      title: "FLITEDECK: Weltweit erstes smartes Rennradcockpit",
      source: "ROADBIKE",
      avatar: "https://framerusercontent.com/images/OKjEsn2Et4uJ2JxhMAtU79YOfg.jpg?width=72&height=72",
      url: "https://www.bike-x.de/rennrad/news/flitedeck/"
    }
  ];

  const featuredLogos = [
    { name: "Yanko Design", logo: "https://framerusercontent.com/images/o9U0Xx1ZSm68rqIbuSD9uAa6nJw.jpg?width=180&height=180", url: "https://www.yankodesign.com/2025/02/25/top-5-essential-bike-gear-upgrades-for-every-cyclist/" },
    { name: "TOUR Magazin", logo: "https://framerusercontent.com/images/qBnzT0ac0prg5f7Z6i7SwFpvZoE.jpg?width=180&height=180", url: "https://www.tour-magazin.de/kaufberatung/komponenten/lenker/flitedeck-rennrad-innovation-dank-onlyfans/" },
    { name: "Cycling Weekly", logo: "https://framerusercontent.com/images/I4Jd0BwFxgJh1e6WvUjBpM1APU.jpg?width=494&height=493", url: "https://www.cyclingweekly.com/news/game-changing-handlebar-funded-by-onlyfans-set-to-go-on-pre-order" },
    { name: "road.cc", logo: "https://framerusercontent.com/images/bIQROzCqyBLn8VgdUrnutrlwk.jpg?width=494&height=493", url: "https://road.cc/content/tech-news/flitedeck-virtual-cockpit-now-available-pre-order-shimano-sunglasses-maap-tech-of-week-312517" },
    { name: "RennRad", logo: "https://framerusercontent.com/images/9oNogQWq59mWrmkk4HcTDoX8.jpg?width=493&height=493", url: "https://www.instagram.com/p/DFm6fdzsqvH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { name: "Rennrad-News.de", logo: "https://framerusercontent.com/images/BE1Xjipeao2HNpUL8r5j60TAnM.jpg?width=494&height=493", url: "https://www.rennrad-news.de/news/flitedeck-rennradcockpit-interview-cycling-sina/" },
    { name: "GCN Tech", logo: "https://framerusercontent.com/images/kYIHvpfrmkhSspc0Hg6R5xMSs.jpg?width=493&height=493", url: "https://www.youtube.com/watch?v=pYKsWqKMINY" },
    { name: "WELT", logo: "https://framerusercontent.com/images/AagG1mEuD7RYZsXCvR4oLSwKcA.png?width=600&height=600", url: "https://www.welt.de/motor/news/article255400012/Aufgeraeumt-Digitaler-Fahrradlenker-Flitedeck.html" },
    { name: "GRINTA!", logo: "https://framerusercontent.com/images/nwRq1DSjQIxdkoRijEwflZ6zQ.jpg?width=494&height=493", url: "https://grinta.be/bike-to-the-future-rijden-we-binnenkort-allemaal-met-een-flitedeck-rond/" },
    { name: "Cycling at the bottom", logo: "https://framerusercontent.com/images/vBXk7yPwCU7k9ziTojWo0DcEQ.jpg?width=494&height=493", url: "https://www.ciclismoafondo.es/material/asi-es-el-primer-manillar-inteligente-del-mundo_304507_102_amp.htm" },
    { name: "Bici da Strada", logo: "https://framerusercontent.com/images/S5s154JRzvXCsaodCQKaEyegU.jpg?width=494&height=493", url: "https://www.bicidastrada.it/manubrio-flitedeck-display-touchscreen/" },
    { name: "Le Cycle", logo: "https://framerusercontent.com/images/ohKj7OqvcmvfeZc0pLrOffouRkI.jpg?width=494&height=493", url: "https://lecycle.fr/actualites/flite-flitedeck-le-tout-premier-combo-cintre-potence-intelligent/57496/" }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-500 text-sm font-medium mb-4">Publications</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            FLITEDECK in the spotlight
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Video */}
          <div className="rounded-2xl overflow-hidden">
            <video
              src="https://cdn.shopify.com/videos/c/o/v/87220c65931845adbf18c19c727ecc4c.mp4"
              controls
              muted
              playsInline
              poster="https://framerusercontent.com/images/Sm8xfF4Eyvo8bhEwNal8u5NnBZ0.jpg?width=1822&height=1226"
              className="w-full h-auto"
            />
          </div>

          {/* Articles */}
          <div className="space-y-6">
            {articles.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{article.title}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={article.avatar}
                        alt={article.source}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-gray-600">{article.source}</span>
                    </div>
                    <i className="ri-external-link-line text-gray-400"></i>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Featured In */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Featured in</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {featuredLogos.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white transition-colors cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <span className="text-xs text-gray-600 text-center font-medium">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
