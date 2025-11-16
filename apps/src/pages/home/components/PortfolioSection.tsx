
import { useState, useEffect, useRef } from 'react';

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
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

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI/ML Solutions' },
    { id: 'cloud', name: 'Cloud Infrastructure' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20on%20laptop%20screen%2C%20clean%20minimalist%20design%20with%20product%20grid%20layout%2C%20professional%20web%20development%20showcase%2C%20bright%20clean%20background%20with%20subtle%20shadows&width=600&height=400&seq=4&orientation=landscape',
      description: 'Full-stack e-commerce solution with advanced analytics and AI-powered recommendations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      results: ['300% increase in conversions', '50% faster load times', '99.9% uptime'],
      link: '#'
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      image: 'https://readdy.ai/api/search-image?query=Healthcare%20mobile%20app%20interface%20on%20smartphone%2C%20modern%20medical%20application%20design%20with%20clean%20UI%2C%20telemedicine%20app%20mockup%2C%20professional%20healthcare%20technology%20showcase%20with%20clean%20background&width=600&height=400&seq=5&orientation=landscape',
      description: 'HIPAA-compliant telemedicine platform connecting patients with healthcare providers.',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'AWS'],
      results: ['10,000+ active users', 'HIPAA compliant', '4.8 app store rating'],
      link: '#'
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      category: 'ai',
      image: 'https://readdy.ai/api/search-image?query=AI%20analytics%20dashboard%20on%20computer%20screen%2C%20data%20visualization%20with%20charts%20and%20graphs%2C%20machine%20learning%20interface%20design%2C%20modern%20business%20intelligence%20platform%2C%20clean%20professional%20background&width=600&height=400&seq=6&orientation=landscape',
      description: 'Machine learning-powered business intelligence platform for data-driven decisions.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      results: ['85% prediction accuracy', '60% faster insights', 'Real-time processing'],
      link: '#'
    },
    {
      id: 4,
      title: 'Cloud Migration Project',
      category: 'cloud',
      image: 'https://readdy.ai/api/search-image?query=Cloud%20infrastructure%20visualization%2C%20modern%20data%20center%20servers%20and%20cloud%20computing%20architecture%2C%20professional%20technology%20infrastructure%20diagram%2C%20clean%20technical%20background%20with%20network%20connections&width=600&height=400&seq=7&orientation=landscape',
      description: 'Enterprise cloud migration with 99.99% uptime and 40% cost reduction.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      results: ['40% cost reduction', '99.99% uptime', 'Zero downtime migration'],
      link: '#'
    },
    {
      id: 5,
      title: 'FinTech Web Platform',
      category: 'web',
      image: 'https://readdy.ai/api/search-image?query=Financial%20technology%20web%20platform%20interface%2C%20modern%20banking%20dashboard%20design%2C%20fintech%20application%20on%20laptop%20screen%2C%20professional%20financial%20software%20interface%20with%20clean%20background&width=600&height=400&seq=8&orientation=landscape',
      description: 'Secure financial platform with real-time trading and portfolio management.',
      technologies: ['Vue.js', 'Express', 'Redis', 'WebSocket'],
      results: ['Bank-grade security', 'Real-time trading', '500ms response time'],
      link: '#'
    },
    {
      id: 6,
      title: 'Smart IoT Solution',
      category: 'ai',
      image: 'https://readdy.ai/api/search-image?query=Smart%20IoT%20dashboard%20interface%20showing%20connected%20devices%2C%20modern%20internet%20of%20things%20control%20panel%2C%20smart%20home%20automation%20system%20on%20tablet%2C%20clean%20technology%20background&width=600&height=400&seq=9&orientation=landscape',
      description: 'IoT platform managing 10,000+ connected devices with predictive maintenance.',
      technologies: ['Node.js', 'MQTT', 'InfluxDB', 'Grafana'],
      results: ['10,000+ devices', '30% maintenance savings', 'Predictive alerts'],
      link: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <section ref={sectionRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              Our <span className="bg-gradient-to-r from-primary-500 to-gradient-to bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto mb-12">
              Explore our successful projects that showcase our expertise in delivering 
              innovative technology solutions across various industries.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeFilter === category.id
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-gray-100 text-dark-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-elevation border border-gray-200/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <button className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium border border-white/30">
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-dark-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-dark-600 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-primary-500 font-medium group-hover:text-primary-600 transition-colors duration-300">
                    <span className="mr-2">View Project</span>
                    <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover object-top"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-bold text-dark-900 mb-4">{selectedProject.title}</h3>
              <p className="text-dark-600 mb-6 leading-relaxed">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-dark-900 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-primary-100 text-primary-600 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-dark-900 mb-4">Key Results</h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result: string, index: number) => (
                      <li key={index} className="flex items-center text-dark-600">
                        <i className="ri-check-line text-accent-green mr-2"></i>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors cursor-pointer whitespace-nowrap">
                  View Live Project
                </button>
                <button className="px-6 py-3 border-2 border-primary-500 text-primary-500 rounded-lg font-medium hover:bg-primary-50 transition-colors cursor-pointer whitespace-nowrap">
                  Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioSection;