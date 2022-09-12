import { Button as MuiButton, styled, useTheme } from '@mui/material';
import { useState } from 'react';

const StyledButton = styled(MuiButton)(() => ({
  borderRadius: 50,
  fontWeight: 'lighter',
  marginRight: -14,
  marginLeft: -14,
}));

// ----------------------------------------------------------------

type ToggleButtonLocation = 'left' | 'right';
type ToggleButtonValue = 'order' | 'delivery';

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
  const [value, setValue] = useState<ToggleButtonValue>('delivery');

  const handleClick = (value: ToggleButtonValue) => {
    setValue(value);
  };

  return (
    <div>
      <Button location="left" onClick={handleClick} value="order" active={value === 'order'}>
        주문
      </Button>
      <Button location="right" onClick={handleClick} value="delivery" active={value === 'delivery'}>
        예약
      </Button>
    </div>
  );
}
