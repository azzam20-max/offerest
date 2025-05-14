import './App.css';
import React from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero_section/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'
import Clients from './components/Clients/Clients';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <Hero />
      <Services />
      <About />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
