"use client";
import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import style from '../../../Home.module.css'
import FoundInformation from './@component/foundInformation';
import FormDialog from '../../@conponents/FormDialog';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HeaderImport from './@component/headerImport';
import SearchReprtImport from './@component/searchReprtImport';
import AddDataImport from './@component/addDataImport';
import EditDataImport from './@component/editDataImport';
import { useCartContext } from '@/context/Cartcontext';
import { useDispatch, useSelector } from 'react-redux';

export default function ReportImport() {
  const { dataSearch, openDialog, dataEdit, handleCloseDialog, handleCloseDialogEdit } = useCartContext();
  return (
    <div >
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
        open={dataEdit.length > 0 ? true : false}
        // handleClose={handleCloseDialogEdit}
        iconHeader={<AssignmentIcon sx={{ backgroundColor: 'blue' }} />}
        formContent={<EditDataImport />}
      />
      {/* <div className={style.box} style={dataSearch.length > 0 ?{height: '1024px',}:{ }}> */}
      <div >
        {/* หัวข้อ */}
        <HeaderImport />
        {/* ค้นหาข้อมูล */}
        <SearchReprtImport />
        {/* แสดงข้อมูลค้นหา */}
        {dataSearch.length > 0 &&
          <FoundInformation dataSearch={dataSearch} />
        }
      </div>
    </div>
  )
}


