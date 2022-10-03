import {React, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './context';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
