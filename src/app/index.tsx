/* eslint-disable react/jsx-no-target-blank */
import { Modal } from 'antd';
import { when } from 'mobx';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { AppController } from './AppController';
import { Header } from './Header';

function reloadPage() {
  window.location.reload();
}

const App = observer(function App() {
  const { hasMetamask } = AppController;

  useEffect(
    () =>
      when(
        () => !hasMetamask,
        () => {
          Modal.confirm({
            content: (
              <span>
                The application requires the{' '}
                <a target="_blank" href="https://metamask.io/download/">
                  MetaMask
                </a>{' '}
                extension to work properly.
              </span>
            ),
            onOk: reloadPage,
            okText: 'Reload page',
          });
        }
      ),
    [hasMetamask]
  );

  return <Layout header={<Header />} />;
});

export default App;
