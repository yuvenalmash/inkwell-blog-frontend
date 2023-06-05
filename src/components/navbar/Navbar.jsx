import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Button,
  IconButton, useMediaQuery, Drawer,
  List, ListItem, ListItemText, Box,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { selectUser, logoutUser } from '../../redux/slices/authenticationSlice';

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between bg-gray-900 align-baseline">
        {isSmallScreen && (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <Menu />
          </IconButton>
        )}

        <Typography variant="h6" component="div" className="flex-grow">
          INKWELL BLOG
        </Typography>

        {!isSmallScreen && (
          <div className="flex gap-5">
            {user ? (
              <>
                <Box className="hover:bg-gray-700">
                  <Button component={Link} to="/" color="inherit">Home</Button>
                </Box>
                <Box className="hover:bg-gray-700">
                  <Button color="inherit" onClick={handleLogout}>Log Out</Button>
                </Box>
              </>
            ) : (
              <>
                <Box className="hover:bg-gray-700">
                  <Button component={Link} to="/login" color="inherit">Log In</Button>
                </Box>
                <Box className="hover:bg-gray-700">
                  <Button component={Link} to="/signup" color="inherit">Log out</Button>
                </Box>
              </>
            )}
          </div>
        )}

        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <List>
            {user ? (
              <>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemText primary={`Welcome, ${user.username}`} />
                </ListItem>
                <ListItem button component={Link} to="/" onClick={toggleDrawer}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={handleLogout}>
                  <ListItemText primary="Log Out" />
                </ListItem>
              </>
            ) : (
              <>
                <ListItem button components={Link} to="/login" onClick={toggleDrawer}>
                  <ListItemText primary="Log In" />
                </ListItem>
                <ListItem button components={Link} to="/signup" onClick={toggleDrawer}>
                  <ListItemText primary="Sign Up" />
                </ListItem>
              </>
            )}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
