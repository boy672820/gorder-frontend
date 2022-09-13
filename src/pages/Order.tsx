import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ContentContainer from '../components/ContentContainer';
import Section from '../components/Section';
import ToggleButton from '../sections/order/ToggleButton';

export default function Order() {
  return (
    <main>
      <Section sx={{ textAlign: 'center' }}>
        <ToggleButton />
      </Section>

      <ContentContainer title="상품 선택">
        <Stack>
          <Box>
            <Stack>
              <Typography variant="body1">아메리카노 ICE</Typography>
            </Stack>
            <Stack>
              <Typography variant="body1">3000원</Typography>
              <Typography variant="body2">
                1500원
              </Typography>
            </Stack>
          </Box>

          <Box></Box>
        </Stack>
      </ContentContainer>
    </main>
  );
}
