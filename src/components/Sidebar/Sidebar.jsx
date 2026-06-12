import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Box,
  Toolbar,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { sidebarConfig } from '../../data/sidebarConfig';

const drawerWidth = 240;

const SidebarContent = ({ onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        {sidebarConfig.map((section, index) => (
          <List
            key={index}
            subheader={
              <ListSubheader component="div" sx={{ fontWeight: 'bold' }}>
                {section.title}
              </ListSubheader>
            }
          >
            {section.items.map((item, itemIndex) => (
              <ListItem key={itemIndex} disablePadding>
                <ListItemButton
                  selected={location.pathname === item.path}
                  onClick={() => handleNavigation(item.path)}
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ))}
      </Box>
    </div>
  );
};

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <SidebarContent onClose={handleDrawerToggle} />
      </Drawer>
      
      {/* Desktop Permanent Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        <SidebarContent />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
