import { Container, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';

export default function ContentContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const theme = useTheme();

  return (
    <Container sx={{ marginTop: 2 }} maxWidth="sm">
      {title && (
        <Box sx={{ position: 'relative', width: 'max-content', mb: 0.5 }}>
          <Typography variant="subtitle1">{title}</Typography>
          <Box
            sx={{
              width: '100%',
              height: 9,
              backgroundColor: theme.palette.primary.main,
              opacity: 0.15,
              position: 'absolute',
              bottom: 3,
              left: 3,
              zIndex: -1,
            }}
          >
            {' '}
          </Box>
        </Box>
      )}
      {children}
    </Container>
  );
}
