import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FixedHeaderContent from '../../../@conponents/fixedHeaderContent';
import ButtonEdit from '@/pages/components/@conponents/ButtonEdit';
import { useCartContext } from '@/context/Cartcontext';


const dataList = [{ name: 'สำนักงานปลัดกระทรวง', type: 'ข้อมูลทั่วไป', list: 'ข้อมูลทั่วไป', date: '01/01/2564' }]


export default function FoundInformationExport() {
  const { setOpenDialogEdit } = useCartContext();
  const [data, setData] = React.useState<any>([])

  const res_dataSearch = (): void => {
    let newData: any[] = []
    for (let i: number = 0; i < dataList.length; i++) {
      let dataitem: any = dataList[i];
      dataitem.active = (
        <ButtonEdit onclickEdit={() => handleCloseDialogEdit(dataitem)} />
      )
      newData.push(dataitem)
    }
    setData(newData)
  }
  const handleCloseDialogEdit = (data: any) => {
    setOpenDialogEdit(true)
  }

  const colum = [
    {
      name: 'หน่วยงาน',
      listname: 'name',
      align: 'left',
    },
    {
      name: 'ประเภทข้อมูล',
      listname: 'type',
      align: 'left',
    },
    {
      name: 'รายการนำเข้าข้อมูล',
      listname: 'list',
      align: 'left',
    },
    {
      name: 'วันที่นำเข้า',
      listname: 'date',
      align: 'left',
    },
    {
      name: 'รายละเอียด',
      listname: 'active',
      align: 'left',
    },
  ]
  React.useEffect(() => {
    res_dataSearch()
  }, [setOpenDialogEdit])
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
