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
} from '@mui/material'
import React from 'react'
import { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ReportReceiving from './reportReceiving';
import { dateFormatTime } from '@/libs/outputDatas';
import ReportReceivingBracnh from './reportReceivingBracnh';
import ReportReceivingPlot from './reportReceivingPlot';

interface IFDepartmentLands {
    dataList?: any;
    hendname?: any;
}


export default function DepartmentLands({ dataList, hendname }: IFDepartmentLands) {
    const [onDetail, setOnDetail] = useState(1)
    const [dataSendDepartMent, setDataSendDepartMent] = useState<any>(null)
    const [dataSendListBranch, setDataSendListBranch] = useState<any>(null)
    const [dataSendListPlot, setDataSendListPlot] = useState<any>(null)

    const handleOnClick = async (el: any) => {
        if (el.COUNTIMPORT !== 0) {
            await setOnDetail(2)
            await setDataSendDepartMent(el)
        }

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
                                            {hendname.map((item: any, index: any) => (
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
                                                            {item.COUNTDOL}
                                                        </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell align='center' sx={{ border: 'none' }}>
                                                    <Box py={1} sx={{
                                                        backgroundColor: '#FFE817',
                                                        // width: 100
                                                    }}>
                                                        <Typography sx={{ cursor: 'pointer' }} onClick={() => handleOnClick(item)}>
                                                            {item.COUNTIMPORT}
                                                        </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell align='center' sx={{ border: 'none' }}>
                                                    <Box py={1} sx={{
                                                        backgroundColor: '#B9B9B9',
                                                        // width: 100
                                                    }}>
                                                        <Typography >
                                                            {item.DEF}
                                                        </Typography>
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
                        dataSendDepartMent && (
                            <ReportReceiving
                                setOnDetail={setOnDetail}
                                dataSendDepartMent={dataSendDepartMent}
                                setDataSendListBranch={setDataSendListBranch}
                            />
                        )
                    )}
                {onDetail === 3 &&
                    (
                        dataSendDepartMent && dataSendListBranch && (
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
                        dataSendDepartMent && dataSendListBranch && dataSendListPlot && (
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
