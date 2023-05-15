import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FixedHeaderContent from '../../../@conponents/fixedHeaderContent';
import { useCartContext } from '@/context/Cartcontext';
import ButtonEdit from '../../../@conponents/ButtonEdit';
import { dateFormatTimeTHSlash } from '@/libs/outputDatas';

interface Props {
  dataSearch?: any
}

export default function FoundInformation({ dataSearch }: Props) {
  const { setDataEdit } = useCartContext();
  const [data, setData] = React.useState<any[]>([])

  const res_dataSearch = () => {
    let newData:any[] = []
    for (let i = 0; i < dataSearch.length; i++) {
      let dataitem:any = dataSearch[i];
      dataitem.ROWNUMBER = i+1;
      dataitem.IMPORT_ = dateFormatTimeTHSlash(dataitem.IMPORT_DATE)
      dataitem.active = (
        <ButtonEdit onclickEdit={()=>handleCloseDialogEdit(dataitem)}/>
      )
      newData.push(dataitem)
    }
    setData(newData)
  }

  const handleCloseDialogEdit = (data:any) => {
    setDataEdit([data])
    
  }

  const colum = [
    {
      name: 'ลำดับที่',
      listname: 'ROWNUMBER',
      align: 'center',
    },
    {
      name: 'หน่วยงาน',
      listname: 'GOV_NAME',
      align: 'left',
    },
    {
      name: 'ประเภทข้อมูล',
      listname: 'SUB_NAME',
      align: 'left',
    },
    {
      name: 'รายการนำเข้าข้อมูล',
      listname: 'SEMI_NAME',
      align: 'left',
    },
    {
      name: 'วันที่นำเข้า',
      listname: 'IMPORT_',
      align: 'left',
    },
    {
      name: 'รายละเอียด',
      listname: 'active',
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
