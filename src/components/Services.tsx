const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies.",
    icon: "🖥️"
  },
  {
    title: "Digital Design",
    description: "Beautiful and functional designs that engage your audience.",
    icon: "✏️"
  },
  {
    title: "Brand Strategy",
    description: "Strategic planning to elevate your brand in the digital space.",
    icon: "📊"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover-scale"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;