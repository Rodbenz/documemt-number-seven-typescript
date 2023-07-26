import { Avatar, Box, Grid, Typography, Stack, IconButton, Table, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCartContext } from '@/context/Cartcontext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FixedHeaderContent from '@/pages/components/@conponents/datatable/fixedHeaderContent';
import { REPORT_RECEIVE_BranchCode, REPORT_SEND_ALL } from '@/service/report';
import { dateFormatTime, numberWithCommas, setUTM_NO_P } from '@/libs/outputDatas';
import { SplitDataType, SplitDataTypeFile } from '@/libs/dataControl';

interface IFReportDataExportBracnh {
  setOnDetail?: any;
  dataSendAll?: any;
  dataSendListBranch?: any;
  setDataSendListPlot?: any;
}

export default function ReportDataExportBracnh({ setOnDetail, dataSendAll, dataSendListBranch, setDataSendListPlot }: IFReportDataExportBracnh) {
  const [dataCount, setDataCount] = React.useState<any>([]);
  const [headValue, setHeadValue] = React.useState<string>('');

  const _resDataList = async () => {
    let datasend: any = dataSendListBranch;
    try {
      let newData: any = [];
      let res = await REPORT_SEND_ALL(datasend)
      console.log(res, 'REPORT_SEND_ALL', datasend);
      for (let i = 0; i < res.length; i++) {
        let dataItems = res[i];
        let UTM_CODE_ = dataItems.UTM_CODE ? dataItems.UTM_CODE:'';
        let UTM_NO_P_ = dataItems.UTM_NO_P ? setUTM_NO_P(dataItems.UTM_NO_P):'';
        let UTM_NO_ = dataItems.UTM_NO ? dataItems.UTM_NO:'';
        dataItems.ROWNUMBER = String(i + 1);
        dataItems.PROVINCE_NAME_TH = String(dataItems.PROVINCE_NAME_TH);
        dataItems.AMPHUR_NAME = String(dataItems.AMPHUR_NAME? dataItems.AMPHUR_NAME: '');
        dataItems.TUMBON_NAME = String(dataItems.TUMBON_NAME? dataItems.TUMBON_NAME: '' );
        dataItems.BRANCH_NAME = String(dataItems.BRANCH_NAME);
        dataItems.UTM = UTM_CODE_ + ' ' +  UTM_NO_P_ + ' ' + UTM_NO_
        dataItems.VAL_P_WA = numberWithCommas(dataItems.VAL_P_WA);
        dataItems.PUBLIC_DATE_ = dateFormatTime(dataItems.PUBLIC_DATE)
        dataItems.ENFORCE_DATE_ = dateFormatTime(dataItems.ENFORCE_DATE)
        dataItems.RNV = `${dataItems.NRAI} - ${dataItems.NNHAN} - ${dataItems.NWAH}`
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
    if (el?.COUNTIMPORT !== 0) {
      setOnDetail(4);
      setDataSendListPlot(el);
    }

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
      listname: 'PROVINCE_NAME_TH',
      align: 'left',
      minWidth: 200
    },
    {
      name: 'สำนักงานที่ดิน',
      listname: 'BRANCH_NAME',
      align: 'left',
      minWidth: 250
    },
    {
      name: 'อำเภอ',
      listname: 'AMPHUR_NAME',
      align: 'left',
      minWidth: 200
    },
    {
      name: 'ตำบล',
      listname: 'TUMBON_NAME',
      align: 'left',
      minWidth: 200
    },
    {
      name: 'รอบบัญชี',
      listname: 'PERIODS_NAME',
      align: 'center',
      minWidth: 200
    },
    {
      name: 'เลขที่โฉนด',
      listname: 'CHANODE_NO',
      align: 'center',
      minWidth: 200
    },
    {
      name: 'หน้าสำรวจ',
      listname: 'SURVEY_NO',
      align: 'center',
      minWidth: 200
    },
    {
      name: 'แผนที่ภูมิประเทศ',
      listname: 'UTM',
      align: 'center',
      minWidth: 200
    },
    {
      name: 'แผ่น',
      listname: 'UTM_PAGE',
      align: 'center',
      minWidth: 200
    },
    {
      name: 'มาตราส่วน',
      listname: 'UTM_RATIO',
      align: 'center',
      minWidth: 200
    },
    {
      name: 'เลขที่ดิน',
      listname: 'UTM_LANDNO',
      align: 'center',
      minWidth: 200
    },
    {
      name: 'เนื้อที่ (ไร่-งาน-วา)',
      listname: 'RNV',
      align: 'center',
      minWidth: 200
    },
    {
      name: 'ราคาประเมิน (บาท/ตร.ว.)',
      listname: 'VAL_P_WA',
      align: 'center',
      minWidth: 200
    },
    {
      name: 'วันที่ประกาศ',
      listname: 'PUBLIC_DATE_',
      align: 'center',
      minWidth: 200
    },
    {
      name: 'วันที่มีผลบังคับใช้',
      listname: 'ENFORCE_DATE_',
      align: 'center',
      minWidth: 200
    },
  ]

  const onHandleRetropective = async () => {
    setOnDetail && setOnDetail(2);
    setDataSendListPlot && setDataSendListPlot({})
  }

  React.useEffect(() => {
    console.log(dataSendListBranch,'dataSendListBranch');
    if (Object.keys(dataSendListBranch).length > 0) {
      _resDataList();
    }
  }, [dataSendListBranch])
  React.useEffect(() => {
    if (Object.keys(dataSendAll).length > 0) {
      setHeadValue(dataSendAll?.TYPE_NAME)
    }
  }, [dataSendAll])
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
        <Grid container>
          <Grid xs={12}>
              <FixedHeaderContent dataList={dataCount} colum={colum} onhandleClickCount={onhandleClickCount} onHandleRetropective={onHandleRetropective} reportName={headValue} exportReport />
            </Grid>
        </Grid>
      </>
    </Grid>
  )
}
