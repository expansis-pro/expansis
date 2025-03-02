// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import './global.css';
import ScrollToTop from './components/ScrollToTop'; // Importa el componente ScrollToTop

function App() {
  return (
    <Router>
      <ScrollToTop> {/* Envuelve el contenido con ScrollToTop */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/testimonials' element={<Testimonials />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;