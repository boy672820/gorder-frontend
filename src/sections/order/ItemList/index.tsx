import { useCallback } from 'react';
// mui
import { Button } from '@mui/material';
// components
import OrderItem from '../../../components/OrderItem';
import { OrderItem as OrderItemType } from '../../../@types/order';

type Props = {
  data: OrderItemType[];
  onOpenItem: (orderItem: OrderItemType) => void;
  cart: Record<string, OrderItemType['id']>;
};

export default function ItemList({ data, onOpenItem, cart }: Props) {
  const handleClick = useCallback((index: number) => {
    onOpenItem(data[index]);
  }, [onOpenItem, data]);

  return (
    <>
      {data.map((row, i) => (
        <OrderItem
          key={row.id}
          data={row}
          component={Button}
          onClick={() => handleClick(i)}
          choice={cart[row.id] || 0}
        />
      ))}
    </>
  );
}
