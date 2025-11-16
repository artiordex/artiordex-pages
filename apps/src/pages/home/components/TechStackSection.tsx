
import { useEffect, useRef, useState } from 'react';

const TechStackSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const techCategories = [
    {
      title: 'Frontend',
      technologies: [
        { name: 'React', icon: 'ri-reactjs-line', color: 'text-blue-500' },
        { name: 'Vue.js', icon: 'ri-vuejs-line', color: 'text-green-500' },
        { name: 'Angular', icon: 'ri-angularjs-line', color: 'text-red-500' },
        { name: 'Next.js', icon: 'ri-nextjs-line', color: 'text-gray-800' },
        { name: 'TypeScript', icon: 'ri-javascript-line', color: 'text-blue-600' },
        { name: 'Tailwind', icon: 'ri-css3-line', color: 'text-cyan-500' }
      ]
    },
    {
      title: 'Backend',
      technologies: [
        { name: 'Node.js', icon: 'ri-nodejs-line', color: 'text-green-600' },
        { name: 'Python', icon: 'ri-python-line', color: 'text-yellow-500' },
        { name: 'Java', icon: 'ri-java-line', color: 'text-orange-600' },
        { name: 'Go', icon: 'ri-code-line', color: 'text-blue-400' },
        { name: 'PHP', icon: 'ri-php-line', color: 'text-purple-600' },
        { name: 'C#', icon: 'ri-microsoft-line', color: 'text-blue-700' }
      ]
    },
    {
      title: 'Databases',
      technologies: [
        { name: 'PostgreSQL', icon: 'ri-database-line', color: 'text-blue-600' },
        { name: 'MongoDB', icon: 'ri-leaf-line', color: 'text-green-600' },
        { name: 'Redis', icon: 'ri-database-2-line', color: 'text-red-500' },
        { name: 'MySQL', icon: 'ri-database-line', color: 'text-orange-500' },
        { name: 'Elasticsearch', icon: 'ri-search-line', color: 'text-yellow-600' },
        { name: 'Firebase', icon: 'ri-fire-line', color: 'text-orange-400' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', icon: 'ri-amazon-line', color: 'text-orange-500' },
        { name: 'Azure', icon: 'ri-microsoft-line', color: 'text-blue-600' },
        { name: 'Docker', icon: 'ri-ship-line', color: 'text-blue-500' },
        { name: 'Kubernetes', icon: 'ri-settings-3-line', color: 'text-blue-700' },
        { name: 'Jenkins', icon: 'ri-tools-line', color: 'text-gray-600' },
        { name: 'Terraform', icon: 'ri-building-line', color: 'text-purple-600' }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-dark-900 via-dark-800 to-gradient-to text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-primary-400 to-accent-green bg-clip-text text-transparent">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and industry-leading tools to deliver 
            robust, scalable, and future-proof solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-700 hover:bg-white/10 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary-400 to-accent-green bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="group flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/5 hover:border-white/20"
                  >
                    <div className={`w-12 h-12 flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 ${tech.color}`}>
                      <i className={`${tech.icon} text-2xl`}></i>
                    </div>
                    <span className="text-sm font-medium text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Auto-scrolling Logo Carousel */}
        <div className="relative overflow-hidden">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">
            Trusted by Industry Leaders
          </h3>
          
          <div className="flex space-x-12 animate-scroll">
            {[
              'Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Netflix', 'Spotify', 'Uber',
              'Airbnb', 'Tesla', 'Stripe', 'Shopify', 'Slack', 'Zoom', 'Adobe', 'Salesforce'
            ].concat([
              'Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Netflix', 'Spotify', 'Uber'
            ]).map((company, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                <span className="text-white/80 font-medium text-sm">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-300">Certifications & Partnerships</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: 'AWS Certified', icon: 'ri-award-line', color: 'text-orange-400' },
              { name: 'Azure Partner', icon: 'ri-medal-line', color: 'text-blue-400' },
              { name: 'Google Cloud', icon: 'ri-trophy-line', color: 'text-green-400' },
              { name: 'ISO 27001', icon: 'ri-shield-check-line', color: 'text-purple-400' }
            ].map((cert, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 bg-white/5 px-6 py-3 rounded-full border border-white/10"
              >
                <i className={`${cert.icon} text-xl ${cert.color}`}></i>
                <span className="text-gray-300 font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;