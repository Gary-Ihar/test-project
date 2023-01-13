import { AppController } from 'app/AppController';
import { parseWalletId } from 'app/hepers';
import { Button } from 'components/Button';
import { TextItem } from 'components/TextItem';
import { Logo } from 'icons';
import { observer } from 'mobx-react';
import React from 'react';
import style from './style.module.css';

const ConnectButton = observer(function ConnectButton() {
  const { hasMetamask } = AppController;

  return (
    <Button disabled={!hasMetamask} onClick={AppController.connect}>
      Connect Wallet
    </Button>
  );
});

export const Header = observer(function App() {
  const { accKey, connected } = AppController;

  return (
    <div className={style.header}>
      <Logo className={style.logo} />
      {connected ? <div>{!!accKey && <TextItem>{parseWalletId(accKey)}</TextItem>}</div> : <ConnectButton />}
    </div>
  );
});
