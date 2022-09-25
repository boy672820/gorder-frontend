import React, { useState } from 'react';
import { Button } from '@mui/material';
import { ORDER_ITEMS } from '../../../_mock/_order';
import OrderItem from '../../../components/OrderItem';

export default function ItemList() {
  const [cartList, setCartList] = useState<Record<string, number>>({});

  const handleClick = (_: React.MouseEvent, id: number) => {
    setCartList((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  console.log(cartList);

  return (
    <>
      {ORDER_ITEMS.map((data) => (
        <OrderItem
          key={data.id}
          data={data}
          component={Button}
          onClick={handleClick}
          choice={cartList[data.id] || 0}
        />
      ))}
    </>
  );
}
