import { useCartContext } from '@/context/Cartcontext';
import AutocompleteType from '@/pages/components/@conponents/Autocopletes/AutocompleteType';
import { Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import AutocompleteProvine from '@/pages/components/@conponents/Autocopletes/AutocompleteProvine';
import AutocompleteBranch from '@/pages/components/@conponents/Autocopletes/AutocompleteBranch';
import AutocompleteOpt from '@/pages/components/@conponents/Autocopletes/AutocompleteOpt';
import AutocompleteMonth from '@/pages/components/@conponents/Autocopletes/AutocompleteMonth';
import AutocompleteYear from '@/pages/components/@conponents/Autocopletes/AutocompleteYear';
import ButtonSearch from '@/pages/components/@conponents/ButtonSearch';

const style = {
    marginTop: '-35px',
    marginLeft: '50px',
    marginRight: '50px',
    paddingTop: '20px',
    background: 'rgb(255,255,255)',
    borderRadius: '5px',
    boxShadow: '1px 2px 9px rgb(249,249,249)',
}

export default function PlotInformation() {
    const { datasearch, setDataSearch, setOpenDialog } = useCartContext();

    const onchangesTypes = (value:any) => {

    }
    const handleOnsearch = () => {
        console.log('search');
        let data = []
        data.push('search')
        setDataSearch(data)
    }
    const handleOpenDialogImport = () => {
        console.log('add');
        setOpenDialog(true)
    }
    return (
        <>
            <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
                <Grid container >
                    <Grid item xs={12}  >
                        <Grid container >
                            <Grid item xs={12} sm={12} >
                                <HeaderSearch />
                                <Grid item sx={style}>
                                    <Grid container py={5} px={5} spacing={2}>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>จังหวัด</Typography>
                                            <AutocompleteProvine size='small' />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>สำนักงานจังหวัด</Typography>
                                            <AutocompleteBranch size='small' />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>รหัส อปท.</Typography>
                                            <AutocompleteOpt size='small' />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>เดือน</Typography>
                                            <AutocompleteMonth size='small' />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>ปี</Typography>
                                            <AutocompleteYear size='small' />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Stack direction="row" spacing={2} justifyContent="flex-end" p={4}>
                                                <ButtonSearch onsubmit={() => handleOnsearch()} />
                                                <Button variant="contained" >ยกเลิก</Button>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

function HeaderSearch() {
    return (
        <div style={{ width: '100%', position: 'relative', zIndex: 2 }}>
            <div style={{
                marginLeft: '60px',
                marginRight: '60px',
                marginTop: '20px',
                paddingTop: '15px',
                background: 'rgb(65,103,179)',
                borderRadius: '5px',
                boxShadow: '1px 2px 9px rgb(249,249,249)',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Stack direction="row" spacing={2} justifyContent="start" alignItems="center" pl={1} pb={2}>
                    <AssignmentIcon sx={{ color: 'white' }} /><Typography sx={{ color: 'white', justifyContent: 'center', alignItems: 'center' }}>ค้นหา</Typography>
                </Stack>
            </div>
        </div>
    )
}


