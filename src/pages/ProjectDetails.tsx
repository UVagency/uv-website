import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Project Details</h1>
        <p className="text-lg mb-4">
          Sopaipillas pasadas, made with Chancaca Deliciosa, are an icon of Chile's culinary tradition. 
          Our main objective is to strengthen this bond between the brand and people, generating impact and recall.
        </p>
        <div className="aspect-video w-full">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/your-video-id"
            title="Project Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;