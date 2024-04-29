import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import Faq from './Components/Faq';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <nav className={`fixed-navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <ul className="navbar-group">
          <li className='logo'>Flowbite <span className='spl-text'>logo</span></li>
        </ul>
        <ul className={`navbar-group ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <li className='navbar-li' onClick={() => { handleNavigation('home'); setIsMobileMenuOpen(false); }}>Home</li>
          <li className='navbar-li' onClick={() => { handleNavigation('features'); setIsMobileMenuOpen(false); }}>Features</li>
          <li className='navbar-li' onClick={() => { handleNavigation('pricing'); setIsMobileMenuOpen(false); }}>Pricing</li>
          <li className='navbar-li' onClick={() => { handleNavigation('contact'); setIsMobileMenuOpen(false); }}>Contact</li>
          <li className='navbar-li' onClick={() => { handleNavigation('faq'); setIsMobileMenuOpen(false); }}>FAQ</li>
        </ul>
        <ul className={`navbar-group ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <button className='btn-home'>Login</button>
          <button className='btn-home'>Signup</button>
        </ul>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {currentPage === 'home' && <Home />}
      {currentPage === 'features' && <Features />}
      {currentPage === 'pricing' && <Pricing />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'faq' && <Faq />}
    </div>
  );
}

export default App;
