
import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/3de03002-3246-4965-b7e8-9780a09a46af.png" 
              alt="UV.Agency Logo" 
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-400 max-w-xs">
              Marketing y Comunicación especializada en estrategia, medios, creatividad, PR y experiencias a través de la tecnología.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-custom-teal transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#work" className="text-gray-400 hover:text-custom-teal transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-custom-teal transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-custom-teal transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/uv.agency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-custom-teal transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/uvagency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-custom-teal transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@uv.agency" 
                className="bg-gray-800 p-2 rounded-full hover:bg-custom-teal transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} UV Agency. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
