import { Avatar, Box, Grid, Typography, Stack, IconButton, Table, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCartContext } from '@/context/Cartcontext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FixedHeaderContent from '@/pages/components/@conponents/datatable/fixedHeaderContent';
import { REPORT_RECEIVE_changwat } from '@/service/report';
import { dateFormatTime } from '@/libs/outputDatas';
import { SplitDataType, SplitDataTypeFile } from '@/libs/dataControl';
import { reportReceivingProvincePlot } from '@/libs/headName';

interface IFReportReceivingPromotion {
  setOnDetail?: any;
  dataSendDepartMent?: any;
  setDataSendDepartMent?: any;
  setDataSendListBranch?: any;
}

export default function ReportReceivingPromotion({ setOnDetail, dataSendDepartMent, setDataSendDepartMent, setDataSendListBranch }: IFReportReceivingPromotion) {
  const [dataCount, setDataCount] = React.useState<any>([]);
  const [headValue, setHeadValue] = React.useState<string>('');
  const [colum, setColum] = React.useState<any>([]);

  const _resDataList = async () => {
    let datasend: any = new Object();
    datasend.SEMI_CODE = Object.keys(dataSendDepartMent).length > 0 ? String(dataSendDepartMent.SEMI_CODE) : '';
    try {
      let newData: any = [];
      let res = await REPORT_RECEIVE_changwat(datasend)
      for (let i = 0; i < res.length; i++) {
        let dataItems = res[i];
        dataItems.ROWNUMBER = String(i + 1);
        dataItems.FILENAME = SplitDataTypeFile(dataItems.FILE_NAME);
        dataItems.TYPEFILE = SplitDataType(dataItems.FILE_NAME);
        dataItems.COUNT_ = String(dataItems.COUNT_);
        dataItems.IMPORT_DATE_ = dateFormatTime(dataItems.IMPORT_DATE)
        newData.push(dataItems);
      }
      await setDataCount([])
      await setDataCount(newData)
    } catch (e) {
      console.log(e);
    }
  }

  const onhandleClickCount = async (el: any) => {
    console.log(el, 'el');
    if (el.COUNTIMPORT != 0) {
      setOnDetail && setOnDetail(3);
      setDataSendListBranch && setDataSendListBranch(el);
    }

  }

  const onHandleRetropective = async () => {
    setOnDetail && setOnDetail(1);
    setDataSendDepartMent && setDataSendDepartMent({});
    setDataSendListBranch && setDataSendListBranch({});
  }

  const configHeader = async (semiseq:any) => {
      await setColum(reportReceivingProvincePlot);
  }

  React.useEffect(() => {
    console.log(dataSendDepartMent, 'dataSendDepartMent');
    if (Object.keys(dataSendDepartMent).length > 0) {
      _resDataList();
      setHeadValue(dataSendDepartMent.SEMI_NAME);
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
              setOnDetail(1),
                setDataSendListBranch({})
                setDataSendDepartMent({})
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
              <FixedHeaderContent dataList={dataCount} colum={colum} onhandleClickCount={onhandleClickCount} onHandleRetropective={onHandleRetropective} />
            </TableRow>
          </TableHead>
        </Table>
      </>
    </Grid>
  )
}
