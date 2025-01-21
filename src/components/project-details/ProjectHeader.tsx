import React from 'react';
import { Project } from '@/data/projects';

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <div className="text-center mb-16">
      <span className="text-[#7FD1CC] text-sm uppercase tracking-wider mb-4 block">
        {project.category}
      </span>
      
      <h1 className="text-3xl md:text-5xl font-bold mb-8">
        {project.title}
      </h1>
      
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Sopaipillas pasadas, made with Chancaca Deliciosa, are an icon of Chile's culinary tradition. 
        Our main objective is to strengthen this bond between the brand and people, generating impact and recall.
      </p>
    </div>
  );
};

export default ProjectHeader;