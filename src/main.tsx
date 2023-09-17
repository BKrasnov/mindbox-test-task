import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './theme/index.css';

const rootElement: HTMLElement | null = document.getElementById('root');
if (rootElement === null) {
  throw new Error('Failed to find root element');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
