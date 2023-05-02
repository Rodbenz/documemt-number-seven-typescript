import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Img1 from '../../../../../public/image/teedin.png';
import Img2 from '../../../../../public/image/data.png';
import Img3 from '../../../../../public/image/Vector.png';
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

}

const options = [{ id: 1, name: 'ข้อมูลแปลงที่ดิน', img: Img1, width:60, height:30, paddingLeft: 10 }, { id: 2, name: 'ข้อมูลทะเบียนที่ดินและห้องชุด', img: Img2, width:50, height:50, paddingLeft: 10}, { id: 3, name: 'ข้อมูลซื้อขายจดทะเบียนและห้องชุด', img: Img3, width:50, height:50, paddingLeft: 10 }]

export default function MenuSummarize() {
  const { isMenuSummarize, setIsMenuSummarize } = useCartContext();

  const handleOnClick = (el:any) => {
    console.log(el);
    setIsMenuSummarize(el)
  }
  return (
    <div style={{ width: '100%', height: 110, zIndex: 1 }}>
      <Grid container >
        <Grid item xs={12}  >
          <Grid container >
            <Grid item xs={12} sm={12} >
              <Grid item sx={{ paddingTop: 20, paddingLeft: 10, paddingRight: 10 }}>
                <Grid container py={5} px={5} spacing={5}>
                  {options.map((el, index) => (
                    <Grid item xs={12} sm={12} md={4} key={index}>
                      <div style={style} itemType='button' onClick={()=>handleOnClick(el)}>
                        <Image src={el.img} width={el.width} height={el.height} style={{paddingLeft:el.paddingLeft}} alt='icon'/>
                        <Typography variant="h5" sx={{ color: '#006e61', fontWeight: 'bold', letterSpacing: '.2rem', ontFamily: 'monospace', }} pl={2}>{el.name}</Typography>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}



