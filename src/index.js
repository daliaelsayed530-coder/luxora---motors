

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LanguageProvider } from './Home/LanguageContext';

// ضبط العرض ليملأ الشاشة 100% وإلغاء أي مسافات فارغة في كل الموقع
document.documentElement.style.width = "100%";
document.body.style.width = "100%";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.backgroundColor = "#07080a";
document.body.style.boxSizing = "border-box";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);









