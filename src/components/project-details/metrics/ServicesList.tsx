import React from 'react';

interface ServicesListProps {
  services: string[];
}

const ServicesList = ({ services }: ServicesListProps) => {
  if (!Array.isArray(services) || services.length === 0) return null;

  return (
    <div>
      <h3 className="font-bold mb-3">Services</h3>
      <ul className="space-y-2 text-gray-600">
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;