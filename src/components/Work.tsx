import { Link } from 'react-router-dom';

const projects = [
  {
    id: "sabor-de-barrio",
    title: "Sabor de Barrio",
    category: "CSR Campaign",
    image: "/lovable-uploads/6cbb6cd8-603d-460c-8ac7-8285e55a5f14.png"
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Work</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p>{project.category}</p>
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