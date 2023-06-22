import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

interface RowData {
  id: string;
  name: string;
  age: number;
}

const initialData: RowData[] = [
  { id: '1', name: 'John', age: 25 },
  { id: '2', name: 'Jane', age: 30 },
  { id: '3', name: 'Bob', age: 35 },
  { id: '4', name: 'Alice', age: 28 },
];

const FilterableTable: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredData = data.filter((row) =>
    row.id.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Filter by id"
        value={filter}
        onChange={handleFilterChange}
        variant="outlined"
      />
      <TextField
        label="Filter by Name"
        value={filter}
        onChange={handleFilterChange}
        variant="outlined"
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FilterableTable;
