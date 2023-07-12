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
import ReportReceivingPromotion from './reportReceivingPromotion';
import { dateFormatTime, numberWithCommas } from '@/libs/outputDatas';
import ReportReceivingPromotionBracnh from './reportReceivingPromotionBracnh';
import ReportReceivingPlot from './reportReceivingPromotionPlot';
import ReportReceivingPromotionUsedtype from './reportReceivingPromotionUsedtype';
import RepportPromotionSubUseType from './repportPromotionSubUseType';
import { useCartContext } from '@/context/Cartcontext';

interface IFDepartmentPromotion {
    dataList?: any;
    hendname?: any;
}


export default function DepartmentPromotion({ dataList, hendname }: IFDepartmentPromotion) {
    const { setIsMenuReceiving } = useCartContext()
    const [onDetail, setOnDetail] = useState(1)
    const [dataSendDepartMent, setDataSendDepartMent] = useState<any>({})
    const [dataSendListBranch, setDataSendListBranch] = useState<any>({})
    const [dataSendUsetype, setDataSendUsetype] = useState<any>({})
    const [dataSendSubUseType, setDataSendSubUseType] = useState<any>({})
    const [dataSendListPlot, setDataSendListPlot] = useState<any>({})

    const handleOnClick = async (el: any) => {
        if (el.COUNTIMPORT != 0) {
            await setOnDetail(2)
            await setDataSendDepartMent(el)
        }

    }

    React.useEffect(() => {
        console.log(dataList, 'dataListdataListdataListdataList');

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
                                                        {item.COUNTDOL === null ? (
                                                            <Typography >
                                                                {item.COUNTDOL ? item.COUNTDOL : '0'}
                                                            </Typography>
                                                        ) : (
                                                            <Typography sx={{ cursor: 'pointer', textDecoration: 'underline' }}>
                                                                {item.COUNTDOL}
                                                            </Typography>
                                                        )}
                                                    </Box>
                                                </TableCell>
                                                <TableCell align='center' sx={{ border: 'none' }}>
                                                    <Box py={1} sx={{
                                                        backgroundColor: '#FFE817',
                                                        // width: 100
                                                    }}>
                                                        {item.COUNTIMPORT === null ? (
                                                            <Typography >
                                                                {item.COUNTIMPORT ? item.COUNTIMPORT : '0'}
                                                            </Typography>
                                                        ) : (
                                                            <Typography sx={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => handleOnClick(item)}>
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
                                                        {item.DEF === null ? (
                                                            <Typography >
                                                                {item.DEF ? item.DEF : '0'}
                                                            </Typography>
                                                        ) : (
                                                            <Typography sx={{ cursor: 'pointer', textDecoration: 'underline' }}>
                                                                {item.DEF}
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
                            <Stack direction={'row'} justifyContent={'end'} pr={2} pb={1}>
                                <Button variant='contained' onClick={() => setIsMenuReceiving({})}>ย้อนกลับ</Button>
                            </Stack>
                        </Paper>
                    )}
                {onDetail === 2 &&
                    (
                        Object.keys(dataSendDepartMent).length > 0 && (
                            <ReportReceivingPromotion
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
                            <ReportReceivingPromotionBracnh
                                setOnDetail={setOnDetail}
                                dataSendDepartMent={dataSendDepartMent}
                                dataSendListBranch={dataSendListBranch}
                                setDataSendUsetype={setDataSendUsetype}
                            />
                        )
                    )}

                {onDetail === 4 &&
                    (
                        Object.keys(dataSendDepartMent).length > 0 && Object.keys(dataSendListBranch).length > 0 && Object.keys(dataSendUsetype).length > 0 && (
                            dataSendDepartMent.SEMI_CODE == 411 ? (
                                <ReportReceivingPromotionUsedtype
                                    setOnDetail={setOnDetail}
                                    dataSendDepartMent={dataSendDepartMent}
                                    dataSendListBranch={dataSendListBranch}
                                    dataSendUsetype={dataSendUsetype}
                                    setDataSendSubUseType={setDataSendSubUseType}
                                />
                            ) : (
                                dataSendDepartMent.SEMI_CODE == 511 &&
                                <ReportReceivingPlot
                                    setOnDetail={setOnDetail}
                                    dataSendDepartMent={dataSendDepartMent}
                                    dataSendListBranch={dataSendListBranch}
                                    dataSendUsetype={dataSendUsetype}
                                />
                            )
                        )
                    )
                }
                {onDetail === 5 && (
                    Object.keys(dataSendDepartMent).length > 0 && Object.keys(dataSendSubUseType).length > 0 &&
                    (
                        dataSendDepartMent.SEMI_CODE == 411 &&
                        <RepportPromotionSubUseType
                            setOnDetail={setOnDetail}
                            dataSendDepartMent={dataSendDepartMent}
                            dataSendSubUseType={dataSendSubUseType}
                        />
                    )
                )
                }
            </Grid>
        </Grid>
    )
}
