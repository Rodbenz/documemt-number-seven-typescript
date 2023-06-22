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
  // justifyContent: 'center',
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
  // justifyContent: 'center',
  alignItems: 'center',
  // cursor: 'pointer'

}
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const options = [
  { id: 1, name: 'กรมที่ดิน', img: '../../../image/lands.png', width: 60, height: 60, paddingLeft: 10 },
  { id: 2, name: 'กรมส่งเสริม', subname: 'การปกครองท้องถิ่น', img: '../../../image/lands.png', width: 60, height: 60, paddingLeft: 10 },
  { id: 3, name: 'ศูนย์ข้อมูล', subname: 'อสังหาริมทรัพย์', img: '../../../image/send.png', width: 60, height: 60, paddingLeft: 10 },
  { id: 4, name: 'ธนาคาร', subname: 'อาคารสงเคราะห์', img: '../../../image/send.png', width: 60, height: 60, paddingLeft: 10 },
  { id: 5, name: 'กรมทางหลวง', img: '../../../image/send.png', width: 60, height: 60, paddingLeft: 10 },
  { id: 6, name: 'สำนักงานการปฏิรูป', subname: 'ที่ดินเพื่อเกษตรกรรม', img: '../../../image/send.png', width: 60, height: 60, paddingLeft: 10 },
  { id: 7, name: 'ธนาคารเพื่อการเกษตร', subname: 'และสหกรณ์การเกษตร', img: '../../../image/send.png', width: 60, height: 60, paddingLeft: 10 },
  { id: 8, name: 'การทางพิเศษ', subname: 'แห่งประเทศไทย', img: '../../../image/send.png', width: 60, height: 60, paddingLeft: 10 },
  { id: 9, name: 'การเคหะแห่งชาติ', img: '../../../image/send.png', width: 60, height: 60, paddingLeft: 10 },
]

const iddisable =  [1,2];
export default function MenuReceiving() {
  const { isMenuReceiving, setIsMenuReceiving } = useCartContext();

  const handleOnClick = (el: any) => {
    setIsMenuReceiving(el)
  }
  return (
    <div style={{ width: '100%', height: 110, zIndex: 1 }}>
      <Grid container >
        <Grid item xs={12}  >
          <Grid container>
            <Grid item xs={12} sm={12} >
              <Grid item sx={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
                <Grid container py={5} px={5} pl={30} pr={30} spacing={10} justifyContent={'center'} alignItems={'center'}>
                  {options.map((el, index) => (
                    iddisable.includes(el.id) ?
                    <Grid item xs={12} sm={12} md={4} key={index}>
                      <Paper elevation={6} sx={{ borderRadius: 1 }}>
                        <div style={style} itemType='button' onClick={() => handleOnClick(el)} >
                          <img src={el.img} width={el.width} height={el.height} style={{ marginLeft:20, paddingLeft: el.paddingLeft }} alt='icon' />
                          <div style={{ width: '100%', display: 'block', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >
                            <Typography variant="h5" sx={{ color: '#006e61', fontWeight: 'bold', letterSpacing: '.2rem', ontFamily: 'monospace', }} pl={2}>{el.name}</Typography>
                            {el.subname &&
                              <Typography variant="h5" sx={{ color: '#006e61', fontWeight: 'bold', letterSpacing: '.2rem', ontFamily: 'monospace', }} pl={2}>{el.subname}</Typography>
                            }
                          </div>
                        </div>
                      </Paper>
                    </Grid>
                    :
                    <Grid item xs={12} sm={12} md={4} key={index}>
                      <Paper elevation={6} sx={{ borderRadius: 1 }}>
                        <div style={style2} itemType='button' >
                          <img src={el.img} width={el.width} height={el.height} style={{ marginLeft:20, paddingLeft: el.paddingLeft }} alt='icon' />
                          <div style={{ width: '100%', display: 'block', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >
                            <Typography variant="h5" sx={{ color: '#e1e4e5', fontWeight: 'bold', letterSpacing: '.2rem', ontFamily: 'monospace', }} pl={2}>{el.name}</Typography>
                            {el.subname &&
                              <Typography variant="h5" sx={{ color: '#e1e4e5', fontWeight: 'bold', letterSpacing: '.2rem', ontFamily: 'monospace', }} pl={2}>{el.subname}</Typography>
                            }
                          </div>
                        </div>
                      </Paper>
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



