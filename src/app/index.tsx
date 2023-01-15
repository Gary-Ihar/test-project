import { observer } from 'mobx-react';
import React from 'react';
import { Layout } from '../components/Layout';
import { AppController } from './AppController';
import { Footer } from './Footer';
import { Header } from './Header';
import { useMetaMaskErrorHandler, useNoGoerliChain, useNoMetaMask } from './hepers';

function reloadPage() {
  window.location.reload();
}

const App = observer(function App() {
  const { hasMetaMask, chainId, error } = AppController;

  useNoMetaMask(hasMetaMask, reloadPage);
  useNoGoerliChain(chainId, AppController.transferToGoerliChain);
  useMetaMaskErrorHandler(error);

  return <Layout header={<Header />} footer={<Footer />} />;
});

export default App;
