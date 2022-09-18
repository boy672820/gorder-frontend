import { Button, Stack, Box } from '@mui/material';
import ContentContainer from '../components/ContentContainer';
import OrderInformation from '../components/OrderInformation';
import Section from '../components/Section';
import ItemList from '../sections/pickup/ItemList';

export default function Pickup() {
  return (
    <main>
      <Section>
        <OrderInformation />
      </Section>

      <ContentContainer>
        <Stack>
          <ItemList />
        </Stack>
      </ContentContainer>

      <Box>
        <Button variant="contained" color="primary" fullWidth>
          내가 픽업하기
        </Button>
      </Box>
    </main>
  );
}
