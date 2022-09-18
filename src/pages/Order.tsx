import { Stack } from '@mui/system';
import ContentContainer from '../components/ContentContainer';
import Section from '../components/Section';
import ToggleButton from '../sections/order/ToggleButton';
import ItemList from '../sections/order/ItemList';

export default function Order() {
  return (
    <main>
      <Section sx={{ textAlign: 'center' }}>
        <ToggleButton />
      </Section>

      <ContentContainer title="상품 선택">
        <Stack>
          <ItemList />
        </Stack>
      </ContentContainer>
    </main>
  );
}
