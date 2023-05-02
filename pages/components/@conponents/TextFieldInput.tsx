import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ProsType from 'prop-types';

interface IWidthTextField {
  onchanges: (newValue: any) => void,
  nameText?: string,
  value?: any
}

export default function WidthTextField({ onchanges, nameText='กรุณาเลือกรายการ', value }: IWidthTextField) {
  const handleChange = (event:any) => {
    onchanges(event.target.value)
  }
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <TextField
        fullWidth
        label={nameText}
        id="fullWidth"
        onChange={handleChange}
        size='medium'
      />
    </Box>
  );
}