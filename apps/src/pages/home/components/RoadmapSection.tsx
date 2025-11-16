
const RoadmapSection = () => {
  const milestones = [
    { year: "2019", title: "Idea", status: "completed" },
    { year: "2021", title: "Patent Filed\nFounders Award", status: "completed" },
    { year: "2022", title: "Prototypes PT-A-B, investment strategy, customer feedback, office setup", status: "completed" },
    { year: "2024", title: "Company incorporation, prototypes PT-1&2, first test rides, design update, 3D rendering, UI design", status: "completed" },
    { year: "2025", title: "Pre-order start\nEarly Bird\n01.02 - 01.03", status: "completed" },
    { year: "2025 - Q2", title: "Premium pre-order\n15.04 - 31.05", status: "current", highlight: true },
    { year: "2025", title: "Regular\npre-order\n15.07 - 31.10", status: "upcoming" },
    { year: "2026", title: "Start of production, Quality management, logistic & storage", status: "upcoming" },
    { year: "2026 - Q2", title: "Start of shipping", status: "upcoming" }
  ];

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-500 text-sm font-medium mb-4">Roadmap</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Tour de FLITE milestones
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal scroll container */}
          <div className="overflow-x-auto pb-6">
            <div className="flex gap-6 min-w-max px-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex-shrink-0 w-64">
                  {/* Current Development Indicator */}
                  {milestone.highlight && (
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                        Current development
                      </div>
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-600 mx-auto mt-1"></div>
                    </div>
                  )}

                  {/* Milestone Card */}
                  <div className={`p-6 rounded-2xl h-48 flex flex-col justify-between ${
                    milestone.status === 'current' 
                      ? 'bg-blue-600 text-white' 
                      : milestone.status === 'completed'
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-gray-50 text-gray-600'
                  }`}>
                    <div className="space-y-3">
                      <p className={`text-sm font-medium ${
                        milestone.status === 'current' ? 'text-blue-200' : 'text-gray-500'
                      }`}>
                        {milestone.title}
                      </p>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${
                        milestone.status === 'current' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {milestone.year}
                      </h3>
                    </div>
                  </div>

                  {/* Connection Line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    milestone.status === 'completed'
                      ? 'bg-green-500'
                      : milestone.status === 'current'
                      ? 'bg-blue-600'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
