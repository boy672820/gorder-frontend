import { Container, Box, Typography, useTheme, Divider } from '@mui/material';

export default function ReceiptInfo() {
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
        <Typography
          variant="h3"
          sx={{ fontWeight: theme.typography.fontWeightRegular, height: 32 }}
        >
          결제금액
        </Typography>

        <Box display="flex" flexDirection="row" alignItems="end">
          <Typography
            variant="body1"
            pr={1}
            sx={{ textDecoration: 'line-through', color: theme.palette.text.secondary }}
          >
            4,500원
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: theme.typography.fontWeightRegular, height: 38 }}
          >
            4,950원
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
            픽업팁(결제금액 10%)
          </Typography>
        </Box>

        <Box display="flex">
          <Typography variant="h5" sx={{ fontWeight: theme.typography.fontWeightLight }}>
            450원
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
