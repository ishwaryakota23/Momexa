import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ IMPORT THIS
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* ✅ WRAP YOUR APP HERE */}
    <App />
  </BrowserRouter>
);
