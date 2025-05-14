import React, { useEffect, useRef } from 'react';
import './Services.css';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const cardsRef = useRef([]);
  const { t } = useTranslation();

  const services = t('services', { returnObjects: true });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    const elements = cardsRef.current;
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section className="services-section" id="services">
      <h2 className="section-title">{t('services_title')}</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            className="service-card fade"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
