import { createContext, ReactNode, useCallback, useState } from 'react';
// types
import { OrderItem } from '../@types/order';
// components
import { ItemDialog } from '../components/cart';

// ---------------------------------------------------------------------

type CartList = Record<OrderItem['id'], number>;

type CartContextType = {
  cartList: CartList;
  count: number;
  totalPrice: number;
  openItem: (targetItem: OrderItem) => void;
};
type CartProviderProps = { children: ReactNode };

// ---------------------------------------------------------------------

const CartContext = createContext<CartContextType | null>(null);

// ---------------------------------------------------------------------

function CartProvider({ children }: CartProviderProps) {
  // states
  const [cartList, setCartList] = useState<CartList>({});
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<OrderItem | null>(null);
  const [selectedItemCount, setSelectedItemCount] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const closeDialog = useCallback(() => {
    setOpen(false);
  }, []);

  /**
   * 장바구니에 추가
   */
  const handleAddCart = useCallback(
    (item: OrderItem) => {
      const prevCount = cartList[item.id] || 0;

      setTotalCount((prev) => prev + selectedItemCount - prevCount);
      setTotalPrice(
        (prev) => prev + item.totalPrice * selectedItemCount - item.totalPrice * prevCount
      );
      setCartList((prev) => ({ ...prev, [item.id]: selectedItemCount }));
      closeDialog();
    },
    [cartList, selectedItemCount, closeDialog]
  );

  /**
   *
   */
  const handleRemoveCart = useCallback(
    (item: OrderItem) => {
      const prevCount = cartList[item.id] || 0;

      setTotalCount((prev) => prev - prevCount);
      setTotalPrice((prev) => prev - item.totalPrice * prevCount);
      setCartList(({ [item.id]: _, ...rest }) => rest);
    },
    [cartList]
  );

  // ---------------------------------------------------------------------

  /**
   * 수량 증가
   */
  const handleIncrease = useCallback(() => {
    setSelectedItemCount((prev) => prev + 1);
  }, []);

  /**
   * 수량 감소
   */
  const handleDecrease = useCallback(() => {
    if (selectedItemCount > 1) {
      setSelectedItemCount(selectedItemCount - 1);
    }
  }, [selectedItemCount]);

  /**
   * 상품 선택 다이얼로그 오픈
   */
  const openItem = useCallback(
    (targetItem: OrderItem) => {
      setSelectedItemCount(cartList[targetItem.id] || 1);
      setSelectedItem(targetItem);
      setOpen(true);
    },
    [cartList]
  );

  // ---------------------------------------------------------------------

  return (
    <CartContext.Provider value={{ cartList, count: totalCount, totalPrice, openItem }}>
      <>
        {children}
        {selectedItem && (
          <ItemDialog
            open={open}
            onClose={closeDialog}
            data={selectedItem}
            onAddCart={handleAddCart}
            onRemoveCart={handleRemoveCart}
            count={selectedItemCount}
            isCart={!!cartList[selectedItem.id]}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        )}
      </>
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
