
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  console.log('Index page rendering');
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="work">
        <Work />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
