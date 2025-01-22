import React from 'react';
import type { Project } from '../../hooks/useProjects';

interface ProjectGalleryProps {
  project: Project;
}

const ProjectGallery = ({ project }: ProjectGalleryProps) => {
  if (!project.gallery || project.gallery.length === 0) {
    return null;
  }

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.gallery.map((item, index) => (
          <div key={index} className="w-full">
            {item.type === 'video' ? (
              <div className="aspect-video">
                <iframe
                  src={`${item.url}?controls=1&rel=0`}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                src={item.url}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;