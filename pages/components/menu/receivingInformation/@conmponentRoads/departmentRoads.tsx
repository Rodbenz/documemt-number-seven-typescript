import {
    Grid,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Box,
    IconButton,
    Typography,
    Stack,
    Avatar,
    Paper,
    Tooltip,
    Menu,
    MenuItem,
    Button
} from '@mui/material'
import React from 'react'
import { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import ReportReceiving from './reportReceiving';
import { dateFormatTime, numberWithCommas } from '@/libs/outputDatas';
// import ReportReceivingBracnh from './reportReceivingBracnh';
// import ReportReceivingPlot from './reportReceivingPlot';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { dagRuns, taskInstances, taskInstancesLog } from '@/service/run';
import ArticleIcon from '@mui/icons-material/Article';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { DownLoadLog } from '@/libs/exportTXT';
import el from 'date-fns/esm/locale/el/index.js';
import FormDialog from '@/pages/components/@conponents/FormDialog';
// import RunDagsConfig from './runDagsConfig';
import { SnackbarSet } from '@/pages/components/@conponents/popup/SnackbarSet';
import { useCartContext } from '@/context/Cartcontext';

interface IFDepartmentLands {
    dataList?: any;
    hendname?: any;
    // refreshMenu?:()=>void;
}

interface obj {
    COUNTDOL: number;
    COUNTIMPORT: number,
    DAG: string;
    DEF: number;
    IMPORT_DATE: string;
    SEMI_CODE: number;
    SEMI_NAME: string;
    TABLE_NAME: string;
}


export default function DepartmentRoads({ dataList, hendname }: IFDepartmentLands) {
    const {setIsMenuReceiving} = useCartContext()
    const [onDetail, setOnDetail] = useState(1)
    const [dataSendDepartMent, setDataSendDepartMent] = useState<any>({})
    const [dataSendListBranch, setDataSendListBranch] = useState<any>({})
    const [dataSendListPlot, setDataSendListPlot] = useState<any>({})
    const [elementDag, setElementDag] = useState<any>({})
    const [isPlays, setIsPlays] = useState<number>(0)
    const [isOpenpopConfig, setIsOpenpopConfig] = useState(false)
    const [isOpenLog, setIsOpenLog] = useState<number>(0)
    const [log, setLog] = useState<string>("")
    const [namefile, setNamefile] = useState<string>("")
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleOnClick = async (el: any) => {
        if (el.COUNTIMPORT != 0) {
            await setOnDetail(2)
            await setDataSendDepartMent(el)
        }

    }

    const handleOnPlays = async () => {
        let el = elementDag;
        await setIsPlays(el.SEMI_CODE);
        await setNamefile(el.SEMI_NAME);
        console.log(el, 'handleOnPlays');
        handleClose()
        try {
            let dage = await dagRuns(el);
            dage.DAG = dage.dag_id;
            dage.DAG_RUN_ID = dage.dag_run_id;
            setTimeout(async () => {
                let taskIn = await taskInstances(dage);
                dage.TASK_ID = taskIn[0].task_id;
                dage.TYPE_NUMBER = taskIn[0].try_number;
                console.log(dage, 'handleOnPlays');
                let log = await taskInstancesLog(dage);
                console.log(log);
                await setLog(log);
                await setIsOpenLog(el.SEMI_CODE);
                log != '' && (SnackbarSet('Run Dag เสร็จสิ้น', 'success', 3000));
                // log != '' && refreshMenu()
                await setIsPlays(0);
            }, 30000)
        } catch (e) {

        }
    }

    const handleRunDagConfig=()=>{
        setIsOpenpopConfig(true);
        handleClose()
    }

    const handledownLoadLog = () => {
        DownLoadLog(log, namefile)
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, value: obj) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget, value);
        setElementDag(value);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCloseDagConfig = () => {
        setIsOpenpopConfig(false);
        // refreshMenu()
        console.log('5555555555555');
        
    };

    return (
        <React.Fragment>
            <Grid container >
                <Grid item xs={12}>
                    {onDetail === 1
                        && (
                            <Paper sx={{ width: '100%' }}>
                                <TableContainer sx={{ maxHeight: 700 }}>
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
                                                    <TableCell align='left' sx={{ border: 'none' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                            <Avatar sx={{ bgcolor: '#aae8e6' }}>
                                                                <ChevronRightIcon />
                                                            </Avatar>
                                                            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                                                            <Typography variant={'body1'} sx={{ ml: 1 }} >
                                                                {`${index + 1}.${item.SEMI_NAME}`}
                                                            </Typography>
                                                        </div>
                                                    </TableCell>
                                                    
                                                    <TableCell align='center' sx={{ border: 'none' }} >
                                                        <Box py={1} sx={{
                                                            backgroundColor: '#53F8AA',

                                                        }}>
                                                            <Typography >
                                                                {numberWithCommas(item.COUNTDOL)}
                                                            </Typography>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align='center' sx={{ border: 'none' }}>
                                                        <Box py={1} sx={{
                                                            backgroundColor: '#FFE817',
                                                            // width: 100
                                                        }}>
                                                            {item.COUNTIMPORT === 0 ? (
                                                                <Typography sx={{ color: '#1976d2' }}>
                                                                    {item.COUNTIMPORT}
                                                                </Typography>
                                                            ) : (
                                                                <Typography sx={{ color: '#1976d2', cursor: 'pointer', textDecoration: 'underline', "&:hover": { backgroundColor: "#e4c23e" } }} onClick={() => handleOnClick(item)}>
                                                                    {numberWithCommas(item.COUNTIMPORT)}
                                                                </Typography>
                                                            )}
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align='center' sx={{ border: 'none' }}>
                                                        <Box py={1} sx={{
                                                            backgroundColor: '#B9B9B9',
                                                            // width: 100
                                                        }}>
                                                            {item.DEF === 0 ? (
                                                                <Typography sx={{ color: '#f92b2f' }}>
                                                                    {item.DEF}
                                                                </Typography>
                                                            ) : (
                                                                <Typography sx={{ color: '#f92b2f' }}>
                                                                    {numberWithCommas(item.DEF)}
                                                                </Typography>
                                                            )}
                                                        </Box>
                                                    </TableCell>
                                                    {/* <TableCell align='center' sx={{ border: 'none' }}>{dateFormatTime(item.IMPORT_DATE)}</TableCell>
                                                    <TableCell align='left' sx={{ border: 'none' }}>{item.TABLE_NAME}</TableCell> */}
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Stack direction={'row'} justifyContent={'end'} pr={2} pb={1}>
                                    <Button variant='contained' onClick={()=>setIsMenuReceiving({})}>ย้อนกลับ</Button>
                                </Stack>
                            </Paper>
                        )}
                    {/* {onDetail === 2 &&
                        (
                            Object.keys(dataSendDepartMent).length > 0 && (
                                <ReportReceiving
                                    setOnDetail={setOnDetail}
                                    dataSendDepartMent={dataSendDepartMent}
                                    setDataSendDepartMent={setDataSendDepartMent}
                                    setDataSendListBranch={setDataSendListBranch}
                                />
                            )
                        )}
                    {onDetail === 3 &&
                        (
                            Object.keys(dataSendDepartMent).length > 0 && Object.keys(dataSendListBranch).length > 0 && (
                                <ReportReceivingBracnh
                                    setOnDetail={setOnDetail}
                                    dataSendDepartMent={dataSendDepartMent}
                                    dataSendListBranch={dataSendListBranch}
                                    setDataSendListPlot={setDataSendListPlot}
                                />
                            )
                        )}
                    {onDetail === 4 &&
                        (
                            Object.keys(dataSendDepartMent).length > 0 && Object.keys(dataSendListBranch).length > 0 && Object.keys(dataSendListPlot).length > 0 && (
                                <ReportReceivingPlot
                                    setOnDetail={setOnDetail}
                                    dataSendDepartMent={dataSendDepartMent}
                                    dataSendListBranch={dataSendListBranch}
                                    dataSendListPlot={dataSendListPlot}
                                />
                            )
                        )} */}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
