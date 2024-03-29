import { Avatar, Box, Grid, Typography, Stack, IconButton, Table, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCartContext } from '@/context/Cartcontext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FixedHeaderContent from '@/pages/components/@conponents/datatable/fixedHeaderContent';
import { REPORT_RECEIVE_ALL } from '@/service/report';
import { SplitDataType, SplitDataTypeFile } from '@/libs/dataControl';
import { dateFormatTime, setUTM_NO_P } from '@/libs/outputDatas';

interface IFReportDataExportPlot {
  setOnDetail?: any;
  dataSendAll?: any;
  dataSendListBranch?: any;
  dataSendListPlot?: any;
}

export default function ReportDataExportPlot({ setOnDetail, dataSendAll, dataSendListBranch, dataSendListPlot }: IFReportDataExportPlot) {
  const [dataCount, setDataCount] = React.useState<any>([]);
  const [headValue, setHeadValue] = React.useState<string>('');

  const _resDataList = async () => {
    let newData: any = [];
    try {
      let res = await REPORT_RECEIVE_ALL(dataSendListPlot)
      for (let i = 0; i < res.length; i++) {
        let dataItems = res[i];
        dataItems.ROWNUMBER = String(i + 1);
        dataItems.UTM = String(dataItems.UTMMAP1 + ' ' + setUTM_NO_P(dataItems.UTMMAP2) + ' ' + dataItems.UTMMAP3);
        dataItems.DATEIMPORT = dateFormatTime(dataItems.IMPORT_DATE)
        newData.push(dataItems);
      }
      console.log(newData, 'newData');
      await setDataCount(newData)

    } catch (e) {
      console.log(e);
    }
  }


  const colum = [
    {
      name: 'ลำดับที่',
      listname: 'ROWNUMBER',
      align: 'center',
    },
    {
      name: 'ระวาง',
      listname: 'UTM',
      align: 'right',
    },
    {
      name: 'แผ่นที่',
      listname: 'UTMMAP4',
      align: 'right',
    },
    {
      name: 'มาตราส่วน',
      listname: 'UTMSCALE',
      align: 'right',
    },
    {
      name: 'เลขที่ดิน',
      listname: 'LAND_NO',
      align: 'right',
    },
    // {
    //   name: 'เลขที่โฉนด',
    //   listname: 'DATEIMPORT',
    //   align: 'right',
    // },
    {
      name: 'อำเภอ',
      listname: 'AMPHOE_NAME',
      align: 'Left',
    },
    {
      name: 'ตำบล',
      listname: 'TAMBOL_NAME',
      align: 'Left',
    },
    {
      name: 'วัน/เดือน/ปี',
      listname: 'DATEIMPORT',
      align: 'left',
    },
  ]

  React.useEffect(() => {
    console.log(dataSendListPlot, 'dataSendListPlot');
    if (Object.keys(dataSendListPlot).length > 0) {
      _resDataList();
    }
  }, [dataSendListPlot])

  React.useEffect(() => {
    if (Object.keys(dataSendAll).length > 0) {
      setHeadValue(dataSendAll?.SEMI_NAME)
    }
  }, [dataSendAll])
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
              <FixedHeaderContent dataList={dataCount} colum={colum} />
            </TableRow>
          </TableHead>
        </Table>
      </>
    </Grid>
  )
}

interface ICountActive {
  el: any;
  onhandleClickCount?: any;
}

function CountActive({ el, onhandleClickCount }: ICountActive) {
  return (
    <>
      <IconButton size='small' onClick={() => onhandleClickCount(el)}>
        {el.COUNTIMPORT}
      </IconButton>
    </>
  )
}