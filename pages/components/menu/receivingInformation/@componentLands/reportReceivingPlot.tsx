import { Avatar, Box, Grid, Typography, Stack, IconButton, Table, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCartContext } from '@/context/Cartcontext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FixedHeaderContent from '@/pages/components/@conponents/datatable/fixedHeaderContent';
import { REPORT_RECEIVE_ALL } from '@/service/report';
import { SplitDataType, SplitDataTypeFile } from '@/libs/dataControl';
import { dateFormatTime, numberWithCommas, setStatus, setUTM_NO_P } from '@/libs/outputDatas';
import { 
  columReceivingPlot1, 
  columReceivingPlot2, 
  columReceivingPlot3, 
  columReceivingPlot4, 
  columReceivingPlot5, 
  columReceivingPlot6, 
  columReceivingPlot7, 
  columReceivingPlot8, 
  columReceivingPlot9,
  columReceivingPlot10, 
  columReceivingPlot11, 
  columReceivingPlot12, 
  columReceivingPlot13, 
  columReceivingPlot14, 
  columReceivingPlot15, 
  columReceivingPlot16, 
  columReceivingPlot17
} from '@/libs/headName';

interface IFReportReceiving {
  setOnDetail?: any;
  dataSendDepartMent?: any;
  dataSendListBranch?: any;
  dataSendListPlot?: any;
}

