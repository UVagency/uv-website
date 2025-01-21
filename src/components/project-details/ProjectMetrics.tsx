import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useParams } from 'react-router-dom';
import { Json } from '@/integrations/supabase/types';

interface KPI {
  label: string;
  value: string;
}

// Type guard to check if a value is a Json object that matches KPI structure
function isKPI(value: Json): value is { label: string; value: string } {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    'label' in candidate &&
    'value' in candidate &&
    typeof candidate.label === 'string' &&
    typeof candidate.value === 'string'
  );
}

const ProjectMetrics = () => {
  const { id: projectSlug } = useParams();
  
  const { data: metrics, isLoading } = useQuery({
    queryKey: ['project-metrics', projectSlug],
    queryFn: async () => {
      console.log('Fetching metrics for project:', projectSlug);
      
      const projectResponse = await supabase
        .from('projects')
        .select('id')
        .eq('slug', projectSlug)
        .maybeSingle();

      if (projectResponse.error) {
        console.error('Error fetching project:', projectResponse.error);
        throw projectResponse.error;
      }

      if (!projectResponse.data) {
        console.log('No project found with slug:', projectSlug);
        return null;
      }

      const { data, error } = await supabase
        .from('project_metrics')
        .select('*')
        .eq('project_id', projectResponse.data.id)
        .maybeSingle();

      if (error) {
        console.error('Error fetching metrics:', error);
        throw error;
      }

      console.log('Fetched metrics:', data);
      return data;
    },
    enabled: !!projectSlug
  });

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
      {metrics.services && Array.isArray(metrics.services) && metrics.services.length > 0 && (
        <div>
          <h3 className="font-bold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-600">
            {metrics.services.map((service: string, index: number) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      )}
      
      {metrics.channels && Array.isArray(metrics.channels) && metrics.channels.length > 0 && (
        <div>
          <h3 className="font-bold mb-3">Channels</h3>
          <ul className="space-y-2 text-gray-600">
            {metrics.channels.map((channel: string, index: number) => (
              <li key={index}>{channel}</li>
            ))}
          </ul>
        </div>
      )}
      
      {metrics.kpis && Array.isArray(metrics.kpis) && metrics.kpis.filter(isKPI).map((kpi, index) => (
        <div key={index}>
          <h3 className="font-bold mb-3">Highlighted KPI</h3>
          <ul className="space-y-2 text-gray-600">
            <li>{kpi.value}</li>
            <li>{kpi.label}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProjectMetrics;