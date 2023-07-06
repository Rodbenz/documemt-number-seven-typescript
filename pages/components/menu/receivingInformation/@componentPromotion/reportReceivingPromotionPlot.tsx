import { Avatar, Box, Grid, Typography, Stack, IconButton, Table, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCartContext } from '@/context/Cartcontext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FixedHeaderContent from '@/pages/components/@conponents/datatable/fixedHeaderContent';
import { REPORT_RECEIVE_ALL } from '@/service/report';
import { SplitDataType, SplitDataTypeFile } from '@/libs/dataControl';
import { dateFormatTime, numberWithCommas, setStatus, setUTM_NO_P } from '@/libs/outputDatas';
import { columReceivingBranchPromotion, columnPromotionCodo } from '@/libs/headNamePromotion';

interface IFReportReceiving {
  setOnDetail?: any;
  dataSendDepartMent?: any;
  dataSendListBranch?: any;
  dataSendUsetype?: any;
}

export default function ReportReceivingPlot({ setOnDetail, dataSendDepartMent, dataSendListBranch, dataSendUsetype }: IFReportReceiving) {
  const [dataCount, setDataCount] = React.useState<any>([]);
  const [headValue, setHeadValue] = React.useState<string>('');
  const [colum, setColum] = React.useState<any>([]);

  const _resDataList = async () => {
    let newData: any = [];
    let datasend = dataSendUsetype;
    datasend.IMPORT_DATE = datasend.IMPORT_DATE.split('T')[0];
    
    try {
      let res = await REPORT_RECEIVE_ALL(datasend)
      console.log(res, 'REPORT_RECEIVE_ALL');
      for (let i = 0; i < res.length; i++) {
        let dataItems = res[i];
        dataItems.ROWNUMBER = String(i + 1);
        dataItems.TOTAL_PRICE_ = numberWithCommas(dataItems.TOTAL_PRICE)
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
    await setColum(columnPromotionCodo)
  }

  React.useEffect(() => {
    setColum([]);
    console.log(dataSendUsetype, 'dataSendUsetype');
    if (Object.keys(dataSendUsetype).length > 0) {
      _resDataList();
    }
  }, [dataSendUsetype])
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