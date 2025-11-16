
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
          아티올덱스와 함께 성장할 파트너를 찾고 계신가요?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          우리의 핵심 가치를 공유하며 함께 디지털 전환을 이끌어갈 파트너와의 만남을 기대합니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            프로젝트 문의
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            상담 예약
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
