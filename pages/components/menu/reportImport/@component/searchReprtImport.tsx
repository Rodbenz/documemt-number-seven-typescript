import { Button, Divider, Grid, Stack, Typography, rgbToHex } from '@mui/material'
import React from 'react'
import ButtonSearch from '../../../@conponents/ButtonSearch';
import ButtonAdd from '../../../@conponents/ButtonAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MyDatePicker from '../../../@conponents/MyDatePicker';
import { useCartContext } from '@/context/Cartcontext';
import AutocompleteType from '../../../@conponents/Autocopletes/AutocompleteType';
import AutocompleteListData from '../../../@conponents/Autocopletes/AutocompleteListData';
import * as ServiceSearch from '@/service/search';
import AutocompleteAgency from '../../../@conponents/Autocopletes/AutocompleteAgency';
import { SnackbarSet } from '@/pages/components/@conponents/popup/SnackbarSet';

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
  const { datasearch, setDataSearch, setOpenDialog, setDatasandSrarch } = useCartContext();

  const [valueGov, setValueGov] = React.useState<any>(null);
  const [valueType, setValueType] = React.useState<any>(null);
  const [valueCode, setValueCode] = React.useState<any>(null);
  const [valueDate, setValueDate] = React.useState<any>(null);


  const onchangesGov = (value: any) => {
    setValueGov(value)
    setValueType(null)
    setValueCode(null)
    setValueDate(null)
  }
  const onchangesTypes = (value: any) => {
    setValueType(value)
    setValueCode(null)
    setValueDate(null)

  }
  const onchangesCode = (value: any) => {
    setValueCode(value)
    setValueDate(null)
  }
  const onchangesDate = (value: any) => {
    setValueDate(value)
    console.log();

  }

  const handleOnsearch = async () => {
    if (checkVal() == false) {
      SnackbarSet('กรุณากรอกข้อมูล', 'error', 3000)
      return;
    }
    await setDataSearch([])
    let data: any = new Object();
    data.GOV_TYPE = valueGov != null ? String(valueGov.GOV_TYPE) : data.GOV_TYPE = '';
    data.TYPE_CODE = valueType != null ? String(valueType.TYPE_CODE) : data.TYPE_CODE = '';
    data.SEMI_CODE = valueCode != null ? String(valueCode.SEMI_CODE) : data.SEMI_CODE = '';
    data.IMPORT_DATE = valueDate != null ? valueDate : data.IMPORT_DATE = '';
    console.log(data, 'handleOnsearch');

    try {
      let res = await ServiceSearch.SelectDataPdsDol(data)
      console.log(res, 'res');
      if (res.length > 0) {
        await setDataSearch(res)
      } else {
        await setDataSearch([])
        SnackbarSet('ไม่พบข้อมูล', 'error', 3000)
      }
    } catch (e) {
      console.log(e, 'e');
    }
  }

  const checkVal = () => {
    if (valueType == null && valueCode == null && valueDate == null) {
      return false;
    }
  }

  const handleOpenDialogImport = () => {
    console.log('add');
    setOpenDialog(true)
    setDataSearch([])
  }
  const handleOnClickClear = () => {
    setValueGov(null)
    setValueType(null)
    setValueCode(null)
    setValueDate(null)
    setDataSearch([])
  }

  React.useEffect(() => {
    let dataArray: any = [];
    let data: any = new Object();
    data.GOV_TYPE = valueGov != null ? String(valueGov.GOV_TYPE) : data.GOV_TYPE = '';
    data.TYPE_CODE = valueType != null ? String(valueType.TYPE_CODE) : data.TYPE_CODE = '';
    data.SEMI_CODE = valueCode != null ? String(valueCode.SEMI_CODE) : data.SEMI_CODE = '';
    data.IMPORT_DATE = valueDate != null ? valueDate : data.IMPORT_DATE = '';
    dataArray.push(data)
    setDatasandSrarch(dataArray)
  }, [valueGov, valueType, valueCode, valueDate])
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
                      <Typography variant="subtitle1" component="div" gutterBottom>หน่วยงาน<span style={{ color: 'red' }}>*</span></Typography>
                      <AutocompleteAgency values={valueGov} nameLabel='กรุณาเลือกหน่วยงาน' onchange={onchangesGov} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Typography variant="subtitle1" component="div" gutterBottom>ประเภทข้อมูล<span style={{ color: 'red' }}>*</span></Typography>
                      <AutocompleteType values={valueType} valueType={valueGov} nameLabel='กรุณาเลือกประเภทข้อมูล' onchange={onchangesTypes} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Typography variant="subtitle1" component="div" gutterBottom>ชื่อรายการข้อมูล</Typography>
                      <AutocompleteListData values={valueCode} valueType={valueType} nameLabel='กรุณาเลือกชื่อรายการข้อมูล' onchange={onchangesCode} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Typography variant="subtitle1" component="div" gutterBottom>วัน/เดือน/ปี นำเข้า</Typography>
                      <MyDatePicker values={valueDate} onChange={onchangesDate} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <ButtonSearch onsubmit={() => handleOnsearch()} />
                        <ButtonAdd buttonName='เพิ่มรายการนำเข้า' onClickAdd={() => handleOpenDialogImport()} />
                        {/* <Button onClick={handleOnClickClear} variant={'contained'} sx={{ width: '10%', backgroundColor: '#e41e4e', color: '#f9f9f9' }}>ล้างข้อมูล</Button> */}
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
          <AssignmentIcon /><Typography sx={{ color: '#4267b2', justifyContent: 'center', alignItems: 'center' }}>ค้นหาและนำเข้า</Typography>
        </Stack>
      </div>
    </div>
  )
}
