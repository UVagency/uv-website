import React from 'react';
import { useParams } from 'react-router-dom';
import { useProject } from '../../hooks/useProjects';

const ProjectDescription = () => {
  const { id } = useParams();
  const project = useProject(id);

  console.log('Project description data:', project?.content);

  return (
    <div className="prose max-w-none text-gray-600 space-y-6">
      <div className="bg-gradient-to-br from-[#7FD1CC]/5 to-white p-8 rounded-2xl space-y-6">
        <p className="text-lg leading-relaxed hover:text-gray-800 transition-colors duration-300">
          {project?.content}
        </p>
      </div>
    </div>
  );
};

export default ProjectDescription;