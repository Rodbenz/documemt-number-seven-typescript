import { Avatar, Box, Grid, Typography, Stack, IconButton, Table, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCartContext } from '@/context/Cartcontext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FixedHeaderContent from '@/pages/components/@conponents/datatable/fixedHeaderContent';
import { REPORT_RECEIVE_changwat } from '@/service/report';
import { dateFormatTime, numberWithCommas } from '@/libs/outputDatas';
import { SplitDataType, SplitDataTypeFile } from '@/libs/dataControl';
import { reportReceivingProvincePlot } from '@/libs/headName';
import BetweenDatetime from '../BetweenDatetime';
import { SnackbarSet } from '@/pages/components/@conponents/popup/SnackbarSet';
import dayjs from 'dayjs';

interface IFReportReceivingPromotion {
  setOnDetail?: any;
  dataSendDepartMent?: any;
  setDataSendDepartMent?: any;
  setDataSendListBranch?: any;
}

export default function ReportReceivingPromotion({ setOnDetail, dataSendDepartMent, setDataSendDepartMent, setDataSendListBranch }: IFReportReceivingPromotion) {
  const [dataCount, setDataCount] = React.useState<any>([]);
  const [dataList, setDataList] = React.useState<any>([]);
  const [headValue, setHeadValue] = React.useState<string>('');
  const [colum, setColum] = React.useState<any>([]);
  const [month, setMonth] = React.useState<any>(null)
  const [year, setYear] = React.useState<any>(null)

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
        dataItems.COUNT_ = String (numberWithCommas(dataItems.COUNT_));
        dataItems.IMPORT_DATE_ = dateFormatTime(dataItems.IMPORT_DATE)
        newData.push(dataItems);
      }
      await setDataCount([])
      await setDataCount(newData)
      await setDataList([])
      await setDataList(newData)
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

  const configHeader = async (semiseq: any) => {
    await setColum(reportReceivingProvincePlot);
  }

  const onSearchDatebetween = () => {
    if (!month) {
      SnackbarSet('กรุณาเลือกเดือน', 'error', 3000);
      return;
    }
    if (!year) {
      SnackbarSet('กรุณาเลือกปี', 'error', 3000);
      return;
    }
    let subyear = dayjs(year).format('YYYY');
    const filteredData: any = dataList.filter((item: any) => {
      const itemDate = item.IMPORT_DATE.split('-');
      return itemDate[1] == month.MONTH_ID && itemDate[0] == subyear;
    });
    setDataCount(filteredData)
  }
  const onClearValue = () => {
    setMonth(null);
    setYear(null);
    setDataCount(dataList)
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
        <Grid container>
          <Grid xs={12}>
            <BetweenDatetime
              month={month}
              setMonth={setMonth}
              year={year}
              setYear={setYear}
              onSearch={onSearchDatebetween}
              onClearValue={onClearValue}
            />
            <FixedHeaderContent dataList={dataCount} colum={colum} onhandleClickCount={onhandleClickCount} onHandleRetropective={onHandleRetropective} />
          </Grid>
        </Grid>
      </>
    </Grid>
  )
}
