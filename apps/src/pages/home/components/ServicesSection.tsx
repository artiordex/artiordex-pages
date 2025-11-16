
import { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
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

  const services = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices for optimal performance and scalability.',
      features: ['React & Next.js', 'Node.js Backend', 'Cloud Deployment', 'Performance Optimization'],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: 'ri-palette-line',
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive, engaging, and conversion-focused digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-accent-green to-primary-500'
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.',
      features: ['AWS & Azure', 'DevOps Setup', 'Auto Scaling', 'Security Compliance'],
      color: 'from-accent-orange to-primary-500'
    },
    {
      icon: 'ri-brain-line',
      title: 'AI/ML Development',
      description: 'Intelligent solutions powered by machine learning and artificial intelligence to automate and enhance your processes.',
      features: ['Custom AI Models', 'Data Analytics', 'Automation', 'Predictive Insights'],
      color: 'from-gradient-from to-gradient-to'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Security Solutions',
      description: 'Comprehensive cybersecurity services to protect your digital assets and ensure compliance with industry standards.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Monitoring'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Technical Consulting',
      description: 'Strategic technology guidance to help you make informed decisions and optimize your digital transformation journey.',
      features: ['Technology Strategy', 'Architecture Review', 'Team Training', 'Process Optimization'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Our <span className="bg-gradient-to-r from-primary-500 to-gradient-to bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-elevation border border-gray-200/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-dark-900 mb-4 group-hover:text-primary-500 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-dark-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-dark-600">
                    <i className="ri-check-line text-accent-green mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center text-primary-500 font-medium group-hover:text-primary-600 transition-colors duration-300">
                <span className="mr-2">Learn More</span>
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-gradient-to rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your technology goals 
              and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 cursor-pointer whitespace-nowrap">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;