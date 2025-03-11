
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import ProjectHeader from '../components/project-details/ProjectHeader';
import ProjectVideo from '../components/project-details/ProjectVideo';
import ProjectMetrics from '../components/project-details/ProjectMetrics';
import ProjectResults from '../components/project-details/ProjectResults';
import ProjectDescription from '../components/project-details/ProjectDescription';
import ProjectGallery from '../components/project-details/ProjectGallery';
import RelatedProjects from '../components/project-details/RelatedProjects';
import ScrollToTop from '../components/ScrollToTop';
import { useProject } from '../hooks/useProjects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = useProject(id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log('Current project ID:', id);
  console.log('Project data:', project);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <ProjectHeader project={project} />
          <ProjectVideo />
          <ProjectMetrics />
          <ProjectResults />
          <ProjectDescription />
          <ProjectGallery project={project} />
          <RelatedProjects />
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ProjectDetails;
