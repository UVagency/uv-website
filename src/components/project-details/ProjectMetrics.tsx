import React from 'react';
import { useParams } from 'react-router-dom';
import { useProject } from '../../hooks/useProjects';

const ProjectMetrics = () => {
  const { id } = useParams();
  const project = useProject(id);

  console.log('Project metrics data:', { services: project?.services, channels: project?.channels });

  if (!project) {
    return null;
  }

  const formatList = (items: string[]) => {
    if (items.length === 0) return '';
    if (items.length === 1) return items[0];
    
    const lastItem = items[items.length - 1];
    const otherItems = items.slice(0, -1);
    return `${otherItems.join(', ')} and ${lastItem}`;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-sm">
      <div>
        <h3 className="font-bold mb-3">Services</h3>
        <p className="text-gray-600 max-w-[280px]">{formatList(project.services)}</p>
      </div>
      
      <div>
        <h3 className="font-bold mb-3">Channels</h3>
        <p className="text-gray-600 max-w-[280px]">{formatList(project.channels)}</p>
      </div>
      
      <div>
        <h3 className="font-bold mb-3">Highlighted KPI</h3>
        <ul className="space-y-2 text-gray-600">
          <li>{project.kpi1Value}</li>
          <li>{project.kpi1}</li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-bold mb-3">Highlighted KPI</h3>
        <ul className="space-y-2 text-gray-600">
          <li>{project.kpi2Value}</li>
          <li>{project.kpi2}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectMetrics;