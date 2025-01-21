import React from 'react';
import { Project } from '../../hooks/useProjects';
import { Link } from 'react-router-dom';

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <Link 
        to="/" 
        className="inline-flex items-center mb-8 hover:opacity-80 transition-opacity"
      >
        <img 
          src="/lovable-uploads/3de03002-3246-4965-b7e8-9780a09a46af.png" 
          alt="UV.Agency Logo" 
          className="h-32 w-auto transition-transform duration-300 hover:scale-105"
        />
      </Link>
      
      <p className="text-lg font-semibold text-gray-600 mb-2">
        {project.brand}
      </p>
      
      <h1 className="text-4xl font-bold mb-6">
        {project.title}
      </h1>
      
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        {project.shortDescription}
      </p>
    </div>
  );
};

export default ProjectHeader;