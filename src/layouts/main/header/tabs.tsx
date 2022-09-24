import { useCallback, useEffect, useState } from 'react';
import { Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import { useLocation, useNavigate } from 'react-router';
import { Iconify } from '../../../components';
import { PATH_PAGE } from '../../../routes/paths';

const TAB_VALUES = [`/${PATH_PAGE.order}`, `/${PATH_PAGE.pickup}`];
const TAB_COLLECTION = { [`/${PATH_PAGE.order}`]: true, [`/${PATH_PAGE.pickup}`]: true };

const TAB_LIST = [
  {
    value: '',
    icon: '',
    label: '',
  },
  {
    value: TAB_VALUES[0],
    icon: <Iconify icon="fluent:clipboard-text-edit-20-filled" width={18} height={18} />,
    label: '예약·주문',
  },
  {
    value: TAB_VALUES[1],
    icon: <Iconify icon="fluent:hand-left-16-regular" width={18} height={18} />,
    label: '픽업하기',
  },
];

export default function Tabs() {
  const location = useLocation();
  const navigate = useNavigate();

  const getValue = useCallback(
    () => (TAB_COLLECTION[location.pathname] ? location.pathname : ''),
    [location]
  );

  const [value, setValue] = useState<string>(getValue());

  useEffect(() => {
    setValue(getValue());
  }, [location, getValue]);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
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
              ...(tab.value === ''
                ? { opacity: 0, position: 'absolute', top: -9999, left: -9999 }
                : {}),
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
