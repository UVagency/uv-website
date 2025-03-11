import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  console.log('Index page rendering');
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Work />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;