import { Stack } from '@mui/system';
import ContentContainer from '../components/ContentContainer';
import Section from '../components/Section';
import ReceiptInfo from '../sections/receipt/ReceiptInfo';
import ItemList from '../sections/order/ItemList';
import { Box, Container, Typography } from '@mui/material';
import Stepper from '../sections/receipt/Stepper';

export default function Receipt() {
  return (
    <main>
      <Section sx={{ textAlign: 'center' }}>
        <ReceiptInfo />
      </Section>

      <Section>
        <Container maxWidth="sm">
          <Typography variant="subtitle1">주문 현황</Typography>
        </Container>

        <Box pt={1.5}>
          <Stepper activeStep={0} />
        </Box>
      </Section>

      <ContentContainer title="주문 상품">
        <Stack>
          <ItemList />
        </Stack>
      </ContentContainer>
    </main>
  );
}
