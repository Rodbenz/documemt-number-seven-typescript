import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ProsType from 'prop-types';

interface IWidthTextField {
  values?: any;
  onchanges: (newValue: any) => void,
  nameText?: string,
}

export default function WidthTextField({ onchanges, nameText='กรุณาเลือกรายการ', values }: IWidthTextField) {
  const [value, setValue] = React.useState(null);
  const handleChange = (event:any) => {
    onchanges(event.target.value)
  }
  React.useEffect(() => {
    setValue(values)
  }, [values]);
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
        value={value}
        size='medium'
      />
    </Box>
  );
}