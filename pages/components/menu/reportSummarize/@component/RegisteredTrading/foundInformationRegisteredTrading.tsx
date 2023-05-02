import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ButtonEdit from '@/pages/components/@conponents/ButtonEdit';
import { useCartContext } from '@/context/Cartcontext';
import FixedHeaderContent from '@/pages/components/@conponents/fixedHeaderContent';

const dataList = [{ name: '1', type: 'นส 3ก.', list: '1000', date: 1000 }]

export default function FoundInformationRegisteredTrading() {
  const { setOpenDialogEdit } = useCartContext();
  const [data, setData] = React.useState<any>([])

  const res_dataSearch = () => {
    let newData:any[] = []
    for (let i = 0; i < dataList.length; i++) {
      let dataitem:any = dataList[i];
      dataitem.active = (
        <ButtonEdit onclickEdit={()=>handleCloseDialogEdit(dataitem)}/>
      )
      newData.push(dataitem)
    }
    setData(newData)
  }

  const handleCloseDialogEdit = (data:any) => {
    setOpenDialogEdit(true)
  }

  const colum = [
    {
      name: 'ลำดับ',
      listname: 'name',
      align: 'left',
    },
    {
      name: 'รายการข้อมูลทะเบียน',
      listname: 'type',
      align: 'left',
    },
    {
      name: 'รายการนำเข้าข้อมูล',
      listname: 'list',
      align: 'left',
    },
    {
      name: 'กรมที่ดิน-กรมธนารักษ์',
      listname: 'date',
      align: 'left',
    },
    {
      name: 'กรมธนารักษ์-กรมที่ดิน',
      listname: 'active',
      align: 'left',
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
