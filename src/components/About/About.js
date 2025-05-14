import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

import { useTranslation } from 'react-i18next';

const images = [
  process.env.PUBLIC_URL + '/img/about1.jpg',
  process.env.PUBLIC_URL + '/img/about2.jpg',
  process.env.PUBLIC_URL + '/img/about3.jpg'
  
  // '/img/about1.jpg',
  // '/img/about2.jpg',
  // '/img/about3.jpg'
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text" data-aos="fade-up"> 
          <h2>{t('about_title')}</h2>
          <p>{t('about_p1')}</p>
          <p>{t('about_p2')}</p>
        </div>
        <div className="about-image" data-aos="flip-left">
          <img
            src={images[currentIndex]}
            alt={`Tentang Kami ${currentIndex + 1}`}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
