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
    Button,
} from '@mui/material'
import React from 'react'
import { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ReportDataExport from './reportDataExport';
import { dateFormatTime, numberWithCommas } from '@/libs/outputDatas';
import ReportDataExportBracnh from './reportDataExportBracnh';
import ReportDataExportPlot from './reportDataExportPlot';
import { useCartContext } from '@/context/Cartcontext';

interface IFDepartmentLands {
    dataList?: any;
    hendname?: any;
}


export default function DepartmentLands({ dataList, hendname }: IFDepartmentLands) {
    const { isMenuDataExport, setIsMenuDataExport } = useCartContext();
    const [onDetail, setOnDetail] = useState(1)
    const [dataSendAll, setDataSendAll] = useState<any>({})
    const [dataSendListBranch, setDataSendListBranch] = useState<any>({})
    const [dataSendListPlot, setDataSendListPlot] = useState<any>({})

    const handleOnClick = async (el: any, type: number) => {
        el.FLAG_TYPE = String(el.FLAG_TYPE)
        el.PARCEL_TYPE = String(el.PARCEL_TYPE)
        el.POST_DOL = String(type)
        console.log(el);

        if (el.COUNTIMPORT != 0) {
            await setOnDetail(2)
            await setDataSendAll(el)
        }

    }

    React.useEffect(() => {
        console.log(dataList, 'dataList');

    }, [dataList])

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
                                                        border: 'none',
                                                        color: item.color,
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
                                                            {`${index + 1}.${item.TYPE_NAME}`}
                                                        </Typography>
                                                    </div>
                                                </TableCell>
                                                <TableCell align='center' sx={{ border: 'none' }} >
                                                    <Box py={1} sx={{
                                                        backgroundColor: '#e3f2fd',

                                                    }}>
                                                        {item.ST_POSTDOL1 == null ? (
                                                            <Typography >
                                                                {item.ST_POSTDOL1 ? item.ST_POSTDOL1 : '0'}
                                                            </Typography>
                                                        ) : (
                                                            <Typography sx={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handleOnClick(item, 1)}>
                                                                {item.ST_POSTDOL1 ? numberWithCommas(item.ST_POSTDOL1) : '0'}
                                                            </Typography>
                                                        )}
                                                    </Box>
                                                </TableCell>
                                                <TableCell align='center' sx={{ border: 'none' }}>
                                                    <Box py={1} sx={{
                                                        backgroundColor: '#e3f2fd',
                                                        // width: 100
                                                    }}>
                                                        {item.ST_POSTDOL3 == null ? (
                                                            <Typography >
                                                                {item.ST_POSTDOL3 ? item.ST_POSTDOL3 : '0'}
                                                            </Typography>
                                                        ) : (
                                                            <Typography sx={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => handleOnClick(item, 3)}>
                                                                {item.ST_POSTDOL3 ? numberWithCommas(item.ST_POSTDOL3) : '0'}
                                                            </Typography>
                                                        )}
                                                    </Box>
                                                </TableCell>
                                                <TableCell align='center' sx={{ border: 'none' }}>
                                                    <Box py={1} sx={{
                                                        backgroundColor: '#e3f2fd',
                                                        // width: 100
                                                    }}>
                                                        {item.ST_POSTDOL2 == null ? (
                                                            <Typography >
                                                                {item.ST_POSTDOL2 ? numberWithCommas(item.ST_POSTDOL2) : '0'}
                                                            </Typography>
                                                        ) : (
                                                            <Typography sx={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => handleOnClick(item, 2)}>
                                                                {item.ST_POSTDOL2 ? numberWithCommas(item.ST_POSTDOL2) : '0'}
                                                            </Typography>
                                                        )}
                                                        {/* //วัน/เดือน/ปี ส่งออก */}
                                                    </Box>
                                                </TableCell>
                                                <TableCell align='center' sx={{ border: 'none' }}>
                                                    <Box py={1} sx={{
                                                        // backgroundColor: '#e3f2fd',
                                                        // width: 100
                                                    }}>
                                                        {item.UPDATE_DATE == 0 ? (
                                                            <Typography >
                                                                {item.UPDATE_DATE ? dateFormatTime(item.UPDATE_DATE) : ' '}
                                                            </Typography>
                                                        ) : (
                                                            <Typography>
                                                                {item.UPDATE_DATE ? dateFormatTime(item.UPDATE_DATE) : '-'}
                                                            </Typography>
                                                        )}
                                                    </Box>
                                                </TableCell>
                                                <TableCell align='center' sx={{ border: 'none' }}>
                                                    <Box py={1} sx={{
                                                        // backgroundColor: '#e3f2fd',
                                                        // width: 100
                                                    }}>
                                                        {item.POST_SAVE == 0 ? (
                                                            <Typography >
                                                                {/* {item.ST_POSTDOL2 ? item.ST_POSTDOL2 : '0'} */}
                                                            </Typography>
                                                        ) : (
                                                            isMenuDataExport.id == 1 ?
                                                                <Typography >
                                                                    10.13.16.21\D:\Data2DOL\LAND\ระหว่างรอบบัญชี 2566-2569\LOCAL
                                                                    {/* {item.ST_POSTDOL2 ? item.ST_POSTDOL2 : '0'} */}
                                                                </Typography>
                                                                :
                                                                <Typography >

                                                                </Typography>
                                                        )}
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Stack direction={'row'} justifyContent={'end'} pr={2} pb={1}>
                                <Button variant='contained' onClick={() => setIsMenuDataExport({})}>ย้อนกลับ</Button>
                            </Stack>
                        </Paper>
                    )}
                {onDetail === 2 &&
                    (
                        Object.keys(dataSendAll).length > 0 && (
                            <ReportDataExport
                                setOnDetail={setOnDetail}
                                dataSendAll={dataSendAll}
                                setDataSendAll={setDataSendAll}
                                setDataSendListBranch={setDataSendListBranch}
                            />
                        )
                    )}
                {onDetail === 3 &&
                    (
                        Object.keys(dataSendAll).length > 0 && Object.keys(dataSendListBranch).length > 0 && (
                            <ReportDataExportBracnh
                                setOnDetail={setOnDetail}
                                dataSendAll={dataSendAll}
                                dataSendListBranch={dataSendListBranch}
                                setDataSendListPlot={setDataSendListPlot}
                            />
                        )
                    )}
                {/* {onDetail === 4 &&
                    (
                        Object.keys(dataSendAll).length > 0 && Object.keys(dataSendListBranch).length > 0 && Object.keys(dataSendListPlot).length > 0 && (
                            <ReportDataExportPlot
                                setOnDetail={setOnDetail}
                                dataSendAll={dataSendAll}
                                dataSendListBranch={dataSendListBranch}
                                dataSendListPlot={dataSendListPlot}
                            />
                        )
                    )} */}
            </Grid>
        </Grid>
    )
}
