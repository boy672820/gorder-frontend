import { Product } from './product';

export type CreateOrderRequest = {
  create: Array<Pick<Product, 'productId'>>;
};

type OrderHasProduct = Product & { quantity: number };

export type CreateOrderResponse = {
  orderId: string;
  basePrice: number;
  discountPrice: number;
  totalPrice: number;
  type: string;
  status: string;
  createdAt: string;
  orderHasProducts: Array<OrderHasProduct>;
  _count: {
    orderHasProducts: number;
  };
};

export type OrderState = {
  orders: null;
  isLoading: boolean;
  error: Error | string | null;
};
