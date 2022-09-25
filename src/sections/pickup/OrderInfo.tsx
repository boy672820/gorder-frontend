import { Container, Box, Typography, useTheme, Divider } from '@mui/material';

export default function OrderInfo() {
  const theme = useTheme();

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="end"
        pb={1}
      >
        <Box display="flex" flexDirection="row" alignItems="end">
          <Typography
            variant="h3"
            sx={{ fontWeight: theme.typography.fontWeightRegular, height: 32 }}
          >
            픽업팁
          </Typography>
          <Typography variant="body1" pl={0.4}>
            (결제예정금액 10%)
          </Typography>
        </Box>

        <Box display="flex">
          <Typography
            variant="h2"
            sx={{ fontWeight: theme.typography.fontWeightRegular, height: 38 }}
          >
            2,450원
          </Typography>
        </Box>
      </Box>

      <Divider />

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        pt={1}
      >
        <Box display="flex" flexDirection="row" alignItems="end">
          <Typography variant="h5" sx={{ fontWeight: theme.typography.fontWeightLight }}>
            결제예정금액
          </Typography>
        </Box>

        <Box display="flex">
          <Typography variant="h5" sx={{ fontWeight: theme.typography.fontWeightLight }}>
            24,500원
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
