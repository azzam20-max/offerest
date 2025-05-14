import React from 'react';
import './Hero.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <h1>{t('hero_header')}</h1>
        <p>{t('hero_p')}</p>
        <a href="#services" className="hero-button">{t('hero_button')}</a>
      </div>
    </section>
  );
};

export default Hero;
