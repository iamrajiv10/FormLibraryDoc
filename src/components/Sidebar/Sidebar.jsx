import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Toolbar,
  Collapse,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocation, useNavigate } from 'react-router-dom';
import { sidebarConfig } from '../../data/sidebarConfig';

const drawerWidth = 240;

const SidebarContent = ({ onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [openSections, setOpenSections] = useState({
    'Getting Started': true,
  });

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleNavigation = (path) => {
    navigate(path);

    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <Toolbar />

      <Box sx={{ overflowY: 'auto' }}>
        {sidebarConfig.map((section) => (
          <List key={section.title} disablePadding>
            {/* Parent Menu */}
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => toggleSection(section.title)}
                sx={{
                  py: 1,
                  px: 2,
                }}
              >
                <ListItemText
                  primary={section.title}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: '0.95rem',
                  }}
                />

                {openSections[section.title] ? (
                  <ExpandLessIcon fontSize="small" />
                ) : (
                  <ExpandMoreIcon fontSize="small" />
                )}
              </ListItemButton>
            </ListItem>

            {/* Child Menu */}
            <Collapse
              in={openSections[section.title]}
              timeout="auto"
              unmountOnExit
            >
              <List disablePadding>
                {section.items.map((item) => (
                  <ListItem key={item.path} disablePadding>
                    <ListItemButton
                      selected={location.pathname === item.path}
                      onClick={() => handleNavigation(item.path)}
                      sx={{
                        pl: 4,

                        '&.Mui-selected': {
                          backgroundColor: 'action.selected',
                          borderRight: '3px solid',
                          borderColor: 'primary.main',
                        },

                        '&.Mui-selected:hover': {
                          backgroundColor: 'action.selected',
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: '0.9rem',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        ))}
      </Box>
    </>
  );
};

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  return (
    <Box
      component="nav"
      sx={{
        width: { md: drawerWidth },
        flexShrink: { md: 0 },
      }}
    >
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <SidebarContent onClose={handleDrawerToggle} />
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', md: 'block' },

          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        <SidebarContent />
      </Drawer>
    </Box>
  );
};

export default Sidebar;