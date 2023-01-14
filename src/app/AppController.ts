import { makeAutoObservable } from 'mobx';
import { reaction } from 'mobx';
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

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    reaction(
      () => this.accKey,
      () => {
        // можно чет менять, если кошелек меняется
      }
    );
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

  async transferToGoerliChain() {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: ChainId.goerli }],
      });
    } catch (e) {
      console.log('Switch chain error', e);
    }
  }

  private setChainId(id: ChainId) {
    this.chainId = id;
  }

  private async checkConnetction() {
    return window.ethereum._metamask.isUnlocked(); // TODO: Yet experemental
  }

  async connect() {
    if (this.web3 && (await this.checkConnetction())) {
      this.initListeners();
      try {
        const acc = await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.setChainId(window.ethereum.chainId); //TODO: NPE !!!
        this.setAccount(acc[0]);
      } catch (e) {
        // Error connect
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
