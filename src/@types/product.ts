export type Product = {
  productId: number;
  name: string;
  basePrice: number;
  discountPercent: number;
  discountPrice: number;
  totalPrice: number;
};

export type ProductState = {
  products: Product[];
  isLoading: boolean;
  error: Error | string | null;
};
