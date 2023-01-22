import { useContext } from 'react';
//
import { CartContext } from '../contexts';

// ----------------------------------------------------------------------

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error('Cart context must be use inside CartProvider');

  return context;
};

export default useCart;
