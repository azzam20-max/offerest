import React from 'react';
import LanguageSelector from './LanguageSelector';
import './Header.css';

const Header = () => {
  return (
    <header className="top-header">
      <div className="container">
        <div className="header-left">
          <span className="brand">Offerest</span>
        </div>
        <div className="header-right">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
