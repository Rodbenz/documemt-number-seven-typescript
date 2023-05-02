import { Button} from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

interface IButtonEdit {
  onclickEdit?: () => void
}

export default function ButtonEdit({ onclickEdit }: IButtonEdit) {
  return (
    <div>
       <Button variant='text' onClick={onclickEdit}><DriveFileRenameOutlineIcon color={'warning'}/></Button>
    </div>
  )
}
