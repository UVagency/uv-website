
import Hero from '../components/Hero';
import Work from '../components/Work';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  console.log('Index page rendering');
  return (
    <div className="min-h-screen">
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      
      <section id="work" className="min-h-screen">
        <Work />
      </section>
      
      <section id="contact">
        <Footer />
      </section>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
