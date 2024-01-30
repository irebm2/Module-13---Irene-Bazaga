import React from 'react';
import { NavLink } from 'react-router-dom';
import NavTabs from './NavTabs';
import './Header.css';

function Header() {
  return (
    <header className="header">
      {/* Branding or logo */}
      <h1 className="header-title">Irene's portfolio</h1>
  
      {/* Navigation tabs */}
      <NavTabs />
      
    
    </header>
  );
}

export default Header;