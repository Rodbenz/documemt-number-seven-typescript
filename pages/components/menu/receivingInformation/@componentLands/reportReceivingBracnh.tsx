import { Avatar, Box, Grid, Typography, Stack, IconButton, Table, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCartContext } from '@/context/Cartcontext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FixedHeaderContent from '@/pages/components/@conponents/datatable/fixedHeaderContent';
import { REPORT_RECEIVE_BranchCode } from '@/service/report';
import { dateFormatTime, numberWithCommas } from '@/libs/outputDatas';
import { SplitDataType, SplitDataTypeFile } from '@/libs/dataControl';
import { columReceivingBranch } from '@/libs/headName';

interface IFReportReceiving {
  setOnDetail?: any;
  dataSendDepartMent?: any;
  dataSendListBranch?: any;
  setDataSendListPlot?: any;
}

export default function ReportReceivingBracnh({ setOnDetail, dataSendDepartMent, dataSendListBranch, setDataSendListPlot }: IFReportReceiving) {
  const [dataCount, setDataCount] = React.useState<any>([]);
  const [headValue, setHeadValue] = React.useState<string>('');
  const [colum, setColum] = React.useState<any>([]);

  const _resDataList = async () => {
    let newData:any = [];
    let datasend = dataSendListBranch;
    datasend.IMPORT_DATE = datasend.IMPORT_DATE.split('T')[0];
    try{
      let res = await REPORT_RECEIVE_BranchCode(datasend)
      console.log(res, 'REPORT_RECEIVE_BranchCode',datasend);
      
      for(let i = 0; i < res.length; i++){
        let dataItems = res[i];
        dataItems.ROWNUMBER = String(i+1);
        dataItems.FILENAME = SplitDataTypeFile(dataItems.FILE_NAME);
        dataItems.TYPEFILE = SplitDataType(dataItems.FILE_NAME);
        dataItems.COUNT_ = String (numberWithCommas(dataItems.COUNT_));
        dataItems.DATEIMPORT = dateFormatTime(dataItems.IMPORT_DATE)
        newData.push(dataItems);
      }
      await setDataCount([])
      await setDataCount(newData)
      
    }catch(e){
      console.log(e);
    }
  }

  const onhandleClickCount = async (el: any) => {
    if (el.COUNTIMPORT !== 0) {
      setOnDetail && setOnDetail(4);
      setDataSendListPlot && setDataSendListPlot(el);    
    }

  }

  const onHandleRetropective = async () => {
    setOnDetail && setOnDetail(2);
    setDataSendListPlot && setDataSendListPlot({})
  }

  const configHeader = async (semiseq:any) => {
    await setColum([]);
    await setColum(columReceivingBranch);
  }

  React.useEffect(() => {
    console.log(dataSendListBranch, 'dataSendListBranch');
    if (Object.keys(dataSendListBranch).length > 0 ) {
      _resDataList();
    }
  }, [dataSendListBranch])
  React.useEffect(() => {
    if(Object.keys(dataSendDepartMent).length > 0){
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
              setOnDetail(2),
                setDataSendListPlot({})
            }}
            >
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
              <FixedHeaderContent dataList={dataCount} colum={colum} onhandleClickCount={onhandleClickCount} onHandleRetropective={onHandleRetropective}/>
            </TableRow>
          </TableHead>
        </Table>
      </>
    </Grid>
  )
}
