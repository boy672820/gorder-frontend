import { Box, Link, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
    sx={{
      py: 3,
      pb: 13,
      textAlign: 'center',
      position: 'relative',
      bgcolor: 'background.default',
    }}
  >
    <Container>
      <Typography variant="caption" component="p">
        Made by &nbsp;
        <Link href="https://github.com/boy672820" target="_blank">
          @seonzoo
        </Link>
      </Typography>
    </Container>
  </Box>
  );
}