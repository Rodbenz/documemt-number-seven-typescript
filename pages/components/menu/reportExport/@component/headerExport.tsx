import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import Img from '../../../../../public/image/headers.png'
import Image from 'next/image';
import { useCartContext } from '@/context/Cartcontext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function HeadeExport() {
  const { isMenuSummarize } = useCartContext();
  return (
    <div style={{ width: '100%', marginTop: 20, marginLeft: 10, marginRight: 10, zIndex: 1, paddingLeft: '40px', paddingRight: '40px' }}>
      <Grid item sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
        <Image src={Img} width={40} height={40} alt='icon' />
        <Typography variant="h5" component="div" >รายการส่งออก (กรมที่ดิน)</Typography>
      </Grid>
      <Divider sx={{
        backgroundColor: '#000000',
        border: '1.5px solid #000000',
      }} />
    </div>
  )
}
