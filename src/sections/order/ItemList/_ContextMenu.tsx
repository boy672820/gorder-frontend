import { Dispatch } from 'react';
import { ListItemText, Menu, MenuItem, ListItemIcon, Typography } from '@mui/material';
import { Iconify } from '../../../components';

type Props = {
  contextMenu: { x: number; y: number } | null;
  setContextMenu: Dispatch<React.SetStateAction<{ x: number; y: number } | null>>;
};

export default function ContextMenu({ contextMenu, setContextMenu }: Props) {
  return (
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
        <Typography variant="body2" sx={{ color: 'text.secondary', pl: 1 }}>
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
  );
}
