import { Box, Typography, Avatar as MuiAvatar } from '@mui/material';
import { useAuth } from '../../../hooks';

export default function Avatar() {
  const { user } = useAuth();

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box>
        <MuiAvatar
          alt={user ? user.email : '로그인 후 이용해주세요..'}
          sx={{ border: '2px solid white', width: 64, height: 64 }}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <Typography variant="h4" sx={{ color: 'white', fontWeight: '100' }}>
          안녕하세요&nbsp;{user ? user.name : '방문자'}님👋
        </Typography>
      </Box>
    </Box>
  );
}
