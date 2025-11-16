
import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // 폼 제출 로직 (실제 구현 시 get_form_url 도구 사용)
    console.log('Newsletter subscription:', email);
    setIsSubmitted(true);
    setEmail('');
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <i className="ri-mail-line text-6xl text-blue-200 mb-6"></i>
            <h2 className="text-4xl font-bold text-white mb-4">
              최신 인사이트를 놓치지 마세요
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Artiordex의 기술 트렌드, 비즈니스 혁신 사례, 그리고 전문가 인사이트를 
              이메일로 받아보세요. 매주 엄선된 콘텐츠를 전달해드립니다.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap disabled:opacity-50"
              >
                {isSubmitted ? '구독 완료!' : '구독하기'}
              </button>
            </div>
          </form>

          <p className="text-blue-200 text-sm mt-4">
            언제든지 구독을 취소할 수 있습니다. 개인정보는 안전하게 보호됩니다.
          </p>

          <div className="flex justify-center items-center mt-12 space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5,000+</div>
              <div className="text-blue-200">구독자</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-blue-200">만족도</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">매주</div>
              <div className="text-blue-200">새로운 인사이트</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
