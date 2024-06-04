import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import { NavLink, Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason && reason === 'backdropClick') return;
    setOpen(false);
  };

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

          <NavLink to='/todos'>
            <Button color='inherit' sx={{ color: '#fff' }}>
              Todo
            </Button>
          </NavLink>

          <NavLink to='/albums'>
            <Button color='inherit' sx={{ color: '#fff' }}>
              Album
            </Button>
          </NavLink>

          <Button color='inherit' onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog
        open={open}
        onClose={handleClose}
        disableEscapeKeyDown
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
