import { Layout } from 'components/Layout';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { AppController } from './app/AppController';

const rootDiv = document.getElementById('block_chain_app');

const AppModule = lazy(async () => {
  await AppController.init();
  return import('./app');
});

if (rootDiv) {
  AppController.init();
  ReactDOM.createRoot(rootDiv).render(
    <Suspense fallback={<Layout />}>
      <AppModule />
    </Suspense>
  );
}
