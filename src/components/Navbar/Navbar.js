import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const currentY = window.scrollY;

      // Hide if scrolling down, show if up
      if (currentY > lastScrollY.current && currentY > 100) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }

      // Auto-close menu
      if (menuOpen) {
        setMenuOpen(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  return (
    <header className={`navbar ${hideNavbar ? 'navbar-hidden' : ''}`}>
      <div className="navbar-brand">CNC Manufacturing Co.</div>

      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        ref={toggleRef}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav
        className={`navbar-links ${menuOpen ? 'active' : ''}`}
        ref={navRef}
      >
        <a href="#about" onClick={() => setMenuOpen(false)}>{t('navbar_tentang')}</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>{t('navbar_layanan')}</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>{t('navbar_kontak')}</a>
      </nav>
    </header>
  );
};

export default Navbar;
