import { Stack } from '@mui/system';
import ContentContainer from '../components/ContentContainer';
import Section from '../components/Section';
import { ToggleButton, ItemList } from '../sections/order';

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
