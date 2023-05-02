import { Button, Divider, Grid, Stack, Typography, rgbToHex } from '@mui/material'
import React from 'react'
import ButtonSearch from '../../../@conponents/ButtonSearch';
import ButtonAdd from '../../../@conponents/ButtonAdd';
import { useCartContext } from '@/context/Cartcontext';
import AutocompleteType from '@/pages/components/@conponents/Autocopletes/AutocompleteType';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MyDatePicker from '@/pages/components/@conponents/MyDatePicker';
import AutocompleteChond from '@/pages/components/@conponents/Autocopletes/AutocompleteChond';
import AutocompleteProvine from '@/pages/components/@conponents/Autocopletes/AutocompleteProvine';
import AutocompleteBranch from '@/pages/components/@conponents/Autocopletes/AutocompleteBranch';
import AutocompleteTypes from '@/pages/components/@conponents/Autocopletes/AutocompleteTypes';


const style = {
  marginTop: '-35px',
  marginLeft: '50px',
  marginRight: '50px',
  paddingTop: '20px',
  background: 'rgb(255,255,255)',
  borderRadius: '5px',
  boxShadow: '1px 2px 9px rgb(249,249,249)',
}

export default function SearchReprtExport() {

  const { datasearch, setDataSearch, setOpenDialog } = useCartContext();

  const onchangesTypes = (value: any) => {

  }
  const handleOnsearch = () => {
    console.log('search');
    let data: any[] = []
    data.push('search')
    setDataSearch(data)
  }
  const handleOpenDialogImport = () => {
    console.log('add');
    setOpenDialog(true)
  }
  return (
    <>
      <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <Grid container >
          <Grid item xs={12}  >
            <Grid container >
              <Grid item xs={12} sm={12} >
                <HeaderSearch />
                <Grid item sx={style}>
                  <Grid container py={5} px={5} spacing={2}>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle1" component="div" gutterBottom>รอบบัญชี พ.ศ.</Typography>
                      <AutocompleteType nameLabel='กรุณาเลือกประเภทข้อมูล' onchange={onchangesTypes} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Typography variant="subtitle1" component="div" gutterBottom>วัน/เดือน/ปี ที่ประกาศ</Typography>
                      <Grid item sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <MyDatePicker />
                        <Typography variant="subtitle1" component="div" sx={{ paddingLeft: 3, paddingRight: 3 }} p={2}>ถึง</Typography>
                        <MyDatePicker />
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle1" component="div" gutterBottom>ประเภทเอกสารสิทธิ์</Typography>
                      <AutocompleteChond nameLabel='กรุณาเลือกประเภทข้อมูล' onchange={onchangesTypes} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle1" component="div" gutterBottom>จังหวัด</Typography>
                      <AutocompleteProvine nameLabel='กรุณาเลือกประเภทข้อมูล' onchange={onchangesTypes} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle1" component="div" gutterBottom>สำนักงานที่ดิน</Typography>
                      <AutocompleteBranch nameLabel='กรุณาเลือกประเภทข้อมูล' onchange={onchangesTypes} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle1" component="div" gutterBottom>ประเภท</Typography>
                      <AutocompleteTypes nameLabel='กรุณาเลือกประเภทข้อมูล' onchange={onchangesTypes} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} >
                      <Stack direction="row" spacing={2} justifyContent="flex-end" p={4}>
                        <ButtonSearch onsubmit={() => handleOnsearch()} />
                        <Button variant="contained" >ยกเลิก</Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

function HeaderSearch() {
  return (
    <div style={{ width: '100%', position: 'relative', zIndex: 2 }}>
      <div style={{
        marginLeft: '60px',
        marginRight: '60px',
        marginTop: '20px',
        paddingTop: '15px',
        background: 'rgb(227,242,253)',
        borderRadius: '5px',
        boxShadow: '1px 2px 9px rgb(249,249,249)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Stack direction="row" spacing={2} justifyContent="start" alignItems="center" pl={1} pb={2}>
          <ExitToAppIcon sx={{ color: '#4267b2' }} /><Typography sx={{ color: '#4267b2', justifyContent: 'center', alignItems: 'center' }}>ค้นหารายการส่งออก (กรมที่ดิน)</Typography>
        </Stack>
      </div>
    </div>
  )
}
