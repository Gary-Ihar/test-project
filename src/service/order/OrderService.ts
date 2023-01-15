import { MatchOrderIdsDTO, OrderDTO, RequestMatchOrderIdsBody, RequestOrderBody } from './models';

export class OrderService {
  orders(options?: RequestOrderBody): Promise<OrderDTO[]> {
    return Promise.resolve([]);
  }

  orderIds(oprions?: RequestMatchOrderIdsBody): Promise<MatchOrderIdsDTO[]> {
    return Promise.resolve([]);
  }
}
