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
        className="inline-flex items-center text-gray-600 mb-8 hover:text-gray-900 transition-colors"
      >
        <svg 
          className="w-4 h-4 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
        Back to projects
      </Link>
      
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