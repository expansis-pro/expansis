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
import WhatsAppFloating from './components/WhatsAppFloating';
import AgencySchema from './components/SEO/AgencySchema';

const Home = lazy(() => import('./pages/Home'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const QuienesSomos = lazy(() => import('./pages/QuienesSomos'));
const Services = lazy(() => import('./pages/ServicesHub'));
const Faqs = lazy(() => import('./pages/Faqs'));
const Contact = lazy(() => import('./pages/Contact'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));

// 1. IMPORTACIONES DEL BLOG
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

function App() {
  const location = useLocation();

  return (
    <>
      <AgencySchema />

      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow bg-deepBlue">
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
                  path="/proyectos"
                  element={
                    <PageTransition>
                      <ProjectsPage />
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

                {/* 2. RUTAS NUEVAS PARA EL BLOG */}
                <Route
                  path="/blog"
                  element={
                    <PageTransition>
                      <Blog />
                    </PageTransition>
                  }
                />
                <Route
                  path="/blog/:slug"
                  element={
                    <PageTransition>
                      <BlogPost />
                    </PageTransition>
                  }
                />

                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>

        <WhatsAppFloating />
        <Footer />
      </div>
    </>
  );
}

export default App;