import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useCartContext } from '@/context/Cartcontext';
import ButtonEdit from '../../../../@conponents/ButtonEdit';
import FixedHeaderContent from '../../../../@conponents/datatable/fixedHeaderContent';
import ColumnGroupingTable from '../../../../@conponents/datatable/ColumnGroupingTable';
import { SplitData } from '@/libs/dataControl';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  row?: 'rowSpan' | 'colSpan';
  sizeSpan?: number;
  format?: (value: number) => string;
}

export default function FoundInformationPlotInformation() {
  const { setDataEdit, dataInformationList } = useCartContext();
  const [data, setData] = React.useState<any>([])

  const res_dataSearch = () => {
    let newData: any[] = []
    for (let i = 0; i < dataInformationList.length; i++) {
      let dataitem: any = dataInformationList[i];
      dataitem.NUMBER = i + 1
      // if(Object.keys(dataitem).length > 0) {
      // let dataset: any = {
      //   NUMBER: i + 1,
      //   LAND_TYPE: dataitem.LAND_TYPE ? dataitem.LAND_TYPE : '-',
      //   COUNT_47_: dataitem.COUNT_47 ? SplitData(String(dataitem.COUNT_47)): '-',
      //   COUNT_48: dataitem.COUNT_48 ? (dataitem.COUNT_48) : '-',
      //   RAWANG: dataitem.RAWANG ? dataitem.RAWANG : '-',
      // }
      newData.push(dataitem)
      // } 
    }
    console.log(newData, 'newData');

    setData(newData)
  }

  const handleCloseDialogEdit = (data: any) => {
    setDataEdit([data])
  }


  const colum = [
    {
      name: 'ลำดับ',
      listname: 'NUMBER',
      align: 'center',
    },
    {
      name: 'ประเภทรูปแปลงที่ดิน',
      listname: 'SEMI_NAME',
      align: 'left',
    },
    {
      name: 'กรมที่ดิน-กรมธนารักษ์',
      listname: 'COUNT',
      align: 'center',
    },
    {
      name: 'กรมธนารักษ์-กรมที่ดิน',
      listname: '',
      align: 'center',
    },
  ]
  React.useEffect(() => {
    res_dataSearch()
  }, [])
  console.log(dataInformationList);

  return (
    <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
      <Grid container >
        <Grid item xs={12}  >
          <Grid container >
            <Grid item xs={12} sm={12} >
              <Grid item >
                <Grid container py={5} px={5} spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    {/* <FixedHeaderContent dataList={data} colum={colum} colorHeader='#006e61' /> */}
                    <FixedHeaderContent colum={colum} dataList={data} btnGrpup typeTable={1} />
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
