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
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';


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
  const [filterValues, setFilterValues] = React.useState<{ [key: string]: string }>({});
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();
  const [lestName, setLestName] = React.useState<any>({ name: '', listname: 'ROWNUMBER', align: '' });
  const [closeFilter, setCloseFilter] = React.useState<any>([]);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
  const handleListKeyDown = (id: any) => {
    let data = ([...closeFilter, id]);
    setCloseFilter(data);
  }
  const handleRemoveFilter = (id: any) => {
    let data = closeFilter.filter((item: any) => item !== id);
    setCloseFilter(data);
  }

  const filteredData = dataList?.filter((row: any) => {
    for (const key in filterValues) {
      if (filterValues[key] !== '' && row[key] !== undefined) {
        if (
          row[key]
            .toString()
            .toLowerCase()
            .includes(filterValues[key].toLowerCase())
        ) {
          continue;
        }
        return false;
      }
    }
    return true;
  });

  React.useEffect(() => {
    let newObj: any = new Object();
    for (let i = 0; i < colum.length; i++) {
      Object.assign(newObj, { [colum[i].listname]: "" });
    }
    console.log(newObj, 'newObj');
    setFilterValues(newObj);
  }, [colum])

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} >
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ marginTop: 2.5 }}>
              {/* <Typography sx={{ p: 2 }}>The content of the Popper.</Typography> */}
              <TextField
                label={lestName.name}
                name={lestName.listname}
                value={filterValues[lestName?.listname]}
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
                    {filterValues[column?.listname] == '' ?
                      (
                        <IconButton onClick={(e) => {
                          handleClickFilter(e, column);
                          handleListKeyDown(index);
                        }}>
                          <FilterAltIcon />
                        </IconButton>
                      )
                      :
                      (
                        <IconButton onClick={(e) => {
                          handleClickFilter(e, column);
                          handleRemoveFilter(index);
                        }}>
                          <FilterAltOffIcon />
                        </IconButton>
                      )
                    }
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
                                  <Typography sx={{ textDecoration: 'underline' }}>{value}</Typography>
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
                count={isNaN(Math.ceil(filteredData?.length / rowsPerPage)) ? 0 : Math.ceil(filteredData?.length / rowsPerPage)}
              />
            </Grid>
            <Grid item>
              <Typography fontSize={14}>
                {filteredData?.length > 0 &&
                  "จำนวนรายการทั้งหมด " + filteredData?.length + " รายการ"}
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
