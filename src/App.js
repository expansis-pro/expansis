import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Tu import de index.css es clave para que Tailwind funcione
import './index.css';

// La importación diferida de componentes es una excelente práctica. La mantenemos intacta.
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const MisionVision = lazy(() => import('./pages/MisionVision'));
const Faqs = lazy(() => import('./pages/Faqs'));
const Whatsapp = lazy(() => import('./pages/Whatsapp'));
// Eliminamos las importaciones de imágenes de separadores si no se usan aquí directamente.

function App() {
  // Toda tu lógica de refs e intersection observer no necesita cambios.
  // Es independiente de la capa de presentación (UI).

  // Componente de carga para Suspense
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primario"></div>
    </div>
  );

  return (
    // Reemplazamos el div por un <main> para mejor semántica.
    // - `bg-white`: Establece un color de fondo base para toda la app.
    // - `text-gray-800`: Establece un color de texto base.
    <main className="bg-white text-gray-800">
      <Navbar />

      {/* Suspense permite mostrar un fallback (como un spinner) mientras los componentes lazy se cargan */}
      <Suspense fallback={<LoadingSpinner />}>
        {/* Hemos eliminado las etiquetas <section> que envolvían cada componente.
          Ahora, cada componente de página es responsable de su propia etiqueta <section> y su estilo.
          Esto hace que el App.js esté mucho más limpio y los componentes sean más autónomos.
        */}
        <Home />
        <Services />
        <About />
        <AboutMe />
        <Faqs />
        <Whatsapp />
        <Contact />
        <MisionVision />
      </Suspense>

      <Footer />
    </main>
  );
}

export default App;