import { Avatar, Box, Grid, Typography, Stack, IconButton, Table, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCartContext } from '@/context/Cartcontext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FixedHeaderContent from '@/pages/components/@conponents/datatable/fixedHeaderContent';
import { REPORT_RECEIVE_BranchCode, REPORT_USED_TYPE411 } from '@/service/report';
import { dateFormatTime, numberWithCommas } from '@/libs/outputDatas';
import { SplitDataType, SplitDataTypeFile } from '@/libs/dataControl';
import { columReceivingBranch } from '@/libs/headName';
import { columnReceivingPromotion } from '@/libs/headNamePromotion';
import DatatablePromotionUseType from '@/pages/components/@conponents/datatable/DatatablePromotionUseType';

interface IFReportReceivingPromotionUsedtype {
  setOnDetail?: any;
  dataSendDepartMent?: any;
  dataSendListBranch?: any;
  dataSendUsetype?: any;
  setDataSendSubUseType?:any;
}

export default function ReportReceivingPromotionUsedtype({ setOnDetail, dataSendDepartMent, dataSendListBranch, dataSendUsetype, setDataSendSubUseType }: IFReportReceivingPromotionUsedtype) {
  const [dataCount, setDataCount] = React.useState<any>([]);
  const [headValue, setHeadValue] = React.useState<string>('');
  const [colum, setColum] = React.useState<any>([]);

  const _resDataList = async () => {
    let newData: any = [];
    let datasend = dataSendUsetype;
    datasend.IMPORT_DATE = datasend.IMPORT_DATE ? datasend.IMPORT_DATE.split('T')[0] : "";
    try {
      let res = await REPORT_USED_TYPE411(datasend)
      console.log(res, 'REPORT_USED_TYPE411', datasend);

      for (let i = 0; i < res.length; i++) {
        let dataItems = res[i];
        dataItems.ROWNUMBER = String(i + 1);
        dataItems.FILENAME = SplitDataTypeFile(dataItems.FILE_NAME);
        dataItems.TYPEFILE = SplitDataType(dataItems.FILE_NAME);
        dataItems.COUNT1= String (numberWithCommas(dataItems.COUNT1));
        dataItems.COUNT2= String (numberWithCommas(dataItems.COUNT2));
        dataItems.COUNT3= String (numberWithCommas(dataItems.COUNT3));
        dataItems.COUNT4= String (numberWithCommas(dataItems.COUNT4));
        dataItems.COUNT5= String (numberWithCommas(dataItems.COUNT5));
        dataItems.DATEIMPORT = dateFormatTime(dataItems.IMPORT_DATE)
        newData.push(dataItems);
      }
      await setDataCount([])
      await setDataCount(newData)

    } catch (e) {
      console.log(e);
    }
  }

  const usedType = async (colum:any) =>{
    if(colum == 'COUNT1'){
      return '1';
    }
    if(colum == 'COUNT2'){
      return '2';
    }
    if(colum == 'COUNT3'){
      return '3';
    }
    if(colum == 'COUNT4'){
      return '4';
    }
    if(colum == 'COUNT5'){
      return '5';
    }
  }

  const onhandleClickCountAll = async (el: any, colum:any) => {
    if (el.COUNTIMPORT !== 0) {
       el.USED_TYPE = await usedType(colum)
       el.PROVINCECODE = el.CHANGWAT_CODE;
       el.BRANCHCODE = el.ORG_CODE
      setOnDetail && setOnDetail(5);
      setDataSendSubUseType && setDataSendSubUseType(el)
    }

  }

  const onHandleRetropective = async () => {
    setOnDetail && setOnDetail(3);
    setDataSendSubUseType({})
  }

  const configHeader = async (semiseq: any) => {
    await setColum([]);
    await setColum(columnReceivingPromotion);
  }

  React.useEffect(() => {
    console.log(dataSendUsetype, 'dataSendUsetype');
    if (Object.keys(dataSendUsetype).length > 0) {
      _resDataList();
    }
  }, [dataSendUsetype])
  React.useEffect(() => {
    if (Object.keys(dataSendDepartMent).length > 0) {
      setHeadValue(dataSendDepartMent.SEMI_NAME)
      let semiseq = dataSendDepartMent.SEMI_CODE;
      configHeader(semiseq)
    }
  }, [dataSendDepartMent])
  return (
    <Grid container pl={2} pr={2}>
      <>
        <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'} columnGap={1}>
          <Tooltip title="ย้อนกลับ" placement="right">
            <IconButton size='small' onClick={() => {
              setOnDetail(3),
              setDataSendSubUseType({})
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
              <DatatablePromotionUseType dataList={dataCount} colum={colum} onhandleClickCountAll={onhandleClickCountAll} onHandleRetropective={onHandleRetropective} />
          </Grid>
        </Grid>
      </>
    </Grid>
  )
}
