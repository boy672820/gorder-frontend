import { Box, Typography, Avatar as MuiAvatar } from '@mui/material';

export default function Avatar() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box>
        <MuiAvatar
          alt="이선주"
          src="/avatar.png"
          sx={{ border: '2px solid white', width: 64, height: 64 }}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <Typography variant="h4" sx={{ color: 'white', fontWeight: '100' }}>
          안녕하세요&nbsp;
        </Typography>
        <Typography variant="h4" sx={{ color: 'white' }}>
          이선주
        </Typography>
        <Typography variant="h4" sx={{ color: 'white', fontWeight: '100' }}>
          님
        </Typography>
      </Box>
    </Box>
  );
}
