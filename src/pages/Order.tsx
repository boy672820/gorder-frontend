import { useCallback, useEffect, useState } from 'react';
import { Stack } from '@mui/material';
// components
import ContentContainer from '../components/ContentContainer';
import Section from '../components/Section';
// sections
import { ToggleButton, ItemList, FixedButton, ItemDialog } from '../sections/order';
// mock
import { ORDER_ITEMS } from '../_mock/_order';
// types
import type { OrderItem } from '../@types/order';

export default function Order() {
  // states
  const [itemList, setItemList] = useState<OrderItem[]>([]);
  // const [cartList, setCartList] = useState<Record<string, number>>({});
  const [orderItem, setOrderItem] = useState<OrderItem | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  // --------------------------------------------------------------------------------

  useEffect(() => {
    setItemList(ORDER_ITEMS);
  }, []);

  // --------------------------------------------------------------------------------

  /**
   * 상품 선택 다이얼로그 오픈
   */
  const handleOpenItem = useCallback((targetItem: OrderItem) => {
    setOpen(true);
    setOrderItem(targetItem);
  }, []);

  /**
   * 상품 선택 다이얼로그 닫기
   */
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  // --------------------------------------------------------------------------------

  return (
    <main>
      <Section sx={{ textAlign: 'center' }}>
        <ToggleButton />
      </Section>

      <ContentContainer title="상품 선택">
        <Stack>
          <ItemList data={itemList} onOpenItem={handleOpenItem} />
        </Stack>
      </ContentContainer>

      {orderItem && <ItemDialog open={open} onClose={handleClose} data={orderItem} />}

      <FixedButton isCompleted={false} count={6} totalPrice={2400} />
    </main>
  );
}
