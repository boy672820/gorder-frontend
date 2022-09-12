import { Outlet } from 'react-router-dom';
// @mui
import { Box, Stack } from '@mui/material';
import Header from './header';
import Footer from './footer';

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <Header />

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

      <Footer />
    </Stack>
  );
}
