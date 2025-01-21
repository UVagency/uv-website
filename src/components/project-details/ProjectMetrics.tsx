import React from 'react';
import { useParams } from 'react-router-dom';
import { useProjectMetrics } from '@/hooks/useProjectMetrics';
import ServicesList from './metrics/ServicesList';
import ChannelsList from './metrics/ChannelsList';
import KPIList from './metrics/KPIList';

const ProjectMetrics = () => {
  const { id: projectSlug } = useParams();
  const { data: metrics, isLoading } = useProjectMetrics(projectSlug);

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-pulse">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="space-y-2">
              <div className="h-3 w-32 bg-gray-200 rounded"></div>
              <div className="h-3 w-28 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!metrics) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-sm">
      <ServicesList services={metrics.services} />
      <ChannelsList channels={metrics.channels} />
      <KPIList kpis={metrics.kpis} />
    </div>
  );
};

export default ProjectMetrics;