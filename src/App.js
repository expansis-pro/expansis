// src/App.js
import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation, BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';

import LoadingPage from './pages/LoadingPage';
import NotFound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const QuienesSomos = lazy(() => import('./pages/QuienesSomos'));
const Faqs = lazy(() => import('./pages/Faqs'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-[64px]">
          <Suspense fallback={<LoadingPage />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
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
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
        {/* CAMBIO REALIZADO: Eliminar el '>' extra aquí */}
      </div>{/* <--- ESTABA ASÍ: </div>> - SE QUITÓ EL ÚLTIMO '>' */}
    </>
  );
}

export default App;