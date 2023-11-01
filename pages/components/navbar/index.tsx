"use client";
import * as React from 'react';
import { Box, Grid, Typography, ButtonBase, Stack, Button } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';
import AccountMenu from './accountMenu';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

interface Props {
    setIsMenu: any;
}

export default function HaederNavbar({ setIsMenu }: Props) {
    const { data: session } = useSession()
    const Router = useRouter();
    React.useEffect(()=>{
        !session ? Router.push('/') : ""
    },[session])
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

                <img src={`${process.env.REACT_APP_API_IMAGES}/Comu.png`} alt="Picture of the author" width={300} height={76} />
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
            {session && (
                <ResponsiveAppBar setIsMenu={setIsMenu} />
            )}
        </Box>
    );
}