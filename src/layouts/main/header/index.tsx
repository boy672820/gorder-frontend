import { Container, Stack, Box } from '@mui/material';
import Avatar from './avatar';
import Cart from './cart';
import Tabs from './tabs';

export default function Header() {
  return (
    <header>
      <Box
        sx={{
          width: '100%',
          height: 184,
          position: 'relative',
          backgroundColor: 'primary.main',
          boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar />
        </Container>

        <Container
          maxWidth="sm"
          sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, margin: '0 auto' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Stack>
              <Tabs />
            </Stack>
          </Box>
        </Container>

        <Container
          maxWidth="sm"
          sx={{ position: 'absolute', top: 6, left: 0, right: 0, margin: '0 auto' }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Cart />
          </Box>
        </Container>
      </Box>
    </header>
  );
}
