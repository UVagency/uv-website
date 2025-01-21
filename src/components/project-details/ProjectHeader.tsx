import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface ProjectHeaderProps {
  projectSlug: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ projectSlug }) => {
  const { data: project, isLoading, error } = useQuery({
    queryKey: ['project', projectSlug],
    queryFn: async () => {
      console.log('Fetching project with slug:', projectSlug);
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          project_metrics (
            services,
            channels,
            kpis
          ),
          project_results (
            label,
            value
          )
        `)
        .eq('slug', projectSlug)
        .maybeSingle();
      
      if (error) {
        console.error('Error fetching project:', error);
        throw error;
      }
      
      console.log('Project data:', data);
      return data;
    }
  });

  if (isLoading) {
    return (
      <div className="text-center mb-16">
        <div className="animate-pulse">
          <div className="h-20 w-40 bg-gray-200 mx-auto mb-12"></div>
          <div className="h-4 w-24 bg-gray-200 mx-auto mb-4"></div>
          <div className="h-8 w-64 bg-gray-200 mx-auto mb-8"></div>
          <div className="h-4 w-96 bg-gray-200 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mb-16 text-red-500">
        Error loading project details. Please try again later.
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center mb-16">
        Project not found
      </div>
    );
  }

  return (
    <div className="text-center mb-16">
      <Link to="/" className="inline-block mb-12 transition-transform duration-300 hover:scale-105">
        <img 
          src="/lovable-uploads/3de03002-3246-4965-b7e8-9780a09a46af.png" 
          alt="UV.Agency Logo" 
          className="h-20 w-auto mx-auto"
        />
      </Link>
      
      <span className="text-[#7FD1CC] text-sm uppercase tracking-wider mb-4 block">
        {project.category}
      </span>
      
      <h1 className="text-3xl md:text-5xl font-bold mb-8">
        {project.title}
      </h1>
      
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectHeader;