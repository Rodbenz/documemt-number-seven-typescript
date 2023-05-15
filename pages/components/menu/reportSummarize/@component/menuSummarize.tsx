import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Stack, Typography } from '@mui/material';
import { useCartContext } from '@/context/Cartcontext';

const style = {
  display: 'flex',
  backgroundColor: "#ffffff",
  width: '100%',
  height: 110,
  borderRadius: 5,
  borderRight: '10px solid #006e61',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'

}
const style2 = {
  display: 'flex',
  backgroundColor: "#ffffff",
  width: '100%',
  height: 110,
  borderRadius: 5,
  borderRight: '10px solid #006e61',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'

}
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const options = [{ id: 1, name: 'ข้อมูลแปลงที่ดิน', img: '../../../image/teedin.png', width: 60, height: 30, paddingLeft: 10 }, { id: 2, name: 'ข้อมูลทะเบียนที่ดินและห้องชุด', img: '../../../image/data.png', width: 50, height: 50, paddingLeft: 10 }, { id: 3, name: 'ข้อมูลซื้อขายจดทะเบียนและห้องชุด', img: '../../../image/Vector.png', width: 50, height: 50, paddingLeft: 10 }]

export default function MenuSummarize() {
  const { isMenuSummarize, setIsMenuSummarize } = useCartContext();

  const handleOnClick = (el: any) => {
    console.log(el);
    setIsMenuSummarize(el)
  }
  return (
    <div style={{ width: '100%', height: 110, zIndex: 1 }}>
      <Grid container >
        <Grid item xs={12}  >
          <Grid container >
            <Grid item xs={12} sm={12} >
              <Grid item sx={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
                <Typography variant='h5' sx={{ color: '#4267b2', fontWeight: 'bold' }}>{bull} รายงานสรุปผลการรับส่งข้อมูลกับโครงการบูรณาการทะเบียนทรัพย์สิน(กรมที่ดิน) </Typography>
                <Grid container py={5} px={5} spacing={5}>
                  {options.map((el, index) => (
                    <Grid item xs={12} sm={12} md={4} key={index}>
                      <div style={style} itemType='button' onClick={() => handleOnClick(el)}>
                        <img src={el.img} width={el.width} height={el.height} style={{ paddingLeft: el.paddingLeft }} alt='icon' />
                        <Typography variant="h5" sx={{ color: '#006e61', fontWeight: 'bold', letterSpacing: '.2rem', ontFamily: 'monospace', }} pl={2}>{el.name}</Typography>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item sx={{ paddingTop: 5, paddingLeft: 10, paddingRight: 10 }}>
                <Typography variant='h5' sx={{ color: '#4267b2', fontWeight: 'bold' }}>{bull} รายงานเชื่อมโยงข้อมูลทะเบียนทรัพย์สินกับกรมส่งเสริมการปกครองท้องถิ่น </Typography>
                <Grid container py={5} px={5} spacing={5}>
                  <Grid item xs={12} sm={12} md={4} >
                    <div style={style2} itemType='button' onClick={() => handleOnClick({ id: 4, name: 'ข้อมูลภาษีที่ดินและสิ่งปลูกสร้าง', img: '', width: 50, height: 50, paddingLeft: 10 })}>
                    <img src="../../../image/data.png" width={50} height={50} style={{ paddingLeft: 10 }} alt='icon' />
                      <div>
                        <Typography variant="h5" p={1} sx={{ color: '#006e61', fontWeight: 'bold', letterSpacing: '.2rem', ontFamily: 'monospace', }} pl={2}>{'ข้อมูลภาษีที่ดินและสิ่งปลูกสร้าง'}</Typography>
                        <Typography variant={'body2'} sx={{ color: '#006e61', fontWeight: 'bold', letterSpacing: '.2rem', ontFamily: 'monospace', }} pl={2}>{'กรมส่งเสริมการปกครองท้องถิ่น'}</Typography>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}



