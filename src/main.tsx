import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initGA } from './analytics/ga';
import { App } from './App';
import './styles/globals.css';

initGA();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
