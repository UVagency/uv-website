import React from 'react';

const ProjectVideo = () => {
  return (
    <div className="aspect-[1.47/1] w-full bg-black mb-12 rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/yBkIRTwXNP4?autoplay=0&rel=0&modestbranding=1"
        title="Sabor de Barrio Campaign"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};

export default ProjectVideo;