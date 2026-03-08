// src/App.js
import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';

import LoadingPage from './pages/LoadingPage';
import NotFound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const QuienesSomos = lazy(() => import('./pages/QuienesSomos'));
const Services = lazy(() => import('./pages/Services'));
const Faqs = lazy(() => import('./pages/Faqs'));
const Contact = lazy(() => import('./pages/Contact'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* --- CAMBIO: Se añadió padding horizontal (px-4 sm:px-6 lg:px-8) --- */}
        <main className="flex-grow bg-gray-50">
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
                  path="/servicios/:slug"
                  element={
                    <PageTransition>
                      <ServicePage />
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
                /><Route path="/proyectos" element={<ProjectsPage />} />
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;