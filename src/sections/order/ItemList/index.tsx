import { useCallback } from 'react';
// mui
import { Button } from '@mui/material';
// components
import OrderItem from '../../../components/OrderItem';
import { Product } from '../../../@types/product';

type Props = {
  data: Product[];
  onOpenItem: (product: Product) => void;
  cart: Record<string, Product['productId']>;
};

export default function ItemList({ data, onOpenItem, cart }: Props) {
  const handleClick = useCallback(
    (index: number) => {
      onOpenItem(data[index]);
    },
    [onOpenItem, data]
  );

  return (
    <>
      {data.map((row, i) => (
        <OrderItem
          key={row.productId}
          data={row}
          choice={cart[row.productId] || 0}
          component={Button}
          onClick={() => handleClick(i)}
        />
      ))}
    </>
  );
}
