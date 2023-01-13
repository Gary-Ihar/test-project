import { makeAutoObservable } from 'mobx';
import { reaction } from 'mobx';
import Web3 from 'web3';

const CHAIN = 'goerli';

class Store {
  private web3: Web3 | undefined;
  accKey?: string = undefined;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    reaction(
      () => this.web3,
      () => {
        if (this.web3) {
          this.web3.eth.defaultChain = CHAIN;
          this.connect(); //TODO: If only via click?
          window.ethereum.on('accountsChanged', (accounts: Array<string> | unknown) => {
            if (Array.isArray(accounts) && typeof accounts[0] === 'string') {
              this.setAccount(accounts[0]);
            }
          });
          window.ethereum.on('disconnect', () => {
            this.setAccount();
          });
        }
      }
    );

    reaction(
      () => this.accKey,
      () => {
        // ок, отсюда можно разруливать реакции на все приложение относительно accKey
      }
    );
  }

  get hasMetamask() {
    return !!this.web3?.currentProvider;
  }

  get connected() {
    return !!this.accKey;
  }

  init() {
    this.web3 = new Web3(window.ethereum);
  }

  setAccount(key?: string) {
    this.accKey = key;
  }

  async connect() {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      this.web3?.eth.getAccounts((err, accounts) => {
        if (err) {
          // Error handle
        } else {
          this.setAccount(accounts[0]);
        }
      });
    } catch (e) {
      // Error connect
    }
  }
}

export const AppController = new Store();
