import { Box, Stack, Typography, useTheme } from '@mui/material';
import { OrderItem } from '../../@types/order';
import Image from '../../components/Image';
import { formatPrice } from '../../utils/format';

type Props = {
  data: OrderItem;
};

export default function Item({ data }: Props) {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        bgcolor: 'white',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
        borderRadius: 3,
      }}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignContent="center"
      p={2}
      mb={1}
    >
      <Box display="flex" flexDirection="column" justifyContent="center" alignContent="start">
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'lighter' }}>
            {data.name}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="end">
          <Typography
            variant="body2"
            sx={{
              textDecoration: 'line-through',
              fontWeight: 'lighter',
              color: theme.palette.text.secondary,
            }}
            pl={0.5}
          >
            {formatPrice(data.price)}원
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary }} pl={0.5}>
            {formatPrice(data.totalPrice)}원
          </Typography>
        </Box>
      </Box>
      <Image src={data.thumbnail} alt={data.name} width={60} height={60} />
    </Stack>
  );
}
