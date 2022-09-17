import { BoxProps, Box, Container } from '@mui/material';

interface Props extends BoxProps {}

export default function Section({ children, sx }: Props) {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
        marginTop: 1,
        paddingTop: 2,
        paddingBottom: 2,
        ...sx,
      }}
    >
      <Container maxWidth="sm">{children}</Container>
    </Box>
  );
}
