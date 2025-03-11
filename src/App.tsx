
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ProjectDetails from './pages/ProjectDetails';
import Culture from './pages/Culture';

function App() {
  console.log('App rendering, setting up routes');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/culture" element={<Culture />} />
      </Routes>
    </Router>
  );
}

export default App;
