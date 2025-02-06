import React, { useState } from 'react';
import type { Project } from '../../hooks/useProjects';
import { AspectRatio } from '../ui/aspect-ratio';

interface ProjectGalleryProps {
  project: Project;
}

const ProjectGallery = ({ project }: ProjectGalleryProps) => {
  const [failedImages, setFailedImages] = useState<{[key: string]: boolean}>({});

  if (!project.gallery || project.gallery.length === 0) {
    return null;
  }

  const handleImageError = (index: number) => {
    console.log('Image failed to load:', index);
    setFailedImages(prev => ({...prev, [index]: true}));
  };

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.gallery.map((item, index) => (
          <div key={index} className="w-[75%] mx-auto">
            {item.type === 'video' ? (
              <AspectRatio ratio={9 / 16}>
                <video
                  src={item.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  onError={() => handleImageError(index)}
                  className="w-full h-full rounded-lg object-cover"
                />
              </AspectRatio>
            ) : (
              <AspectRatio ratio={9 / 16}>
                {failedImages[index] ? (
                  <div className="w-full h-full rounded-lg bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-500">Image not available</p>
                  </div>
                ) : (
                  <img
                    src={item.url}
                    alt={`Gallery item ${index + 1}`}
                    onError={() => handleImageError(index)}
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
              </AspectRatio>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;