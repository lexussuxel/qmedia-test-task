import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import styles from './app.module.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className={styles.app_wrapper}>
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>
);