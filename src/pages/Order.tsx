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
  const [cartList, setCartList] = useState<Record<OrderItem['id'], number>>({});
  const [count, setCount] = useState<number>(1);
  const [orderItem, setOrderItem] = useState<OrderItem | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  // --------------------------------------------------------------------------------

  useEffect(() => {
    setItemList(ORDER_ITEMS);
  }, []);

  // --------------------------------------------------------------------------------

  const openItemDialog = useCallback(() => {
    setOpen(true);
  }, []);

  const closeItemDialog = useCallback(() => {
    setOpen(false);
  }, []);

  // --------------------------------------------------------------------------------

  /**
   * 상품 선택 다이얼로그 오픈
   */
  const handleOpenItem = useCallback((targetItem: OrderItem) => {
    openItemDialog();
    setOrderItem(targetItem);
    setCount(cartList[targetItem.id] || 1);
  }, [cartList]);

  /**
   * 장바구니에 추가
   */
  const handleAddCart = useCallback((id: OrderItem['id'], count: number) => {
    setCartList((prev) => ({ ...prev, [id]: count }));
    closeItemDialog();
  }, []);

  /**
   * 수량 증가
   */
  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  /**
   * 수량 감소
   */
  const handleDecrease = useCallback(() => {
    if (count > 1) {
      setCount(count - 1);
    }
  }, [count]);

  // --------------------------------------------------------------------------------

  return (
    <main>
      <Section sx={{ textAlign: 'center' }}>
        <ToggleButton />
      </Section>

      <ContentContainer title="상품 선택">
        <Stack>
          <ItemList data={itemList} onOpenItem={handleOpenItem} cart={cartList} />
        </Stack>
      </ContentContainer>

      <FixedButton isCompleted={false} count={6} totalPrice={2400} />

      {orderItem && (
        <ItemDialog
          open={open}
          onClose={closeItemDialog}
          data={orderItem}
          onAddCart={handleAddCart}
          count={count}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      )}
    </main>
  );
}
