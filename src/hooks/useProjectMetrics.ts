import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Json } from '@/integrations/supabase/types';

export interface KPI {
  label: string;
  value: string;
}

// Type guard to check if a value is a Json object that matches KPI structure
export function isKPI(value: Json): value is { [key: string]: Json } & KPI {
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

export const useProjectMetrics = (projectSlug: string | undefined) => {
  return useQuery({
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
};