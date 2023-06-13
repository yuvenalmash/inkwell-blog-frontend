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

  let buttons;

  if (user) {
    buttons = {
      home: {
        text: 'Home',
        to: '/',
      },
      addPost: {
        text: 'Add Post',
        to: '/posts/new',
      },
      logout: {
        text: 'Log Out',
        onClick: handleLogout,
      },
    };
  } else {
    buttons = {
      login: {
        text: 'Log In',
        to: '/login',
      },
      signup: {
        text: 'Sign Up',
        to: '/signup',
      },
    };
  }

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
            {Object.entries(buttons).map(([key, { text, to, onClick }]) => (
              <Box key={key} className="hover:bg-gray-700">
                <Button component={Link} to={to} color="inherit" onClick={onClick}>{text}</Button>
              </Box>
            ))}
          </div>
        )}

        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <List>
            {Object.entries(buttons).map(([key, { text, to, onClick }]) => (
              <ListItem key={key} button component={Link} to={to} onClick={onClick}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
