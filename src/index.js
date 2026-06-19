import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// ❌ ELIMINADO: Ya no importamos HelmetProvider
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

// 1. Si react-snap ya generó el HTML estático para Google, lo hidratamos de forma nativa
if (rootElement.hasChildNodes()) {

  ReactDOM.hydrateRoot(
    rootElement,
    < React.StrictMode >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode >
  );
} else {
  // 2. Si está vacío (entorno de desarrollo local), renderiza de forma normal
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    < React.StrictMode >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode >
  );
}