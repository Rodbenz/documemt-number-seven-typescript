import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { RiFileExcel2Line } from "react-icons/ri";
import { BsFiletypeCsv, BsFiletypeTxt, BsFiletypePdf } from "react-icons/bs";
import { Tooltip } from '@mui/material';
import { exportExcelReport } from '@/libs/exportExcel';


interface IEVariantButtonGroup {
  colum?: any;
  dataList?: any;
  typeTable?: any;
}

export default function ButtonGroupsReport({ colum, dataList, typeTable }: IEVariantButtonGroup) {

 const handleOnClickExcel = async (el: any) => {
  await exportExcelReport(colum, dataList)
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
          <Button sx={{ color: '#00FF00' }} onClick={handleOnClickExcel}><RiFileExcel2Line size={30} /></Button>
        </Tooltip>
        <Tooltip title="CSV">
          <Button sx={{ color: '#008000' }} ><BsFiletypeCsv size={30} /></Button>
        </Tooltip>
        <Tooltip title="TXT">
          <Button ><BsFiletypeTxt size={30} /></Button>
        </Tooltip>
        <Tooltip title="PDF">
          <Button sx={{ color: '#FF0000' }} ><BsFiletypePdf size={30} /></Button>
        </Tooltip>
      </ButtonGroup>
    </Box>
  );
}