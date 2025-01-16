import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const projectData = {
  id: "sabor-de-barrio",
  title: "Bridging Bonds with Sabor de Barrio: A CSR Success Story",
  client: "Chancaca Deliciosa",
  image: "/lovable-uploads/6cbb6cd8-603d-460c-8ac7-8285e55a5f14.png",
  overview: "A corporate social responsibility campaign that strengthened the connection between Chancaca Deliciosa and the Chilean community by celebrating the traditional dish 'sopaipillas pasadas.'",
  strategy: [
    "Collaborated with local municipality for best recipe contest",
    "Organized contest won by Mrs. Angélica",
    "Refurbished neighborhood community center",
    "Brand representatives participated in renovation",
    "Amplified through press and digital media",
    "Celebrated with carnival on Sopaipilla Pasada Day"
  ],
  services: [
    "Creative services",
    "Paid Media",
    "Programmatic",
    "Content",
    "Influencers",
    "Growth Marketing"
  ],
  channels: [
    "Neighborhood and Community Engagement",
    "Out-of-Home (OOH) Advertising",
    "Phygital (Physical + Digital) Strategies",
    "Below-the-Line (BTL) Marketing",
    "YouTube",
    "Instagram",
    "Facebook"
  ],
  kpis: [
    "Over 2,000 families benefited",
    "115 mentions in traditional media",
    "$70,000 in earned media value",
    "Over 5,000,000 digital reach",
    "78% digital coverage",
    "Over 1,000 attendees at the event",
    "1.5 million reach through UGC at the event"
  ]
};

const ProjectDetails = () => {
  const { id } = useParams();
  console.log("Project ID:", id);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{projectData.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{projectData.client}</p>

          <img 
            src={projectData.image} 
            alt={projectData.title}
            className="w-full h-[400px] object-cover rounded-lg mb-12"
          />

          <div className="grid gap-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Campaign Overview</h2>
                <p className="text-gray-700">{projectData.overview}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Strategy</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {projectData.strategy.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Services Provided</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {projectData.services.map((service, index) => (
                      <li key={index} className="text-gray-700">{service}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Channels Utilized</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {projectData.channels.map((channel, index) => (
                      <li key={index} className="text-gray-700">{channel}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Key Performance Indicators</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {projectData.kpis.map((kpi, index) => (
                    <li key={index} className="text-gray-700">{kpi}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;