import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;