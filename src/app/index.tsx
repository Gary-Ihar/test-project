/* eslint-disable react/jsx-no-target-blank */
import { Modal } from 'antd';
import { when } from 'mobx';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { AppController } from './AppController';

function reloadPage() {
  window.location.reload();
}

const App = observer(function App() {
  const { hasMetamask } = AppController;

  useEffect(() => {
    AppController.init();
  }, []);

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
                  Memtamask
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

  return <Layout>Main</Layout>;
});

export default App;
