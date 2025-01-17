import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Work />
      <Footer />
    </div>
  );
};

export default Index;