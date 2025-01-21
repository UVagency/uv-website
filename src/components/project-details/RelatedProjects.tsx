import React from 'react';
import { useProjects } from '../../hooks/useProjects';

const RelatedProjects = () => {
  const projects = useProjects();
  
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold mb-8">Curated works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.slice(0, 2).map((relatedProject) => (
          <div key={relatedProject.id} className="group cursor-pointer">
            <div className="aspect-[1.47/1] mb-4 overflow-hidden rounded-lg">
              <img
                src={relatedProject.image}
                alt={relatedProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-[#7FD1CC] text-sm uppercase tracking-wider mb-2 block">
              {relatedProject.category}
            </span>
            <h3 className="font-bold text-lg">
              {relatedProject.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;