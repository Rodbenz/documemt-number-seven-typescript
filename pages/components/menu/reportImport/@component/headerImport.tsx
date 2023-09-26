import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'

export default function HeaderImport() {
  return (
    <div style={{ width: '100%', marginTop: 20, marginLeft: 10, marginRight: 10, zIndex: 1, paddingLeft: '40px', paddingRight: '40px' }}>
      <Grid item sx={{ display: 'flex' }}>
        <img src={`${process.env.REACT_APP_API_IMAGES}/image/headers.png`} alt="Picture of the author" width={40} height={40} />
        <Typography variant="h5" component="div" sx={{ color: '#515A5A' }}>รายงานการนำเข้าข้อมูล</Typography>
      </Grid>
      <Divider sx={{
        backgroundColor: '#515A5A',
        border: '1.5px solid #515A5A',
      }} />
    </div>
  )
}
