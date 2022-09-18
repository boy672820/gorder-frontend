import { Stack } from '@mui/system';
import { OrderItem } from '../@types/order';
import ContentContainer from '../components/ContentContainer';
import Section from '../components/Section';
import Item from '../sections/order/Item';
import ToggleButton from '../sections/order/ToggleButton';

const ORDER_ITEMS: OrderItem[] = [
  {
    id: 1,
    name: '아메리카노 ICE',
    price: 3000,
    discount: 50,
    totalPrice: 1500,
    thumbnail: '/images/americano-ice.webp',
  },
  {
    id: 2,
    name: '아메리카노 HOT',
    price: 3000,
    discount: 50,
    totalPrice: 1500,
    thumbnail: '/images/americano-ice.webp',
  },
  {
    id: 3,
    name: '카페라떼 ICE',
    price: 3000,
    discount: 50,
    totalPrice: 1500,
    thumbnail: '/images/americano-ice.webp',
  },
  {
    id: 4,
    name: '카페라떼 HOT',
    price: 3000,
    discount: 50,
    totalPrice: 1500,
    thumbnail: '/images/americano-ice.webp',
  },
];

export default function Order() {
  return (
    <main>
      <Section sx={{ textAlign: 'center' }}>
        <ToggleButton />
      </Section>

      <ContentContainer title="상품 선택">
        <Stack>
          {ORDER_ITEMS.map((data, index) => (
            <Item key={index} data={data} />
          ))}
        </Stack>
      </ContentContainer>
    </main>
  );
}
