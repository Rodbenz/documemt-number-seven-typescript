import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useCartContext } from '@/context/Cartcontext';
import ButtonEdit from '../../../@conponents/ButtonEdit';
import FixedHeaderContent from '../../../@conponents/datatable/fixedHeaderContent';
import { numberWithCommas, setUTM_NO_P } from '@/libs/outputDatas';
import { UpdTranferDataTal } from '@/service/export';
import { SelTranferDataTal } from '@/service/report';
import { confirmDialog } from '@/pages/components/@conponents/popup/ComfirmDialog';
import { SnackbarSet } from '@/pages/components/@conponents/popup/SnackbarSet';

export default function FoundInformationExportNS3a() {
  const { dataExport, setDataExport, dataSandExport } = useCartContext();
  const [data, setData] = React.useState<any>([])
  const [statusUpd,  setStatusUpd] = React.useState<string>('')

  const res_dataSearch = (): void => {
    let newData: any[] = []
    for (let i: number = 0; i < dataExport.length; i++) {
      let dataitem: any = dataExport[i];
      dataitem.NUMBER = i + 1
      dataitem.TONNAGE = dataitem.UTM_CODE + ' ' + setUTM_NO_P(dataitem.UTM_NO_P) + ' ' + dataitem.UTM_NO
      dataitem.VAL_P_WA = numberWithCommas(dataitem.VAL_P_WA)
      newData.push(dataitem)
    }
    setData(newData)
  }

  const colum = [
    {
      name: 'ลำดับที่',
      listname: 'NUMBER',
      align: 'center',
      minWidth: 50,
    },
    {
      name: 'ระวาง',
      listname: 'TONNAGE',
      align: 'right',
      minWidth: 170,
    },
    {
      name: 'แผ่นที่',
      listname: 'UTM_PAGE',
      align: 'right',
      minWidth: 170,
    },
    {
      name: 'มาตราส่วน',
      listname: 'UTM_RATIO',
      align: 'right',
      minWidth: 170,
    },
    {
      name: 'เลขที่ดิน',
      listname: 'UTM_LANDNO',
      align: 'right',
      minWidth: 170,
    },
    {
      name: 'เลขที่ นส.3 ก',
      listname: 'NS3A_NO',
      align: 'right',
      minWidth: 170,
    },
    {
      name: 'อำเภอ',
      listname: 'AMPHUR_DESCRIPTION',
      align: 'left',
      minWidth: 150,
    },
    {
      name: 'ตำบล',
      listname: 'TUMBON_DESCRIPTION',
      align: 'left',
      minWidth: 150,
    },
    {
      name: 'ราคาประเมิน (บาท/ตร.ว.)',
      listname: 'VAL_P_WA',
      align: 'right',
      minWidth: 170,
    },
    {
      name: 'เล่มที่',
      listname: 'REMARK_FOLDER',
      align: 'right',
      minWidth: 170,
    },
    {
      name: 'หน้าที่',
      listname: 'PRINT_NO',
      align: 'right',
      minWidth: 170,
    },
    {
      name: 'สถานะ',
      listname: 'STATUS_TRAN',
      align: 'left',
      minWidth: 170,
    },
  ]


  const onSubmitExport = () => {
    confirmDialog.createDialog('คุณต้องการส่งออกใช่หรือไม่', 'แจ้งเตือน !', () => {onSubmitConfirm(dataSandExport[0])})
  }

  const onSubmitConfirm = async (datasand: any) => {
    try {
      let upd = await UpdTranferDataTal(datasand)
      if (upd.message == "success") {
        setStatusUpd(upd.message)
        SnackbarSet('ส่งออกสำเร็จ', 'success', 3000);
      } else {
        SnackbarSet('ส่งออกไม่สำเร็จ', 'error', 3000);
      }
    } catch (e) {
      console.log(e);

    }
  }

  const res_search = async (datasend: any) => {
    await setDataExport([]);
    try {
      let selTranferDataTal = await SelTranferDataTal(datasend);
      console.log(selTranferDataTal, 'selTranferDataTal');
      if (selTranferDataTal) {
        if (selTranferDataTal.length > 0 || selTranferDataTal != '') {
          await setDataExport(selTranferDataTal);
        } else {
          await setDataExport([]);
          // snackbarContext.showConfirmation('ไม่พบข้อมูล', 'error', 3000)
          return;
        }
      } else {
        await setDataExport([]);
        // snackbarContext.showConfirmation('ไม่พบข้อมูล', 'error', 3000)
        return;
      }
    } catch (e) {
      console.log(e);
    }
  }
  React.useEffect(() => {
    if (statusUpd == 'success') {
      res_search(dataSandExport[0])
    }
  }, [statusUpd])
  React.useEffect(() => {
    res_dataSearch()
  }, [dataExport])
  return (
    <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
      <Grid container >
        <Grid item xs={12}  >
          <Grid container >
            <Grid item xs={12} sm={12} >
              <Grid item >
                <Grid container py={5} px={5} spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <FixedHeaderContent dataList={data} colum={colum} colorHeader='#006e61' btnExport={()=>onSubmitExport} />
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
