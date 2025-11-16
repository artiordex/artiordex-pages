const MicrosoftPartnerSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Microsoft Partner Network
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Microsoft 생태계 기반 DX/AX 전문 기업으로서 검증된 기술력과 신뢰성을 제공합니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <img 
                src="https://readdy.ai/api/search-image?query=Microsoft%20Partner%20Network%20certification%20badge%2C%20professional%20corporate%20setting%2C%20Azure%20cloud%20technology%2C%20Power%20Platform%20integration%2C%20clean%20modern%20office%20environment%2C%20business%20partnership%20concept%2C%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=ms-partner&orientation=landscape"
                alt="Microsoft Partner Network"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Microsoft 생태계 전문성
              </h3>
              <p className="text-gray-600 mb-6">
                Artiordex는 Microsoft 생태계를 중심으로 DX/AX 솔루션을 설계합니다. 
                Azure 기반 인프라, Power Platform의 로우코드 자동화, Dynamics 365 업무 시스템을 
                통합한 구조로 기업의 디지털 전환을 촉진합니다.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <i className="ri-cloud-line text-2xl text-blue-600 mb-2"></i>
                  <h4 className="font-semibold text-gray-900 mb-1">Azure Cloud</h4>
                  <p className="text-sm text-gray-600">클라우드 인프라 및 서비스</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <i className="ri-settings-3-line text-2xl text-blue-600 mb-2"></i>
                  <h4 className="font-semibold text-gray-900 mb-1">Power Platform</h4>
                  <p className="text-sm text-gray-600">로우코드 자동화 플랫폼</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <i className="ri-organization-chart text-2xl text-blue-600 mb-2"></i>
                  <h4 className="font-semibold text-gray-900 mb-1">Dynamics 365</h4>
                  <p className="text-sm text-gray-600">통합 비즈니스 애플리케이션</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <i className="ri-team-line text-2xl text-blue-600 mb-2"></i>
                  <h4 className="font-semibold text-gray-900 mb-1">Microsoft 365</h4>
                  <p className="text-sm text-gray-600">협업 및 생산성 도구</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">파트너십 검증 프로세스</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">1</div>
                  <span className="text-gray-700">Microsoft 기술 역량 검증</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">2</div>
                  <span className="text-gray-700">클라우드 보안 및 품질 기준 충족</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">3</div>
                  <span className="text-gray-700">고객 성공 사례 및 레퍼런스 검토</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">4</div>
                  <span className="text-gray-700">지속적인 기술 업데이트 및 인증 유지</span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <p className="text-gray-700 italic">
                "국내 DX 환경에서 Microsoft 생태계는 안정성과 확장성을 동시에 제공하는 
                핵심 플랫폼입니다. Artiordex는 이러한 생태계를 기반으로 고객의 
                비즈니스 요구사항을 기술적으로 구현하는 전문 파트너입니다."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicrosoftPartnerSection;