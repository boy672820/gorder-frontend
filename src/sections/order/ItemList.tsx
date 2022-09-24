import { useState } from 'react';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import { ORDER_ITEMS } from '../../_mock/_order';
import OrderItem from '../../components/OrderItem';
import { Iconify } from '../../components';

export default function ItemList() {
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();

    setContextMenu(contextMenu === null ? { x: e.clientX + 2, y: e.clientY - 6 } : null);
  };

  return (
    <>
      {ORDER_ITEMS.map((data) => (
        <OrderItem key={data.id} data={data} component={Button} onContextMenu={handleContextMenu} />
      ))}

      <Menu
        open={contextMenu !== null}
        onClose={() => setContextMenu(null)}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null ? { top: contextMenu.y, left: contextMenu.x } : undefined
        }
      >
        <MenuItem>
          <ListItemIcon>
            <Iconify icon="fluent:delete-12-filled" />
          </ListItemIcon>
          <ListItemText sx={{ fontSize: (theme) => theme.typography.pxToRem(12) }}>
            상품 1개 빼기
          </ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            아메리카노 2개
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Iconify icon="fluent:dismiss-12-filled" />
          </ListItemIcon>
          <ListItemText>전체 삭제</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
