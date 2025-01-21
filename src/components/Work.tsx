import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Work = () => {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#7FD1CC] text-sm uppercase tracking-wider mb-4 block font-bold">
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
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;