import { Container } from '@mui/material';
import Section from '../components/Section';
import ToggleButton from '../sections/order/ToggleButton';

export default function Order() {
  return (
    <main>
      <Section sx={{ textAlign: 'center' }}>
        <ToggleButton />
      </Section>

      <Container maxWidth="sm">Ordertest</Container>
    </main>
  );
}
