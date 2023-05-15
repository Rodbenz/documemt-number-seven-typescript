import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { RiFileExcel2Line } from "react-icons/ri";
import { BsFiletypeCsv, BsFiletypeTxt, BsFiletypePdf } from "react-icons/bs";
import { exportExcel } from '@/libs/exportExcel';
import { exportCSV } from '@/libs/exportCSV';
import { Tooltip } from '@mui/material';
import { exportText } from '@/libs/exportTXT';
import { Report0, Report2, Report3 } from '@/libs/exportPDF';

interface IEVariantButtonGroup {
  colum?: any;
  dataList?: any;
  typeTable?: any;
}

export default function VariantButtonGroup({ colum, dataList, typeTable }: IEVariantButtonGroup) {
  const handleOnclickExcel = () => {
    exportExcel(colum, dataList, typeTable)
  }
  const handleOnclickCSV = () => {
    exportCSV(colum, dataList, typeTable)
  }
  const handleOnclickTXT = () => {
    exportText(dataList, typeTable)
  }
  const handleOnclickPDF = () => {
    if (typeTable == 1) {
      Report0(dataList, 'รายงานการประเมินราคาที่ดิน')
    }
    if (typeTable == 2) {
      Report2(dataList, 'ข้อมูลทะเบียนที่ดินและห้องชุด')
    }
    if (typeTable == 3) {
      Report3(dataList, 'ข้อมูลซื้อขายจดทะเบียนและห้องชุด')
    }

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
          <Button sx={{ color: '#00FF00' }} onClick={handleOnclickExcel}><RiFileExcel2Line size={30} /></Button>
        </Tooltip>
        <Tooltip title="CSV">
          <Button sx={{ color: '#008000' }} onClick={handleOnclickCSV}><BsFiletypeCsv size={30} /></Button>
        </Tooltip>
        <Tooltip title="TXT">
          <Button onClick={handleOnclickTXT}><BsFiletypeTxt size={30} /></Button>
        </Tooltip>
        <Tooltip title="PDF">
          <Button sx={{ color: '#FF0000' }} onClick={handleOnclickPDF}><BsFiletypePdf size={30} /></Button>
        </Tooltip>
      </ButtonGroup>
    </Box>
  );
}