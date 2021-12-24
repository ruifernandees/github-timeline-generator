import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RepositoriesTimeline from './pages/RepositoriesTimeline';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<RepositoriesTimeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;