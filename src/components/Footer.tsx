const Footer = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: '#2A3C41' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">United Visions</h3>
              <p className="text-gray-400">
                Growing businesses by seamlessly integrating creativity, media, and phygital experiences to drive real results.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
              <a 
                href="mailto:hello@uv.agency"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                hello@uv.agency
              </a>
              <a 
                href="mailto:newbusiness@uv.agency"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                newbusiness@uv.agency
              </a>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/agencyuv/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.linkedin.com/company/agencyuv" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} UV Agency. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;