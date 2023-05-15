
import { Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useCartContext } from '@/context/Cartcontext';
import AutocompleteProvine from '../../../../@conponents/Autocopletes/AutocompleteProvine';
import AutocompleteBranch from '../../../../@conponents/Autocopletes/AutocompleteBranch';
import TextFieldInput from '../../../../@conponents/TextFieldInput';
import AutocompleteMonth from '../../../../@conponents/Autocopletes/AutocompleteMonth';
import AutocompleteYear from '../../../../@conponents/Autocopletes/AutocompleteYear';
import ButtonSearch from '../../../../@conponents/ButtonSearch';
import { ReportSelPDS_Val, reportLandCountS7, reportLandCountS7Ns3k, reportLandS7, reportLandS7Ns3k } from '@/service/report';
import AutocompleteAmphurByProvinceId from '../../../../@conponents/Autocopletes/AutocompleteAmphurByProvinceId';
import AutocompleteOpt from '../../../../@conponents/Autocopletes/AutocompleteOpt';
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

export default function LanBuildingTax() {
    const { setDataLanBuildingList } = useCartContext();
    const [province, setProvince] = React.useState<any>(null)
    const [amphur, setAmphur] = React.useState<any>(null)
    const [valueOpt, setValueOpt] = React.useState<any>(null)
    const [month, setMonth] = React.useState<any>(null)
    const [year, setYear] = React.useState<any>(null)

    const onchangesProvinc = (value: any) => {
        setProvince(value)
        setAmphur(null)
        console.log(value);

    }
    const onchangesAmphur = (value: any) => {
        setAmphur(value)
    }
    const onchangesOpt = (value: any) => {
        setValueOpt(value)
    }
    const onchangesMonth = (value: any) => {
        setMonth(value)
    }
    const onchangesYear = (value: any) => {
        setYear(value)
    }

    const handleOnsearch = () => {
        let datasend: any = new Object();
        datasend.CHANGWAT_CODE = province != null ? province.PROVINCE_ID : '';
        datasend.AMPHUR_CODE = amphur != null ? amphur.AMPHUR_CODE : '';
        datasend.MU_TYPE = valueOpt != null ? valueOpt.MU_TYPE : '';
        datasend.IMPORT_DATE = '';
        datasend.IMPORT_MONTH = month != null ? String(month.MONTH_ID) : '';
        datasend.IMPORT_YEAR = year != null ? String(year - 543) : '';

        console.log('search', datasend);
        res_bySearch(datasend)
        return;
    }

    const res_bySearch = async (datasend: any) => {
        await setDataLanBuildingList([])
        try {
            let res = await ReportSelPDS_Val(datasend)
            console.log('res', res);
            
            if (res.length > 0) {
                await setDataLanBuildingList(res)
            } else {
                await setDataLanBuildingList([])
                SnackbarSet('ไม่พบข้อมูล', 'error', 3000)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleCancel =()=>{
        setDataLanBuildingList([])
        setProvince(null)
        setAmphur(null)
        setValueOpt("")
        setMonth(null)
        setYear(null)
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
                                            <Typography variant="subtitle1" component="div" gutterBottom>อำเภอ</Typography>
                                            <AutocompleteAmphurByProvinceId values={amphur} onchange={onchangesAmphur} province={province} size='small' />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>เขตการปกครอง</Typography>
                                            <AutocompleteOpt values={valueOpt} onchange={onchangesOpt} nameLabel='กรุณาเลือกเขตการปกครอง' />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>เดือน</Typography>
                                            <AutocompleteMonth values={month} onchange={onchangesMonth} size='small' />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>ปี</Typography>
                                            <AutocompleteYear values={year}  onchange={onchangesYear} size='small' />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
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


