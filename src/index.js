import React from 'react';
import { createRoot } from 'react-dom/client';
import Game from './components/Game';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);

reportWebVitals();
