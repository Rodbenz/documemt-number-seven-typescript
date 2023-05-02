import { Button, Divider, Grid, Stack, Typography, rgbToHex } from '@mui/material'
import React from 'react'
import TextFieldInput from '../../../@conponents/TextFieldInput';
import ButtonSearch from '../../../@conponents/ButtonSearch';
import ButtonAdd from '../../../@conponents/ButtonAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MyDatePicker from '../../../@conponents/MyDatePicker';
import { useCartContext } from '@/context/Cartcontext';
import AutocompleteType from '@/pages/components/@conponents/Autocopletes/AutocompleteType';
import AutocompleteListData from '@/pages/components/@conponents/Autocopletes/AutocompleteListData';

const style = {
  marginTop: '-35px',
  marginLeft: '50px',
  marginRight: '50px',
  paddingTop: '20px',
  background: 'rgb(255,255,255)',
  borderRadius: '5px',
  boxShadow: '1px 2px 9px rgb(249,249,249)',
}

export default function SearchReprtImport() {

  const { datasearch, setDataSearch, setOpenDialog } = useCartContext();

  const onchangesTypes = (value:any) => {

  }
  const handleOnsearch = () => {
    console.log('search');
    let data = []
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
                    <Grid item xs={12} sm={6} md={6}>
                      <Typography variant="subtitle1" component="div" gutterBottom>ประเภทข้อมูล</Typography>
                      <AutocompleteType nameLabel='กรุณาเลือกประเภทข้อมูล' onchange={onchangesTypes} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Typography variant="subtitle1" component="div" gutterBottom>ชื่อรายการข้อมูล</Typography>
                      <AutocompleteListData nameLabel='กรุณาเลือกชื่อรายการข้อมูล' onchange={onchangesTypes} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Typography variant="subtitle1" component="div" gutterBottom>วัน/เดือน/ปี นำเข้า</Typography>
                      <MyDatePicker />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <ButtonSearch onsubmit={() => handleOnsearch()} />
                        <ButtonAdd buttonName='เพิ่มรายการนำเข้า' onClickAdd={()=>handleOpenDialogImport()}/>
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
          <AssignmentIcon /><Typography sx={{ color: '#4267b2', justifyContent: 'center', alignItems: 'center' }}>ค้นหา</Typography>
        </Stack>
      </div>
    </div>
  )
}
