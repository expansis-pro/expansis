import React, { useState, useRef, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';




import Home from './pages/Home';


import Separador1 from './img/Separador1-1920x320px.webp'
import Separador2 from './img/Separador2-1920x320px.webp'
import Separador1Mob from './img/Separador1_Mobile-425x60px.webp'
import Separador2Mob from './img/Separador2_Mobile-425x60px.webp'


import './global.css';

// Importación diferida de componentes
const About = lazy(() => import('./pages/About'));
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const MisionVision = lazy(() => import('./pages/MisionVision'));
const Faqs = lazy(() => import('./pages/Faqs'));
const Separador = lazy(() => import('./components/Separador'));
const Whatsapp = lazy(() => import('./components/Whatsapp'));


function App() {

  const homeRef = useRef(null)
  const [homeHeight, setHomeHeight] = useState(0);
  const aboutRef = useRef(null);
  const aboutMeRef = useRef(null);
  const misionvisionRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqsRef = useRef(null);
  const separadorRef = useRef(null);
  const whatsapptRef = useRef(null);


  useEffect(() => {
    if (homeRef.current) {
      setHomeHeight(homeRef.current.offsetHeight);
    }
  }, []);



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {

        // console.log(entries)
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            // Cargar contenido de la sección (si es necesario)
          }
        });
      },
      { threshold: 0.1 }
    );
    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (aboutMeRef.current) observer.observe(aboutMeRef.current);
    if (misionvisionRef.current) observer.observe(misionvisionRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (faqsRef.current) observer.observe(faqsRef.current);
    if (separadorRef.current) observer.observe(separadorRef.current);
    if (whatsapptRef.current) observer.observe(whatsapptRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (aboutMeRef.current) observer.unobserve(aboutMeRef.current);
      if (misionvisionRef.current) observer.unobserve(misionvisionRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
      if (faqsRef.current) observer.unobserve(faqsRef.current);
      if (separadorRef.current) observer.unobserve(separadorRef.current);
      if (whatsapptRef.current) observer.unobserve(whatsapptRef.current);
    };
  }, []);

  return (
    <div>
      <Navbar />

      <section id="home" ref={homeRef}>
        <Home />
      </section>
      <section id="services" ref={servicesRef}>
        <Services />
      </section>
      <section id="about" ref={aboutRef}>
        <About />
      </section>

      <section id="misionvision" ref={aboutRef}>
        <MisionVision />
      </section>
      {/* <section id="separador">
        <Separador
          imageDesktop={Separador1} imageMobile={Separador1Mob}
          alt="Separador 1" />
      </section> */}

      <section id="contact" ref={contactRef}> {/* Sección Contact */}
        <Contact />
      </section>

      <section id="aboutMe" ref={aboutRef}>
        <AboutMe />
      </section>

      <section id="whatsapp" ref={whatsapptRef}> {/* Sección Contact */}
        <Whatsapp />
      </section>
      {/* <section id="separador">
        <Separador
          imageDesktop={Separador2} imageMobile={Separador2Mob}
          alt="Separador 1" />
      </section> */}
      <section id="faqs" ref={faqsRef}>
        <Faqs />
      </section>



      <Footer />
    </div>
  );
}

export default App;