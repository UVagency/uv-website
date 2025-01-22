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

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-sm">
      <div>
        <h3 className="font-bold mb-3">Services</h3>
        <ul className="space-y-2 text-gray-600">
          {project.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="font-bold mb-3">Channels</h3>
        <ul className="space-y-2 text-gray-600">
          {project.channels.map((channel, index) => (
            <li key={index}>{channel}</li>
          ))}
        </ul>
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