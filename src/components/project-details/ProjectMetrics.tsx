import React from 'react';

const ProjectMetrics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-sm">
      <div>
        <h3 className="font-bold mb-3">Services</h3>
        <ul className="space-y-2 text-gray-600">
          <li>Creative services</li>
          <li>Paid Media</li>
          <li>Content, Influencers y Growth Marketing</li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-bold mb-3">Channels</h3>
        <ul className="space-y-2 text-gray-600">
          <li>Neighborhood, Community, OOH</li>
          <li>Physical, BTL</li>
          <li>YouTube, Instagram, Facebook</li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-bold mb-3">Highlighted KPI</h3>
        <ul className="space-y-2 text-gray-600">
          <li>+5MM</li>
          <li>Digital Reach</li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-bold mb-3">Highlighted KPI</h3>
        <ul className="space-y-2 text-gray-600">
          <li>+1.5MM</li>
          <li>UGC REACH AT EVENT</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectMetrics;