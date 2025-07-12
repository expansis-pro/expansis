// src/App.js
import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const QuienesSomos = lazy(() => import('./pages/QuienesSomos'));
const Faqs = lazy(() => import('./pages/Faqs'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const location = useLocation();

  return (
    // 1. Contenedor principal ahora usa Flexbox para controlar el layout vertical
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* 2. El contenido principal ahora crece para ocupar el espacio disponible */}
      <main className="flex-grow">
        <Suspense fallback={<div className="pt-20 text-center">Cargando...</div>}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* --- Tus rutas no cambian --- */}
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                }
              />
              <Route
                path="/servicios"
                element={
                  <PageTransition>
                    <Services />
                  </PageTransition>
                }
              />
              <Route
                path="/quienes-somos"
                element={
                  <PageTransition>
                    <QuienesSomos />
                  </PageTransition>
                }
              />
              <Route
                path="/faq"
                element={
                  <PageTransition>
                    <Faqs />
                  </PageTransition>
                }
              />
              <Route
                path="/contacto"
                element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                }
              />
              <Route path="*" element={<div className="pt-20 text-center"><h2>404: Página no encontrada</h2></div>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;