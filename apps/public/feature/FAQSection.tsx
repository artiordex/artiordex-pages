
import { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly is FLITEDECK?",
      answer: "FLITEDECK is a Smart Handle Bar - an intelligent bicycle handlebar with an integrated computer, GPS and various sensors. It combines the latest technology with high-quality design and enables seamless integration of all important driving data and navigation functions directly into your handlebars."
    },
    {
      question: "Does FLITEDECK fit on my bike?",
      answer: "99% of the time the answer is yes! We will send you a link to our customer portal, where we will ask you about your bike and then we will make sure that you get the right adapters. If FLITEDECK doesn't fit your bike, you will of course get a full refund."
    },
    {
      question: "In which sizes is FLITEDECK available?",
      answer: "We offer 12 dimensions by combining the 3 most common widths with 4 different lengths. Each additional dimension means considerable additional effort and costs for us, which is why further dimensions can be unlocked by reaching stretch goals. You can see all available sizes for selection directly on the product page."
    },
    {
      question: "When will FLITEDECK be delivered?",
      answer: "Delivery is planned for summer 2026. You will be kept regularly updated on development and production and will have another chance to make adjustments to your order 3 months before delivery"
    },
    {
      question: "How long does the FLITEDECK battery last?",
      answer: "The aim is to achieve up to 30 hours of normal use. This time may be shortened by intensive use of the integrated bike light. The FLITEDECK has a power saving mode for longer rides and can be charged via USB-C while riding."
    },
    {
      question: "Is FLITEDECK waterproof?",
      answer: "Yes, FLITEDECK is IP68 waterproof and suitable for all weather conditions."
    },
    {
      question: "Which apps is FLITEDECK compatible with?",
      answer: "FLITEDECK is compatible with all common cycling and fitness apps. A complete list of compatible apps will be provided before release."
    },
    {
      question: "Are there software updates for FLITEDECK?",
      answer: "Yes, regular software updates are provided over-the-air and via the FLITEDECK app. These include new features, improvements and security updates."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <div className="flex-shrink-0 w-6 h-6 relative">
                  <div className={`absolute inset-0 transition-transform ${openFAQ === index ? 'rotate-45' : ''}`}>
                    <div className="w-full h-0.5 bg-gray-600 absolute top-1/2 transform -translate-y-1/2"></div>
                    <div className="h-full w-0.5 bg-gray-600 absolute left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
            Read more FAQ
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
