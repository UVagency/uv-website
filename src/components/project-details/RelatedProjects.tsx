import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useParams, Link } from 'react-router-dom';

const RelatedProjects = () => {
  const { id: projectSlug } = useParams();
  
  const { data: relatedProjects, isLoading } = useQuery({
    queryKey: ['related-projects', projectSlug],
    queryFn: async () => {
      const currentProject = await supabase
        .from('projects')
        .select('id')
        .eq('slug', projectSlug)
        .single();

      if (currentProject.error) throw currentProject.error;

      const { data, error } = await supabase
        .from('related_projects')
        .select(`
          related_project_id,
          related_project:projects!related_projects_related_project_id_fkey (
            slug,
            title,
            category,
            image
          )
        `)
        .eq('project_id', currentProject.data.id)
        .limit(2);

      if (error) throw error;
      return data?.map(rp => rp.related_project) || [];
    },
    enabled: !!projectSlug
  });

  if (isLoading) {
    return (
      <div className="mt-20">
        <div className="h-8 w-48 bg-gray-200 rounded mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-[1.47/1] mb-4 bg-gray-200 rounded-lg"></div>
              <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
              <div className="h-6 w-48 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!relatedProjects?.length) return null;

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold mb-8">Curated works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {relatedProjects.map((project) => (
          <Link 
            to={`/projects/${project.slug}`} 
            key={project.slug} 
            className="group cursor-pointer"
          >
            <div className="aspect-[1.47/1] mb-4 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-[#7FD1CC] text-sm uppercase tracking-wider mb-2 block">
              {project.category}
            </span>
            <h3 className="font-bold text-lg">
              {project.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;