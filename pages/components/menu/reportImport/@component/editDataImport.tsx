import React from 'react'
import { Button, Grid, Stack, Typography } from '@mui/material'
import AutocompleteAgency from '@/pages/components/@conponents/Autocopletes/AutocompleteAgency'
import AutocompleteType from '@/pages/components/@conponents/Autocopletes/AutocompleteType'
import AutocompleteListData from '@/pages/components/@conponents/Autocopletes/AutocompleteListData'
import TextFieldTypefile from '@/pages/components/@conponents/TextFieldTypefile'
import MyDatePicker from '@/pages/components/@conponents/MyDatePicker'
import { useCartContext } from '@/context/Cartcontext'

export default function EditDataImport() {
    const { handleCloseDialogEdit } = useCartContext()

    const handleOnSubmit = () => {
        
    }
  return (
    <div>
        <Grid container spacing={2} py={2}>
            <Grid item xs={12} sm={6} md={6} >
                <Typography variant="subtitle1" component="div" gutterBottom>หน่วยงาน</Typography>
                <AutocompleteAgency sizes='small'/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
                <Typography variant="subtitle1" component="div" gutterBottom>ประเภทข้อมูล</Typography>
                <AutocompleteType size='small'/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
                <Typography variant="subtitle1" component="div" gutterBottom>ชื่อรายการข้อมูล</Typography>
                <AutocompleteListData size='small'/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
                <Typography variant="subtitle1" component="div" gutterBottom>อัปโหลดไฟล์ (text,pdf,shp)</Typography>
                <TextFieldTypefile/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
                <Typography variant="subtitle1" component="div" gutterBottom>วันที่เริ่มนำเข้า</Typography>
                <MyDatePicker/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} >
                 <Stack direction={'row'} justifyContent={'end'} alignItems={'center'} spacing={2}>
                    <Button onClick={handleOnSubmit} variant="contained" sx={{ backgroundColor: '#d7a203' }}>บันทึก</Button>
                    <Button onClick={handleCloseDialogEdit} variant='contained' color='error'>ยกเลิก</Button>
                </Stack>
            </Grid>
        </Grid>
    </div>
  )
}
