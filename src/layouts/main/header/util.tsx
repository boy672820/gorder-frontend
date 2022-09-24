import { Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router';
import { Iconify } from '../../../components';
import { PATH_PAGE } from '../../../routes/paths';

export default function Util() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <IconButton
        onClick={() => {
          navigate('/' + PATH_PAGE.receipt);
        }}
      >
        <Iconify
          icon="fluent:alert-badge-16-regular"
          width={26}
          height={26}
          sx={{ color: 'white' }}
        />
      </IconButton>
    </Box>
  );
}
