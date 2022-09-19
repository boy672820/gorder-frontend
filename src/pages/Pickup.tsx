import { Stack } from '@mui/material';
import ContentContainer from '../components/ContentContainer';
import OrderInformation from '../components/OrderInformation';
import Section from '../components/Section';
import FixedButton from '../sections/pickup/FixedButton';
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

      <FixedButton isCompleted={true} />
    </main>
  );
}
