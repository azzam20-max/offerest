import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h3 className="footer-logo">{t('footer_header')}</h3>
        <p className="footer-description">
          {t('footer_p')}
        </p>
        
        <div className="footer-links">
          <a href="#about">{t('footer_tentang')}</a>
          <a href="#services">{t('footer_layanan')}</a>
          {/* <a href="#contact">{t('footer_kontak')}</a> */}
        </div>

        <div className="footer-socials">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} CNC Manufacture. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
