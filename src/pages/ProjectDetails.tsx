import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  console.log("Project ID:", id);
  
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Brand Name */}
          <div className="text-center mb-16">
            <span className="text-[#7FD1CC] text-sm uppercase tracking-wider mb-4 block">
              {project.category}
            </span>
            
            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-8">
              {project.title}
            </h1>
            
            {/* Description */}
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Sopaipillas pasadas, made with Chancaca Deliciosa, are an icon of Chile's culinary tradition. Our main objective is to strengthen this bond between the brand and people, generating impact and recall.
            </p>
          </div>

          {/* Main Image/Video Section */}
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
            ></iframe>
          </div>

          {/* Services and KPIs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-sm">
            <div>
              <h3 className="font-bold mb-3">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Creative services</li>
                <li>Paid Media</li>
                <li>Content, Influencers y Growth Marketing</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-3">Channels</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Neighborhood, Community, OOH</li>
                <li>Physical, BTL</li>
                <li>YouTube, Instagram, Facebook</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-3">Highlighted KPI</h3>
              <ul className="space-y-2 text-gray-600">
                <li>+5MM</li>
                <li>Digital Reach</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-3">Highlighted KPI</h3>
              <ul className="space-y-2 text-gray-600">
                <li>+1.5MM</li>
                <li>UGC REACH AT EVENT</li>
              </ul>
            </div>
          </div>

          {/* Campaign Banner Image */}
          <div className="mb-16">
            <img 
              src="/work/deliciosa_banner.png" 
              alt="Campaign Banner" 
              className="w-full rounded-lg"
            />
          </div>

          {/* Results Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">RESULTS</h2>
            <ul className="space-y-3 text-gray-600">
              <li>+2,000 FAMILIES BENEFITED</li>
              <li>115 TRADITIONAL MEDIA MENTIONS</li>
              <li>70K USD IN EARNED MEDIA VALUE</li>
              <li>+5,000,000 DIGITAL REACH</li>
              <li>+78% DIGITAL COVERAGE</li>
              <li>+1,000 ATTENDEES AT EVENT</li>
              <li>1.5M REACH WITH UGC AT EVENT</li>
            </ul>
          </div>

          {/* Campaign Description */}
          <div className="prose max-w-none text-gray-600 space-y-6">
            <p>
              We present a campaign with local taste, with "SABOR DE BARRIO"!
            </p>
            <p>
              "Sopaipillas pasadas" made with Chancaca Deliciosa, are an icon of Chile's culinary 
              tradition. Our main objective is to strengthen this bond between the brand and 
              people, generating impact and recall.
            </p>
            <p>
              To achieve this goal, we carried out a CSR action and outlined a comprehensive 
              communication strategy with the neighborhood as the main ingredient. We went in 
              search of the best "sopaipillas pasadas" preparation, together with the local 
              Municipality. The first place in this contest was won by the skilled hands of Mrs. 
              Angélica, and the prize was the refurbishment of her neighborhood's community 
              center.
            </p>
            <p>
              Representatives of the Chancaca Deliciosa brand actively participated in the 
              renovation of this community center, directly benefiting over 2000 neighboring 
              families.
            </p>
            <p>
              We amplified this social action with a press strategy in various media outlets, and 
              also executed an efficient plan of investment in digital media with high-impact 
              content. And because sharing is caring... we celebrated the reopening of the 
              community center with a vibrant carnival on Sopaipilla Pasada Day.
            </p>
            <p>
              We had the presence of municipal authorities, and the entire community including in 
              the neighborhood could enjoy activities and surprises. With this campaign, we not 
              only connected the brand with people but also caused a positive impact and made 
              a lasting impression... with authentic "sabor de barrio"!
            </p>
          </div>

          {/* Related Projects Section */}
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;