
import { Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useCartContext } from '@/context/Cartcontext';
import AutocompleteProvine from '../../../../@conponents/Autocopletes/AutocompleteProvine';
import AutocompleteBranch from '../../../../@conponents/Autocopletes/AutocompleteBranch';
import AutocompleteType from '../../../../@conponents/Autocopletes/AutocompleteType';
import AutocompleteTypes from '../../../../@conponents/Autocopletes/AutocompleteTypes';
import TextFieldInput from '../../../../@conponents/TextFieldInput';
import AutocompleteMonth from '../../../../@conponents/Autocopletes/AutocompleteMonth';
import AutocompleteYear from '../../../../@conponents/Autocopletes/AutocompleteYear';
import ButtonSearch from '../../../../@conponents/ButtonSearch';
import MydatePikerYears from '../../../../@conponents/MyDatePickerYears';
import BasicDateTimePicker from '../../../../@conponents/MyDatePicker';
import { ReportLandCondo, ReportLandCondoCountChanode, ReportLandCondoCountNs3A } from '@/service/report';
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

export default function LandApartment() {
    const { setOpenDialog, setDataLandApartmentList } = useCartContext();

    const [province, setProvince] = React.useState<any>(null)
    const [branch, setBranch] = React.useState<any>(null)
    const [valueType, setValueType] = React.useState<any>(null)
    const [valueOpt, setValueOpt] = React.useState<any>('')
    const [startDate, setStartDate] = React.useState<any>(null)
    const [endDate, setEndDate] = React.useState<any>(null)

    const onchangesProvinc = (value: any) => {
        setProvince(value)
        setBranch(null)
        console.log(value);

    }
    const onchangesBranch = (value: any) => {
        setBranch(value)
    }

    const onchangesType = (value: any) => {
        setValueType(value)
    }

    const onchangesOpt = (value: any) => {
        setValueOpt(value)
    }
    const onchangesStartDate = (value: any) => {
        setStartDate(value)
    }
    const onchangesEndDate = (value: any) => {
        setEndDate(value)
    }

    const handleOnsearch = async () => {
        let datasend: any = new Object();
        datasend.PROVINCECODE = province != null ? province.PROVINCE_ID : '';
        datasend.BRANCH_CODE = branch != null ? branch.BRANCH : '';
        datasend.SUB_CODE = valueType != null ? String(valueType.SUB_CODE) : '';
        datasend.OPT_CODE = valueOpt != '' ? valueOpt : '';
        datasend.START_DATE = startDate != null ? startDate : '';
        datasend.END_DATE = endDate != null ? endDate : '';

        await res_getSearch(datasend)
    }
    const res_getSearch = async (datasend: any) => {
        await setDataLandApartmentList([])
        try {
            let reportLandCondo = await ReportLandCondo(datasend)
            // console.log(reportLandCondo, 'reportLandCondo');
            let reportLandCondoCountChanode = await ReportLandCondoCountChanode(datasend)
            // console.log(reportLandCondoCountChanode, 'reportLandCondoCountChanode');
            let reportLandCondoCountNs3A = await ReportLandCondoCountNs3A(datasend);
            // console.log(reportLandCondoCountNs3A, 'reportLandCondoCountNs3A');
            if (reportLandCondo.length > 0) {
                await setDataLandApartmentList(reportLandCondo)
            } else {
                await setDataLandApartmentList([])
                SnackbarSet('ไม่พบข้อมูล', 'error', 3000)
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleCancel = () => {
        setDataLandApartmentList([])
        setProvince(null)
        setBranch(null)
        setValueType(null)
        setValueOpt('')
        setStartDate(null)
        setEndDate(null)
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
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>จังหวัด</Typography>
                                            <AutocompleteProvine values={province} onchange={onchangesProvinc} size='small' />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>สำนักงานจังหวัด</Typography>
                                            <AutocompleteBranch values={branch} onchange={onchangesBranch} datalist={province} size='small' />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>ประเภทข้อมูลทะเบียน</Typography>
                                            <AutocompleteTypes values={valueType} onchange={onchangesType} size='small' />
                                        </Grid>
                                        {/* <Grid item xs={12} sm={12} md={4}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>รหัส อปท.</Typography>
                                            <TextFieldInput values={valueOpt} onchanges={onchangesOpt} nameText='กรุณากรอกรหัส อปท' />
                                        </Grid> */}
                                        <Grid item xs={12} sm={12} md={3}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>ตั้งแต่วันที่</Typography>
                                            <BasicDateTimePicker values={startDate} onChange={onchangesStartDate} />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={3}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>ถึง</Typography>
                                            <BasicDateTimePicker values={endDate} onChange={onchangesEndDate} />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Stack direction="row" spacing={2} justifyContent="flex-end" p={4}>
                                                <ButtonSearch onsubmit={() => handleOnsearch()} />
                                                <Button variant="contained" onClick={handleCancel} >ยกเลิก</Button>
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
                background: 'rgb(65,103,179)',
                borderRadius: '5px',
                boxShadow: '1px 2px 9px rgb(249,249,249)',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Stack direction="row" spacing={2} justifyContent="start" alignItems="center" pl={1} pb={2}>
                    <AssignmentIcon sx={{ color: 'white' }} /><Typography sx={{ color: 'white', justifyContent: 'center', alignItems: 'center' }}>ค้นหา</Typography>
                </Stack>
            </div>
        </div>
    )
}


