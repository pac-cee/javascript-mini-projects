import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ marginRight: '20px' }}>
          React Learning
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/counter">Counter</Button>
        <Button color="inherit" component={Link} to="/todo">Todo List</Button>
        <Button color="inherit" component={Link} to="/profile">User Profile</Button>
        <Button color="inherit" component={Link} to="/data-fetching">Data Fetching</Button>
        <Button color="inherit" component={Link} to="/redux-example">Redux</Button>
        <Button color="inherit" component={Link} to="/context-example">Context</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
