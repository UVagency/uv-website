import React from 'react';
import { useParams } from 'react-router-dom';
import { useProject } from '../../hooks/useProjects';

const ProjectResults = () => {
  const { id } = useParams();
  const project = useProject(id);

  console.log('Project results:', project?.results);

  if (!project?.results || project.results.length === 0) {
    return null;
  }

  return (
    <div className="mb-16 bg-gradient-to-br from-[#7FD1CC]/10 to-white p-8 rounded-2xl">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">RESULTS</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.results.map((result, index) => (
          <li 
            key={index}
            className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <span className="text-[#7FD1CC] font-bold">→</span>
            <span className="text-gray-700 font-medium">{result}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectResults;