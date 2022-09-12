import { Outlet } from 'react-router-dom';
// @mui
import { Box, Link, Container, Typography, Stack } from '@mui/material';
import Header from './Header';

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <Header />
      
      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

      <Box
        sx={{
          py: 5,
          textAlign: 'center',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <Container>
          <Typography variant="caption" component="p">
            Made by &nbsp;
            <Link href="https://github.com/boy672820">@seonzoo</Link>
          </Typography>
        </Container>
      </Box>
    </Stack>
  );
}
