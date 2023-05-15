import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FixedHeaderContent from '../../../../@conponents/fixedHeaderContent';
import ButtonEdit from '../../../../@conponents/ButtonEdit';
import { dateFormatTime, dateFormatTimeTH, numberWithCommas, setUTM_NO_P } from '@/libs/outputDatas';

interface Props {
  dataSearch?: any
}

export default function FoundInformationLanBuilding({ dataSearch }: Props) {
  const [data, setData] = React.useState<any[]>([])

  const res_dataSearch = () => {
    let newData: any[] = []
    for (let i = 0; i < dataSearch.length; i++) {
      let dataitem: any = dataSearch[i];
      dataitem.ROWNUMBER = i + 1;
      dataitem.RAWANG = dataitem.UTMMAP1 + ' ' + setUTM_NO_P(dataitem.UTMMAP2) + ' ' + dataitem.UTMMAP3 + '-' + dataitem.UTMMAP4_ + ' (' + dataitem.UTM_SCALE + ')';
      dataitem.LANDAREA = ((dataitem.NRAI ? dataitem.NRAI : '0') + '-' + (dataitem.NNHAN ? dataitem.NNHAN : '0') + '-' + (dataitem.NWAH ? dataitem.NWAH : '0'))
      dataitem.VAL_P_WA = numberWithCommas((dataitem.VAL_P_WA ? dataitem.VAL_P_WA : '0'));
      dataitem.IMPORT_ = dateFormatTime(dataitem.IMPORT_DATE);
      newData.push(dataitem)
    }
    setData(newData)
  }


  let colum = [
    {
      name: 'ลำดับที่',
      listname: 'ROWNUMBER',
      align: 'center',
      minWidth: 100
    },
    {
      name: 'จังหวัด',
      listname: 'CHANGWAT_NAME',
      align: 'left',
      minWidth: 100
    },
    {
      name: 'อำเภอ',
      listname: 'AMPHUR_NAME',
      align: 'left',
      minWidth: 150
    },
    {
      name: 'เทศบาล/ตำบล',
      listname: 'ORG_NAME',
      align: 'left',
      minWidth: 150
    },
    {
      name: 'โฉนดที่ดินเลขที่',
      listname: 'DOC_NO',
      align: 'center',
      minWidth: 100
    },
    {
      name: 'หน้าสำรวจ',
      listname: 'DEALING_FILE_NO',
      align: 'center',
      minWidth: 100
    },
    {
      name: 'แผ่นที่ระวาง',
      listname: 'RAWANG',
      align: 'center',
      minWidth: 150
    },
    // {
    //   name: 'มาตราส่วน',
    //   listname: 'UTM_SCALE',
    //   align: 'center',
    //   minWidth: 100
    // },
    {
      name: 'เลขที่ดิน',
      listname: 'LAND_NO',
      align: 'center',
      minWidth: 100
    },
    {
      name: 'เนื้อที่(ไร่-งาน-ตร.ว.)',
      listname: 'LANDAREA',
      align: 'center',
      minWidth: 150
    },
    {
      name: 'ราคาประเมิน( บาท ต่อ ตร.ว. )',
      listname: 'VAL_P_WA',
      align: 'center',
      minWidth: 100
    },
    {
      name: 'วันที่นำเข้า',
      listname: 'IMPORT_',
      align: 'center',
      minWidth: 100
    },
  ]
  React.useEffect(() => {
    res_dataSearch()
  }, [])
  return (
    <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
      <Grid container >
        <Grid item xs={12}  >
          <Grid container >
            <Grid item xs={12} sm={12} >
              <Grid item >
                <Grid container py={5} px={5} spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <FixedHeaderContent dataList={data} colum={colum} colorHeader='#006e61' btnGrpup typeTable={4}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
