"use client";
import * as React from 'react';
import { Box, Grid, Typography, ButtonBase, Stack, Button } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';
import AccountMenu from './accountMenu';
import Image from 'next/image';

interface Props {
    setIsMenu: any;
}

export default function HaederNavbar({ setIsMenu}: Props) {
    return (
        <Box sx={{}}>
            <Grid container
                sx={{
                    bgcolor: 'rgba(0, 110, 97, 1)',
                    padding: '0.2%',
                }}>
            </Grid>

            <Grid container
                sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.3%',
                    display: 'flex',
                    bgcolor: '#f9f9f9',
                }}>

                <Image src="/Comu.png" alt="Picture of the author" width={300} height={76} />
                <Typography variant='h4'
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        // letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        marginLeft: -20,
                    }}
                >
                    ระบบเชื่อมโยงแลกเปลี่ยนข้อมูล
                </Typography>
                <AccountMenu />
            </Grid>

            <ResponsiveAppBar setIsMenu={setIsMenu}/>
        </Box>
    );
}