export default function ReportReceivingPlot({ setOnDetail, dataSendDepartMent, dataSendListBranch, dataSendListPlot }: IFReportReceiving) {
  const [dataCount, setDataCount] = React.useState<any>([]);
  const [headValue, setHeadValue] = React.useState<string>('');
  const [colum, setColum] = React.useState<any>([]);

  const _resDataList = async () => {
    let newData: any = [];
    let datasend = dataSendListPlot;
    datasend.IMPORT_DATE = datasend.IMPORT_DATE.split('T')[0];
    
    try {
      let res = await REPORT_RECEIVE_ALL(datasend)
      console.log(res, 'REPORT_RECEIVE_ALL');
      for (let i = 0; i < res.length; i++) {
        let dataItems = res[i];
        let UTMMAP1_ = dataItems.UTMMAP1? dataItems.UTMMAP1 : dataItems.UTMCODE;
        let UTMMAP2_ = dataItems.UTMMAP2? dataItems.UTMMAP2 : dataItems.UTMNOP;
        let UTMMAP3_ = dataItems.UTMMAP3? dataItems.UTMMAP3 : dataItems.UTMNO ? dataItems.UTMNO : '';
        let STATUS_ = dataItems.STATUS ? setStatus(dataItems.STATUS) : '';
        let REGDATE_ = dataItems.REGDATE ? dateFormatTime(dataItems.REGDATE) : '';
        let ADDR_ = dataItems.ADDR ? String(dataItems.ADDR) : '';
        let MOO_ = dataItems.MOO ? String(' หมู่ ' + dataItems.MOO) : '';
        let BUILDINGNAME_ = dataItems.BUILDINGNAME ? String(' อาคาร ' + dataItems.BUILDINGNAME) : '';
        let SOI_ = dataItems.SOI ? String(' ซอย ' + dataItems.SOI) : '';
        let ROAD_ = dataItems.ROAD ? String(' ถนน ' + dataItems.ROAD) : '';
        let RAINUM_ = dataItems.RAINUM ? dataItems.RAINUM : '';
        let NGANNUM_ = dataItems.NGANNUM ? dataItems.NGANNUM : '';
        let WANUM_ = dataItems.WANUM ? dataItems.WANUM : '';
        let VALAMT_ = dataItems.VALAMT ? numberWithCommas(dataItems.VALAMT) : '';
        let ASSET_VAL_TOT_ = dataItems.ASSET_VAL_TOT ? numberWithCommas(dataItems.ASSET_VAL_TOT) : '';
        let REGAMT_ = dataItems.REGAMT ? numberWithCommas(dataItems.REGAMT) : '';
        let VALAMTPERWA_ = dataItems.VALAMTPERWA ? numberWithCommas(dataItems.VALAMTPERWA) : '';
        let VAL_AMT_ = dataItems.VAL_AMT ? numberWithCommas(dataItems.VAL_AMT) : '';
        let FEE_AMT_ = dataItems.FEE_AMT ? numberWithCommas(dataItems.FEE_AMT) : '';
        let FEEAMT_ = dataItems.FEEAMT ? numberWithCommas(dataItems.FEEAMT) : '';
        let VATAMT_ = dataItems.VATAMT ? numberWithCommas(dataItems.VATAMT) : '';
        let VALREAL_ = dataItems.VALREAL ? numberWithCommas(dataItems.VALREAL) : '';
        let DEPRECIATION_ = dataItems.DEPRECIATION ? numberWithCommas(dataItems.DEPRECIATION) : '';
        let VALPMETER_ = dataItems.VALPMETER ? numberWithCommas(dataItems.VALPMETER) : '';
        let VALMETERTOT_ = dataItems.VALMETERTOT ? numberWithCommas(dataItems.VALMETERTOT) : '';
        let SUBWANUM_ = dataItems.SUBWANUM ? dataItems.SUBWANUM != '0' ? String( '.' + dataItems.SUBWANUM) : '' : '';
        dataItems.ROWNUMBER = String(i + 1);
        dataItems.UTM = String(UTMMAP1_ + ' ' + setUTM_NO_P(UTMMAP2_) + ' ' + UTMMAP3_);
        dataItems.DATEIMPORT = dateFormatTime(dataItems.IMPORT_DATE)
        dataItems.STATUS_ = STATUS_;
        dataItems.REGDATE_ = REGDATE_;
        dataItems.ADDR_ = ADDR_ + MOO_ + BUILDINGNAME_ + SOI_ + ROAD_;
        dataItems.RAINUM_ = RAINUM_+ '-' + NGANNUM_ + '-' + WANUM_ + SUBWANUM_;
        dataItems.VALAMT_ = VALAMT_;
        dataItems.ASSET_VAL_TOT_ = ASSET_VAL_TOT_;
        dataItems.VALAMTPERWA_ = VALAMTPERWA_;
        dataItems.REGAMT_ = REGAMT_;
        dataItems.VAL_AMT_ = VAL_AMT_;
        dataItems.FEE_AMT_ = FEE_AMT_;
        dataItems.FEEAMT_ = FEEAMT_;
        dataItems.VATAMT_ = VATAMT_;
        dataItems.VALREAL_ = VALREAL_;
        dataItems.DEPRECIATION_ = DEPRECIATION_;
        dataItems.VALPMETER_ = VALPMETER_;
        dataItems.VALMETERTOT_ = VALMETERTOT_;
        newData.push(dataItems);
      }
      console.log(newData, 'newData');
      await setDataCount([])
      await setDataCount(newData)

    } catch (e) {
      console.log(e);
    }
  }

  const onHandleRetropective = async () => {
    setOnDetail && setOnDetail(3);
  }

  const configHeader = async (semiseq: any) => {
    console.log(semiseq, 'semiseq');
    
    if (semiseq === 111 || semiseq === 112 || semiseq === 113 || semiseq === 114) {
      await setColum(columReceivingPlot1);
    }
    if(semiseq === 211 || semiseq === 212 || semiseq === 213){
      await setColum(columReceivingPlot2);
    }
    if(semiseq === 214 || semiseq === 215 || semiseq === 216){
      await setColum(columReceivingPlot3);
    }
    if(semiseq === 217 || semiseq === 218){
      await setColum(columReceivingPlot4);
    }
    if(semiseq === 219){
      await setColum(columReceivingPlot5);
    }
    if(semiseq === 221){
      await setColum(columReceivingPlot6);
    }
    if(semiseq === 222){
      await setColum(columReceivingPlot7);
    }
    if(semiseq === 223){
      await setColum(columReceivingPlot8);
    }
    if(semiseq === 224){
      await setColum(columReceivingPlot9);
    }
    if(semiseq === 225){
      await setColum(columReceivingPlot10);
    }
    if(semiseq === 226){
      await setColum(columReceivingPlot11);
    }
    if(semiseq === 227){
      await setColum(columReceivingPlot12);
    }
    if(semiseq === 311){
      await setColum(columReceivingPlot13);
    }
    if(semiseq === 312){
      await setColum(columReceivingPlot14);
    }
    if(semiseq === 313){
      await setColum(columReceivingPlot15);
    }
    if(semiseq === 314){
      await setColum(columReceivingPlot16);
    }
    if(semiseq === 315){
      await setColum(columReceivingPlot17);
    }
  }

  React.useEffect(() => {
    setColum([]);
    console.log(dataSendListPlot, 'dataSendListPlot');
    if (Object.keys(dataSendListPlot).length > 0) {
      _resDataList();
    }
  }, [dataSendListPlot])
  React.useEffect(() => {
    if (Object.keys(dataSendDepartMent).length > 0) {
      setHeadValue(dataSendDepartMent.SEMI_NAME)
      let semiseq = dataSendDepartMent.SEMI_CODE;
      configHeader(semiseq);
    }
  }, [dataSendDepartMent])
  return (
    <Grid container pl={2} pr={2}>
      <>
        <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'} columnGap={1}>
          <Tooltip title="ย้อนกลับ" placement="right">
            <IconButton size='small' onClick={() => setOnDetail(3)}>
              <Avatar sx={{ bgcolor: '#aae8e6', width: 50, height: 50 }}>
                <KeyboardArrowDownIcon fontSize="large" />
              </Avatar>
            </IconButton>
          </Tooltip>
          <Typography variant='h5'>{headValue}</Typography>
        </Stack>
        <Grid container>
          <Grid xs={12}>
              <FixedHeaderContent dataList={dataCount} colum={colum} onHandleRetropective={onHandleRetropective} exportReport reportName={headValue}/>
          </Grid>
        </Grid>
      </>
    </Grid>
  )
}