import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { IconContext } from 'react-icons/lib';
import styles from './main.module.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IconContext.Provider
      value={{
        className: `${styles.svg}`,
      }}
    >
      <App />
    </IconContext.Provider>
  </React.StrictMode>
);
