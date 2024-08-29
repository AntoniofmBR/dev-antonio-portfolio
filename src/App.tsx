import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AllProjects from './pages/all_projects';
import { NotFoundPage } from './pages/not_found';
import { Index } from '.'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

