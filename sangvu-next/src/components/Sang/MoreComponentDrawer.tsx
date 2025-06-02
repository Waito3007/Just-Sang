// src/components/Sang/MoreComponentDrawer.tsx
import { 
  Drawer, 
  Box, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  ListItemIcon,
  Typography,
  Divider,
  Avatar,
  IconButton
} from '@mui/material';
import { 
  Info, 
  MenuBook, 
  AutoStories, 
  Close,
  GitHub,
  LinkedIn,
  Email,
  Download
} from '@mui/icons-material';
import { motion } from 'framer-motion';

type MoreComponentDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const MoreComponentDrawer = ({ open, onClose }: MoreComponentDrawerProps) => {
  const menuItems = [
    {
      icon: <Info />,
      text: "About Me",
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      icon: <MenuBook />,
      text: "Read Comics",
      action: () => alert('Comics feature coming soon!')
    },
    {
      icon: <AutoStories />,
      text: "Read Novels",
      action: () => alert('Novels feature coming soon!')
    }
  ];

  const socialLinks = [
    {
      icon: <GitHub />,
      text: "GitHub",
      url: "https://github.com/sangvu"
    },
    {
      icon: <LinkedIn />,
      text: "LinkedIn", 
      url: "https://linkedin.com/in/sangvu"
    },
    {
      icon: <Email />,
      text: "Email",
      url: "mailto:vuphanhoaisang@gmail.com"
    }
  ];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 320,
          backgroundColor: 'background.default',
          backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
        },
      }}
    >
      <Box sx={{ width: 320, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <Typography variant="h6" className="font-bold">
                More Options
              </Typography>
              <IconButton onClick={onClose} className="text-white">
                <Close />
              </IconButton>
            </div>
            
            <div className="flex items-center space-x-4">
              <Avatar 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                sx={{ width: 60, height: 60 }}
                className="ring-4 ring-white/20"
              />
              <div>
                <Typography variant="subtitle1" className="font-semibold">
                  Hoài Sang
                </Typography>
                <Typography variant="body2" className="opacity-90">
                  Full Stack Developer
                </Typography>
              </div>
            </div>
          </div>
        </Box>

        {/* Menu Items */}
        <Box className="flex-1 p-4">
          <Typography variant="subtitle2" className="text-gray-500 dark:text-gray-400 mb-3 font-semibold uppercase tracking-wide">
            Quick Actions
          </Typography>
          
          <List className="space-y-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ListItem disablePadding>
                  <ListItemButton 
                    onClick={item.action}
                    className="rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-200 mb-2"
                    sx={{ borderRadius: 2 }}
                  >
                    <ListItemIcon className="text-blue-600 dark:text-blue-400">
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.text}
                      primaryTypographyProps={{
                        className: "font-medium text-gray-800 dark:text-gray-200"
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </motion.div>
            ))}
          </List>

          <Divider className="my-6" />

          {/* Social Links */}
          <Typography variant="subtitle2" className="text-gray-500 dark:text-gray-400 mb-3 font-semibold uppercase tracking-wide">
            Connect
          </Typography>
          
          <List className="space-y-2">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.text}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: (menuItems.length + index) * 0.1 }}
              >
                <ListItem disablePadding>
                  <ListItemButton 
                    onClick={() => window.open(link.url, '_blank')}
                    className="rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-200 mb-2"
                    sx={{ borderRadius: 2 }}
                  >
                    <ListItemIcon className="text-gray-600 dark:text-gray-400">
                      {link.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={link.text}
                      primaryTypographyProps={{
                        className: "font-medium text-gray-800 dark:text-gray-200"
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Box>

        {/* Footer */}
        <Box className="p-4 border-t border-gray-200 dark:border-gray-700">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download />
            <span>Download Resume</span>
          </motion.button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MoreComponentDrawer;
