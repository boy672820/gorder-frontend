import React, { useState } from 'react';
import { Button } from '@mui/material';
// components
import OrderItem from '../../../components/OrderItem';
import { OrderItem as OrderItemType } from '../../../@types/order';

type Props = {
  data: OrderItemType[];
  onOpenItem: (orderItem: OrderItemType) => void;
};

export default function ItemList({ data, onOpenItem }: Props) {
  const [cartList, setCartList] = useState<Record<string, number>>({});

  const handleClick = (_: React.MouseEvent, id: number) => {
    const currentItem = data[id];

    onOpenItem(currentItem);
    // setCartList((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <>
      {data.map((row) => (
        <OrderItem
          key={row.id}
          data={row}
          component={Button}
          onClick={handleClick}
          choice={cartList[row.id] || 0}
        />
      ))}
    </>
  );
}
