import AutocompleteMonth from '@/pages/components/@conponents/Autocopletes/AutocompleteMonth'
import MydatePikerYears from '@/pages/components/@conponents/MyDatePickerYears'
import { DATASUMMARY, dagRuns, dagRunsCofig, taskInstances, taskInstancesLog } from '@/service/run';
import { Grid, Stack, Button, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Avatar, Typography, Box, Tooltip, IconButton } from '@mui/material'
import dayjs from 'dayjs';
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { DownLoadLog } from '@/libs/exportTXT';
import { SnackbarSet } from '@/pages/components/@conponents/popup/SnackbarSet';

interface IRunDagsConfig {
    ele?: any;
}

interface Xlog {
    land_office: string;
    txtLog: string;
}

export default function RunDagsConfig(props: IRunDagsConfig) {
    const [month, setMonth] = React.useState<any>(null)
    const [year, setYear] = React.useState<any>(dayjs(new Date()))
    const [dataList, setDataList] = React.useState<any>([])
    const [isPlays, setIsPlays] = React.useState<string>("")
    const [isOpenLog, setIsOpenLog] = React.useState<string>("")
    const [logImport, setLogImport] = React.useState<Xlog[]>([])
    const [namefile, setNamefile] = React.useState<string>("")

    const onchangesMonth = (value: any) => {
        setMonth(value);
        console.log(value);

    }
    const onchangesYear = (value: any) => {
        setYear(value);
        console.log(value);
    }
    const onSearch = async () => {
        let datasend: any = new Object();
        datasend.GET_YEARS = year ? (dayjs(year).format('YYYY-MM-DD')).split('-')[0] : '';
        datasend.GET_MONTH = month ? String(month.MONTH_SEQ) : '';
        datasend.SEMI_CODE = Object.keys(props.ele).length > 0 ? String(props.ele.SEMI_CODE) : '';

        try {
            let res = await DATASUMMARY(datasend);
            console.log(res, datasend);
            await setDataList(res);
        } catch (e) {

        }
    }
    const onClearValue = () => {
        setMonth(null);
        setYear(dayjs(new Date()));
        setDataList([])
    }

    const hendname = [
        {
            name: 'รายการรับข้อมูล จาก กรมที่ดิน',
            width: 100,
        },
        {
            name: 'สำนักงานที่ดิน',
            width: 100,
        },
        {
            name: 'รหัสสำนักงาน',
            width: 100,
        },
        {
            name: 'จำนวน',
            width: 100,
        },
        {
            name: 'Action',
            width: 100,
        },
    ];
    const convertMonth = (month: number) => {
        if (month < 10) {
            return String('0' + month)
        } else {
            return String(month)
        }
    }

    const handleOnPlays = async (el: any) => {
        await setIsPlays(el.OrganizationID);
        await setNamefile(el.Description);
        let datasend: any = new Object();
        datasend.DAG = Object.keys(props.ele).length > 0 ? String(props.ele.DAG) : '';
        datasend.year = el ? String(el.GET_YEARS + 543) : '';
        datasend.month = el ? convertMonth(el.GET_MONTH) : '';
        datasend.land_office = el ? el.OrganizationID : '';
        try {
            let dage = await dagRunsCofig(datasend);
            dage.DAG = dage.dag_id;
            dage.DAG_RUN_ID = dage.dag_run_id;
            console.log(dage, 'handleOnPlays');
            setTimeout(async () => {
                let taskIn = await taskInstances(dage);
                dage.TASK_ID = taskIn[0].task_id;
                dage.TYPE_NUMBER = taskIn[0].try_number;
                let log = await taskInstancesLog(dage);
                let setdata = {
                    land_office: el.OrganizationID,
                    txtLog: log
                }
                let data = ([...logImport, setdata]);
                await setLogImport(data);
                await setIsOpenLog(el.OrganizationID);
                await setIsPlays("");
                log != '' && (SnackbarSet('Run Dag เสร็จสิ้น', 'success', 3000));
            }, 20000)
        } catch (e) {
            console.log(e);

        }
    }

    const handledownLoadLog = (el: any) => {
        let data = (logImport.filter(person => person.land_office === el.OrganizationID));
        DownLoadLog(data, namefile)
    }

    React.useEffect(() => {
        console.log(logImport);
    }, [logImport])

    return (
        <div>
            <Grid container py={2} justifyContent={'center'}>
                <Grid item sx={{ border: 2, borderRadius: 2, borderColor: '#006e61' }}>
                    <Stack direction={'row'} spacing={3} py={3} px={3}>
                        <MydatePikerYears values={year} onchange={onchangesYear} nameLabel='กรุณาเลือกปี' />
                        <AutocompleteMonth values={month} onchange={onchangesMonth} nameLabel='กรุณาเลือกเดือน' />
                        <Button variant='contained' size='small' onClick={onSearch}>ค้นหา</Button>
                        <Button variant='contained' size='small' color='error' sx={{ color: 'white' }} onClick={onClearValue}>ล้างค่า</Button>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container>
                <Paper sx={{ width: '100%' }}>
                    <TableContainer sx={{ maxHeight: 710 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {/* <TableCell align='center' sx={{width:10}}></TableCell> */}
                                    {hendname?.map((item: any, index: any) => (
                                        <TableCell
                                            align='center'
                                            key={index}
                                            sx={{
                                                minWidth: item.width,
                                                fontSize: 21,
                                                fontWeight: 'bold',
                                                border: 'none'
                                            }}

                                        >
                                            {item.name}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dataList?.map((item: any, index: any) => (
                                    <TableRow key={index}>
                                        <TableCell align='center' sx={{ border: 'none' }}>
                                            <Typography variant={'body1'} sx={{ ml: 1 }} >
                                                {`${item.Description}`}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='left' sx={{ border: 'none' }}>
                                            <Typography variant={'body1'} sx={{ ml: 1, paddingLeft: 10 }} >
                                                {`${item.OrganizationName}`}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='center' sx={{ border: 'none' }}>
                                            <Typography variant={'body1'} sx={{ ml: 1 }} >
                                                {`${item.OrganizationID}`}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='center' sx={{ border: 'none' }}>
                                            <Typography variant={'body1'} sx={{ ml: 1 }} >
                                                {`${item.RecordTotal}`}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='center' sx={{ border: 'none' }}>
                                            <Stack direction={'row'} justifyContent={'center'}>
                                                <Tooltip title={'Run AirFlow'}>
                                                    <IconButton onClick={() => handleOnPlays(item)}>
                                                        <Avatar>
                                                            {item.OrganizationID === isPlays ?
                                                                <PauseIcon color='success' />
                                                                :
                                                                <PlayArrowIcon color={'primary'} />
                                                            }
                                                        </Avatar>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title={'DownLoad log AirFlow'}>
                                                    {logImport.some(person => person.land_office === item.OrganizationID) ?
                                                        <IconButton onClick={() => handledownLoadLog(item)}>
                                                            <Avatar>
                                                                <FileDownloadIcon color={'error'} />
                                                            </Avatar>
                                                        </IconButton>
                                                        :
                                                        <IconButton disabled>
                                                            <Avatar>
                                                                <FileDownloadIcon color={'disabled'} />
                                                            </Avatar>
                                                        </IconButton>
                                                    }
                                                </Tooltip>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </div>
    )
}
