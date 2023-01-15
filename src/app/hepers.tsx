/* eslint-disable react/jsx-no-target-blank */
import { Modal, notification } from 'antd';
import { TextItem } from 'components/TextItem';
import { when } from 'mobx';
import React, { useEffect } from 'react';
import { ChainId } from './AppController';

export function parseWalletId(id: string) {
  const firstTenSymbols = id.slice(0, 10);
  const lastFourSymbols = id.slice(-4);
  return `${firstTenSymbols}...${lastFourSymbols}`;
}

export function useNoMetaMask(hasMetaMask: boolean, onOk?: () => void) {
  useEffect(
    () =>
      when(
        () => !hasMetaMask,
        () => {
          Modal.confirm({
            closable: false,
            keyboard: false,
            icon: null,
            title: (
              <TextItem weight="strong" type="primary">
                Attention!
              </TextItem>
            ),
            content: (
              <span>
                The application requires the{' '}
                <a target="_blank" href="https://metamask.io/download/" style={{ color: '#08d899' }}>
                  MetaMask
                </a>{' '}
                extension to work properly. Download app and reload the page.
              </span>
            ),
            onOk,
            okText: 'Reload page',
            okButtonProps: { style: { backgroundColor: 'var(--primary-color)' } },
            cancelButtonProps: { style: { display: 'none' } },
          });
        }
      ),
    [hasMetaMask, onOk]
  );
}

export function useNoGoerliChain(chainId?: ChainId, onOk?: () => void) {
  useEffect(
    () =>
      when(
        () => !!chainId && chainId !== ChainId.goerli,
        () => {
          Modal.confirm({
            closable: false,
            keyboard: false,
            icon: null,
            title: (
              <TextItem weight="strong" type="primary">
                Attention!
              </TextItem>
            ),
            content: <span>Will be switched to Goerli chain.</span>,
            onOk,
            okText: 'Ok, go!',
            okButtonProps: { style: { backgroundColor: 'var(--primary-color)' } },
            cancelButtonProps: { style: { display: 'none' } },
          });
        }
      ),
    [chainId, onOk]
  );
}

export function useMetaMaskErrorHandler(code?: number) {
  useEffect(() => {
    if (code === -32002) {
      notification.error({
        message: 'Please open the MetaMask extension, finish the registration process and try connetc againt.',
      });
    }
  }, [code]);
}
