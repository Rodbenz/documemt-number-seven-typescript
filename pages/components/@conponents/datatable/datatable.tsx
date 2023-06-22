import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import { Typography, Grid, Pagination } from '@mui/material';

// Define the row data type
interface Row {
  [key: string]: string | number;
}

interface Datatable {
  data: Row[];
}

const Datatable: React.FC<Datatable> = ({ data }) => {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const headers = data[0] ? Object.keys(data[0]) : [];

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headers.map((key, index) => (
                <React.Fragment key={key}>
                  <TableCell align='center' sx={{backgroundColor: 'rgb(0,110,97)', color: 'white'}}>
                    <Typography>

                      {key}
                    </Typography>

                  </TableCell>
                </React.Fragment>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((row, index) => (
                <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                  {headers.map((key) => (
                    <TableCell key={key} align='center'>{row[key]}</TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
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
                count={isNaN(Math.ceil(data?.length / rowsPerPage)) ? 0 : Math.ceil(data?.length / rowsPerPage)}
              />
            </Grid>
            <Grid item>
              <Typography fontSize={14}>
                {data?.length > 0 &&
                  "จำนวนรายการทั้งหมด " + data.length + " รายการ"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Datatable
