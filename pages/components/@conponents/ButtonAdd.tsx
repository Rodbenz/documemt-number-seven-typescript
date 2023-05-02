import { Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

interface IEaddButton {
    buttonName?: string,
    onClickAdd?: () => void
}

export default function ButtonAdd({ buttonName, onClickAdd }: IEaddButton) {
    return (
        <>
            <Button variant="contained" sx={{ backgroundColor: '#006e61' }} onClick={onClickAdd}><AddIcon />{buttonName}</Button>
        </>
    )
}
