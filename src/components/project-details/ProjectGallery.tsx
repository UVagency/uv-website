import React from 'react';
import type { Project } from '../../hooks/useProjects';
import { AspectRatio } from '../ui/aspect-ratio';

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
              <AspectRatio ratio={16 / 9}>
                <video
                  src={item.url}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full rounded-lg object-cover"
                />
              </AspectRatio>
            ) : (
              <AspectRatio ratio={16 / 9}>
                <img
                  src={item.url}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </AspectRatio>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;