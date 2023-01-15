import { makeAutoObservable } from 'mobx';
import { OrderService } from 'service/order';

class Store {
  dataService = new OrderService();
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  loadUser() {
    // this.someValue = this.dataService.orderIds()
  }
}

export const store = new Store();
