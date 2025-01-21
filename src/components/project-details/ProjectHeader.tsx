import React from 'react';
import { Project } from '../../hooks/useProjects';
import { Link } from 'react-router-dom';

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <div className="text-center mb-16">
      <Link to="/" className="inline-block mb-12 transition-transform duration-300 hover:scale-105">
        <img 
          src="/lovable-uploads/3de03002-3246-4965-b7e8-9780a09a46af.png" 
          alt="UV.Agency Logo" 
          className="h-20 w-auto mx-auto"
        />
      </Link>
      
      <span className="text-[#7FD1CC] text-sm uppercase tracking-wider mb-4 block">
        {project.category}
      </span>
      
      <h1 className="text-3xl md:text-5xl font-bold mb-8">
        {project.title}
      </h1>
      
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        {project.shortDescription}
      </p>
    </div>
  );
};

export default ProjectHeader;