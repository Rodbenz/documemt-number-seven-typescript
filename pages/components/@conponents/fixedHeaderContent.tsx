import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import VariantButtonGroup from './buttonGroups';

interface FixedHeaderContent {
  dataList: any;
  colum: any;
  colorHeader?: string;
  btnExport?: any;
  btnGrpup?: any;
  typeTable?:number;
}


export default function FixedHeaderContent({ dataList, colum, colorHeader = '#006e61', btnExport, btnGrpup, typeTable}: FixedHeaderContent) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {colum?.map((column: any, index: number) => (
                <TableCell
                  key={index}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor: colorHeader, color: 'white' }}
                >
                  {column.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList && dataList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any, index: number) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {colum?.map((column: any, index: number) => {
                      const value = row[column.listname];
                      return (
                        <TableCell key={index} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value == null ? '-' : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 100]}
        component="div"
        count={colum?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {btnExport && btnExport &&(
        <Stack direction={'row'} justifyContent={'end'} py={2} pr={2}>
          <Button variant={'contained'} onClick={btnExport()}>ส่งออก</Button>
        </Stack>
      )}
      {btnGrpup && btnGrpup &&(
        <Stack direction={'row'} justifyContent={'end'} py={2} pr={2}>
          <VariantButtonGroup dataList={dataList} colum={colum} typeTable={typeTable}/>
        </Stack>
      )}
    </Paper>
  )
}
