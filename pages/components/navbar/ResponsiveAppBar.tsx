"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
import { useCartContext } from '@/context/Cartcontext';

interface ResponsiveAppBarProps {
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function ResponsiveAppBar({ setIsMenu }: ResponsiveAppBarProps) {
  const router = useRouter();
  const { setDataSearch, setIsMenuSummarize } = useCartContext();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event:any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event:any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setIsMenu(true)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#006e61' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            หน้าหลัก
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={() => {
                router.push('/')
                handleCloseNavMenu()
                setIsMenuSummarize({})
                setDataSearch([])
              }}>
                <Typography textAlign="center">หน้าหลัก</Typography>
              </MenuItem>
              <MenuItem onClick={() => {
                router.push('/components/menu/reportImport')
                handleCloseNavMenu()
                setIsMenuSummarize({})
                setDataSearch([])
              }}>
                <Typography textAlign="center">รายงานนำเข้าข้อมูล</Typography>
              </MenuItem>
              <MenuItem onClick={() => {
                router.push('/components/menu/reportSummarize')
                handleCloseNavMenu()
                setIsMenuSummarize({})
                setDataSearch([])
              }}>
                <Typography textAlign="center">รายงานสรุป</Typography>
              </MenuItem>
              <MenuItem onClick={() => {
                router.push('/components/menu/reportExport')
                handleCloseNavMenu()
                setIsMenuSummarize({})
                setDataSearch([])
              }}>
                <Typography textAlign="center">รายงานส่งออก</Typography>
              </MenuItem>
            </Menu>
          </Box>
          {/* <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                // fontFamily: 'monospace',
                fontWeight: 700,
                // letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              หน้าหลัก
            </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={() => {
                router.push('/components/menu/reportImport')
                handleCloseNavMenu()
                setIsMenuSummarize({})
                setDataSearch([])
              }}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              รายงานนำเข้าข้อมูล
            </Button>
            <Button
              onClick={() => {
                router.push('/components/menu/reportSummarize')
                handleCloseNavMenu()
                setIsMenuSummarize({})
                setDataSearch([])
              }}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              รายงานสรุป
            </Button>
            <Button
              onClick={() => {
                router.push('/components/menu/reportExport')
                handleCloseNavMenu()
                setIsMenuSummarize({})
                setDataSearch([])
              }}

              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              รายงานส่งออก
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;