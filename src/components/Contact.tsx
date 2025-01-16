const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none h-32"
                  placeholder="Your message"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;