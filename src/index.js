import React from 'react';
import ReactDOM from 'react-dom/client';
import './globalStyle.js';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './globalStyle.js';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './themes/default.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
