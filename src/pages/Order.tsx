import { useEffect, useState } from 'react';
// components
import Section from '../components/Section';
// sections
import { OrderContent, ToggleButton } from '../sections/order';
// providers
import { CartProvider } from '../contexts';
// types
import type { OrderItem } from '../@types/order';
// mock
import { ORDER_ITEMS } from '../_mock/_order';

// --------------------------------------------------------------------------------

export default function Order() {
  // states
  const [itemList, setItemList] = useState<OrderItem[]>([]);

  useEffect(() => {
    setItemList(ORDER_ITEMS);
  }, []);

  // --------------------------------------------------------------------------------

  return (
    <main>
      <Section sx={{ textAlign: 'center' }}>
        <ToggleButton />
      </Section>

      <CartProvider>
        <OrderContent itemList={itemList} />
      </CartProvider>
    </main>
  );
}
