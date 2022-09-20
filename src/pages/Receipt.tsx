import { Stack } from '@mui/system';
import ContentContainer from '../components/ContentContainer';
import Section from '../components/Section';
import ReceiptInfo from '../sections/receipt/ReceiptInfo';
import ItemList from '../sections/order/ItemList';
import { Container, Typography } from '@mui/material';
import Stepper from '../sections/receipt/Stepper';

export default function Receipt() {
  return (
    <main>
      <Section sx={{ textAlign: 'center' }}>
        <ReceiptInfo />
      </Section>

      <Section>
        <Container>
          <Typography variant="subtitle1">주문 현황</Typography>
          <Stepper />
        </Container>
      </Section>

      <ContentContainer title="주문 상품">
        <Stack>
          <ItemList />
        </Stack>
      </ContentContainer>
    </main>
  );
}
