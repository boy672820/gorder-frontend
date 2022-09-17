import { useState } from 'react';
import { Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import { Iconify } from '../../../components';
import { useLocation } from 'react-router';
import { PATH_PAGE } from '../../../routes/paths';

const TAB_LIST = [
  {
    value: '/',
    icon: '',
    label: '',
  },
  {
    value: '/' + PATH_PAGE.order,
    icon: <Iconify icon="fluent:clipboard-text-edit-20-filled" width={18} height={18} />,
    label: '예약·주문',
  },
  {
    value: '/' + PATH_PAGE.pickup,
    icon: <Iconify icon="fluent:hand-left-16-regular" width={18} height={18} />,
    label: '픽업하기',
  },
];

export default function Tabs() {
  const location = useLocation();

  const [value, setValue] = useState(location.pathname);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <TabList
        onChange={handleChange}
        TabIndicatorProps={{ style: { background: 'white', color: '#E7EEEF' } }}
      >
        {TAB_LIST.map((tab) => (
          <Tab
            key={tab.value}
            icon={tab.icon}
            label={tab.label}
            value={tab.value}
            sx={{
              display: tab.value === '/' ? 'none' : '',
              color: '#E7EEEF',
              fontWeight: 'regular',
              '&.Mui-selected': {
                color: 'white',
                fontWeight: 'bold',
              },
            }}
          />
        ))}
      </TabList>
    </TabContext>
  );
}
