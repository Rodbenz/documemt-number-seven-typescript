import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { RiFileExcel2Line } from "react-icons/ri";
import { BsFiletypeCsv, BsFiletypeTxt, BsFiletypePdf, BsFiletypeXlsx } from "react-icons/bs";
import { Tooltip } from '@mui/material';
import { exportExcelReport } from '@/libs/exportExcel';
import { exportCsvReport } from '@/libs/exportCSV';
import { exportTxtReport } from '@/libs/exportTXT';
import { exportPdfReport } from '@/libs/exportPDF';


interface IEVariantButtonGroup {
  colum?: any;
  dataList?: any;
  typeTable?: any;
  reportName?:any;
}

export default function ButtonGroupsReport({ colum, dataList, typeTable, reportName }: IEVariantButtonGroup) {

 const handleOnClickExcel = async (el: any) => {
  await exportExcelReport(colum, dataList, reportName);
 }
 const handleOnclickCsv =async () => {
  await exportCsvReport(colum, dataList, reportName);
 }
 const handleOnclickTxt =async () => {
 await exportTxtReport(colum, dataList, reportName)
 }
 const handleOnclickPdf =async () => {
  await exportPdfReport(colum, dataList, reportName)
 }
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Tooltip title="Excel">
          <Button sx={{ color: '#008000' }} onClick={handleOnClickExcel}><BsFiletypeXlsx size={30} /></Button>
        </Tooltip>
        <Tooltip title="CSV">
          <Button sx={{ color: '#008000' }} onClick={handleOnclickCsv}><BsFiletypeCsv size={30} /></Button>
        </Tooltip>
        <Tooltip title="TXT">
          <Button onClick={handleOnclickTxt}><BsFiletypeTxt size={30} /></Button>
        </Tooltip>
        {/* <Tooltip title="PDF">
          <Button sx={{ color: '#FF0000' }} onClick={handleOnclickPdf}><BsFiletypePdf size={30} /></Button>
        </Tooltip> */}
      </ButtonGroup>
    </Box>
  );
}