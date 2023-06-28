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
  { id: 1, name: 'กรมที่ดิน', img: '../../../image/LOGO/ตรากรมที่ดิน.png', width: 110, height: 100, paddingLeft: 10 },
  { id: 2, name: 'กรมส่งเสริม', subname: 'การปกครองท้องถิ่น', img: '../../../image/LOGO/กราส่งเสริมการปกครองท้องถิ่น.jpg', width: 110, height: 100, paddingLeft: 10 },
  { id: 3, name: 'กรมทางหลวง', img: '../../../image/LOGO/กรมทางหลวง.jpg', width: 110, height: 100, paddingLeft: 10 },
  { id: 4, name: 'สำนักงานการปฏิรูป', subname: 'ที่ดินเพื่อเกษตรกรรม', img: '../../../image/LOGO/สำนักงานการปฏิรูปที่ดินเพื่อเกษตรกรรม.jpg', width: 110, height: 100, paddingLeft: 10 },
  { id: 5, name: 'การทางพิเศษ', subname: 'แห่งประเทศไทย', img: '../../../image/LOGO/การทางพิเศษแห่งประเทศไทย.png', width: 110, height: 100, paddingLeft: 10 },
  { id: 6, name: 'การเคหะแห่งชาติ', img: '../../../image/LOGO/การเคหะแห่งชาติ.jpg', width: 110, height: 100, paddingLeft: 10 },
  { id: 7, name: 'ธนาคารเพื่อการเกษตร', subname: 'และสหกรณ์การเกษตร', img: '../../../image/LOGO/ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร.jpg', width: 110, height: 100, paddingLeft: 10 },
  { id: 8, name: 'ธนาคาร', subname: 'อาคารสงเคราะห์', img: '../../../image/LOGO/ธนาคารอาคารสงเคราะห์.jpg', width: 110, height: 100, paddingLeft: 10 },
  { id: 9, name: 'ศูนย์ข้อมูล', subname: 'อสังหาริมทรัพย์', img: '../../../image/LOGO/ศูนย์ข้อมูลอสังหาริมทรัพย์.jpg', width: 110, height: 100, paddingLeft: 10 },
  { id: 10, name: 'การไฟฟ้าฝ่ายผลิต', subname: 'แห่งประเทศไทย', img: '../../../image/LOGO/การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย.jpg', width: 110, height: 100, paddingLeft: 10 },
  { id: 11, name: 'การรถไฟ', subname: 'แห่งประเทศไทย', img: '../../../image/LOGO/การรถไฟแห่งประเทศไทย.jpg', width: 110, height: 100, paddingLeft: 10 },
  { id: 12, name: 'กรุงเทพมหานคร', img: '../../../image/LOGO/กรุงเทพมหานคร.jpg', width: 110, height: 100, paddingLeft: 10 },
]

const iddisable = [1, 2];
export default function MenuDataExport() {
  const { isMenuDataExport, setIsMenuDataExport } = useCartContext();

  const handleOnClick = (el: any) => {
    setIsMenuDataExport(el)
  }
  return (
    <div style={{ width: '100%', height: 110, zIndex: 1 }}>
      <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
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
                              <img src={el.img} width={el.width} height={el.height} style={{ marginLeft: 5, paddingLeft: el.paddingLeft }} alt='icon' />
                              <div style={{ width: '100%', display: 'block', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >
                                <Typography variant="h5" sx={{ color: '#006e61', fontWeight: 'bold' }} pl={2}>{el.name}</Typography>
                                {el.subname &&
                                  <Typography variant="h5" sx={{ color: '#006e61', fontWeight: 'bold' }} pl={2}>{el.subname}</Typography>
                                }
                              </div>
                            </div>
                          </Paper>
                        </Grid>
                        :
                        <Grid item xs={12} sm={12} md={4} key={index}>
                          <Paper elevation={6} sx={{ borderRadius: 1 }}>
                            <div style={style2} itemType='button' >
                              <img src={el.img} width={el.width} height={el.height} style={{ marginLeft: 5, paddingLeft: el.paddingLeft }} alt='icon' />
                              <div style={{ width: '100%', display: 'block', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >
                                <Typography variant="h5" sx={{ color: '#e1e4e5', fontWeight: 'bold' }} pl={2}>{el.name}</Typography>
                                {el.subname &&
                                  <Typography variant="h5" sx={{ color: '#e1e4e5', fontWeight: 'bold' }} pl={2}>{el.subname}</Typography>
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
      </Box>
      <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' }}}>
        <Grid container >
          <Grid item xs={12}  >
            <Grid container>
              <Grid item xs={12} sm={12} >
                <Grid item sx={{ paddingTop: 10}}>
                  <Grid container py={5} px={5} spacing={10} justifyContent={'center'} alignItems={'center'}>
                    {options.map((el, index) => (
                      iddisable.includes(el.id) ?
                        <Grid item xs={12} sm={12} md={12} key={index}>
                          <Paper elevation={6} sx={{ borderRadius: 1 }}>
                            <div style={style} itemType='button' onClick={() => handleOnClick(el)} >
                              <img src={el.img} width={el.width} height={el.height} style={{ marginLeft: 5, paddingLeft: el.paddingLeft }} alt='icon' />
                              <div style={{ width: '100%', display: 'block', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >
                                <Typography variant="h6" sx={{ color: '#006e61', fontWeight: 'bold' }} pl={2}>{el.name}</Typography>
                                {el.subname &&
                                  <Typography variant="h6" sx={{ color: '#006e61', fontWeight: 'bold' }} pl={2}>{el.subname}</Typography>
                                }
                              </div>
                            </div>
                          </Paper>
                        </Grid>
                        :
                        <Grid item xs={12} sm={12} md={12} key={index}>
                          <Paper elevation={6} sx={{ borderRadius: 1 }}>
                            <div style={style2} itemType='button' >
                              <img src={el.img} width={el.width} height={el.height} style={{ marginLeft: 5, paddingLeft: el.paddingLeft }} alt='icon' />
                              <div style={{ width: '100%', display: 'block', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >
                                <Typography variant="h6" sx={{ color: '#e1e4e5', fontWeight: 'bold' }} pl={2}>{el.name}</Typography>
                                {el.subname &&
                                  <Typography variant="h6" sx={{ color: '#e1e4e5', fontWeight: 'bold' }} pl={2}>{el.subname}</Typography>
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
      </Box>
    </div>
  );
}



