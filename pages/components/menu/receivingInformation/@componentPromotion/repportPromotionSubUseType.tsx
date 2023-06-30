import { Avatar, Grid, IconButton, Stack, Table, TableHead, Tooltip, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DatatablePromotionUseType from '@/pages/components/@conponents/datatable/DatatablePromotionUseType';
import { SplitDataType, SplitDataTypeFile } from '@/libs/dataControl';
import { dateFormatTime, numberWithCommas } from '@/libs/outputDatas';
import { REPORT_USED_ALL411 } from '@/service/report';
import { columnReceivingPromotion, columnReceivingPromotion1 } from '@/libs/headNamePromotion';

interface IFRepportPromotionSubUseType {
    setOnDetail?: any;
    dataSendDepartMent?: any;
    dataSendSubUseType?: any;
}
export default function RepportPromotionSubUseType(props: IFRepportPromotionSubUseType) {
    const [dataCount, setDataCount] = React.useState<any>([]);
    const [headValue, setHeadValue] = React.useState<string>('');
    const [colum, setColum] = React.useState<any>([]);

    const _resDataList = async () => {
        let newData: any = [];
        let datasend = props.dataSendSubUseType;
        datasend.IMPORT_DATE = datasend.IMPORT_DATE ? datasend.IMPORT_DATE.split('T')[0] : "";
        try {
            let res = await REPORT_USED_ALL411(datasend)
            console.log(res, 'REPORT_USED_ALL411', datasend);

            for (let i = 0; i < res.length; i++) {
                let dataItems = res[i];
                dataItems.ROWNUMBER = String(i + 1);
                dataItems.DATEIMPORT = dateFormatTime(dataItems.IMPORT_DATE)
                dataItems.LAND_TOTAL_PRICE_ =  dataItems.LAND_TOTAL_PRICE ? numberWithCommas(dataItems.LAND_TOTAL_PRICE) : '';
                dataItems.BUILDING_TOTAL_PRICE_ =  dataItems.BUILDING_TOTAL_PRICE ? numberWithCommas(dataItems.BUILDING_TOTAL_PRICE) : '';
                dataItems.TAX_PAY_ =  dataItems.TAX_PAY ? numberWithCommas(dataItems.TAX_PAY) : '';
                newData.push(dataItems);
            }
            await setDataCount([])
            await setDataCount(newData)

        } catch (e) {
            console.log(e);
        }
    }

    // const onhandleClickCountAll = async (el: any, colum:any) => {
    //   if (el.COUNTIMPORT !== 0) {
    //     props.setOnDetail && props.setOnDetail(5);
    //   }

    // }

    const onHandleRetropective = async () => {
        props.setOnDetail && props.setOnDetail(4);
    }

    const configHeader = async (semiseq: any) => {
        await setColum([]);
        await setColum(columnReceivingPromotion1);
    }

    React.useEffect(() => {
        console.log(props.dataSendSubUseType, 'dataSendSubUseType');
        if (Object.keys(props.dataSendSubUseType).length > 0) {
            _resDataList();
        }
    }, [props.dataSendSubUseType])
    React.useEffect(() => {
        if (Object.keys(props.dataSendDepartMent).length > 0) {
            setHeadValue(props.dataSendDepartMent.SEMI_NAME)
            let semiseq = props.dataSendDepartMent.SEMI_CODE;
            configHeader(semiseq)
        }
    }, [props.dataSendDepartMent])
    return (
        <Grid container pl={2} pr={2}>
            <>
                <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'} columnGap={1}>
                    <Tooltip title="ย้อนกลับ" placement="right">
                        <IconButton size='small' onClick={() => {
                            props.setOnDetail(4)

                        }}
                        >
                            <Avatar sx={{ bgcolor: '#aae8e6', width: 50, height: 50 }}>
                                <KeyboardArrowDownIcon fontSize="large" />
                            </Avatar>
                        </IconButton>
                    </Tooltip>
                    <Typography variant='h5'>{headValue}</Typography>
                </Stack>
                <Grid container>
                    <Grid xs={12}>
                        <DatatablePromotionUseType dataList={dataCount} colum={colum} onHandleRetropective={onHandleRetropective} />
                    </Grid>
                </Grid>
            </>
        </Grid>
    )
}
