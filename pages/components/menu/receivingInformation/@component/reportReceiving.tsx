import { Avatar, Box, Grid, Typography, Stack, IconButton, Table, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCartContext } from '@/context/Cartcontext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FixedHeaderContent from '@/pages/components/@conponents/fixedHeaderContent';
import { REPORT_RECEIVE_changwat } from '@/service/report';
import { dateFormatTime } from '@/libs/outputDatas';
import { SplitDataType, SplitDataTypeFile } from '@/libs/dataControl';

interface IFReportReceiving {
  setOnDetail?: any;
  dataSendDepartMent?: any;
  setDataSendListBranch?: any;
}

export default function ReportReceiving({ setOnDetail, dataSendDepartMent, setDataSendListBranch }: IFReportReceiving) {
  const [dataCount, setDataCount] = React.useState<any>([]);


  const _resDataList = async () => {
    let datasend: any = new Object();
    datasend.SEMI_CODE = dataSendDepartMent != null ? String(dataSendDepartMent.SEMI_CODE) : '';
    try {
      let newData:any = [];
      let res = await REPORT_RECEIVE_changwat(datasend)
      for(let i = 0; i < res.length; i++){
        let dataItems = res[i];
        dataItems.ROWNUMBER = String(i+1);
        dataItems.FILENAME = SplitDataTypeFile(dataItems.FILE_NAME);
        dataItems.TYPEFILE = SplitDataType(dataItems.FILE_NAME);
        dataItems.COUNT_ = String(dataItems.COUNT_);
        dataItems.IMPORT_DATE_ = dateFormatTime(dataItems.IMPORT_DATE)
        newData.push(dataItems);
      }
      console.log(newData, 'newData');
      await setDataCount(newData)
    } catch (e) {
      console.log(e);
    }
  }

  const onhandleClickCount = async (el: any) => {
    console.log(el, 'el');
    if (el.COUNTIMPORT !== 0) {
      setOnDetail && setOnDetail(3);
      setDataSendListBranch && setDataSendListBranch(el);
    }

  }

  const onHandleRetropective = async () => {
    setOnDetail && setOnDetail(1);
  }

  const colum = [
    {
      name: 'ลำดับที่',
      listname: 'ROWNUMBER',
      align: 'center',
    },
    {
      name: 'สำนักงานที่ดิน',
      listname: 'PROVINCENAME',
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
      align: 'right',
    },
    {
      name: 'วัน/เดือน/ปี',
      listname: 'IMPORT_DATE_',
      align: 'center',
    },
  ]

  React.useEffect(() => {
    console.log(dataSendDepartMent, 'dataSendDepartMent');
    if (dataSendDepartMent) {
      _resDataList();
    }
  }, [dataSendDepartMent])
  return (
    <Grid container pl={2} pr={2}>
      <>
        <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'} columnGap={1}>
          <Tooltip title="ย้อนกลับ" placement="right">
            <IconButton size='small' onClick={() => {
              setOnDetail(1),
                setDataSendListBranch(null)
            }}
            >
              <Avatar sx={{ bgcolor: '#aae8e6', width: 50, height: 50 }}>
                <KeyboardArrowDownIcon fontSize="large" />
              </Avatar>
            </IconButton>
          </Tooltip>
          <Typography variant='h5'>{Object.keys(dataSendDepartMent).length > 0 ? dataSendDepartMent.SEMI_NAME : ''}</Typography>
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