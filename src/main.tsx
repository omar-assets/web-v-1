import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { initializeSecurity } from './lib/security/middleware/securityMiddleware';
import { PageTransition } from './components/ui/PageTransition';
import App from './App';
import './index.css';

// Initialize security protocols
initializeSecurity();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HelmetProvider>
      <PageTransition>
        <App />
      </PageTransition>
    </HelmetProvider>
  </StrictMode>
);