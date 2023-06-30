import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useCartContext } from '@/context/Cartcontext';
import ButtonEdit from '../../../../@conponents/ButtonEdit';
import FixedHeaderContent from '../../../../@conponents/datatable/fixedHeaderContent';

export default function FoundInformationRegisteredTrading() {
  const { dataRegisteredTradingInformationList } = useCartContext();
  const [data, setData] = React.useState<any>([])

  const res_dataSearch = () => {
    let newData:any[] = []
    for (let i = 0; i < dataRegisteredTradingInformationList.length; i++) {
      let dataitem:any = dataRegisteredTradingInformationList[i];
      dataitem.NUMBER = i+1
      newData.push(dataitem)
    }
    setData(newData)
  }


  const colum = [
    {
      name: 'ลำดับ',
      listname: 'NUMBER',
      align: 'center',
    },
    {
      name: 'รายการข้อมูลจดทะเบียนที่ดินและข้อมูล',
      listname: 'SEMI_NAME',
      align: 'left',
    },
    {
      name: 'กรมที่ดิน-กรมธนารักษ์',
      listname: 'COUNT',
      align: 'center',
    },
    {
      name: 'กรมธนารักษ์-กรมที่ดิน (บัญชีราคาประเมิน)',
      listname: '',
      align: 'center',
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
                    <FixedHeaderContent dataList={data} colum={colum} colorHeader='#006e61' btnGrpup typeTable={3}/>
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
