import { Avatar, Box, Grid, Typography, Stack, IconButton, Table, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCartContext } from '@/context/Cartcontext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FixedHeaderContent from '@/pages/components/@conponents/fixedHeaderContent';
import { REPORT_RECEIVE_ALL } from '@/service/report';
import { SplitDataType, SplitDataTypeFile } from '@/libs/dataControl';
import { dateFormatTime, setUTM_NO_P } from '@/libs/outputDatas';
import { columReceivingPlot1, columReceivingPlot2 } from '@/libs/headName';

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
        dataItems.ROWNUMBER = String(i + 1);
        dataItems.UTM = String(UTMMAP1_ + ' ' + setUTM_NO_P(UTMMAP2_) + ' ' + UTMMAP3_);
        dataItems.DATEIMPORT = dateFormatTime(dataItems.IMPORT_DATE)
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
        <Table>
          <TableHead>
            <TableRow>
              <FixedHeaderContent dataList={dataCount} colum={colum} onHandleRetropective={onHandleRetropective} />
            </TableRow>
          </TableHead>
        </Table>
      </>
    </Grid>
  )
}