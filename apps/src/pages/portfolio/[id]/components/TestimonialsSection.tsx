interface TestimonialsSectionProps {
  project: any;
}

const TestimonialsSection = ({ project }: TestimonialsSectionProps) => {
  if (!project.testimonial) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              고객 평가
            </h2>
            <p className="text-xl text-gray-600">
              프로젝트에 참여한 고객의 생생한 후기를 확인하세요.
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center opacity-10">
              <i className="ri-double-quotes-l text-3xl text-white"></i>
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-medium italic">
                "{project.testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-6">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={project.testimonial.avatar}
                    alt={project.testimonial.author}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Author Details */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {project.testimonial.author}
                  </h4>
                  <p className="text-gray-600 font-medium">
                    {project.testimonial.position}
                  </p>
                  <p className="text-blue-600 font-semibold">
                    {project.testimonial.company}
                  </p>
                </div>

                {/* Rating Stars */}
                <div className="flex space-x-1 ml-auto">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className="ri-star-fill text-yellow-400 text-xl"></i>
                  ))}
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600 rounded-full opacity-5 transform translate-x-16 translate-y-16"></div>
          </div>

          {/* Additional Testimonial Elements */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Satisfaction */}
            <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-thumb-up-line text-2xl text-white"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">프로젝트 만족도</h4>
              <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
              <p className="text-sm text-gray-600">매우 만족</p>
            </div>

            {/* Recommendation */}
            <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-2xl text-white"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">추천 의향</h4>
              <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
              <p className="text-sm text-gray-600">적극 추천</p>
            </div>

            {/* Future Collaboration */}
            <div className="text-center p-6 bg-purple-50 rounded-2xl border border-purple-100">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-handshake-line text-2xl text-white"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">재협업 의향</h4>
              <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
              <p className="text-sm text-gray-600">재협업 희망</p>
            </div>
          </div>

          {/* Key Feedback Points */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              고객이 평가한 Artiordex의 강점
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <i className="ri-check-double-line text-green-600 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">기술적 전문성</h4>
                  <p className="text-gray-600 text-sm">최신 기술과 모범 사례를 적용한 솔루션 설계</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="ri-time-line text-blue-600 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">신속한 실행력</h4>
                  <p className="text-gray-600 text-sm">약속된 일정 내 고품질 결과물 제공</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="ri-customer-service-line text-purple-600 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">탁월한 소통</h4>
                  <p className="text-gray-600 text-sm">프로젝트 전 과정에서 투명하고 원활한 커뮤니케이션</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="ri-lightbulb-line text-orange-600 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">혁신적 접근</h4>
                  <p className="text-gray-600 text-sm">기존 방식을 뛰어넘는 창의적 문제 해결</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                당신도 이런 성과를 경험해보세요
              </h3>
              <p className="text-blue-100 mb-6">
                Artiordex와 함께 비즈니스 혁신을 시작하세요. 
                무료 컨설팅을 통해 맞춤형 솔루션을 제안해드립니다.
              </p>
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap">
                <i className="ri-phone-line mr-2"></i>
                무료 컨설팅 신청
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;