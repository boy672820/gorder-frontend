import { forwardRef, useCallback, useState } from 'react';
import {
  Box,
  Stack,
  Slide,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  DialogActions,
  Button,
  ButtonGroup,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
// utils
import { formatPrice } from '../../../utils/format';
// components
import { Iconify } from '../../../components';
import Image from '../../../components/Image';
// types
import { OrderItem } from '../../../@types/order';

// ---------------------------------------------------------

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// ---------------------------------------------------------

type Props = {
  open: boolean;
  onClose: VoidFunction;
  data: OrderItem;
};

export default function ItemDialog({ open, onClose, data }: Props) {
  // states
  const [count, setCount] = useState<number>(1);

  // ----------------------------------------------------------------

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrease = useCallback(() => {
    if (count > 1) {
      setCount(count - 1);
    }
  }, [count]);

  // ----------------------------------------------------------------

  const totalPrice = data.totalPrice * count;

  return (
    <Dialog
      {...{ open, onClose }}
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
      <Image src="/images/americano.webp" width="100%" height={240} />
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
        {data.name}
      </DialogTitle>

      <DialogContent>
        <Stack>
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
                {formatPrice(data.price)}원
              </Typography>
              <Typography variant="h4" pl={0.5} sx={{ fontWeight: 100 }}>
                {formatPrice(data.totalPrice)}원
              </Typography>
            </Box>
          </Box>

          <Box display="flex" flexDirection="row" justifyContent="space-between" mt={1}>
            <Typography variant="h4" sx={{ fontWeight: 100 }}>
              수량
            </Typography>

            <ButtonGroup size="small">
              <Button variant="outlined" color="inherit" onClick={handleDecrease}>
                <Iconify icon="mdi:minus" />
              </Button>
              <Button variant="outlined" color="inherit">
                {count}
              </Button>
              <Button variant="outlined" color="inherit" onClick={handleIncrease}>
                <Iconify icon="mdi:plus" />
              </Button>
            </ButtonGroup>
          </Box>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ mx: 1.5, pb: 3 }}>
        <Button
          variant="contained"
          size="large"
          sx={{ width: '100%', fontSize: `${18 / 16}rem`, fontWeight: 100, borderRadius: 3 }}
        >
          {formatPrice(totalPrice)}원 담기
        </Button>
      </DialogActions>
    </Dialog>
  );
}
