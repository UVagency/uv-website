
import React from 'react';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  // Don't render the navigation bar on any page
  return null;
};

export default Navigation;
