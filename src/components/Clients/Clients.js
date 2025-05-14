import React, { useEffect} from 'react';
import './Clients.css';
import { useTranslation } from 'react-i18next';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const clients = [
  { name: 'PT Astra', logo: process.env.PUBLIC_URL + '/img/logo-astra-internasional.jpg' },
  { name: 'Yamaha Motor', logo: process.env.PUBLIC_URL + '/img/yamaha.jpeg' },
  { name: 'Panasonic', logo: process.env.PUBLIC_URL + '/img/panasonic.jpg' },
  { name: 'Hitachi', logo: process.env.PUBLIC_URL + '/img/hitachi.jpg' },
  { name: 'Sony', logo: process.env.PUBLIC_URL + '/img/sony.png' },
  { name: 'Toyota', logo: process.env.PUBLIC_URL + '/img/toyota.png' }
];


const Clients = () => {
    useEffect(() => {
      AOS.init({ duration: 800, once: true });
    }, []);
    
    const { t } = useTranslation();

  return (
    <section className="clients-section" id="clients">
      <div className="clients-container" data-aos="fade-up">
        <h2 className="clients-title">{t('client_title')}</h2>
        <p className="clients-subtitle">
          {t('client_p')}
        </p>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          observer={true}
          observeParents={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="clients-swiper"
        >

          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="client-logo">
                <img src={client.logo} alt={client.name} />
                <span>{client.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;