const CertificationOverviewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              기술 신뢰성의 기반
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              아티올덱스는 기술 신뢰성, 보안, 표준화를 기반으로 움직이는 기업입니다. 
              디지털 전환(DX), 인공지능(AI), 자동화(Automation), 클라우드 통합 전문 기업으로서 
              인증 체계는 회사 브랜드 신뢰의 핵심 기반입니다.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Microsoft 기술 파트너십, 클라우드 인증, AI 연구 역량을 통해 
              고객에게 검증된 기술력과 안정적인 서비스를 제공합니다. 
              향후 3년간 확보할 예정인 체계적인 인증 로드맵을 통해 
              글로벌 기술 표준에 부합하는 솔루션을 지속적으로 발전시켜 나가겠습니다.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              모든 인증과 문서는 투명성과 접근성을 바탕으로 공개되며, 
              파트너와 고객이 아티올덱스의 기술 역량을 명확히 확인할 수 있도록 
              지속적으로 업데이트하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationOverviewSection;