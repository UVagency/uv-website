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
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
              >
                <div className="relative aspect-[4/3]">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
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