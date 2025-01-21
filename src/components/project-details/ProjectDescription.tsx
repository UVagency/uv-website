import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useParams } from 'react-router-dom';

const ProjectDescription = () => {
  const { id: projectSlug } = useParams();
  
  const { data: project, isLoading } = useQuery({
    queryKey: ['project-description', projectSlug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('full_description')
        .eq('slug', projectSlug)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!projectSlug
  });

  if (isLoading) {
    return (
      <div className="prose max-w-none text-gray-600 space-y-6 animate-pulse">
        <div className="bg-gradient-to-br from-[#7FD1CC]/5 to-white p-8 rounded-2xl space-y-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
          ))}
        </div>
      </div>
    );
  }

  if (!project?.full_description?.length) return null;

  return (
    <div className="prose max-w-none text-gray-600 space-y-6">
      <div className="bg-gradient-to-br from-[#7FD1CC]/5 to-white p-8 rounded-2xl space-y-6">
        {project.full_description.map((paragraph, index) => (
          <p key={index} className="text-lg leading-relaxed hover:text-gray-800 transition-colors duration-300">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectDescription;