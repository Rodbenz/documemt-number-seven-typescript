import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useCartContext } from '@/context/Cartcontext';

export default function HeadeExport() {
  const { isMenuSummarize } = useCartContext();
  return (
    <div style={{ width: '95%', marginTop: 20, marginLeft: 10, marginRight: 10, zIndex: 1, paddingLeft: '40px', paddingRight: '40px' }}>
      <Grid item sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
        <img src={`${process.env.REACT_APP_API_IMAGES}/image/headers.png`} width={40} height={40} alt='icon' />
        <Typography variant="h5" component="div" sx={{color:'#515A5A'}}>รายงานบัญชีราคาประเมินที่ดิน</Typography>
      </Grid>
      <Divider sx={{
        backgroundColor: '#515A5A',
        border: '1.5px solid #515A5A',
      }} />
    </div>
  )
}
