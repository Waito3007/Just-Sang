// src/components/Sang/MoreComponentDrawer.tsx
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

type MoreComponentDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const MoreComponentDrawer = ({ open, onClose }: MoreComponentDrawerProps) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 250, // Điều chỉnh độ rộng của Drawer
          backgroundColor: 'background.default', // Đảm bảo background tương thích với chủ đề
        },
      }}
    >
      <Box sx={{ width: 250 }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => alert('Thông tin clicked')}>
              <ListItemText primary="Thông tin" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => alert('Đọc truyện tranh clicked')}>
              <ListItemText primary="Đọc truyện tranh" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => alert('Đọc novel clicked')}>
              <ListItemText primary="Đọc novel" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default MoreComponentDrawer;
