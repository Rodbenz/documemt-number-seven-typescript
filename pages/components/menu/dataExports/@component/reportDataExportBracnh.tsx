import { Avatar, Box, Grid, Typography, Stack, IconButton, Table, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCartContext } from '@/context/Cartcontext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FixedHeaderContent from '@/pages/components/@conponents/fixedHeaderContent';
import { REPORT_RECEIVE_BranchCode } from '@/service/report';
import { dateFormatTime } from '@/libs/outputDatas';
import { SplitDataType, SplitDataTypeFile } from '@/libs/dataControl';

interface IFReportDataExportBracnh {
  setOnDetail?: any;
  dataSendDepartMent?: any;
  dataSendListBranch?: any;
  setDataSendListPlot?: any;
}

export default function ReportDataExportBracnh({ setOnDetail, dataSendDepartMent, dataSendListBranch, setDataSendListPlot }: IFReportDataExportBracnh) {
  const [dataCount, setDataCount] = React.useState<any>([]);
  const [headValue, setHeadValue] = React.useState<string>('');

  const _resDataList = async () => {
    let newData: any = [];
    try {
      let res = await REPORT_RECEIVE_BranchCode(dataSendListBranch)
      for (let i = 0; i < res?.length; i++) {
        let dataItems: any = res[i];
        dataItems.ROWNUMBER = String(i + 1);
        dataItems.FILENAME = SplitDataTypeFile(dataItems.FILE_NAME);
        dataItems.TYPEFILE = SplitDataType(dataItems.FILE_NAME);
        dataItems.COUNT_ = String(dataItems.COUNT_);
        dataItems.DATEIMPORT = dateFormatTime(dataItems.IMPORT_DATE)
        newData.push(dataItems);
      }
      console.log(newData, 'newData');
      await setDataCount(newData)

    } catch (e) {
      console.log(e);
    }
  }

  const onhandleClickCount = async (el: any) => {
    if (el?.COUNTIMPORT !== 0) {
      setOnDetail(4);
      setDataSendListPlot(el);
    }

  }

  const colum: any = [
    {
      name: 'ลำดับที่',
      listname: 'ROWNUMBER',
      align: 'center',
    },
    {
      name: 'สำนักงานที่ดิน',
      listname: 'BRANCHNAME',
      align: 'left',
    },
    {
      name: 'รายการนำเข้า',
      listname: 'SEMI_NAME',
      align: 'left',
    },
    {
      name: 'ชื่อไฟล์',
      listname: 'FILENAME',
      align: 'left',
    },
    {
      name: 'ประเภทไฟล์',
      listname: 'TYPEFILE',
      align: 'left',
    },
    {
      name: 'จำนวน',
      listname: 'COUNT_',
      align: 'left',
    },
    {
      name: 'วัน/เดือน/ปี',
      listname: 'DATEIMPORT',
      align: 'center',
    },
  ]

  React.useEffect(() => {
    if (Object.keys(dataSendListBranch).length > 0) {
      _resDataList();
    }
  }, [dataSendListBranch])
  React.useEffect(() => {
    if (Object.keys(dataSendDepartMent).length > 0) {
      setHeadValue(dataSendDepartMent?.SEMI_NAME)
    }
  }, [dataSendDepartMent])
  return (
    <Grid container pl={2} pr={2}>
      <>
        <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'} columnGap={1}>
          <Tooltip title="ย้อนกลับ" placement="right">
            <IconButton size='small' onClick={() => {
              setOnDetail(2)
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
              <FixedHeaderContent dataList={dataCount} colum={colum} onhandleClickCount={onhandleClickCount} />
            </TableRow>
          </TableHead>
        </Table>
      </>
    </Grid>
  )
}
