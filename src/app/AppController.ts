import { makeAutoObservable } from 'mobx';
import { reaction } from 'mobx';
import Web3 from 'web3';

const CHAIN = 'goerli';

class Store {
  private web3: Web3 | undefined;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    reaction(
      () => this.web3,
      () => {
        if (this.web3) {
          this.web3.eth.defaultChain = CHAIN;
        }
      }
    );
  }

  get hasMetamask() {
    return !!this.web3?.currentProvider;
  }

  init() {
    this.web3 = new Web3(window.ethereum);
  }
}

export const AppController = new Store();
