import { makeAutoObservable } from 'mobx';
import Web3 from 'web3';

export enum ChainId {
  mainnet = '0x1',
  ropsten = '0x3',
  rinkeby = '0x4',
  goerli = '0x5',
  kovan = '0x2a',
}

class Store {
  private web3: Web3 | undefined;

  accKey?: string = undefined;
  hasMetaMask = false;
  chainId?: ChainId = undefined;
  error?: number = undefined;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get connected() {
    return !!this.accKey;
  }

  init() {
    if (window.ethereum) {
      this.web3 = new Web3(window.ethereum);
      this.changeMetaMask(!!window.ethereum.isMetaMask);
    }
  }

  setAccount(key?: string) {
    this.accKey = key;
  }

  changeMetaMask(value: boolean) {
    this.hasMetaMask = value;
  }

  setErrorCode = (n?: number) => {
    this.error = n;
  };

  async transferToGoerliChain() {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: ChainId.goerli }],
      });
    } catch (e: any) {
      if (typeof e?.code === 'number') {
        this.setErrorCode(e.code);
      }
    }
  }

  private setChainId(id: ChainId) {
    this.chainId = id;
  }

  async connect() {
    try {
      this.initListeners();
      const acc = await window.ethereum.request({ method: 'eth_requestAccounts' });
      this.setChainId(window.ethereum.chainId); //TODO: NPE !!!
      this.setAccount(acc[0]);
    } catch (e: any) {
      if (typeof e?.code === 'number') {
        this.setErrorCode(e.code);
      }
    }
  }

  private initListeners() {
    this.onChainChangeListener(() => window.location.reload());
    this.onAccountChangeListener(this.setAccount);
    this.onDisconnetListener(this.setAccount);
  }

  private onChainChangeListener(cb?: () => void) {
    window.ethereum.on('chainChanged', () => {
      cb?.();
    });
  }

  private onAccountChangeListener(cb?: (accId: string) => void) {
    window.ethereum.on('accountsChanged', (accounts: Array<string> | unknown) => {
      if (Array.isArray(accounts) && typeof accounts[0] === 'string') {
        cb?.(accounts[0]);
      }
    });
  }

  private onDisconnetListener(cb?: () => void) {
    window.ethereum.on('disconnect', () => {
      cb?.();
    });
  }
}

export const AppController = new Store();
