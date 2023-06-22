import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import VariantButtonGroup from './buttonGroups';
import { Grid, Pagination, Typography, TextField, IconButton, Box } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';



interface FixedHeaderContent {
  dataList: any;
  colum: any;
  colorHeader?: string;
  btnExport?: any;
  btnGrpup?: any;
  typeTable?: number;
  onhandleClickCount?: any;
  onHandleRetropective?: any;
}


export default function FixedHeaderContent({ dataList, colum, colorHeader = '#006e61', btnExport, btnGrpup, typeTable, onhandleClickCount, onHandleRetropective }: FixedHeaderContent) {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filter, setFilter] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();
  const [lestName, setLestName] = React.useState<any>({ name: '', listname: 'ROWNUMBER', align: '' });

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleClickFilter = (event: React.MouseEvent<HTMLButtonElement>, value: any) => {
    setAnchorEl(event.currentTarget);
    console.log('value', value);
    setOpen((prev) => Object.keys(lestName).length > 0 ? lestName.listname !== value.listname || !prev : !prev);
    setLestName(value);
    setPlacement('bottom');
  };
  const handleCloseFilter = () => {
    setOpen(false);
  }

  const filteredData = dataList.filter((row: any) =>
    row[lestName.listname] && row[lestName.listname].toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} >
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ marginTop: 2.5 }}>
              {/* <Typography sx={{ p: 2 }}>The content of the Popper.</Typography> */}
              <TextField
                label={lestName.name}
                value={filter}
                onChange={handleFilterChange}
                variant="outlined"
              />
            </Paper>
          </Fade>
        )}
      </Popper>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {colum?.map((column: any, index: number) => (
                <TableCell
                  key={index}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor: colorHeader, color: 'white', fontWeight: 'bold', borderLeftColor: 'white', borderRightColor: 'white', borderRightWidth: 1, borderRightStyle: 'solid', borderLeftWidth: 1, borderLeftStyle: 'solid' }}
                >
                  <Stack direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
                    <Typography>{column.name}</Typography>
                    <IconButton onClick={(e) => handleClickFilter(e, column)}>
                      <FilterAltIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData && filteredData
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((row: any, index: number) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {colum?.map((column: any, index: number) => {
                      const value = row[column.listname];
                      return (
                        <TableCell key={index} align={column.align}>

                          {column.listname !== 'COUNT_' ?
                            column.format && typeof value === 'number'
                              ? column.format(value)
                              : value == null || value == '' ? '-' : value
                            :
                            onhandleClickCount ? (
                              <>
                                <IconButton size='small' onClick={() => onhandleClickCount(row)}>
                                  {value}
                                </IconButton>
                              </>
                            ) :
                              value == null || value == '' ? '-' : value
                          }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container>
        <Grid item xs={12} py={1}>
          <Grid
            container
            justifyContent={"flex-end"}
            alignItems={"center"}
            px={2}
          >
            <Grid item>
              <Pagination
                page={page}
                onChange={handleChangePage}
                // color="error"
                count={isNaN(Math.ceil(dataList?.length / rowsPerPage)) ? 0 : Math.ceil(dataList?.length / rowsPerPage)}
              />
            </Grid>
            <Grid item>
              <Typography fontSize={14}>
                {dataList?.length > 0 &&
                  "จำนวนรายการทั้งหมด " + dataList.length + " รายการ"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {btnExport && btnExport && (
        <Stack direction={'row'} justifyContent={'end'} py={2} pr={2}>
          <Button variant={'contained'} onClick={btnExport()}>ส่งออก</Button>
        </Stack>
      )}
      {btnGrpup && btnGrpup && (
        <Stack direction={'row'} justifyContent={'end'} py={2} pr={2}>
          <VariantButtonGroup dataList={dataList} colum={colum} typeTable={typeTable} />
        </Stack>
      )}
      {onHandleRetropective && onHandleRetropective &&
        <Stack direction={'row'} justifyContent={'end'} py={2} pr={2}>
          <Button variant={'contained'} onClick={() => onHandleRetropective()} ><KeyboardDoubleArrowLeftIcon /> ย้อนกลับ</Button>
        </Stack>
      }
    </Paper>
  )
}
