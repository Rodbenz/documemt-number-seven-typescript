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
import VariantButtonGroup from '../buttonGroups';

interface PropsTable {
    columns?: any[];
    rows?: any;
    btnGrpup?: any;
    typeTable?:number;
}

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}


export default function ColumnGroupingTable({ columns, rows, btnGrpup, typeTable }: PropsTable) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns?.map((column: any) => (
                                column.row == 'rowSpan' ?
                                    <TableCell
                                        key={column.id}
                                        align={'center'}
                                        style={{ top: 0, minWidth: column.minWidth, backgroundColor: 'rgb(0,110,97)', color: 'white'}}
                                        rowSpan={column.sizeSpan}
                                    >
                                        {column.label}
                                    </TableCell>
                                    :
                                    column.row == 'colSpan' &&
                                    <TableCell
                                        key={column.id}
                                        align={'center'}
                                        style={{ top: 0, minWidth: column.minWidth, backgroundColor: 'rgb(0,110,97)', color: 'white'}}
                                        colSpan={column.sizeSpan}
                                    >
                                        {column.label}
                                    </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            {columns?.map((column: any) => (
                                column.row != 'rowSpan' && column.row != 'colSpan' &&
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ top: 0, minWidth: column.minWidth, backgroundColor: 'rgb(0,110,97)', color: 'white' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows && rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: any) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns?.map((column: any) => {
                                            const value = row[column.id];
                                            if (value != null && value != undefined && value != '')
                                                return (
                                                    <TableCell key={column.id} align={column.align} >
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
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
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            {btnGrpup && btnGrpup && (
                <Stack direction={'row'} justifyContent={'end'} py={2} pr={2}>
                    <VariantButtonGroup dataList={rows} colum={columns} typeTable={typeTable}/>
                </Stack>
            )}
        </Paper>
    );
}