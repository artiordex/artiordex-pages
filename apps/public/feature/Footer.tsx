
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
        {/* Fixed: use a template literal for className to avoid JSX parsing errors caused by unescaped double quotes */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]`}
        ></div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-gray-700/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6">
              <i className="ri-robot-line text-2xl text-white"></i>
            </div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AI 혁신 소식 받기
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              최신 AI 기술 동향, DevOps 베스트 프랙티스, 그리고 Artiordex의 혁신적인 자동화 솔루션 소식을 받아보세요.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <>
                    <i className="ri-check-line mr-2"></i>
                    구독 완료!
                  </>
                ) : (
                  <>
                    <i className="ri-mail-send-line mr-2"></i>
                    구독하기
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <img
                src="/images/header_logo.png"
                alt="Artiordex - AI Automation & DevOps Solutions"
                className="h-14 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const sibling = e.currentTarget.nextElementSibling as HTMLElement | null;
                  if (sibling) sibling.style.display = 'block';
                }}
              />
              <div
                className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent hidden"
                style={{ fontFamily: '"Pacifico", serif' }}
              >
                Artiordex
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              AI Agents와 DevOps 전문성을 바탕으로 확장 가능한 웹 서비스, 클라우드 네이티브 인프라,
              그리고 지능형 자동화 솔루션을 제공하는 디지털 혁신 파트너입니다.
            </p>

            {/* CEO & Company Details */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <h4 className="text-orange-400 font-semibold mb-4 flex items-center">
                <i className="ri-user-star-line mr-2"></i>
                Company Information
              </h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center space-x-3">
                  <i className="ri-user-line text-orange-400 w-4"></i>
                  <span>
                    <strong>CEO:</strong> 민시우 (Min Si-woo)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-code-s-slash-line text-orange-400 w-4"></i>
                  <span>
                    <strong>전문분야:</strong> Full-Stack Development, DevOps Engineering
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-map-pin-line text-orange-400 w-4"></i>
                  <span>
                    <strong>위치:</strong> 광명시, 대한민국
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-building-line text-orange-400 w-4"></i>
                  <span>
                    <strong>사업자등록번호:</strong> 123-45-67890
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-rocket-line text-orange-400 w-4"></i>
                  <span>
                    <strong>비전:</strong> Scalable Web Services & Intelligent Automation
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h4 className="text-orange-400 font-semibold flex items-center">
                <i className="ri-share-line mr-2"></i>
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { icon: 'ri-github-fill', href: '#', label: 'GitHub' },
                  { icon: 'ri-slack-fill', href: '#', label: 'Slack' },
                  { icon: 'ri-instagram-fill', href: '#', label: 'Instagram' },
                  { icon: 'ri-google-fill', href: '#', label: 'Google' },
                  { icon: 'ri-linkedin-fill', href: '#', label: 'LinkedIn' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer border border-gray-700/50 hover:border-orange-500/50 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ConnectWon */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-orange-400 flex items-center">
              <i className="ri-links-line mr-2"></i>
              ConnectWon
            </h4>
            <ul className="space-y-4">
              {[
                { name: '사회적 가치', href: '/social-value' },
                { name: '미션/비전', href: '/mission-vision' },
                { name: '팀 소개', href: '/team' },
                { name: '인사이트', href: '/insights' },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-orange-400 transition-all duration-300 cursor-pointer flex items-center group"
                  >
                    <i className="ri-arrow-right-s-line mr-2 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-orange-400 flex items-center">
              <i className="ri-service-line mr-2"></i>
              Services
            </h4>
            <ul className="space-y-4">
              {[
                { name: '공간/프로그램', href: '/space-program' },
                { name: '디바이스', href: '/devices' },
                { name: '크리에이터 신청', href: '/creator-apply' },
                { name: '이용 가이드', href: '/guide' },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-orange-400 transition-all duration-300 cursor-pointer flex items-center group"
                  >
                    <i className="ri-arrow-right-s-line mr-2 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-orange-400 flex items-center">
              <i className="ri-customer-service-line mr-2"></i>
              Support
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'FAQ', href: '/faq' },
                { name: '문의하기', href: '/contact' },
                { name: '공지사항', href: '/notice' },
                { name: '사이트맵', href: '/sitemap' },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-orange-400 transition-all duration-300 cursor-pointer flex items-center group"
                  >
                    <i className="ri-arrow-right-s-line mr-2 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="border-t border-gray-700/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-orange-400 mb-6 flex items-center justify-center">
              <i className="ri-stack-line mr-3"></i>
              Core Technologies & Expertise
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { tag: '#Full-Stack', color: 'from-blue-500 to-blue-600' },
                { tag: '#DevOps', color: 'from-green-500 to-green-600' },
                { tag: '#AI-Agents', color: 'from-purple-500 to-purple-600' },
                { tag: '#CloudNative', color: 'from-cyan-500 to-cyan-600' },
                { tag: '#OpenAI', color: 'from-orange-500 to-orange-600' },
                { tag: '#Data-Analysis', color: 'from-pink-500 to-pink-600' },
              ].map((tech, index) => (
                <span
                  key={index}
                  className={`px-6 py-3 bg-gradient-to-r ${tech.color} text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-default`}
                >
                  {tech.tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <div className="text-gray-400 text-center lg:text-left">
              <p className="text-lg font-medium">© 2024 Artiordex. All rights reserved.</p>
              <p className="text-sm mt-1">CEO: Min Si-woo | Digital Transformation Partner</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              {[
                { name: '이용약관', href: '/terms' },
                { name: '개인정보처리방침', href: '/privacy' },
                { name: '쿠키 정책', href: '/cookie-policy' },
                { name: 'Powered by Readdy', href: 'https://readdy.ai/?origin=logo' },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 cursor-pointer font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Contact Information */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <i className="ri-map-pin-line text-orange-400"></i>
                <span className="font-medium">광명시, 대한민국</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-time-line text-orange-400"></i>
                <span>24/7 AI Support</span>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 pt-8 border-t border-gray-700/30">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { icon: 'ri-robot-line', text: 'AI Automation', color: 'text-orange-400' },
                { icon: 'ri-cloud-line', text: 'Cloud Native', color: 'text-blue-400' },
                { icon: 'ri-shield-check-line', text: 'DevOps Security', color: 'text-green-400' },
                { icon: 'ri-time-line', text: '24/7 Monitoring', color: 'text-orange-400' },
                { icon: 'ri-global-line', text: 'Scalable Solutions', color: 'text-purple-400' },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-400 text-sm group cursor-default"
                >
                  <i
                    className={`${badge.icon} ${badge.color} text-lg group-hover:scale-110 transition-transform duration-300`}
                  ></i>
                  <span className="font-medium group-hover:text-gray-300 transition-colors duration-300">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
