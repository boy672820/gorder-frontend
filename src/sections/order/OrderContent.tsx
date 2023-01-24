import { Stack } from '@mui/material';
// sections
import FixedButton from './FixedButton';
import ItemList from './ItemList';
// components
import ContentContainer from '../../components/ContentContainer';
// hooks
import { useCart } from '../../hooks';
// types
import { Product } from '../../@types/product';

type Props = {
  itemList: Product[];
};

export default function OrderContent({ itemList }: Props) {
  const { cartList, count, totalPrice, openItem } = useCart();

  return (
    <>
      <ContentContainer title="상품 선택">
        <Stack>
          <ItemList data={itemList} onOpenItem={openItem} cart={cartList} />
        </Stack>
      </ContentContainer>

      <FixedButton isCompleted={false} count={count} totalPrice={totalPrice} />
    </>
  );
}
