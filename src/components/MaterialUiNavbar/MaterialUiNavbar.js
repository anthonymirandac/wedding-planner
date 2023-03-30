// MaterialUINavbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const MaterialUINavbar = () => {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar>
        <Box>
          <Typography
            variant="h6"
            component="a"
            href="#"
            sx={{ textDecoration: 'none', color: 'white', ml: 2, mr: 2 }}
          >
            Home
          </Typography>
          <Typography
            variant="h6"
            component="a"
            href="#"
            sx={{ textDecoration: 'none', color: 'white', ml: 2, mr: 2 }}
          >
            About
          </Typography>
          <Typography
            variant="h6"
            component="a"
            href="#"
            sx={{ textDecoration: 'none', color: 'white', ml: 2, mr: 2 }}
          >
            Services
          </Typography>
          <Typography
            variant="h6"
            component="a"
            href="#"
            sx={{ textDecoration: 'none', color: 'white', ml: 2, mr: 2 }}
          >
            Contact
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MaterialUINavbar;
