import { useEffect, useState } from 'react';
// components
import Section from '../components/Section';
// sections
import { OrderContent, ToggleButton } from '../sections/order';
// providers
import { CartProvider } from '../contexts';
// types
import { Product } from '../@types/product';
// redux
import { dispatch, useSelector } from '../redux/store';
import { getProducts } from '../redux/slices/product';
import { Box, Typography } from '@mui/material';

// --------------------------------------------------------------------------------

export default function Order() {
  // states
  const [itemList, setItemList] = useState<Product[]>([]);

  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (products.length) {
      setItemList(products);
    }
  }, [products]);

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
