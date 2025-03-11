
import React from 'react';
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-custom-teal">Nosotros</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl hover-scale">
                <img 
                  src="/lovable-uploads/38925f1f-f58e-48dd-8f58-ade2629ecc57.png" 
                  alt="UV.Agency Team" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Geometric Shapes for Visual Interest */}
              <div className="geometric-shape shape-4 -z-10"></div>
            </div>
            
            <div className="space-y-6">
              <div className={cn("fade-in")}>
                <h3 className="text-2xl font-semibold mb-2">Marketing para cada interacción</h3>
                <p className="text-gray-600">
                  Somos una agencia de marketing y comunicación especializada en estrategia, medios, creatividad, PR y experiencias a través de la tecnología. Creemos que cada interacción cuenta.
                </p>
              </div>
              
              <div className={cn("fade-in")} style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-semibold mb-2">Nuestro enfoque</h3>
                <p className="text-gray-600">
                  Combinamos creatividad y tecnología para crear experiencias memorables para las marcas. Nuestro enfoque phygital nos permite unir el mundo físico y digital para crear conexiones significativas con los consumidores.
                </p>
              </div>
              
              <div className={cn("fade-in")} style={{ animationDelay: "0.4s" }}>
                <h3 className="text-2xl font-semibold mb-2">Nuestro equipo</h3>
                <p className="text-gray-600">
                  Contamos con un equipo multidisciplinario de estrategas, creativos, diseñadores, desarrolladores y especialistas en medios, todos comprometidos con la excelencia y la innovación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
