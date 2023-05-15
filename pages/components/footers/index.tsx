import * as React from 'react';
import {Box, Grid, Typography} from '@mui/material';

export default function BoxFooters() {
  return (
    <Box sx={{position: 'absolute', width:'100%', marginTop:'0'}}>
      <Grid container sx={{
        bgcolor: 'rgba(0, 110, 97, 1)', 
        justifyContent: 'center', 
        alignItem: 'center', 
        padding: '1%', 
        // mt: '1%',
       
        }}>
          <Typography color="white">Copyright  © The Treasury Department</Typography>

      </Grid>
    </Box>



  );
} 