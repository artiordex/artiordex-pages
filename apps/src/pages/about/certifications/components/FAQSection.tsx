import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "아티올덱스 인증은 어떤 기준으로 구성되나요?",
      answer: "아티올덱스의 인증 체계는 기술 신뢰성, 보안 표준, 국제 규격 준수를 기반으로 구성됩니다. Microsoft 파트너십, 클라우드 인증, AI 기술 검증, 정보보안 관리 등 4개 영역에서 체계적으로 관리하고 있습니다."
    },
    {
      question: "브로슈어는 어떤 용도로 활용할 수 있나요?",
      answer: "브로슈어는 제품 소개, 기업 프레젠테이션, 파트너십 제안, 고객 상담 등 다양한 비즈니스 상황에서 활용 가능합니다. 모든 브로슈어는 최신 정보로 업데이트되며, 상업적 목적으로 자유롭게 사용하실 수 있습니다."
    },
    {
      question: "기술 백서는 정기적으로 업데이트되나요?",
      answer: "기술 백서는 분기별로 검토하여 업데이트하고 있습니다. 새로운 기술 동향, 제품 개선사항, 시장 변화를 반영하여 지속적으로 내용을 보완하며, 주요 업데이트 시 이메일 알림을 제공합니다."
    },
    {
      question: "인증 문서의 진위 여부는 어떻게 확인할 수 있나요?",
      answer: "모든 인증 문서는 발급 기관의 공식 인증 번호와 QR 코드를 포함하고 있습니다. 해당 기관의 공식 웹사이트에서 인증 번호로 직접 확인하거나, 당사 고객지원팀을 통해 검증 요청하실 수 있습니다."
    },
    {
      question: "파트너십 인증은 어떤 혜택을 제공하나요?",
      answer: "파트너십 인증을 통해 기술 지원, 교육 프로그램, 공동 마케팅, 우선 기술 지원 등의 혜택을 제공받을 수 있습니다. 또한 Microsoft 생태계 내에서의 협업 기회와 글로벌 시장 진출 지원도 포함됩니다."
    },
    {
      question: "브로슈어와 백서의 저작권 정책은 어떻게 되나요?",
      answer: "모든 브로슈어와 백서는 아티올덱스의 저작물이며, 비상업적 목적의 인용과 참조는 자유롭게 가능합니다. 상업적 활용이나 재배포 시에는 사전 승인이 필요하며, 출처 표기를 반드시 포함해야 합니다."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            자주 묻는 질문
          </h2>
          <p className="text-xl text-gray-600">
            인증 및 브로슈어 관련 궁금한 사항들을 확인해보세요
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <i className={`ri-arrow-down-s-line text-xl text-gray-500 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}></i>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;