import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <CodeIcon />

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            EZ SHOP
          </Typography>

          {/* <NavLink to='/todos' activeClassName='active-menu'>
          </NavLink> */}
          <Button color='inherit'>Todo</Button>

          {/* <NavLink to='/albums' activeClassName='active'>
          </NavLink> */}
          <Button color='inherit'>Album</Button>

          <Button color='inherit'>Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
