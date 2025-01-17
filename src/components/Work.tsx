import { Link } from 'react-router-dom';

const projects = [
  {
    id: "sabor-de-barrio",
    title: "Bridging Bonds with Sabor de Barrio: A CSR Success Story",
    subtitle: "INTEGRATED CAMPAIGN WITH SOCIAL IMPACT",
    category: "CHANCACA DELICIOSA",
    description: "Recognition of local communities and culinary traditions",
    image: "/src/img/chancaca_front.png"
  },
  {
    id: "krispy-kreme",
    title: "Krispy Kreme's Sweet Launch: Winning Hearts in Chile",
    subtitle: "360° Launch Campaign in Chile",
    category: "KRISPY KREME",
    description: "Out-of-the-box Strategy • Digital & Social Media Campaign • Impactful Outdoor Advertising • Influencer Collaborations • Effective Media Buying • Engaging Events & Experiences",
    image: "/src/img/krispy_front.png"
  },
  {
    id: "ball-corporation",
    title: "Our urban beat for world sustainability",
    subtitle: "INTEGRATED CAMPAIGN WITH SOCIAL IMPACT",
    category: "BALL CORPORATION",
    description: "The urban beat song we produced and promoted to raise awareness that the can is the most sustainable packaging.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    id: "uv-xp",
    title: "Every company is an entertainment company",
    subtitle: "DIGITAL TRANSFORMATION",
    category: "UV XP",
    description: "Digital transformation strategy and implementation",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: "mattel",
    title: "Data strategy for an unforgettable Back to School",
    subtitle: "DATA STRATEGY",
    category: "MATTEL",
    description: "Strategic data analysis for back to school campaign",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: "maybelline",
    title: "We turn up the volume with Maybelline New York",
    subtitle: "INTEGRATED CAMPAIGN",
    category: "MAYBELLINE NEW YORK",
    description: "Comprehensive marketing campaign for volume mascara launch",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  }
];

const Work = () => {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#7FD1CC] text-sm uppercase tracking-wider mb-4 block">
              PROJECTS AND CAMPAIGNS
            </span>
            <h2 className="text-5xl font-bold mb-6">Curated work</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We work with all types of brands, from rapidly growing startups to 
              global organizations, mass consumer products, service companies, as 
              well as BtoB companies operating in niche markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link 
                key={index}
                to={project.id ? `/projects/${project.id}` : "#"}
                className="group bg-white rounded-[20px] overflow-hidden transition-all duration-300 hover-scale"
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 10px 30px -20px'
                }}
              >
                {project.image && (
                  <div className="relative aspect-[4/3]">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{
                        opacity: 1,
                        borderRadius: '20px'
                      }}
                    />
                  </div>
                )}
                <div className="p-8">
                  <span className="text-[#7FD1CC] text-sm font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;