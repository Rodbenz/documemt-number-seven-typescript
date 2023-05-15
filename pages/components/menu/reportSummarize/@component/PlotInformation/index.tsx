
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
import { reportLandCountS7, reportLandCountS7Ns3k, reportLandS7, reportLandS7Ns3k } from '@/service/report';
import BasicDateTimePicker from '../../../../@conponents/MyDatePicker';
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

export default function PlotInformation() {
    const { setDataInformationList } = useCartContext();
    const [province, setProvince] = React.useState<any>(null)
    const [branch, setBranch] = React.useState<any>(null)
    const [valueOpt, setValueOpt] = React.useState<string>('')
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
    const onchangesOpt = (value: any) => {
        setValueOpt(value)
    }

    const onchangesStartDate = (value: any) => {
        setStartDate(value)
    }
    const onchangesEndDate = (value: any) => {
        setEndDate(value)
    }

    const handleOnsearch = () => {
        let datasend: any = new Object();
        datasend.PROVINCE_CODE = province != null ? province.PROVINCE_ID : '';
        datasend.BRANCH_CODE = branch != null ? branch.BRANCH : '';
        datasend.OPT_CODE = valueOpt != null ? valueOpt : '';
        datasend.START_DATE = startDate != null ? startDate : '';
        datasend.END_DATE = endDate != null ? endDate : '';
        datasend.IMPORT_DATE = '';


        console.log('search', datasend);
        res_bySearch(datasend)
        return;
    }

    const res_bySearch = async (datasend: any) => {
        await setDataInformationList([])
        try {
            let resLend = await reportLandS7(datasend)
            console.log('resLend', resLend);

            // resLend = resLend.length > 0 ? resLend : []
            // let resLend3k = await reportLandS7Ns3k(datasend)
            // resLend3k = resLend3k.length > 0 ? resLend3k : []
            // let countLend = await reportLandCountS7()
            // if (resLend.length == 0) {
            //     countLend = []
            // }
            // let countLend3k = await reportLandCountS7Ns3k()
            // if (resLend3k.length == 0) {
            //     countLend3k = []
            // }
            // let newData: any = []
            // let sesData: any = [{
            //     ...resLend[0],
            //     ...countLend[0],
            // },
            // {
            //     ...resLend3k[0],
            //     ...countLend3k[0]
            // }
            // ];

            // for(let i = 0; i < sesData.length; i++){
            //     let dataItem = sesData[i];
            //     Object.keys(dataItem).length > 0 && newData.push(dataItem)
            // }

            if (resLend.length > 0) {
                await setDataInformationList(resLend)
            } else {
                await setDataInformationList([])
                SnackbarSet('ไม่พบข้อมูล', 'error', 3000)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleCancel = () => {
        setDataInformationList([])
        setProvince(null)
        setBranch(null)
        setValueOpt("")
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
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>จังหวัด</Typography>
                                            <AutocompleteProvine values={province} onchange={onchangesProvinc} size='small' />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>สำนักงานจังหวัด</Typography>
                                            <AutocompleteBranch values={branch} onchange={onchangesBranch} datalist={province} size='small' />
                                        </Grid>
                                        {/* <Grid item xs={12} sm={12} md={4}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>รหัส อปท.</Typography>
                                            <TextFieldInput values={valueOpt} onchanges={onchangesOpt} nameText='กรุณากรอกรหัส อปท' />
                                        </Grid> */}
                                        <Grid item xs={12} sm={12} md={3}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>เดือน</Typography>
                                            {/* <AutocompleteMonth values={month} onchange={onchangesMonth} size='small' /> */}
                                            <BasicDateTimePicker values={startDate} onChange={onchangesStartDate} />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={3}>
                                            <Typography variant="subtitle1" component="div" gutterBottom>ปี</Typography>
                                            <BasicDateTimePicker values={endDate} onChange={onchangesEndDate} />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={3}>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={3}>
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


