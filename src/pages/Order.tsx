import { forwardRef } from 'react';
import {
  Stack,
  Dialog,
  DialogContent,
  Slide,
  DialogTitle,
  Typography,
  DialogActions,
  Button,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
// components
import ContentContainer from '../components/ContentContainer';
import Section from '../components/Section';
import { ToggleButton, ItemList, FixedButton } from '../sections/order';
import Image from '../components/Image';
import { Box } from '@mui/system';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Order() {
  return (
    <main>
      <Section sx={{ textAlign: 'center' }}>
        <ToggleButton />
      </Section>

      <ContentContainer title="상품 선택">
        <Stack>
          <ItemList />
        </Stack>
      </ContentContainer>

      <FixedButton isCompleted={false} count={6} totalPrice={2400} />

      <Dialog
        open
        onClose={() => {}}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        sx={{ mx: 2 }}
        PaperProps={{
          style: {
            backgroundColor: 'white',
          },
        }}
      >
        <Image src="/images/americano.png" width="100%" height={250} />
        <DialogTitle
          sx={{
            backgroundColor: 'white',
            textAlign: 'center',
            borderRadius: 1.5,
            mixBlendMode: 3,
            mx: 2,
            transform: 'translateY(-50%)',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
          }}
          variant="h4"
        >
          아메리카노 ICE
        </DialogTitle>

        <DialogContent>
          <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Typography variant="h4" sx={{ fontWeight: 100 }}>
              가격
            </Typography>

            <Box display="flex" flexDirection="row" alignItems="end">
              <Typography
                variant="h5"
                sx={{
                  textDecoration: 'line-through',
                  fontWeight: 100,
                  color: 'text.secondary',
                }}
                pl={0.5}
              >
                3,000원
              </Typography>
              <Typography variant="h4" pl={0.5} sx={{ fontWeight: 100 }}>
                1,500원
              </Typography>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions sx={{ mx: 1.5 }}>
          <Button
            variant="contained"
            size="large"
            sx={{ width: '100%', fontSize: `${18 / 16}rem`, fontWeight: 100 }}
          >
            1,500원 담기
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}
