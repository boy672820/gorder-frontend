import { Box, Stack, Typography, Avatar as MuiAvatar } from '@mui/material';

export default function Avatar() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Stack>
        <MuiAvatar
          alt="이선주"
          src="/avatar.png"
          sx={{ border: '2px solid white', width: 64, height: 64 }}
        />
      </Stack>
      <Stack>
        <Typography variant="h4" sx={{ color: 'white' }}>
          이선주
        </Typography>
      </Stack>
    </Box>
  );
}
