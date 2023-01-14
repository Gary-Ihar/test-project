import { observer } from 'mobx-react';
import React from 'react';
import { Layout } from '../components/Layout';
import { AppController } from './AppController';
import { Header } from './Header';
import { useNoGoerliChain, useNoMetamask } from './hepers';

function reloadPage() {
  window.location.reload();
}

const App = observer(function App() {
  const { hasMetaMask, chainId } = AppController;

  useNoMetamask(hasMetaMask, reloadPage);
  useNoGoerliChain(chainId, AppController.transferToGoerliChain);

  return <Layout header={<Header />} />;
});

export default App;
