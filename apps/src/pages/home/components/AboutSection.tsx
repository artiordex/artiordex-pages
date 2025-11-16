
import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    awards: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { key: 'projects', label: 'Projects Completed', target: 250, suffix: '+' },
    { key: 'clients', label: 'Happy Clients', target: 150, suffix: '+' },
    { key: 'years', label: 'Years Experience', target: 8, suffix: '' },
    { key: 'awards', label: 'Industry Awards', target: 25, suffix: '+' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    stats.forEach(stat => {
      let current = 0;
      const increment = stat.target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [stat.key]: Math.floor(current)
        }));
      }, 40);
    });
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            About <span className="bg-gradient-to-r from-primary-500 to-gradient-to bg-clip-text text-transparent">TechCorp</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to creating innovative solutions 
            that drive digital transformation and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Vision & Mission */}
          <div className={`bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-glass border border-gray-200/50 backdrop-blur-sm transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6">
              <i className="ri-eye-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-dark-900 mb-4">Our Vision</h3>
            <p className="text-dark-600 leading-relaxed">
              To be the leading catalyst for digital innovation, empowering businesses to thrive 
              in an increasingly connected world through cutting-edge technology solutions.
            </p>
          </div>

          {/* Core Values */}
          <div className={`bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-glass border border-gray-200/50 backdrop-blur-sm transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <div className="w-16 h-16 bg-gradient-to-r from-accent-green to-primary-500 rounded-xl flex items-center justify-center mb-6">
              <i className="ri-heart-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-dark-900 mb-4">Core Values</h3>
            <ul className="text-dark-600 space-y-2">
              <li className="flex items-center">
                <i className="ri-check-line text-accent-green mr-2"></i>
                Innovation & Excellence
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-accent-green mr-2"></i>
                Client-Centric Approach
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-accent-green mr-2"></i>
                Continuous Learning
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-accent-green mr-2"></i>
                Ethical Practices
              </li>
            </ul>
          </div>

          {/* Company Stats */}
          <div className={`bg-gradient-to-br from-dark-900 to-dark-800 p-8 rounded-2xl shadow-glass border border-gray-700/50 backdrop-blur-sm transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            <div className="w-16 h-16 bg-gradient-to-r from-accent-orange to-primary-500 rounded-xl flex items-center justify-center mb-6">
              <i className="ri-trophy-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Impact</h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.key} className="text-center">
                  <div className="text-2xl font-bold text-primary-400 mb-1">
                    {counters[stat.key as keyof typeof counters]}{stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-dark-900 mb-8">Meet Our Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'CEO & Founder',
                image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20woman%20CEO%20in%20modern%20office%20setting%2C%20confident%20business%20leader%20wearing%20elegant%20blazer%2C%20clean%20corporate%20headshot%20with%20soft%20lighting%20and%20neutral%20background%2C%20executive%20portrait%20photography%20style&width=300&height=400&seq=1&orientation=portrait',
                bio: 'Visionary leader with 15+ years in tech innovation'
              },
              {
                name: 'Marcus Rodriguez',
                role: 'CTO',
                image: 'https://readdy.ai/api/search-image?query=Professional%20Hispanic%20male%20CTO%20in%20modern%20tech%20office%2C%20experienced%20technology%20executive%20wearing%20smart%20casual%20attire%2C%20confident%20technical%20leader%20headshot%20with%20clean%20background%2C%20corporate%20portrait%20photography&width=300&height=400&seq=2&orientation=portrait',
                bio: 'Technical architect driving our engineering excellence'
              },
              {
                name: 'Emily Watson',
                role: 'Head of Design',
                image: 'https://readdy.ai/api/search-image?query=Professional%20Caucasian%20woman%20design%20director%20in%20creative%20workspace%2C%20innovative%20UX%20leader%20wearing%20modern%20professional%20attire%2C%20artistic%20yet%20corporate%20headshot%20with%20clean%20aesthetic%20background&width=300&height=400&seq=3&orientation=portrait',
                bio: 'Creative strategist shaping user-centered experiences'
              }
            ].map((member, index) => (
              <div key={index} className={`group transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${600 + index * 200}ms` }}>
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-dark-900 mb-2">{member.name}</h4>
                <p className="text-primary-500 font-medium mb-2">{member.role}</p>
                <p className="text-dark-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;