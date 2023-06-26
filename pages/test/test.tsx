import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';

interface RowData {
  id: number;
  name: string;
  age: number;
}

const initialData: RowData[] = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 35 },
  { id: 4, name: 'Alice', age: 28 },
];

const FilterableTable: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [filterValues, setFilterValues] = useState<{ [key: string]: string }>({
    name: '',
    age: '',
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filteredData = data.filter((row:any) => {
    for (const key in filterValues) {
      if (filterValues[key] !== '') {
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

  return (
    <div>
      <TextField
        label="Filter by Name"
        name="name"
        value={filterValues.name}
        onChange={handleFilterChange}
        variant="outlined"
      />
      <TextField
        label="Filter by Age"
        name="age"
        value={filterValues.age}
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
