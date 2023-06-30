import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FixedHeaderContent from '../../../@conponents/datatable/fixedHeaderContent';
import { useCartContext } from '@/context/Cartcontext';
import ButtonEdit from '../../../@conponents/ButtonEdit';
import { setUTM_NO_P } from '@/libs/outputDatas';

interface Props {
  dataSearch?: any
}

export default function FoundInformationEPVNS3K({ dataSearch }: Props) {
  const [data, setData] = React.useState<any[]>([])

  const res_dataSearch = () => {
    let newData:any[] = []
    for (let i = 0; i < dataSearch.length; i++) {
      let dataitem:any = dataSearch[i];
      dataitem.RAWANG = dataitem.UTMMAP1 + ' ' + setUTM_NO_P(dataitem.UTMMAP2) + ' ' + dataitem.UTMMAP3
      newData.push(dataitem)
    }
    setData(newData)
  }


  let colum = [
    {
        name: 'ระวาง',
        listname: 'RAWANG',
        align: 'center'
    },
    {
        name: 'แผ่นที่',
        listname: 'UTMMAP4',
        align: 'center'
    },
    {
        name: 'มาตราส่วน',
        listname: 'UTMSCALE',
        align: 'center'
    },
    {
        name: 'เลขที่ดิน',
        listname: 'LAND_NO',
        align: 'center'
    },
    {
        name: 'เลขที่ นส 3ก.',
        listname: 'CHANOD_NO',
        align: 'center'
    },
    {
        name: 'อำเภอ',
        listname: 'AMPHUR_NAME',
        align: 'left'
    },
    {
        name: 'ตำบล',
        listname: 'TUMBON_NAME',
        align: 'left'
    },
    {
        name: 'ราคาประเมิน( บาท ต่อ ตร.ว. )',
        listname: 'CURR_EVAPRICE',
        align: 'right'
    },
    // {
    //     name: 'เล่มที่',
    //     listname: 'REMARK_FOLDER'
    // },
    // {
    //     name: 'หน้าที่',
    //     listname: 'PRINT_NO'
    // },
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
                    <FixedHeaderContent dataList={data} colum={colum} colorHeader='#006e61' />
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
