import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useParams } from 'react-router-dom';

const ProjectResults = () => {
  const { id: projectSlug } = useParams();
  
  const { data: results, isLoading } = useQuery({
    queryKey: ['project-results', projectSlug],
    queryFn: async () => {
      console.log('Fetching results for project:', projectSlug);
      
      // First get the project id
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
        .from('project_results')
        .select('*')
        .eq('project_id', projectResponse.data.id);

      if (error) {
        console.error('Error fetching results:', error);
        throw error;
      }

      console.log('Fetched results:', data);
      return data;
    },
    enabled: !!projectSlug
  });

  if (isLoading) {
    return (
      <div className="mb-16 bg-gradient-to-br from-[#7FD1CC]/10 to-white p-8 rounded-2xl animate-pulse">
        <div className="h-6 w-32 bg-gray-200 rounded mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (!results?.length) return null;

  return (
    <div className="mb-16 bg-gradient-to-br from-[#7FD1CC]/10 to-white p-8 rounded-2xl">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">RESULTS</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((result) => (
          <li key={result.id} className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-[#7FD1CC] font-bold">→</span>
            <span className="text-gray-700 font-medium">{result.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectResults;