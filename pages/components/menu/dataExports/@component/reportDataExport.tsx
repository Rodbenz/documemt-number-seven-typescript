import { Avatar, Box, Grid, Typography, Stack, IconButton, Table, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCartContext } from '@/context/Cartcontext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FixedHeaderContent from '@/pages/components/@conponents/datatable/fixedHeaderContent';
import { REPORT_RECEIVE_changwat, REPORT_SEND_ALL, REPORT_SEND_PROVINCE, REPORT_SEND_changwat } from '@/service/report';
import { dateFormatTime, numberWithCommas, setUTM_NO_P } from '@/libs/outputDatas';
import { SplitDataType, SplitDataTypeFile } from '@/libs/dataControl';

interface IFReportDataExport {
  setOnDetail?: any;
  dataSendAll?: any;
  setDataSendAll?:any;
  setDataSendListBranch?: any;
}

export default function ReportDataExport({ setOnDetail, dataSendAll, setDataSendAll, setDataSendListBranch }: IFReportDataExport) {
  const { isMenuSeq } = useCartContext();
  const [dataCount, setDataCount] = React.useState<any>([]);
  const [headValue, setHeadValue] = React.useState<string>('');

  const listnameSend = (val:any) =>{
    if(val == 1){
      return 'เตรียมส่ง';
    }
    if(val == 2){
      return 'ส่งไม่สำเร็จ';
    }
    if(val == 3){
      return 'ส่งสำเร็จ';
    }
  }

  const _resDataList = async () => {
    let datasend: any = dataSendAll;
    try {
      let newData: any = [];
      let res = await REPORT_SEND_PROVINCE(datasend)
      console.log(res, 'REPORT_SEND_PROVINCE');
      for (let i = 0; i < res.length; i++) {
        let dataItems = res[i];
        dataItems.ROWNUMBER = String(i + 1);
        dataItems.POS_DOLNAME = listnameSend(dataItems.POS_DOL)
        dataItems.COUNT_ = dataItems.ST_POSTDOL3? numberWithCommas(dataItems.ST_POSTDOL3) : 0;
        newData.push(dataItems);
      }
      console.log(newData, 'newData');
      await setDataCount([])
      await setDataCount(newData)
    } catch (e) {
      console.log(e);
    }
  }

  const onhandleClickCount = async (el: any) => {
    console.log(el, 'el');
    el.CHANGWAT_CODE = String(el.CHANGWAT_CODE)
    el.FLAG_TYPE = String(el.FLAG_TYPE)
    el.PARCEL_TYPE = String(el.PARCEL_TYPE)
    el.POST_DOL = String(el.POS_DOL)
    if (el.COUNTIMPORT != 0) {
      setOnDetail && setOnDetail(3);
      setDataSendListBranch && setDataSendListBranch(el);
    }

  }

  const onHandleRetropective = async () => {
    setOnDetail && setOnDetail(1);
    setDataSendListBranch && setDataSendListBranch({});
    setDataSendAll && setDataSendAll({})
  }

  const colum = [
    {
      name: 'ลำดับที่',
      listname: 'ROWNUMBER',
      align: 'center',
      minWidth: 180
    },
    {
      name: 'จังหวัด',
      listname: 'CHANGWAT_NAME',
      align: 'left',
      minWidth: 200
    },
    {
      name: 'รายการนำส่ง',
      listname: 'POS_DOLNAME',
      align: 'center',
      minWidth: 200
    },
    {
      name: 'จำนวน',
      listname: 'COUNT_',
      align: 'center',
      minWidth: 200
    },
   
  ]

  React.useEffect(() => {
    console.log(dataSendAll, 'dataSendAll');
    if (Object.keys(dataSendAll).length > 0) {
      _resDataList();
      setHeadValue(dataSendAll.REPORT);
    }
  }, [dataSendAll])
  return (
    <Grid container pl={2} pr={2}>
      <>
        <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'} columnGap={1}>
          <Tooltip title="ย้อนกลับ" placement="right">
            <IconButton size='small' onClick={() => {
              setOnDetail(1),
                setDataSendListBranch({}),
                setDataSendAll && setDataSendAll({})
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
            <FixedHeaderContent dataList={dataCount} colum={colum} onhandleClickCount={onhandleClickCount} onHandleRetropective={onHandleRetropective} exportReport/>
          </Grid>
        </Grid>
      </>
    </Grid>
  )
}
