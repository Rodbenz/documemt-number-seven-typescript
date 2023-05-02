"use client";
import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import syyle from '../../../../styles/Home.module.css'
import FoundInformation from './@component/foundInformation';
import { useCartContext } from '../../../../context/Cartcontext';
import FormDialog from '../../@conponents/FormDialog';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HeaderImport from './@component/headerImport';
import SearchReprtImport from './@component/searchReprtImport';
import AddDataImport from './@component/addDataImport';
import EditDataImport from './@component/editDataImport';

export default function ReportImport() {
  const { dataSearch, openDialog, openDialogEdit, handleCloseDialog, handleCloseDialogEdit } = useCartContext();

  React.useEffect(() => {
    console.log(dataSearch)
  }, [dataSearch])

  return (
    <div>
      {/* Dialog  เพิ่มรายการนำเข้า*/}
      <FormDialog
        namTitle='เพิ่มรายการนำเข้า'
        open={openDialog}
        // handleClose={handleCloseDialog}
        iconHeader={<AssignmentIcon sx={{ backgroundColor: 'blue' }} />}
        formContent={<AddDataImport />}
      />
      {/* Dialog  แก้ไขรายการนำเข้า*/}
      <FormDialog
        namTitle='แก้ไขรายการนำเข้า'
        open={openDialogEdit}
        // handleClose={handleCloseDialogEdit}
        iconHeader={<AssignmentIcon sx={{ backgroundColor: 'blue' }} />}
        formContent={<EditDataImport />}
      />
      <div className={syyle.box} style={{ height: 'calc(1024px - 256px)' }}>
        {/* หัวข้อ */}
        <HeaderImport />
        {/* ค้นหาข้อมูล */}
        <SearchReprtImport />
        {/* แสดงข้อมูลค้นหา */}
        {dataSearch.length > 0 &&
          <FoundInformation />
        }
      </div>
    </div>
  )
}


