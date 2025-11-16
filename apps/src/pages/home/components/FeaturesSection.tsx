
const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      number: "01",
      title: "Seamless Flow",
      description: "Connected & Free - WiFi | GPS | Bluetooth | ANT+ | 5G eSIM | offline ready | sensor & app integration",
      image: "https://framerusercontent.com/images/Q19ctJA5XaSdmpRsyIhbaq3SQQ.jpg?width=770&height=771"
    },
    {
      id: 2,
      number: "02",
      title: "Smarter Safety",
      description: "Protection That Thinks Ahead - lights | theft protection | bike alarm | bell | real-time tracking & warnings",
      image: "https://framerusercontent.com/images/RQl0WydIGUiVNyDxEW9cIF4NVlI.jpg?width=261&height=261"
    },
    {
      id: 3,
      number: "03",
      title: "Interactive Live Navigation",
      description: "Always One Move Ahead - interactive navigation | smart re-routing | air quality | wind & weather data | offline maps",
      image: "https://framerusercontent.com/images/ct9e18xXOKdOMW2e5jJJeB0RQg.jpg?width=260&height=260"
    },
    {
      id: 4,
      number: "04",
      title: "A System That Evolves",
      description: "Stay Ahead Without Upgrading - Over-the-Air updates | powerful CPU | Smartphone App",
      image: "https://framerusercontent.com/images/F84eY8C8Hiv7LYXDyFfxh4P1o.jpg?width=770&height=771"
    },
    {
      id: 5,
      number: "05",
      title: "Power That Lasts",
      description: "Longer Than Your Legs Do - 30 hours battery life | USB-C",
      image: "https://framerusercontent.com/images/2Rzt2kENJmJZfXuxCaYq5TBsEs.jpg?width=260&height=260"
    },
    {
      id: 6,
      number: "06",
      title: "Precision at Your Fingertips",
      description: "Full Control, Your Way - configurable 180x70mm touch display | customizable for all your data | IP68 rain and sweat proof | intuitive UI",
      image: "https://framerusercontent.com/images/x0Vveqn8pSptLOyYWq49MY2MUuA.jpg?width=770&height=771"
    },
    {
      id: 7,
      number: "07",
      title: "Stiff Lightweight Design",
      description: "<800g total system weight (incl. light, battery, computer) | 24 cockpit sizes | high-end carbon handlebar",
      image: "https://framerusercontent.com/images/BgF2kZ20nKFajcnAIQsEv1ZDR5Y.jpg?width=1040&height=542"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            What FLITEDECK Truly Delivers
          </h2>
          <button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
            Pre-order now
          </button>
        </div>

        {/* Features Grid */}
        <div className="space-y-4">
          <p className="text-gray-600 text-lg mb-8">All the details</p>
          
          <div className="space-y-6">
            {features.map((feature) => (
              <div key={feature.id} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="flex items-start gap-6">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <span className="text-[#2563EB] text-lg font-bold">{feature.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Image */}
                  <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
