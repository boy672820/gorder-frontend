import { IconButton } from '@mui/material';
import { Iconify } from '../../../components';

export default function Cart() {
  return (
    <IconButton>
    <Iconify icon="fluent:cart-16-regular" width={26} height={26} sx={{ color: 'white' }} />
  </IconButton>

  );
}