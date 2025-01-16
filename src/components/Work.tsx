const projects = [
  {
    title: "Bridging Bonds with Sabor de Barrio: A CSR Success Story",
    category: "CHANCACA DELICIOSA",
    description: "RECOGNITION OF LOCAL COMMUNITIES AND CULINARY TRADITIONS",
    tags: ["STRATEGY", "CREATIVITY", "MEDIA", "INFLUENCERS", "PRESS", "EVENT PRODUCTION"],
    subtitle: "INTEGRATED CAMPAIGN WITH SOCIAL IMPACT",
    image: "/lovable-uploads/f952e8eb-477f-4081-aaac-1331005a5d8c.png"
  },
  {
    title: "Krispy Kreme's Sweet Launch: Winning Hearts in Chile",
    category: "KRISPY KREME",
    description: "360° Launch Campaign in Chile",
    bulletPoints: [
      "Out-of-the-box Strategy",
      "Digital & Social Media Campaign",
      "Impactful Outdoor Advertising",
      "Influencer Collaborations",
      "Effective Media Buying",
      "Engaging Events & Experiences"
    ],
    image: "/lovable-uploads/f952e8eb-477f-4081-aaac-1331005a5d8c.png"
  }
];

const Work = () => {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in"
              >
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className="text-[#00C2CB] uppercase tracking-wider text-sm font-medium mb-3">
                    {project.category}
                  </h3>
                  <h2 className="text-2xl font-bold mb-4 text-[#1A1F2C]">
                    {project.title}
                  </h2>
                  
                  {project.description && (
                    <p className="text-gray-700 mb-4">{project.description}</p>
                  )}
                  
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {project.bulletPoints && (
                    <ul className="space-y-2 text-gray-700">
                      {project.bulletPoints.map((point, pointIndex) => (
                        <li 
                          key={pointIndex}
                          className="flex items-center"
                        >
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;