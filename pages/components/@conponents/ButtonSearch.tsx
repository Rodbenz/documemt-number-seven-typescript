import { Button, Stack } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

interface IButtonSearch {
    onsubmit?: () => void
}

export default function ButtonSearch({ onsubmit }: IButtonSearch) {
    return (
        <>
            <Button variant="contained" sx={{ backgroundColor: '#d7a203' }} onClick={onsubmit}><SearchIcon />ค้นหา</Button>
        </>
    )
}
