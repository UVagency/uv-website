
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Culture = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section id="culture" className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#7FD1CC] text-sm uppercase tracking-wider mb-4 block font-bold">
                OUR CULTURE
              </span>
              <h1 className="text-5xl font-bold mb-6">The UV way</h1>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our culture is built on creativity, collaboration, and a passion for innovation.
                We believe in pushing boundaries and creating memorable experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                <p className="text-gray-600 mb-6">
                  At UV Agency, we're guided by a set of core values that define who we are and how we work.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-[#7FD1CC] rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">Creativity Without Limits</h3>
                      <p className="text-gray-600">We embrace bold ideas and innovative thinking to create unique solutions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#7FD1CC] rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">Client Partnership</h3>
                      <p className="text-gray-600">We work as an extension of our clients' teams, deeply understanding their needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#7FD1CC] rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">Results-Driven Approach</h3>
                      <p className="text-gray-600">We focus on delivering measurable impact and meaningful outcomes.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-100 rounded-3xl p-10 flex items-center justify-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
                  <p className="text-gray-600 text-lg italic text-center">
                    "To grow businesses by seamlessly integrating creativity, media, and phygital experiences to drive real results."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#2A3C41] text-white rounded-3xl p-12 mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Team Environment</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-[#7FD1CC] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Collaborative</h3>
                  <p className="text-gray-300">We believe in the power of teamwork and cross-disciplinary collaboration.</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#7FD1CC] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Dynamic</h3>
                  <p className="text-gray-300">We thrive in fast-paced environments and adapt quickly to change.</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#7FD1CC] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Passionate</h3>
                  <p className="text-gray-300">We bring enthusiasm and dedication to every project we undertake.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold mb-8">Join Our Team</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                We're always looking for talented individuals who are passionate about creativity and innovation.
                If you're interested in joining our team, we'd love to hear from you.
              </p>
              <a href="mailto:careers@uv.agency" className="inline-flex items-center justify-center bg-[#7FD1CC] hover:bg-[#6DC1BC] text-white font-bold py-3 px-8 rounded-full transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Culture;
