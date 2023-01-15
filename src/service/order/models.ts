export type OrderDTO = {
  id: string;
  //... some params
};

export type RequestOrderBody = {
  tokenA?: string;
  tokenB?: string;
  userAddress?: string;
  isActive?: boolean;
};

export type MatchOrderIdsDTO = { id: string };

export type RequestMatchOrderIdsBody = {
  tokenA?: string;
  tokenB?: string;
  userAddress?: string;
  isActive?: boolean;
};
