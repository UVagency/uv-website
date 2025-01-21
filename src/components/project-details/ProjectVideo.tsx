import React from 'react';
import { useParams } from 'react-router-dom';
import { useProject } from '../../hooks/useProjects';

const ProjectVideo = () => {
  const { id } = useParams();
  const project = useProject(id);

  console.log('Video URL from project:', project?.videoUrl);

  if (!project?.videoUrl) {
    return null;
  }

  return (
    <div className="aspect-[1.47/1] w-full bg-black mb-8 rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        src={project.videoUrl}
        title={`${project.title} Campaign`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};

export default ProjectVideo;