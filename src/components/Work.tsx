import { Link } from 'react-router-dom';

const projects = [
  {
    id: "sabor-de-barrio",
    title: "Sabor de Barrio",
    subtitle: "Bridging Bonds with Sabor de Barrio: A CSR Success Story",
    category: "INTEGRATED CAMPAIGN WITH SOCIAL IMPACT",
    image: "/src/img/chancaca_front.png"
  },
  {
    title: "Project Two",
    category: "Digital Design",
    image: "/placeholder.svg"
  },
  {
    title: "Project Three",
    category: "Brand Strategy",
    image: "/placeholder.svg"
  }
];

const Work = () => {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link 
                key={index}
                to={project.id ? `/projects/${project.id}` : "#"}
                className="group relative aspect-square bg-gray-100 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                    <span className="text-[#7FD1CC] text-sm font-medium mb-2">{project.category}</span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-sm opacity-90">{project.subtitle}</p>
                    )}
                  </div>
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