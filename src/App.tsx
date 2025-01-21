import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        {/* Add a catch-all route that redirects to the index */}
        <Route path="*" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;