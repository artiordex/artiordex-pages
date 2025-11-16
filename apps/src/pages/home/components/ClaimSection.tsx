
const ClaimSection = () => {
  return (
    <section id="claim" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://framerusercontent.com/images/gSaUIPgX5zbnICuEv5xH2ft1U.jpg?width=2752&height=1792"
          alt="Cycling Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Handlebar Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://framerusercontent.com/images/wccPf7zt2u97VyKPzPVmrnS6U.png?width=3660&height=2900"
          alt="FLITEDECK Handlebar"
          className="max-w-4xl w-full h-auto object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              This is where the future of cycling begins. Because cyclists deserves more – it merges navigation, connectivity, safety, and performance into one sleek, aerodynamic unit.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimSection;
