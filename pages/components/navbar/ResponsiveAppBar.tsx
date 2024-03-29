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
import { useRouter as Routter } from 'next/router'

interface ResponsiveAppBarProps {
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function ResponsiveAppBar({ setIsMenu }: ResponsiveAppBarProps) {
  const router = useRouter();
  const routerPath = Routter();
  const {
    setDataSearch,
    setIsMenuSummarize,
    setDataInformationList,
    setDataLandApartmentList,
    setDataRegisteredTradingInformationList,
    setDataLanBuildingList,
    setDatalistEpv,
    setIsMenuReceiving,
    setIsMenuDataExport
  } = useCartContext();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState('item1');

  const handleClick = (item: any) => {
    setActiveItem(item);
  };
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event:any) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setIsMenu(true)
    setDataSearch([])
    setIsMenuSummarize({})
    setDataInformationList([])
    setDataLandApartmentList([])
    setDataRegisteredTradingInformationList([])
    setDatalistEpv([])
    setDataLanBuildingList([])
    setIsMenuReceiving({})
    setIsMenuDataExport({})
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  // React.useEffect(() => {
  //   console.log(routerPath.route,'5555555555555555555555');
  // }, [router]);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#006e61' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
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
          </Typography> */}
          

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
              }}
                selected={routerPath.route === '/'}
              >
                <Typography textAlign="center">หน้าหลัก</Typography>
              </MenuItem>
              <MenuItem onClick={() => {
                router.push('/components/menu/receivingInformation')
                handleCloseNavMenu()
              }}
                selected={ routerPath.route === '/components/menu/receivingInformation'}
              >
                <Typography textAlign="center">การรับข้อมูล</Typography>
              </MenuItem>
              <MenuItem onClick={() => {
                router.push('/components/menu/dataExports')
                handleCloseNavMenu()
              }}
              selected={ routerPath.route === '/components/menu/dataExports'}
              >
                <Typography textAlign="center">การส่งออกข้อมูล</Typography>
              </MenuItem>
              <MenuItem onClick={() => {
                router.push('/components/menu/overview')
                handleCloseNavMenu()
              }}
              selected={ routerPath.route === '/components/menu/overview'}
              >
                <Typography textAlign="center">ภาพรวม</Typography>
              </MenuItem>
              {/* <MenuItem onClick={() => {
                router.push('/components/menu/reportImport')
                handleCloseNavMenu()
              }}>
                <Typography textAlign="center">รายงานนำเข้าข้อมูล</Typography>
              </MenuItem>
              <MenuItem onClick={() => {
                router.push('/components/menu/reportSummarize')
                handleCloseNavMenu()
              }}>
                <Typography textAlign="center">รายงานสรุป</Typography>
              </MenuItem>
              <MenuItem onClick={() => {
                router.push('/components/menu/reportExport')
                handleCloseNavMenu()
              }}>
                <Typography textAlign="center">รายงานส่งออก</Typography>
              </MenuItem>
              <MenuItem onClick={() => {
                router.push('/components/menu/EPVLink');
                handleCloseNavMenu()
              }}>
                <Typography textAlign="center">การเชื่อมโยงธนารักษ์ (EPV)</Typography>
              </MenuItem> */}
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
                router.push('/')
                handleCloseNavMenu()
              }}
              sx={{ 
                my: 2, 
                color: 'white', 
                display: 'block', 
                fontWeight: 700, 
                fontSize: 18, 
                backgroundColor: routerPath.route === '/' ? '#06534a' : '' ,
                "&:hover": {
                  backgroundColor: "#79b7b0"
                }
              }}
            >
              หน้าหลัก
            </Button>
            <Button
              onClick={() => {
                router.push('/components/menu/receivingInformation')
                handleCloseNavMenu()
              }}
              sx={{ 
                my: 2, 
                color: 'white', 
                display: 'block', 
                fontWeight: 700, 
                fontSize: 18, 
                backgroundColor: routerPath.route === '/components/menu/receivingInformation' ? '#06534a' : '',
                "&:hover": {
                  backgroundColor: "#79b7b0"
                }
              }}
            >
              การรับข้อมูล
            </Button>
            <Button
              onClick={() => {
                router.push('/components/menu/dataExports')
                handleCloseNavMenu()
              }}
              sx={{ 
                my: 2, 
                color: 'white', 
                display: 'block', 
                fontWeight: 700, 
                fontSize: 18, 
                backgroundColor: routerPath.route === '/components/menu/dataExports' ? '#06534a' : '',
                "&:hover": {
                  backgroundColor: "#79b7b0"
                }
              }}
            >
              การส่งออกข้อมูล
            </Button>
            <Button
              onClick={() => {
                router.push('/components/menu/overview')
                handleCloseNavMenu()
              }}
              sx={{ 
                my: 2, 
                color: 'white', 
                display: 'block', 
                fontWeight: 700, 
                fontSize: 18, 
                backgroundColor: routerPath.route === '/components/menu/overview' ? '#06534a' : '',
                "&:hover": {
                  backgroundColor: "#79b7b0"
                }
              }}
            >
              ภาพรวม
            </Button>
            {/* <Button
              onClick={() => {
                router.push('/components/menu/reportImport')
                handleCloseNavMenu()
              }}
              sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, fontSize:18 }}
            >
              รายงานนำเข้าข้อมูล
            </Button>
            <Button
              onClick={() => {
                router.push('/components/menu/reportSummarize')
                handleCloseNavMenu()
              }}
              sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, fontSize:18 }}
            >
              รายงานสรุป
            </Button>
            <Button
              onClick={() => {
                router.push('/components/menu/reportExport')
                handleCloseNavMenu()
              }}

              sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, fontSize:18 }}
            >
              รายงานส่งออก
            </Button>
            <Button
              onClick={() => {
                router.push('/components/menu/EPVLink');
                handleCloseNavMenu()
              }}

              sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, fontSize:18 }}
            >
              การเชื่อมโยงธนารักษ์ (EPV)
            </Button> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;