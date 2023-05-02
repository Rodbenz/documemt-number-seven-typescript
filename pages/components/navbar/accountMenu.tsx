"use client";

import * as React from 'react';
import {Box, ButtonBase, Grid, Avatar, Menu, MenuItem, ListItemIcon, Divider, Typography, Tooltip} from '@mui/material';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useCartContext } from '@/context/Cartcontext';

export default function AccountMenu() {
  // const { user, setUser } = useCartContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const style = { border: '1px solid #BDBDBD', 
                 width: '150%', 
                 borderRadius: '50px', 
                 display: 'flex', 
                 bgcolor: '#FFFFFF',
                 justifyContent: 'space-between',
                 padding: '2%',
                 ml: '-65%'
                 }

return (
      <React.Fragment>
      <Box  onClick={handleClick}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}>
      
      <Grid >
           <Tooltip title="">
            <ButtonBase sx= {style}>
              <Avatar sx= {{bgcolor: '#D7A203'}}/>
                <Typography  sx= {{color: '#4F4F4F', fontWeight: 'bold'}}></Typography>
              <ArrowDropDownIcon sx= {{color: '#4F4F4F'}}/>
            </ButtonBase>
           </Tooltip>
      </Grid>
    </Box>
      <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem>
        <Avatar /> Profile
      </MenuItem>
      <MenuItem>
        <Avatar /> My account
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
    </React.Fragment>
  );
}