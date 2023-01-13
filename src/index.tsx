import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { AppController } from './app/AppController';

const rootDiv = document.getElementById('block_chain_app');

if (rootDiv) {
  AppController.init();
  ReactDOM.createRoot(rootDiv).render(<App />);
}
