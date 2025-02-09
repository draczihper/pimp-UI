import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import DemoSection from './components/DemoSection';
import ImageUploadPage from './components/ImageUploadPage'; 
import Explore from './components/Explore';
import { inject } from '@vercel/analytics';
 
inject();
function App() {
  return (
    <Router>
      
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <DemoSection />
            </>
          } />
          <Route path="/upload" element={<ImageUploadPage />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

