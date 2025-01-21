import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from './pages/Index';
import ProjectDetails from './pages/ProjectDetails';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          {/* Add a catch-all route that redirects to the index */}
          <Route path="*" element={<Index />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;