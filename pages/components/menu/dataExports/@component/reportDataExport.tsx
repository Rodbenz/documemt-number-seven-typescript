import { Avatar, Box, Grid, Typography, Stack, IconButton, Table, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCartContext } from '@/context/Cartcontext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FixedHeaderContent from '@/pages/components/@conponents/datatable/fixedHeaderContent';
import { REPORT_RECEIVE_changwat, REPORT_SEND_ALL, REPORT_SEND_changwat } from '@/service/report';
import { dateFormatTime } from '@/libs/outputDatas';
import { SplitDataType, SplitDataTypeFile } from '@/libs/dataControl';

interface IFReportDataExport {
  setOnDetail?: any;
  dataSendDepartMent?: any;
  setDataSendListBranch?: any;
}

export default function ReportDataExport({ setOnDetail, dataSendDepartMent, setDataSendListBranch }: IFReportDataExport) {
  const { isMenuSeq } = useCartContext();
  const [dataCount, setDataCount] = React.useState<any>([]);
  const [headValue, setHeadValue] = React.useState<string>('');


  const _resDataList = async () => {
    let datasend: any = new Object();
    datasend.SEMI_CODE = Object.keys(dataSendDepartMent).length > 0 ? String(dataSendDepartMent.SEMI_CODE) : '';
    try {
      let newData:any = [];
      let res = await REPORT_SEND_ALL()
      for(let i = 0; i < res.length; i++){
        let dataItems = res[i];
        dataItems.ROWNUMBER = String(i+1);
        dataItems.PROVINCE_NAME_TH = String(dataItems.PROVINCE_NAME_TH);
        // dataItems.FILENAME = SplitDataTypeFile(dataItems.FILE_NAME);
        // dataItems.TYPEFILE = SplitDataType(dataItems.FILE_NAME);
        // dataItems.COUNT_ = String(dataItems.COUNT_);
        // dataItems.IMPORT_DATE_ = dateFormatTime(dataItems.IMPORT_DATE)
        newData.push(dataItems);
      }
      console.log(newData, 'newData');
      await setDataCount([])
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

  const colum = [
    {
      name: 'ลำดับที่',
      listname: 'ROWNUMBER',
      align: 'center',
    },
    {
      name: 'จังหวัด',
      listname: 'PROVINCE_NAME_TH',
      align: 'left',
    },
    {
      name: 'อำเภอ',
      listname: 'AMPHUR_NAME',
      align: 'left',
    },
    {
      name: 'ตำบล',
      listname: 'TUMBON_NAME',
      align: 'left',
    },
    {
      name: 'สำนักงานที่ดิน',
      listname: 'BRANCH_NAME',
      align: 'left',
    },
    {
      name: 'รอบบัญชี',
      listname: 'PERIODS_NAME',
      align: 'left',
    },
    {
      name: 'เลขที่โฉนด',
      listname: 'CHANODE_NO',
      align: 'left',
    },
    {
      name: 'หน้าสำรวจ',
      listname: 'SURVEY_NO',
      align: 'left',
    },
    {
      name: 'แผนที่ภูมิประเทศ',
      listname: 'UTM_CODE',
      align: 'right',
    },
    {
      name: 'ระวาง',
      listname: 'UTM_NO',
      align: 'right',
    },
    {
      name: 'แผ่น',
      listname: 'UTM_PAGE',
      align: 'right',
    },
    {
      name: 'มาตราส่วน',
      listname: 'UTM_RATIO',
      align: 'right',
    },
    {
      name: 'เลขที่ดิน',
      listname: 'UTM_LANDNO',
      align: 'right',
    },
    {
      name: 'เนื้อที่ (ไร่-งาน-วา)',
      listname: 'COUNT_',
      align: 'right',
    },
    {
      name: 'ราคา (บาท/ตร.ว.)',
      listname: 'VAL_P_WA',
      align: 'right',
    },
    {
      name: 'วันที่ประกาศ',
      listname: 'PUBLIC_DATE',
      align: 'right',
    },
    {
      name: 'วันที่มีผลบังคับใช้',
      listname: 'ENFORCE_DATE',
      align: 'right',
    },    
  ]

  React.useEffect(() => {
    console.log(dataSendDepartMent, 'dataSendDepartMent');
    if (Object.keys(dataSendDepartMent).length > 0) {
      _resDataList();
      setHeadValue(dataSendDepartMent.SEMI_NAME);
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
          <Typography variant='h5'>{headValue}</Typography>
        </Stack>
        <Table>
          <TableHead>
            <TableRow>
              <FixedHeaderContent dataList={dataCount} colum={colum} onhandleClickCount={onhandleClickCount}/>
            </TableRow>
          </TableHead>
        </Table>
      </>
    </Grid>
  )
}
