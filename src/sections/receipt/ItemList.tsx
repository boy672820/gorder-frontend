import { ORDER_ITEMS } from '../../_mock/_order';
import OrderItem from '../../components/OrderItem';

export default function ItemList() {
  return (
    <>
      {ORDER_ITEMS.map((data) => (
        <OrderItem key={data.id} data={data} />
      ))}
    </>
  );
}
