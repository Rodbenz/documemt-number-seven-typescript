import { Box, Grid, Paper, Stack, Button, makeStyles } from '@mui/material'
import React from 'react'
import AutocompletePeriods from '../../../@conponents/Autocopletes/AutocompletePeriods'
import AutocompleteProvine from '../../../@conponents/Autocopletes/AutocompleteProvine'
import AutocompleteBranch from '../../../@conponents/Autocopletes/AutocompleteBranch'
import AutocompleteChond from '../../../@conponents/Autocopletes/AutocompleteChond'
import FromChanode from './fromChanode'
import FromNs3k from './fromNs3k'
import { useCartContext } from '@/context/Cartcontext'
import { SEARCH_ONLY_BETW, SEARCH_ONLY_BETW_NS3K } from '@/service/search'
import { SnackbarSet } from '@/pages/components/@conponents/popup/SnackbarSet'

export default function SearchEPV() {
    const { dataLandList, setDataLandList, setDatalistEpv, setDataLicense } = useCartContext()
    const [periods, setPeriods] = React.useState<any>(null)
    const [province, setProvince] = React.useState<any>(null)
    const [branch, setBranch] = React.useState<any>(null)
    const [license, setLicense] = React.useState<any>(null)
    const [btnNumber, setBtnNumber] = React.useState<number>(0)

    const handleOnchangePeriods = (value: string) => {
        setPeriods(value)
    }
    const handleOnchangeProvine = (value: string) => {
        setProvince(value)
        setBranch(null)
    }
    const handleOnchangeBranch = (value: string) => {
        setBranch(value)
    }
    const handleOnchangeLicense = (value: string) => {
        setLicense(value)
        setDataLicense(value)
        setDatalistEpv([])
    }

    const handleOnClickSearch = async () => {
        await setDatalistEpv([])
        let datasend: any = new Object();
        datasend.PERIODS_ID = periods != '' ? String(periods.ID) : '';
        datasend.CHANGWAT_CODE = province != null ? province.CHANGWAT_CODE : '';
        datasend.BRANCH_CODE = branch != null ? branch.BRANCH : ''
        if (dataLandList) {
            datasend = { ...datasend, ...dataLandList }
        }
        if (dataLandList == null) {
            let newDataObj: any = new Object();
            newDataObj.LAND_NO = '';
            newDataObj.UTMMAP1 = '';
            newDataObj.UTMMAP2 = '';
            newDataObj.UTMMAP3 = '';
            newDataObj.UTMMAP4 = '';
            newDataObj.UTMSCALE = '';
            datasend = { ...datasend, ...newDataObj }
        }

        try {
            let res: any = []
            if (license.ID == 1) {
                res = await SEARCH_ONLY_BETW(datasend)
            }
            if (license.ID == 3) {
                res = await SEARCH_ONLY_BETW_NS3K(datasend)
            }
            console.log(res, 'res566666666666666666');

            if (res.length > 0) {
                await setDatalistEpv(res)
            } else {
                await setDatalistEpv([])
                SnackbarSet('ไม่พบข้อมูล', 'error', 3000)
            }
        } catch (e) {
            console.log(e);
        }
    }

    const handleOnClickClear = () => {
        setPeriods(null)
        setProvince(null)
        setBranch(null)
        setLicense(null)
        setBtnNumber(0)
        setDatalistEpv([])
        setDataLandList(null)
    }



    React.useEffect(() => {
        console.log(dataLandList, 'dataLandList');
    }, [dataLandList])

    return (
        <div>
            <Grid container>
                <Grid item xs={12} justifyContent="center" display="flex" paddingTop={2} >
                    <Box sx={{
                        width: 'calc(100% - 20%)',
                    }}>
                        <Paper elevation={3} sx={{
                            borderTopWidth: '6vh',
                            borderTopStyle: 'solid',
                            borderTopColor: 'rgba(0, 110, 97, 1)',
                        }}
                        >
                            <Grid container display="flex" justifyContent="center" spacing={2} py={5}>
                                <Grid item xs={5}>
                                    <AutocompletePeriods values={periods} nameLabel='รอบบัญชี' onchange={handleOnchangePeriods} />
                                </Grid>
                                <Grid item xs={5}>
                                    <AutocompleteProvine values={province} nameLabel='จังหวัด' onchange={handleOnchangeProvine} />
                                </Grid>
                                <Grid item xs={5}>
                                    <AutocompleteBranch values={branch} nameLabel='สำนักงาน' onchange={handleOnchangeBranch} datalist={province} />
                                </Grid>
                                <Grid item xs={5}>
                                    <AutocompleteChond values={license} nameLabel='ประเภทเอกสารสิทธิ' onchange={handleOnchangeLicense} />
                                </Grid>
                                <Grid item xs={12}>
                                    {license && (
                                        license.ID == 1 &&
                                        <BtnChanode setBtnNumber={setBtnNumber} />
                                    )
                                    }
                                    {license && (
                                        license.ID == 3 &&
                                        <BtnNs3k setBtnNumber={setBtnNumber} />
                                    )
                                    }
                                </Grid>

                            </Grid>
                            {license &&
                                license.ID == 1 &&
                                (<FromChanode types={btnNumber} periods={periods} province={province} branch={branch} />)
                            }
                            {license &&
                                license.ID == 3 &&
                                (<FromNs3k types={btnNumber} province={province} branch={branch} />)
                            }

                            <Stack direction={'row'} justifyContent={'end'} spacing={2} pb={2} pr={2}>
                                <Button onClick={handleOnClickSearch} variant={'contained'} sx={{ width: '10%' }}>ค้นหา</Button>
                                <Button onClick={handleOnClickClear} variant={'contained'} sx={{ width: '10%', backgroundColor: '#e41e4e', color: '#f9f9f9' }}>ล้างข้อมูล</Button>
                            </Stack>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

interface IBtnChanode {
    setBtnNumber: any;
}
function BtnChanode({ setBtnNumber }: IBtnChanode) {
    const [landNumber, setLandNumber] = React.useState<number>(0)
    const onClickLandNumber1 = () => {
        setLandNumber(1)
        setBtnNumber(1)
    }
    const onClickLandNumber2 = () => {
        setLandNumber(2)
        setBtnNumber(2)
    }
    return (
        <div>
            <Stack direction={'row'} justifyContent={'start'} pl={10} spacing={2}>
                <Button variant={'outlined'} onClick={onClickLandNumber1} sx={landNumber == 1 ? { backgroundColor: '#006e61', color: 'white' } : {}}>เลขที่ดิน</Button>
                {/* <Button variant="outlined" onClick={onClickLandNumber2} sx={landNumber == 2 ? { backgroundColor: '#006e61', color: 'white' } : {}}>เลขทีโฉนด.</Button> */}
            </Stack>
        </div>
    )
}

interface IBtnNs3k {
    setBtnNumber: any;
}
function BtnNs3k({ setBtnNumber }: IBtnNs3k) {
    const [landNumber, setLandNumber] = React.useState<number>(0)
    const onClickLandNumber1 = () => {
        setLandNumber(1)
        setBtnNumber(1)
    }
    const onClickLandNumber2 = () => {
        setLandNumber(2)
        setBtnNumber(2)
    }
    return (
        <div>
            <Stack direction={'row'} justifyContent={'start'} pl={10} spacing={2}>
                <Button variant="outlined" onClick={onClickLandNumber1} sx={landNumber == 1 ? { backgroundColor: '#006e61', color: 'white' } : {}}>เลขที่ดิน</Button>
                {/* <Button variant="outlined" onClick={onClickLandNumber2} sx={landNumber == 2 ? { backgroundColor: '#006e61', color: 'white' } : {}}>น.ส. 3ก.</Button> */}
            </Stack>
        </div>
    )
}
