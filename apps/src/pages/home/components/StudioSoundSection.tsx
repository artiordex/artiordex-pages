
import Button from '../../../components/base/Button';

export default function StudioSoundSection() {
  return (
    <section className="min-h-screen bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-8 py-16 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* 左侧内容 */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold leading-tight">
                Dissolve in<br />
                studio sound.
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Galaxy Buds Pro offer the most immersive sound experience of any Galaxy Buds, whether you're listening to a new album or an audiobook on the go.
              </p>
            </div>
            
            <Button variant="primary" size="lg">
              Buy now
            </Button>
          </div>
          
          {/* 右侧产品图片 */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* 主要产品图片 */}
              <img 
                src="https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20Buds%20Pro%20wireless%20earbuds%20stacked%20on%20charging%20case%2C%20premium%20purple%20metallic%20finish%2C%20professional%20product%20photography%20with%20dramatic%20lighting%2C%20high-end%20consumer%20electronics%2C%20modern%20minimalist%20style%2C%20clean%20background&width=500&height=600&seq=studio-sound&orientation=portrait"
                alt="Galaxy Buds Pro Studio Sound"
                className="w-96 h-[480px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
