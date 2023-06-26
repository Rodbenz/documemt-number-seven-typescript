import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
} from '@mui/material';

interface RowData {
    id: number;
    name: string;
    age: string;
}

const initialData: RowData[] = [
    { id: 1, name: 'John', age: '25' },
    { id: 2, name: 'Jane', age: '30' },
    { id: 3, name: 'Bob', age: '35' },
    { id: 4, name: 'Alice', age: '28' },
    { id: 5, name: 'Alice', age: '28' },
    { id: 6, name: 'Alice', age: '28' },
    { id: 7, name: 'Alice', age: '28' },
    { id: 8, name: 'Alice', age: '28' },
    { id: 9, name: 'Alice', age: '28' },
    { id: 10, name: 'Alice', age: '28' },
    { id: 11, name: 'Alice', age: '28' },
    { id: 12, name: 'Alice', age: '28' },
    { id: 13, name: 'Alice', age: '28' },
    { id: 14, name: 'Alice', age: '28' },
];

const FilterableTable: React.FC = () => {
    const [data, setData] = useState(initialData);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(
        null
    );

    const handleSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = [...data];
    if (sortConfig !== null) {
        sortedData.sort((a: any, b: any) => {
            const { key, direction }: any = sortConfig;
            if (a[key] < b[key]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <TableSortLabel
                                active={sortConfig?.key === 'id'}
                                direction={sortConfig?.key === 'id' ? sortConfig.direction : 'asc'}
                                onClick={() => handleSort('id')}
                            >
                                ID
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortConfig?.key === 'name'}
                                direction={sortConfig?.key === 'name' ? sortConfig.direction : 'asc'}
                                onClick={() => handleSort('name')}
                            >
                                Name
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortConfig?.key === 'age'}
                                direction={sortConfig?.key === 'age' ? sortConfig.direction : 'asc'}
                                onClick={() => handleSort('age')}
                            >
                                Age
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.age}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FilterableTable;
