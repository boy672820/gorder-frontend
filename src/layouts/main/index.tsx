import { Link, Outlet } from 'react-router-dom';
// @mui
import { Box, Button, Stack, Typography } from '@mui/material';
import Header from './header';
import Footer from './footer';
// hooks
import { useAuth } from '../../hooks';
import { PATH_AUTH } from '../../routes/paths';

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { isAuthenticated } = useAuth();

  return (
    <Stack sx={{ minHeight: 1 }}>
      {!isAuthenticated && (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'fixed',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack textAlign="center">
            <Typography variant="body1" color="white" pb={0.5}>
              로그인 후 이용하실 수 있습니다.
            </Typography>

            <Link to={`/${PATH_AUTH.root}/${PATH_AUTH.signin}`} style={{ textDecoration: 'none' }}>
              <Button size="large">로그인 페이지로 이동</Button>
            </Link>
          </Stack>
        </Box>
      )}

      <Header />

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

      <Footer />
    </Stack>
  );
}
