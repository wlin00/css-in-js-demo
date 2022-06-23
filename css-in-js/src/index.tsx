import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './common/style'
import { ThemeProvide } from 'styled-components'
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

reportWebVitals();
