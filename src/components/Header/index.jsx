import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <CodeIcon />

          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              paddingLeft: '10px',
              a: {
                color: '#fff',
                textDecoration: 'none',
              },
            }}
          >
            <Link to='/'>EZ SHOP</Link>
          </Typography>

          {/*  activeClassName='active-menu' */}
          <NavLink to='/todos'>
            <Button color='inherit' sx={{ color: '#fff' }}>
              Todo
            </Button>
          </NavLink>

          {/* activeClassName='active' */}
          <NavLink to='/albums'>
            <Button color='inherit' sx={{ color: '#fff' }}>
              Album
            </Button>
          </NavLink>

          <Button color='inherit'>Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
