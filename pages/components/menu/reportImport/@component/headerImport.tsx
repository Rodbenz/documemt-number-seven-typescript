import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import Img from '../../../../../public/image/headers.png'
import Image from 'next/image'

export default function HeaderImport() {
  return (
    <div style={{ width: '100%', marginTop: 20, marginLeft: 10, marginRight: 10, zIndex: 1, paddingLeft: '40px', paddingRight: '40px' }}>
      <Grid item sx={{display:'flex'}}>
        <Image src={Img} alt="Picture of the author" width={50} height={50} />
        <Typography variant="h5" component="div" >รายงานการนำเข้าข้อมูล</Typography>
      </Grid>
      <Divider sx={{
        backgroundColor: '#000000',
        border: '1.5px solid #000000',
      }} />
    </div>
  )
}
