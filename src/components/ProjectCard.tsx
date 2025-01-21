import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link 
      to={`/projects/${project.id}`}
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
        <span className="text-[#7FD1CC] text-sm font-bold mb-2 block">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold mb-3">
          {project.title}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCard;