import React from 'react';
import { useParams } from 'react-router-dom';
import { useProject } from '../../hooks/useProjects';
import ReactMarkdown from 'react-markdown';

const ProjectDescription = () => {
  const { id } = useParams();
  const project = useProject(id);

  console.log('Project description data:', project?.content);

  return (
    <div className="prose max-w-none text-gray-600 space-y-6">
      <div className="bg-gradient-to-br from-[#7FD1CC]/5 to-white p-8 rounded-2xl space-y-6">
        <ReactMarkdown 
          className="text-lg leading-relaxed hover:text-gray-800 transition-colors duration-300"
          components={{
            h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-2 my-4" {...props} />,
            li: ({node, ...props}) => <li className="text-gray-600" {...props} />,
            p: ({node, ...props}) => <p className="mb-4" {...props} />
          }}
        >
          {project?.content || ''}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ProjectDescription;