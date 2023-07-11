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
    Tooltip
} from '@mui/material'
import React from 'react'
import { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ReportReceiving from './reportReceiving';
import { dateFormatTime, numberWithCommas } from '@/libs/outputDatas';
import ReportReceivingBracnh from './reportReceivingBracnh';
import ReportReceivingPlot from './reportReceivingPlot';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { dagRuns, taskInstances, taskInstancesLog } from '@/service/run';
import ArticleIcon from '@mui/icons-material/Article';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { DownLoadLog } from '@/libs/exportTXT';

interface IFDepartmentLands {
    dataList?: any;
    hendname?: any;
}


export default function DepartmentLands({ dataList, hendname }: IFDepartmentLands) {
    const [onDetail, setOnDetail] = useState(1)
    const [dataSendDepartMent, setDataSendDepartMent] = useState<any>({})
    const [dataSendListBranch, setDataSendListBranch] = useState<any>({})
    const [dataSendListPlot, setDataSendListPlot] = useState<any>({})
    const [isPlays, setIsPlays] = useState<number>(0)
    const [isOpenLog, setIsOpenLog] = useState<number>(0)
    const [log, setLog] = useState<string>("")
    const [namefile, setNamefile] = useState<string>("")

    const handleOnClick = async (el: any) => {
        if (el.COUNTIMPORT != 0) {
            await setOnDetail(2)
            await setDataSendDepartMent(el)
        }

    }

    const handleOnPlays = async (el: any) => {
        await setIsPlays(el.SEMI_CODE);
        await setNamefile(el.SEMI_NAME);
        console.log(el, 'handleOnPlays');
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
            }, 20000)
        } catch (e) {

        }
        setTimeout(async () => {
            await setIsPlays(0);
        }, 20000)
    }

    const handledownLoadLog = () => {
        DownLoadLog(log, namefile)
    }


    return (
        <Grid container >
            <Grid item xs={12}>
                {onDetail === 1
                    && (
                        <Paper sx={{ width: '100%' }}>
                            <TableContainer>
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
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        <Tooltip title={'Run AirFlow'}>
                                                            <IconButton onClick={() => handleOnPlays(item)} >
                                                                <Avatar>
                                                                    {item.SEMI_CODE === isPlays ?
                                                                        <PauseIcon color='success' />
                                                                        :
                                                                        <PlayArrowIcon color={'primary'} />
                                                                    }
                                                                </Avatar>
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip title={'DownLoad log AirFlow'}>
                                                            {item.SEMI_CODE === isOpenLog && log != "" ?
                                                                <IconButton onClick={() => handledownLoadLog()}>
                                                                    <Avatar>
                                                                        <FileDownloadIcon color={'error'} />
                                                                    </Avatar>
                                                                </IconButton>
                                                                :
                                                                <IconButton  disabled>
                                                                    <Avatar>
                                                                        <FileDownloadIcon color={'disabled'} />
                                                                    </Avatar>
                                                                </IconButton>
                                                            }
                                                        </Tooltip>
                                                    </Box>
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
                                                            <Typography sx={{ color: '#f92b2f', cursor: 'pointer', textDecoration: 'underline', "&:hover": { backgroundColor: "#e3f2fd" } }}>
                                                                {numberWithCommas(item.DEF)}
                                                            </Typography>
                                                        )}
                                                    </Box>
                                                </TableCell>
                                                <TableCell align='center' sx={{ border: 'none' }}>{dateFormatTime(item.IMPORT_DATE)}</TableCell>
                                                <TableCell align='left' sx={{ border: 'none' }}>{item.TABLE_NAME}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    )}
                {onDetail === 2 &&
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
                    )}
            </Grid>
        </Grid>
    )
}
