const CEOSignatureSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left">
          {/* Signature Line */}
          <div className="w-32 h-px bg-blue-600 mb-6 mx-auto md:mx-0"></div>
          
          {/* CEO Name */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            홍길동
          </h3>
          
          {/* Title */}
          <p className="text-lg md:text-xl text-blue-600 font-semibold mb-2">
            Founder & Chief Executive Officer
          </p>
          
          {/* Description */}
          <p className="text-base text-gray-600">
            Artiordex 창립자 및 최고경영자
          </p>
        </div>
      </div>
    </section>
  );
};

export default CEOSignatureSection;