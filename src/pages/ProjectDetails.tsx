import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProjectHeader from '../components/project-details/ProjectHeader';
import ProjectVideo from '../components/project-details/ProjectVideo';
import ProjectMetrics from '../components/project-details/ProjectMetrics';
import ProjectResults from '../components/project-details/ProjectResults';
import ProjectDescription from '../components/project-details/ProjectDescription';
import RelatedProjects from '../components/project-details/RelatedProjects';

const ProjectDetails = () => {
  const { id } = useParams();
  
  if (!id) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <ProjectHeader projectSlug={id} />
          <ProjectVideo />
          <ProjectMetrics />
          <ProjectResults />
          <ProjectDescription />
          <RelatedProjects />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;