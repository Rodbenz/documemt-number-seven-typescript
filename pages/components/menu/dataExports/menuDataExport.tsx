import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Stack, Typography } from '@mui/material';
import { useCartContext } from '@/context/Cartcontext';
import AutoGridNoWrap from '../../@conponents/AutoGridNoWrap';
import AutoGridNoWrapDisabled from '../../@conponents/AutoGridNoWrapDisabled';

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

const iddisable = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
export default function MenuDataExport() {
  const { isMenuDataExport, setIsMenuDataExport } = useCartContext();

  const handleOnClick = (el: any) => {
    setIsMenuDataExport(el)
  }
  return (
    <div style={{ width: '100%', height: 110, zIndex: 1 }}>
      <Grid container py={1} pl={20} pr={10}>
        <Grid item sx={{ backgroundColor: '#dbf2f2', width: '100%', borderRadius: 5 }} pb={1} pl={2}>
          <Typography variant='h4'>การส่งออกข้อมูล</Typography>
        </Grid>
      </Grid>
      <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
        <Grid container >
          <Grid item xs={12}  >
            <Grid container>
              <Grid item xs={12} sm={12} >
                <Grid item sx={{ paddingLeft: 10, paddingRight: 10 }}>
                  <Grid container py={5} px={5} spacing={10} justifyContent={'center'} alignItems={'center'}>
                    {options.map((el, index) => (
                      iddisable.includes(el.id) ?
                        <Grid item xs={12} sm={12} md={4} key={index}>
                          <AutoGridNoWrap el={el} handleOnClick={handleOnClick} />
                        </Grid>
                        :
                        <Grid item xs={12} sm={12} md={4} key={index}>
                          <AutoGridNoWrapDisabled el={el} handleOnClick={handleOnClick} />
                        </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}>
        <Grid container >
          <Grid item xs={12}  >
            <Grid container>
              <Grid item xs={12} sm={12} >
                <Grid item sx={{ paddingTop: 10 }}>
                  <Grid container py={5} px={5} spacing={10} justifyContent={'center'} alignItems={'center'}>
                    {options.map((el, index) => (
                      iddisable.includes(el.id) ?
                        <Grid item xs={12} sm={12} md={4} key={index}>
                          <AutoGridNoWrap el={el} handleOnClick={handleOnClick} />
                        </Grid>
                        :
                        <Grid item xs={12} sm={12} md={4} key={index}>
                          <AutoGridNoWrapDisabled el={el} handleOnClick={handleOnClick} />
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



