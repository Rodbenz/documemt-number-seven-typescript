import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Stack, Typography } from '@mui/material';
import { useCartContext } from '@/context/Cartcontext';
import AutoGridNoWrap from '../../@conponents/AutoGridNoWrap';
import AutoGridNoWrapDisabled from '../../@conponents/AutoGridNoWrapDisabled';

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
  { id: 1, name: 'กรมที่ดิน', img: `${process.env.REACT_APP_API_IMAGES}/image/LOGO/ตรากรมที่ดิน.png`, width: 110, height: 100, paddingLeft: 10 },
  { id: 2, name: 'กรมส่งเสริม', subname: 'การปกครองท้องถิ่น', img:  `${process.env.REACT_APP_API_IMAGES}/image/LOGO/กราส่งเสริมการปกครองท้องถิ่น.jpg`, width: 110, height: 100, paddingLeft: 10 },
  { id: 3, name: 'กรมทางหลวง', img:  `${process.env.REACT_APP_API_IMAGES}/image/LOGO/กรมทางหลวง.jpg`, width: 110, height: 100, paddingLeft: 10 },
  { id: 4, name: 'สำนักงานการปฏิรูป', subname: 'ที่ดินเพื่อเกษตรกรรม', img:  `${process.env.REACT_APP_API_IMAGES}/image/LOGO/สำนักงานการปฏิรูปที่ดินเพื่อเกษตรกรรม.jpg`, width: 110, height: 100, paddingLeft: 10 },
  { id: 5, name: 'การทางพิเศษ', subname: 'แห่งประเทศไทย', img:  `${process.env.REACT_APP_API_IMAGES}/image/LOGO/การทางพิเศษแห่งประเทศไทย.png`, width: 110, height: 100, paddingLeft: 10 },
  { id: 6, name: 'การเคหะแห่งชาติ', img:  `${process.env.REACT_APP_API_IMAGES}/image/LOGO/การเคหะแห่งชาติ.jpg`, width: 110, height: 100, paddingLeft: 10 },
  { id: 7, name: 'ธนาคารเพื่อการเกษตร', subname: 'และสหกรณ์การเกษตร', img:  `${process.env.REACT_APP_API_IMAGES}/image/LOGO/ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร.jpg`, width: 110, height: 100, paddingLeft: 10 },
  { id: 8, name: 'ธนาคาร', subname: 'อาคารสงเคราะห์', img:  `${process.env.REACT_APP_API_IMAGES}/image/LOGO/ธนาคารอาคารสงเคราะห์.jpg`, width: 110, height: 100, paddingLeft: 10 },
  { id: 9, name: 'ศูนย์ข้อมูล', subname: 'อสังหาริมทรัพย์', img:  `${process.env.REACT_APP_API_IMAGES}/image/LOGO/ศูนย์ข้อมูลอสังหาริมทรัพย์.jpg`, width: 110, height: 100, paddingLeft: 10 },
  { id: 10, name: 'การไฟฟ้าฝ่ายผลิต', subname: 'แห่งประเทศไทย', img:  `${process.env.REACT_APP_API_IMAGES}/image/LOGO/การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย.jpg`, width: 110, height: 100, paddingLeft: 10 },
  { id: 11, name: 'การรถไฟ', subname: 'แห่งประเทศไทย', img:  `${process.env.REACT_APP_API_IMAGES}/image/LOGO/การรถไฟแห่งประเทศไทย.jpg`, width: 110, height: 100, paddingLeft: 10 },
  { id: 12, name: 'กรุงเทพมหานคร', img:  `${process.env.REACT_APP_API_IMAGES}/image/LOGO/กรุงเทพมหานคร.jpg`, width: 110, height: 100, paddingLeft: 10 },
]

const iddisable = [1, 2, 3, 4 , 5, 6, 7, 8,9];
export default function MenuReceiving() {
  const { isMenuReceiving, setIsMenuReceiving } = useCartContext();

  const handleOnClick = (el: any) => {
    setIsMenuReceiving(el)
  }
  return (
    <div style={{ width: '100%', height: 110, zIndex: 1 }}>
      <Grid container py={1} pl={20} pr={10}>
        <Grid item sx={{ backgroundColor: '#dbf2f2', width: '100%', borderRadius: 5 }} pb={1}>
          {/* <img src= `${process.env.REACT_APP_API_IMAGES}/image/receiving.png` width={50} height={40} style={{ marginLeft: 5, paddingLeft: 0 }} alt='icon' /> */}
          <Typography variant='h4' pl={2}>การรับข้อมูล</Typography>
        </Grid>
      </Grid>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Grid container >
          <Grid item xs={12}  >
            <Grid container>
              <Grid item xs={12} >
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
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <Grid container >
          <Grid item xs={12}  >
            <Grid container>
              <Grid item xs={12} sm={12} >
                <Grid item sx={{ paddingTop: 10 }}>
                  <Grid container py={5} px={5} spacing={10} justifyContent={'center'} alignItems={'center'}>
                    {options.map((el, index) => (
                      iddisable.includes(el.id) ?
                        <Grid item xs={12} sm={12} md={12} key={index}>
                          <AutoGridNoWrap el={el} handleOnClick={handleOnClick} />
                        </Grid>
                        :
                        <Grid item xs={12} sm={12} md={12} key={index}>
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



