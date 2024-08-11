import React from 'react'
import Homepage from './pages/Homepage'
import Services from './pages/Services'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Team from './pages/Team'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
