import { Box, Typography, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import ContentContainer from '../components/ContentContainer';
import Section from '../components/Section';
import ToggleButton from '../sections/order/ToggleButton';

export default function Order() {
  const theme = useTheme();

  return (
    <main>
      <Section sx={{ textAlign: 'center' }}>
        <ToggleButton />
      </Section>

      <ContentContainer title="상품 선택">
        <Stack>
          <Box
            sx={{
              bgcolor: 'white',
              boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
              borderRadius: 3,
              p: 2,
              mb: 1,
            }}
          >
            <Stack>
              <Typography variant="h4" sx={{ fontWeight: 'lighter' }}>
                아메리카노 ICE
              </Typography>
            </Stack>
            <Stack display="flex" flexDirection="row" alignItems="end">
              <Typography
                variant="body2"
                sx={{
                  textDecoration: 'line-through',
                  fontWeight: 'lighter',
                  color: theme.palette.text.secondary,
                }}
              >
                3,000원
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary }} pl={0.5}>
                1,500원
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </ContentContainer>
    </main>
  );
}
