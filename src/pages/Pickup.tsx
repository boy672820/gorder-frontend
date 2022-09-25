import { Stack } from '@mui/material';
import ContentContainer from '../components/ContentContainer';
import Section from '../components/Section';
import { OrderInfo, FixedButton, ItemList } from '../sections/pickup';

export default function Pickup() {
  return (
    <main>
      <Section>
        <OrderInfo />
      </Section>

      <ContentContainer title="픽업 상품">
        <Stack>
          <ItemList />
        </Stack>
      </ContentContainer>

      <FixedButton isCompleted={false} count={6} tipPrice={2400} />
    </main>
  );
}
