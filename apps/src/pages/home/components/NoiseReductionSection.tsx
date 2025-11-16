
export default function NoiseReductionSection() {
  return (
    <section className="min-h-screen bg-gray-200 relative overflow-hidden">
      <div className="container mx-auto px-8 py-16 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* 左侧图片 */}
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Happy%20young%20African%20American%20woman%20with%20curly%20afro%20hair%20wearing%20Samsung%20Galaxy%20Buds%20Pro%20earbuds%2C%20dancing%20with%20arms%20raised%2C%20wearing%20denim%20jacket%2C%20joyful%20expression%2C%20natural%20lighting%2C%20lifestyle%20photography%2C%20modern%20urban%20background&width=600&height=700&seq=noise-reduction&orientation=portrait"
              alt="Woman enjoying music with Galaxy Buds Pro"
              className="w-full h-[600px] object-cover object-top rounded-2xl"
            />
          </div>
          
          {/* 右侧内容 */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Control the level of<br />
                noise reduction.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Galaxy Buds Pro's active noise-canceling technology eliminates up to 99% of ambient noise. Indoor and outdoor microphones track noise in real time. Choose a noise canceling level with an intelligent algorithm that suppresses noise based on your surroundings, set it high on a noisy bus or use a low level in the library reading room.
              </p>
            </div>
            
            {/* 控制按钮 */}
            <div className="flex items-center space-x-4">
              <button className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-purple-400 transition-all cursor-pointer">
                <i className="ri-play-fill text-gray-600 text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
