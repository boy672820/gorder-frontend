import { useState } from 'react';
import { Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import { Iconify } from '../../../components';

export default function Tabs() {
  const [value, setValue] = useState('1');
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const TAB_LIST = [
    {
      value: '1',
      icon: <Iconify icon="fluent:clipboard-text-edit-20-filled" width={18} height={18} />,
      label: '예약·주문',
    },
    {
      value: '2',
      icon: <Iconify icon="fluent:hand-left-16-regular" width={18} height={18} />,
      label: '픽업하기',
    },
  ];

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
