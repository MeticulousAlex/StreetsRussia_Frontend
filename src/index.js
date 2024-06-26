import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/fonts.css';
import App from './components/App/App.js';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
