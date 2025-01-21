import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface ProjectHeaderProps {
  projectSlug: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ projectSlug }) => {
  const { data: project, isLoading } = useQuery({
    queryKey: ['project', projectSlug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', projectSlug)
        .single();
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
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