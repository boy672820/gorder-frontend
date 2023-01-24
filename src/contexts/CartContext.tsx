import { createContext, ReactNode, useCallback, useState } from 'react';
// types
import { Product } from '../@types/product';
// components
import { ItemDialog } from '../components/cart';

// ---------------------------------------------------------------------

type CartList = Record<Product['productId'], number>;

type CartContextType = {
  cartList: CartList;
  count: number;
  totalPrice: number;
  openItem: (targetItem: Product) => void;
};
type CartProviderProps = { children: ReactNode };

// ---------------------------------------------------------------------

const CartContext = createContext<CartContextType | null>(null);

// ---------------------------------------------------------------------

function CartProvider({ children }: CartProviderProps) {
  // states
  const [cartList, setCartList] = useState<CartList>({});
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);
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
    (item: Product) => {
      const prevCount = cartList[item.productId] || 0;

      setTotalCount((prev) => prev + selectedItemCount - prevCount);
      setTotalPrice(
        (prev) => prev + item.totalPrice * selectedItemCount - item.totalPrice * prevCount
      );
      setCartList((prev) => ({ ...prev, [item.productId]: selectedItemCount }));
      closeDialog();
    },
    [cartList, selectedItemCount, closeDialog]
  );

  /**
   *
   */
  const handleRemoveCart = useCallback(
    (item: Product) => {
      const prevCount = cartList[item.productId] || 0;

      setTotalCount((prev) => prev - prevCount);
      setTotalPrice((prev) => prev - item.totalPrice * prevCount);
      setCartList(({ [item.productId]: _, ...rest }) => rest);
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
    (targetItem: Product) => {
      setSelectedItemCount(cartList[targetItem.productId] || 1);
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
            isCart={!!cartList[selectedItem.productId]}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        )}
      </>
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
