import { Box, Button as MuiButton, styled, Typography, useTheme } from '@mui/material';
import { useState } from 'react';

const StyledButton = styled(MuiButton)(() => ({
  borderRadius: 50,
  fontWeight: 'lighter',
  marginRight: -14,
  marginLeft: -14,
}));

// ----------------------------------------------------------------

enum ToggleButtonList {
  Order = 'order',
  Delivery = 'Delivery',
}

type ToggleButtonLocation = 'left' | 'right';
type ToggleButtonValue = ToggleButtonList.Order | ToggleButtonList.Delivery;

const Button = ({
  children,
  location,
  active,
  onClick,
  value,
}: {
  children: React.ReactNode;
  location: ToggleButtonLocation;
  onClick: (value: ToggleButtonValue) => void;
  active: boolean;
  value: ToggleButtonValue;
}) => {
  const theme = useTheme();

  return (
    <StyledButton
      onClick={() => onClick(value)}
      variant="text"
      sx={
        active
          ? {
              backgroundColor: '#303839',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                backgroundColor: '#303839',
                color: 'white',
                zIndex: 1,
              },
            }
          : {
              backgroundColor: '#E0E6E8',
              color: theme.palette.text.primary,
              width: 80,
              ...(location === 'left' ? { paddingRight: 3 } : { paddingLeft: 3 }),

              '&:hover': {
                backgroundColor: '#E0E6E8',
                color: theme.palette.text.primary,
              },
            }
      }
    >
      {children}
    </StyledButton>
  );
};

export default function ToggleButton() {
  const theme = useTheme();

  const [value, setValue] = useState<ToggleButtonValue>(ToggleButtonList.Order);

  const handleClick = (value: ToggleButtonValue) => {
    setValue(value);
  };

  return (
    <Box pt={1}>
      <Box>
        <Button
          location="left"
          onClick={handleClick}
          value={ToggleButtonList.Order}
          active={value === ToggleButtonList.Order}
        >
          ??????
        </Button>
        <Button
          location="right"
          onClick={handleClick}
          value={ToggleButtonList.Delivery}
          active={value === ToggleButtonList.Delivery}
        >
          ??????
        </Button>
      </Box>
      <Box pt={1}>
        <Typography variant="caption" sx={{ color: theme.palette.text.primary, fontWeight: 'lighter', fontSize: theme.typography.fontSize }}>
          {ToggleButtonList.Delivery === value && '????????? ???????????? ????????? ?????? ??? ????????????.'}
          {ToggleButtonList.Order === value && '????????? ?????? ???????????????.'}
        </Typography>
      </Box>
    </Box>
  );
}
