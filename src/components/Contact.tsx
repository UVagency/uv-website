const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#40B0A6] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl mb-4">CONTACT US</h3>
            <h2 className="text-6xl font-bold mb-16">How to reach us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-semibold mb-4">Operations</h3>
                <ul className="space-y-2 text-xl">
                  <li>Latam</li>
                  <li>United States</li>
                  <li>Europe</li>
                </ul>
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-4">New Business</h3>
                <a href="mailto:newbusiness@uv.agency" className="text-xl hover:underline">
                  newbusiness@uv.agency
                </a>
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-4">General Inquiries</h3>
                <a href="mailto:hello@uv.agency" className="text-xl hover:underline">
                  hello@uv.agency
                </a>
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-4">Follow us</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-xl hover:underline">LinkedIn</a>
                  <a href="#" className="block text-xl hover:underline">Instagram</a>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-xl leading-relaxed">
                We are the Integrated Marketing Agency that combines Ideas + Media + Tech to generate 
                impactful and concrete results challenging the conventional approach and seek innovative 
                solutions based on a 360 degree view of all areas of Marketing.
              </p>
              
              <p className="text-xl leading-relaxed">
                We build strategies and execute multichannel action plans that contribute to the growth of 
                our clients' business. We operate globally with offices distributed in the region.
              </p>

              <a 
                href="#"
                className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Book a meeting here
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;