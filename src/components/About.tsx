const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                UV.Agency is a creative digital agency that combines design, technology, and strategy to build remarkable digital experiences.
              </p>
              <p className="text-lg text-gray-600">
                We work closely with our clients to understand their needs and deliver solutions that exceed expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover-scale">
                <img 
                  src="/placeholder.svg" 
                  alt="About UV Agency 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover-scale">
                <img 
                  src="/placeholder.svg" 
                  alt="About UV Agency 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;