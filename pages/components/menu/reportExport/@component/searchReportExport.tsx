import { Button, Divider, Grid, Stack, Typography, rgbToHex } from '@mui/material'
import React from 'react'
import ButtonSearch from '../../../@conponents/ButtonSearch';
import ButtonAdd from '../../../@conponents/ButtonAdd';
import { useCartContext } from '@/context/Cartcontext';
import AutocompleteType from '../../../@conponents/Autocopletes/AutocompleteType';
import AutocompleteChond from '../../../@conponents/Autocopletes/AutocompleteChond';
import AutocompleteProvine from '../../../@conponents/Autocopletes/AutocompleteProvine';
import AutocompleteBranch from '../../../@conponents/Autocopletes/AutocompleteBranch';
import AutocompleteTypes from '../../../@conponents/Autocopletes/AutocompleteTypes';
import MyDatePicker from '../../../@conponents/MyDatePicker';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AutocompletePeriods from '../../../@conponents/Autocopletes/AutocompletePeriods';
import AutocompleteTypeMore from '../../../@conponents/Autocopletes/AutocompleteTypeMore';
import { SelTranferDataTal } from '@/service/report';
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

export default function SearchReprtExport() {
  const { setDataExport, setDataSandExport } = useCartContext();
  const [periods, setPeriods] = React.useState<any>(null)
  const [licenseTypes, setLicenseTypes] = React.useState<any>(null)
  const [province, setProvince] = React.useState<any>(null)
  const [branch, setBranch] = React.useState<any>(null)
  const [valueTypes, setValueTypes] = React.useState<any>(null)
  const [startDate, setStartDate] = React.useState<any>(null)
  const [endDate, setEndDate] = React.useState<any>(null)

  const onchangesPeriods = (value: any) => {
    setPeriods(value)
  }
  const onchangesLicenseTypes = (value: any) => {
    setLicenseTypes(value)
  }
  const onchangesProvinc = (value: any) => {
    setProvince(value)
    setBranch(null)
    console.log(value);
  }
  const onchangesBranch = (value: any) => {
    setBranch(value)
  }
  const onchangesTypes = (value: any) => {
    setValueTypes(value)
  }
  const onchangesStartDate = (value: any) => {
    setStartDate(value)
  }
  const onchangesEndDate = (value: any) => {
    setEndDate(value)
  }

  const handleOnsearch = () => {
    let datasend: any = new Object();
    datasend.CHANGWAT_CODE = province != null ? province.PROVINCE_ID : ''
    datasend.BRANCH_CODE = branch != null ? branch.BRANCH : ''
    datasend.PARCELTYPE = licenseTypes != null ? String(licenseTypes.ID) : '';
    datasend.PERIODS_ID = periods != null ? String(periods.ID) : '';
    datasend.START_DATE = startDate != null ? startDate : '';
    datasend.END_DATE = endDate != null ? endDate : '';
    datasend.STATUS = valueTypes != null ? String(valueTypes.ID) : '';

    console.log(datasend, 'datasend');
    res_search(datasend);
    setDataSandExport([datasend])

  }
  const res_search = async (datasend: any) => {
    await setDataExport([]);
    try {
      let selTranferDataTal = await SelTranferDataTal(datasend);
      console.log(selTranferDataTal, 'selTranferDataTal');
      if (selTranferDataTal) {
        if (selTranferDataTal.length > 0 || selTranferDataTal != '') {
          await setDataExport(selTranferDataTal);
        } else {
          await setDataExport([]);
          SnackbarSet('ไม่พบข้อมูล', 'error', 3000)
          return;
        }
      }else{
        await setDataExport([]);
        SnackbarSet('ไม่พบข้อมูล', 'error', 3000)
        return;
      }
    } catch (e) {
      console.log(e);
    }
  }
  const handleCancel = () => {
    setDataExport([]);
    setPeriods(null)
    setLicenseTypes(null)
    setStartDate(null)
    setEndDate(null)
    setProvince(null)
    setBranch(null)
    setValueTypes(null)
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
                      <AutocompletePeriods values={periods} nameLabel='กรุณาเลือกประเภทข้อมูล' onchange={onchangesPeriods} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Typography variant="subtitle1" component="div" gutterBottom>วัน/เดือน/ปี ที่ประกาศ</Typography>
                      <Grid item sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <MyDatePicker values={startDate} onChange={onchangesStartDate} />
                        <Typography variant="subtitle1" component="div" sx={{ paddingLeft: 3, paddingRight: 3 }} p={2}>ถึง</Typography>
                        <MyDatePicker values={endDate} onChange={onchangesEndDate} />
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle1" component="div" gutterBottom>ประเภทเอกสารสิทธิ์</Typography>
                      <AutocompleteChond values={licenseTypes} nameLabel='กรุณาเลือกประเภทข้อมูล' onchange={onchangesLicenseTypes} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle1" component="div" gutterBottom>จังหวัด</Typography>
                      <AutocompleteProvine values={province} nameLabel='กรุณาเลือกประเภทข้อมูล' onchange={onchangesProvinc} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle1" component="div" gutterBottom>สำนักงานที่ดิน</Typography>
                      <AutocompleteBranch values={branch} nameLabel='กรุณาเลือกประเภทข้อมูล' onchange={onchangesBranch} datalist={province} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle1" component="div" gutterBottom>ประเภท</Typography>
                      <AutocompleteTypeMore values={valueTypes} nameLabel='กรุณาเลือกประเภทข้อมูล' onchange={onchangesTypes} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} >
                      <Stack direction="row" spacing={2} justifyContent="flex-end" p={4}>
                        <ButtonSearch onsubmit={() => handleOnsearch()} />
                        <Button variant="contained" onClick={handleCancel}>ยกเลิก</Button>
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
