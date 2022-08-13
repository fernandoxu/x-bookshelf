import React from 'react';
import ReactDOM from 'react-dom/client';
import { loadDevTools } from './dev-tools/load';
import './bootstrap';

import './index.css';
import App from './App';
import { DiscoverBooksScreen } from './screens/discover';
import reportWebVitals from './reportWebVitals';

loadDevTools(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      {/* <App /> */}
      <DiscoverBooksScreen />
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
