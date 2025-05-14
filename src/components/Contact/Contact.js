import React from 'react';
import './Contact.css';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const whatsappNumber = '628123456789'; // Ganti sesuai nomor kamu
  const emailAddress = 'yourmail@example.com'; // Ganti sesuai email kamu

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo, saya ingin bertanya mengenai layanan Anda.")}`;
  const emailLink = `mailto:${emailAddress}?subject=Permintaan Informasi&body=Halo, saya ingin bertanya mengenai layanan Anda.`;

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Kontak Kami</h2>
      <p className="contact-subtitle">Hubungi kami melalui platform pilihan Anda:</p>
      <div className="contact-options">
        <a href={whatsappLink} className="contact-card" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="contact-icon" />
          <span>WhatsApp</span>
        </a>
        <a href={emailLink} className="contact-card" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="contact-icon" />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
