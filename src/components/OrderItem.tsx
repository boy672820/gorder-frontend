import React from 'react';
import { Box, Stack, SxProps, Theme, Typography, useTheme } from '@mui/material';
import { Product } from '../@types/product';
import Image from './Image';
import { formatPrice } from '../utils/format';

type Props = {
  data: Product;
  component?: React.ElementType;
  onClick?: (e: React.MouseEvent) => void;
  choice?: number;
};

export default function OrderItem({ data, component, onClick, choice = 0 }: Props) {
  const theme = useTheme();

  const activeStyles: SxProps<Theme> = {
    // border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: `0 0 0 1px ${theme.palette.primary.main} inset`,
    background: 'rgba(21, 183, 218, 0.05)',
  };

  return (
    <Stack
      sx={{
        bgcolor: 'white',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
        borderRadius: 3,
        color: theme.palette.text.primary,
        ...(choice ? activeStyles : {}),
      }}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignContent="center"
      p={2}
      mb={1}
      component={component || 'div'}
      onClick={onClick}
    >
      {choice > 0 && (
        <Box
          sx={{
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: theme.palette.primary.main,
            position: 'absolute',
            top: -8,
            left: -10,
            color: 'white',
            fontFamily: 'Apple SD Gothic Neo',
          }}
        >
          {choice}
        </Box>
      )}

      <Box display="flex" flexDirection="column" justifyContent="left" alignContent="start">
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'lighter', textAlign: 'left' }}>
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
            {formatPrice(data.basePrice)}원
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary }} pl={0.5}>
            {formatPrice(data.totalPrice)}원
          </Typography>
        </Box>
      </Box>
      <Image src="/images/americano.webp" alt={data.name} width={60} height={60} />
    </Stack>
  );
}
