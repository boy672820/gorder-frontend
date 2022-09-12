import { Avatar, Container, Stack, Box, Tab, Typography } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import { Iconify } from '../../components';

export default function Header() {
  const SIMPLE_TAB = [
    {
      value: '1',
      icon: <Iconify icon="eva:phone-call-fill" width={24} height={24} />,
      label: '예약·주문',
      disabled: false,
    },
    {
      value: '2',
      icon: <Iconify icon="eva:heart-fill" width={24} height={24} />,
      label: '픽업하기',
      disabled: false,
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: 174,
        backgroundColor: 'primary.main',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack sx={{ textAlign: 'center' }}>
          <Stack>
            <Avatar
              alt="Remy Sharp"
              src="/avatar.png"
              sx={{ border: '2px solid white', width: 56, height: 56 }}
            />
          </Stack>
          <Stack>
            <Typography variant="h4" sx={{ color: 'white' }}>
              이선주
            </Typography>
          </Stack>
        </Stack>

        <Stack>
          <TabContext value={'1'}>
            <TabList onChange={() => {}}>
              {SIMPLE_TAB.map((tab) => (
                <Tab
                  key={tab.value}
                  icon={tab.icon}
                  label={tab.label}
                  value={tab.value}
                  disabled={tab.disabled}
                  sx={{ color: '#E7EEEF' }}
                />
              ))}
            </TabList>
          </TabContext>
        </Stack>
      </Container>
    </Box>
  );
}
