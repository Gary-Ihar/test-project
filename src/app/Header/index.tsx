import { AppController } from 'app/AppController';
import { parseWalletId } from 'app/hepers';
import { Button } from 'components/Button';
import { TextItem } from 'components/TextItem';
import { Logo, MetaMaskLogo } from 'icons';
import SomeIcon from 'icons/SomeIcon';
import { observer } from 'mobx-react';
import React from 'react';
import style from './style.module.css';

const ConnectButton = observer(function ConnectButton() {
  const { hasMetaMask } = AppController;

  return (
    <Button disabled={!hasMetaMask} onClick={AppController.connect}>
      Connect Wallet
    </Button>
  );
});

const WalletInfoBtn = function WalletInfoBtn({ keyId }: { keyId: string }) {
  return (
    <div className={style.walletBtn}>
      <MetaMaskLogo className={style.walletBtn__marginRight} />
      <TextItem>{parseWalletId(keyId)}</TextItem>
      <SomeIcon style={{ display: 'flex' }} className={style.walletBtn__marginLeft} />
    </div>
  );
};

export const Header = observer(function App() {
  const { accKey, connected } = AppController;

  return (
    <div className={style.header}>
      <Logo className={style.logo} />
      {connected ? <div>{!!accKey && <WalletInfoBtn keyId={accKey} />}</div> : <ConnectButton />}
    </div>
  );
});
